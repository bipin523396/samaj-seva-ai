import type { Plugin } from "vite";

import { handleLogin, handleLogout, handleRegister, handleSession } from "./core.ts";

const routeHandlers = {
  "/login": handleLogin,
  "/logout": handleLogout,
  "/register": handleRegister,
  "/session": handleSession,
} as const;

export function authDevPlugin(): Plugin {
  return {
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/auth", async (request, response, next) => {
        const routePath = (request.url || "/").split("?")[0].replace(/\/$/, "") || "/";
        const handler = routeHandlers[routePath as keyof typeof routeHandlers];

        if (!handler) {
          next();
          return;
        }

        try {
          await handler(request, response);
        } catch (error) {
          next(error as Error);
        }
      });
    },
    name: "samaj-seva-auth-dev-plugin",
  };
}
