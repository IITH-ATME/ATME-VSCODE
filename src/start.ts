import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// Supabase ("Lovable Cloud") was never connected for this project — the app
// stores/serves everything through Cloudflare R2 instead (see .env R2_*).
// Do not re-add the Supabase auth-attacher as global functionMiddleware:
// it required SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY env vars that don't
// exist in this deployment, and being global middleware, it broke every
// single server function (including plain data loaders) call site-wide.

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
