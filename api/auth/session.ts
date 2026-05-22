import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleSession } from "../../server/auth/core";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  await handleSession(request, response);
}
