import type { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "node:http";

import { compare, hash } from "bcryptjs";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { MongoClient, ObjectId } from "mongodb";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type UserDocument = {
  _id: ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

type NewUserDocument = Omit<UserDocument, "_id">;

type RequestLike = IncomingMessage & {
  body?: unknown;
  headers: IncomingHttpHeaders;
  method?: string;
};

type ResponseLike = ServerResponse<IncomingMessage>;

type SessionPayload = JwtPayload & {
  email: string;
  name: string;
  sub: string;
};

const USERS_COLLECTION = "users";
const SESSION_COOKIE_NAME = "samaj_seva_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const { sign, verify } = jwt;

declare global {
  var __samajSevaMongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("CRITICAL: MONGODB_URI is not configured in environment variables.");
    return null;
  }

  return mongoUri;
}

function getMongoDbName() {
  return process.env.MONGODB_DB_NAME || "samajsevaai";
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV !== "production") {
    return "samaj-seva-ai-local-dev-secret";
  }

  console.error("CRITICAL: JWT_SECRET is not configured in environment variables.");
  throw new Error("Security configuration missing. Please add JWT_SECRET to Vercel environment variables.");
}

async function getMongoClient() {
  const uri = getMongoUri();
  if (!uri) throw new Error("Database configuration missing. Please add MONGODB_URI to Vercel environment variables.");

  if (!globalThis.__samajSevaMongoClientPromise) {
    globalThis.__samajSevaMongoClientPromise = new MongoClient(uri, {
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
    }).connect();
  }

  return globalThis.__samajSevaMongoClientPromise;
}

async function getUsersCollection() {
  const client = await getMongoClient();
  const db = client.db(getMongoDbName());
  const collection = db.collection<UserDocument>(USERS_COLLECTION);
  return collection;
}

function normalizeName(name: string) {
  return name.trim().replace(/\s+/g, " ");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getPasswordValidationError(password: string) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  return null;
}

function toAuthUser(user: UserDocument | (Omit<UserDocument, "_id"> & { _id: ObjectId })) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    createdAt: user.createdAt.toISOString(),
  };
}

function parseCookies(cookieHeader?: string) {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce<Record<string, string>>((cookies, cookie) => {
    const [rawName, ...rest] = cookie.split("=");
    const name = rawName?.trim();

    if (!name) {
      return cookies;
    }

    cookies[name] = decodeURIComponent(rest.join("=").trim());
    return cookies;
  }, {});
}

function createCookie(name: string, value: string, maxAgeSeconds: number) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAgeSeconds}`,
  ];

  if (process.env.NODE_ENV === "production") {
    parts.push("Secure");
  }

  return parts.join("; ");
}

function setSessionCookie(response: ResponseLike, user: AuthUser) {
  const token = sign(
    {
      email: user.email,
      name: user.name,
      sub: user.id,
    },
    getJwtSecret(),
    { expiresIn: SESSION_TTL_SECONDS },
  );

  response.setHeader("Set-Cookie", createCookie(SESSION_COOKIE_NAME, token, SESSION_TTL_SECONDS));
}

function clearSessionCookie(response: ResponseLike) {
  response.setHeader("Set-Cookie", createCookie(SESSION_COOKIE_NAME, "", 0));
}

function sendJson(response: ResponseLike, statusCode: number, payload: unknown) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function sendMethodNotAllowed(response: ResponseLike, allowedMethod: string) {
  response.setHeader("Allow", allowedMethod);
  sendJson(response, 405, { message: `Method not allowed. Use ${allowedMethod}.` });
}

async function readJsonBody<T>(request: RequestLike): Promise<T> {
  if (request.body !== undefined) {
    if (typeof request.body === "string") {
      return JSON.parse(request.body) as T;
    }

    return request.body as T;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {} as T;
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf-8")) as T;
}

async function getAuthenticatedUser(request: RequestLike) {
  const cookies = parseCookies(request.headers.cookie);
  const token = cookies[SESSION_COOKIE_NAME];

  if (!token) {
    return null;
  }

  try {
    const payload = verify(token, getJwtSecret()) as SessionPayload;
    const users = await getUsersCollection();

    if (!ObjectId.isValid(payload.sub)) {
      return null;
    }

    const user = await users.findOne({ _id: new ObjectId(payload.sub) });

    return user ? toAuthUser(user) : null;
  } catch {
    return null;
  }
}

async function withErrorHandling(handler: () => Promise<void>, response: ResponseLike) {
  try {
    await handler();
  } catch (error) {
    console.error("Auth error:", error);
    let message = "Something went wrong.";
    let statusCode = 500;

    if (error instanceof Error) {
      message = error.message;
      // Handle MongoDB connection errors specifically
      if (message.includes("ECONNREFUSED") || message.includes("topology")) {
        message = "Database connection failed. Please ensure MongoDB is running on port 27017.";
        statusCode = 503; // Service Unavailable
      }
    }

    sendJson(response, statusCode, { message });
  }
}

export async function handleRegister(request: RequestLike, response: ResponseLike) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response, "POST");
    return;
  }

  await withErrorHandling(async () => {
    const body = await readJsonBody<{ email?: string; name?: string; password?: string }>(request);
    const name = normalizeName(body.name || "");
    const email = normalizeEmail(body.email || "");
    const password = body.password || "";

    if (!name) {
      sendJson(response, 400, { message: "Name is required." });
      return;
    }

    if (!email || !isValidEmail(email)) {
      sendJson(response, 400, { message: "Enter a valid email address." });
      return;
    }

    const passwordError = getPasswordValidationError(password);

    if (passwordError) {
      sendJson(response, 400, { message: passwordError });
      return;
    }

    const users = await getUsersCollection();
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      sendJson(response, 409, { message: "An account with this email already exists." });
      return;
    }

    const now = new Date();
    const passwordHash = await hash(password, 12);
    const newUser: NewUserDocument = {
      createdAt: now,
      email,
      name,
      passwordHash,
      updatedAt: now,
    };
    const result = await users.insertOne(newUser as UserDocument);

    const user = toAuthUser({
      _id: result.insertedId,
      createdAt: now,
      email,
      name,
      passwordHash,
      updatedAt: now,
    });

    setSessionCookie(response, user);
    sendJson(response, 201, { user });
  }, response);
}

export async function handleLogin(request: RequestLike, response: ResponseLike) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response, "POST");
    return;
  }

  await withErrorHandling(async () => {
    const body = await readJsonBody<{ email?: string; password?: string }>(request);
    const email = normalizeEmail(body.email || "");
    const password = body.password || "";

    if (!email || !password) {
      sendJson(response, 400, { message: "Email and password are required." });
      return;
    }

    const users = await getUsersCollection();
    const user = await users.findOne({ email });

    if (!user) {
      sendJson(response, 401, { message: "Invalid email or password." });
      return;
    }

    const passwordMatches = await compare(password, user.passwordHash);

    if (!passwordMatches) {
      sendJson(response, 401, { message: "Invalid email or password." });
      return;
    }

    const authUser = toAuthUser(user);

    setSessionCookie(response, authUser);
    sendJson(response, 200, { user: authUser });
  }, response);
}

export async function handleLogout(request: RequestLike, response: ResponseLike) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response, "POST");
    return;
  }

  clearSessionCookie(response);
  sendJson(response, 200, { success: true });
}

export async function handleSession(request: RequestLike, response: ResponseLike) {
  if (request.method !== "GET") {
    sendMethodNotAllowed(response, "GET");
    return;
  }

  await withErrorHandling(async () => {
    const user = await getAuthenticatedUser(request);

    if (!user) {
      clearSessionCookie(response);
      sendJson(response, 200, { user: null });
      return;
    }

    sendJson(response, 200, { user });
  }, response);
}
