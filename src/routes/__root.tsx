import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import atmeLogo from "../assets/atme-logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { resolveAssetUrl } from "../lib/assetUrl";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ATME College of Engineering — Mysuru" },
      { name: "description", content: "ATME College of Engineering, Mysuru — autonomous, AICTE-approved, VTU-affiliated, NAAC A+ institution offering UG and PG engineering programmes." },
      { name: "author", content: "ATME College of Engineering" },
      { property: "og:title", content: "ATME College of Engineering — Mysuru" },
      { property: "og:description", content: "Autonomous engineering institution in Mysuru offering UG and PG programmes with strong research, placements, and campus life." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ATME College of Engineering" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "ATME College of Engineering — Mysuru" },
      { name: "twitter:description", content: "Autonomous engineering institution in Mysuru offering UG and PG programmes with strong research, placements, and campus life." },
      { name: "theme-color", content: "#238987" },
      { name: "msapplication-TileColor", content: "#238987" },
      { name: "msapplication-TileImage", content: "/atme-icon-192.png?v=20260617" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "ATME" },
      { name: "google-site-verification", content: "I9ZTlrR5CM5k-x_gTfh0rpPf3WbdsGX0w_a9JhqwRfg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/atme-favicon.ico?v=20260617",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "/atme-icon-48.png?v=20260617",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/atme-icon-96.png?v=20260617",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/atme-icon-512.png?v=20260617",
      },
      {
        rel: "shortcut icon",
        href: "/atme-favicon.ico?v=20260617",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/atme-apple-touch-icon.png?v=20260617",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest?v=20260617",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


const ROOT_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "ATME College of Engineering",
  alternateName: "ATMECE",
  url: "https://atme.edu.in",
  logo: resolveAssetUrl(atmeLogo.url),
  address: {
    "@type": "PostalAddress",
    streetAddress: "13th Kilometer, Bannur Road, Mysuru–Bannur Highway",
    addressLocality: "Mysuru",
    addressRegion: "Karnataka",
    postalCode: "570028",
    addressCountry: "IN",
  },
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* JSON-LD rendered inline (not via head().scripts) to avoid a
            hydration mismatch in vanilla TanStack Start where the SSR
            HeadContent emits stray whitespace text nodes around <script>
            entries. See Dyad export notes. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: ROOT_JSON_LD }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
