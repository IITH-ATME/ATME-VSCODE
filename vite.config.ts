// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "node:child_process";

function getBuildId(): string {
  try {
    const hash = execSync("git rev-parse --short HEAD").toString().trim();
    const now = new Date();
    const ts = now.toISOString().replace(/[-:T]/g, "").slice(0, 14);
    return `${hash}-${ts}`;
  } catch {
    const now = new Date();
    return `dev-${now.toISOString().replace(/[-:T]/g, "").slice(0, 14)}`;
  }
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Split each route's component AND loader into their own chunk instead of
    // bundling all 53 routes (plus their data imports) into one file loaded
    // on every page visit. Loader isn't split by the plugin's default grouping.
    router: {
      autoCodeSplitting: true,
      codeSplittingOptions: {
        groupings: [["loader"], ["component"], ["errorComponent"], ["notFoundComponent"]],
      },
    },
  },
  vite: {
    define: {
      __BUILD_ID__: JSON.stringify(getBuildId()),
    },
  },
});
