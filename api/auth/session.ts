import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleSession } from "../../server/auth/core.js";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  try {
    await handleSession(request, response);
  } catch (error) {
    console.error("Vercel Function Error:", error);
    if (!response.headersSent) {
      response.status(500).json({ 
        message: error instanceof Error ? error.message : "Internal Server Error",
        error: "FUNCTION_INVOCATION_FAILED"
      });
    }
  }
}
