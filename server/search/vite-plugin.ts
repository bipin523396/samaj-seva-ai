import type { Plugin } from "vite";
import { handleSearch } from "./core.ts";

export function searchDevPlugin(): Plugin {
  return {
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/search", async (request, response, next) => {
        try {
          await handleSearch(request, response);
        } catch (error) {
          next(error as Error);
        }
      });
    },
    name: "samaj-seva-search-dev-plugin",
  };
}
