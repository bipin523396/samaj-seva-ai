export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type AuthResponse = {
  message?: string;
  user: AuthUser | null;
};

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

async function request<T>(input: string, init?: RequestOptions): Promise<T> {
  const response = await fetch(input, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
    body: init?.body === undefined ? undefined : JSON.stringify(init.body),
  });

  const text = await response.text();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    const snippet = text.slice(0, 120).trim();
    throw new Error(
      `Auth API returned ${contentType || "an unexpected response"} for ${input}.${snippet ? ` Response started with: ${snippet}` : ""}`,
    );
  }

  const data = text ? (JSON.parse(text) as T & { message?: string }) : ({} as T & { message?: string });

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

export async function fetchSession() {
  return request<AuthResponse>("/api/auth/session", { method: "GET" });
}

export async function loginUser(payload: { email: string; password: string }) {
  return request<AuthResponse>("/api/auth/login", {
    body: payload,
    method: "POST",
  });
}

export async function registerUser(payload: { email: string; name: string; password: string }) {
  return request<AuthResponse>("/api/auth/register", {
    body: payload,
    method: "POST",
  });
}

export async function logoutUser() {
  return request<{ success: boolean }>("/api/auth/logout", {
    method: "POST",
  });
}
