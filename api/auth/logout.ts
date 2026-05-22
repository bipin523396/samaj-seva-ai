import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleLogout } from "../../server/auth/core";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  await handleLogout(request, response);
}
