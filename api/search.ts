import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleSearch } from "../server/search/core";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  await handleSearch(request, response);
}
