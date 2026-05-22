import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleLogin } from "../../server/auth/core";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  await handleLogin(request, response);
}
