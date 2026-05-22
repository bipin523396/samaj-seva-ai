import type { IncomingMessage, ServerResponse } from "http";

export async function handleSearch(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const url = new URL(req.url || "", `http://${req.headers.host}`);
  const query = url.searchParams.get("q");

  if (!query) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Query parameter 'q' is required" }));
    return;
  }

  const serpApiKey = process.env.SERPAPI_KEY;
  const zenserpKey = process.env.ZENSERP_KEY;

  if (!serpApiKey && !zenserpKey) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Search configuration missing. Please add SERPAPI_KEY or ZENSERP_KEY to Vercel environment variables." }));
    return;
  }

  try {
    // Try SerpApi first
    if (serpApiKey) {
      const serpApiUrl = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${serpApiKey}&engine=google&google_domain=google.co.in&gl=in&hl=en`;
      const response = await fetch(serpApiUrl);
      const data = await response.json() as any;

      if (data && data.organic_results) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
          results: (data.organic_results as any[]).map((r: any) => ({
            title: r.title,
            link: r.link,
            snippet: r.snippet
          }))
        }));
        return;
      }
    }

    // Try Zenserp as backup
    if (zenserpKey) {
      const zenserpUrl = `https://app.zenserp.com/api/v2/search?q=${encodeURIComponent(query)}&apikey=${zenserpKey}&location=India&search_engine=google.co.in`;
      const response = await fetch(zenserpUrl);
      const data = await response.json() as any;

      if (data && data.organic) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
          results: (data.organic as any[]).map((r: any) => ({
            title: r.title,
            link: r.url,
            snippet: r.description
          }))
        }));
        return;
      }
    }

    throw new Error("No search results found or API keys missing");
  } catch (error) {
    console.error("Search error:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to perform search" }));
  }
}
