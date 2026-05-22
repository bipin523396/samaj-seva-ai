import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleRegister } from "../../server/auth/core";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  await handleRegister(request, response);
}
