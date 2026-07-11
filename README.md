# ATME College of Engineering — Website

Public marketing and information website for **ATME College of Engineering, Mysuru** (autonomous, AICTE-approved, VTU-affiliated, NAAC A+). Built with TanStack Start (React 19 + Vite 7) and rendered server-side on Cloudflare Workers. Content for departments, faculty, PDFs, admissions, campus life, research, and resources is scraped from the legacy site (`old.atme.edu.in`) and served as static-ish SSR pages.

Live URLs:

- Production: https://atme.edu.in · https://www.atme.edu.in · https://atme-new.lovable.app
- Preview: https://id-preview--ecc2b641-817e-4f14-aeea-8907ad2d13ff.lovable.app

---

## 1. Technology Stack

### Frontend

| Area | Choice |
| --- | --- |
| Meta-framework | **TanStack Start v1** (SSR on Cloudflare Workers via Nitro) |
| Bundler | **Vite 7** |
| UI runtime | **React 19** + **React DOM 19** |
| Language | **TypeScript 5.8** (strict mode) |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`, configured in `src/styles.css`), `tw-animate-css` |
| Class helpers | `class-variance-authority`, `tailwind-merge`, `clsx` |
| Component library | **shadcn/ui** primitives (in `src/components/ui/`) built on **Radix UI** (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, navigation-menu, popover, select, tabs, tooltip, etc.) |
| Icons | `lucide-react` |
| Data fetching / cache | **`@tanstack/react-query` v5** |
| Routing | **`@tanstack/react-router`** (file-based, `src/routes/`) |
| Forms | `react-hook-form` + `@hookform/resolvers` |
| Validation | **Zod** |
| Content rendering | `react-markdown` + `remark-gfm` + `rehype-raw`, `pdfjs-dist` (PDF viewer) |
| Charts | `recharts` |
| Animations | `framer-motion`, `tw-animate-css` |
| Carousels | `embla-carousel-react` + `embla-carousel-autoplay` |
| Toasts / dialogs | `sonner`, `vaul` (drawer), `cmdk` (command palette) |
| Dates | `date-fns`, `react-day-picker` |
| Backend SDK | `@supabase/supabase-js` v2 |

### Backend

- **Lovable Cloud** (managed Supabase) — provides Postgres, Auth, Storage, and secret injection. No application tables are currently defined; the Supabase project is provisioned for future features.
- **App-internal server logic** uses `createServerFn` from `@tanstack/react-start` (see `src/lib/api/example.functions.ts`).
- **Public HTTP endpoints** use TanStack server routes under `src/routes/api/`. The only current one is `src/routes/api.admin.rescrape-faculty.ts` (bearer-guarded, triggers Firecrawl re-scrape).
- **SSR runtime**: Cloudflare Workers via Nitro (with `nodejs_compat`). See `src/server.ts` for the SSR entry wrapper that catches h3 500s and renders a friendly error page.
- **Auth**: not used on the public site. Supabase client is wired but no sign-in flow is implemented.
- **AI**: Lovable AI Gateway (`LOVABLE_API_KEY`) available but not currently invoked from app code.
- **External services**:
  - **Firecrawl** — powers `scripts/rescrape-faculty.mjs` and the admin route.
  - **Google Search Console** connector — provisioned via Lovable.

### Dev Tooling

ESLint 9 + `typescript-eslint`, Prettier 3, Vitest 4 + Testing Library + jsdom, `@lovable.dev/vite-tanstack-config` (pinned).

---

## 2. Project Structure

```
.
├── public/                          # Static assets served as-is
│   ├── atme-favicon.ico             # Favicons, apple-touch-icon, etc.
│   ├── site.webmanifest
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── server.ts                    # SSR entry (Worker fetch handler + error wrapper)
│   ├── start.ts                     # createStart(): request + function middleware
│   ├── router.tsx                   # Router bootstrap (QueryClient in context)
│   ├── styles.css                   # Tailwind v4 + design tokens
│   ├── routeTree.gen.ts             # AUTO-GENERATED — do not edit
│   ├── routes/                      # File-based routes (each .tsx = a page)
│   │   ├── __root.tsx               # Root shell (html/head/body, JSON-LD, providers)
│   │   ├── index.tsx                # Homepage
│   │   ├── about.tsx, about.$page.tsx
│   │   ├── departments.*.tsx        # /departments, /departments/:slug, /faculty/:id
│   │   ├── admissions.tsx, careers.tsx, contact.tsx, placements.tsx
│   │   ├── campus-life.*.tsx, research.*.tsx, resources.*.tsx
│   │   ├── library.tsx, sports.tsx, nirf.tsx, nabl.tsx, ...
│   │   ├── p.$.tsx                  # Splat/catch-all for scraped pages
│   │   ├── sitemap[.]xml.ts         # /sitemap.xml
│   │   ├── admin.rescrape.tsx       # Admin UI (bearer-token gated)
│   │   └── api.admin.rescrape-faculty.ts   # POST endpoint for rescrape
│   ├── components/
│   │   ├── site/                    # Site chrome: Header, Footer, Layout, Hero, Galleries,
│   │   │                            #   InfoPage, FacultyDirectory, PdfEmbed, TabbedAccordion, ...
│   │   └── ui/                      # shadcn/ui primitives (button, dialog, card, ...)
│   ├── data/                        # Static + scraped content
│   │   ├── allFaculty.ts, facultyPages.ts, facultyPhotos.ts, facultyExtras.ts
│   │   ├── departments.ts, departmentsIndex.ts, departmentLabs.ts, departmentResources.ts
│   │   ├── scrapedPages.ts, canonicalSections.ts, canonicalFallbackContent.ts
│   │   ├── pdfs.ts, pdfAssets.json, pdfRewrite.ts, pagePdfSections.ts
│   │   ├── imageAssets.json, imgAssets.json, imageRewrite.ts, linkRewrite.ts
│   │   └── recruiters.ts, sanitizeMarkdown.ts, ...
│   ├── assets/                      # Images/PDFs; many exist as *.asset.json wrappers
│   ├── lib/
│   │   ├── utils.ts, assetUrl.ts, deptNames.ts, navStructure.ts, hubTabs.ts,
│   │   ├── sectionBanners.ts, titleCase.ts, facultyName.ts
│   │   ├── error-capture.ts, error-page.ts, lovable-error-reporting.ts
│   │   ├── config.server.ts         # Server-only env helpers
│   │   └── api/example.functions.ts # createServerFn example
│   ├── integrations/supabase/       # AUTO-GENERATED — do not edit
│   │   ├── client.ts                # Browser Supabase client
│   │   ├── client.server.ts         # Service-role client (server-only)
│   │   ├── auth-middleware.ts       # requireSupabaseAuth for server fns
│   │   ├── auth-attacher.ts         # Bearer attacher for functionMiddleware
│   │   └── types.ts                 # Generated DB types
│   ├── hooks/use-mobile.tsx
│   ├── test/setup.ts
│   └── types/build-id.d.ts
├── scripts/                         # Node/Bun scripts (not part of the app bundle)
│   ├── rescrape-faculty.mjs         # Firecrawl orchestrator → src/data/facultyPages.ts
│   ├── build_faculty_markdown.mjs, atme-scraper.mjs, atme-scrape-direct.mjs
│   ├── scrape-hod-messages.mjs, scrape_faculty.mjs
│   ├── verify-faculty-profiles.mjs, export-wp-templates.mjs
│   └── .rescrape-failures.json, .profile-verification.json
├── supabase/config.toml             # Managed by Lovable — do not edit project-level settings
├── vite.config.ts                   # Uses @lovable.dev/vite-tanstack-config preset
├── tsconfig.json, eslint.config.js, .prettierrc, .prettierignore
├── components.json                  # shadcn/ui config
├── bunfig.toml                      # 24h supply-chain guard
├── vitest.config.ts
├── package.json
└── .env / .env.example
```

**Entry point**: `src/server.ts` (SSR) → loads `@tanstack/react-start/server-entry`, which mounts routes from `src/routeTree.gen.ts` (auto-generated from `src/routes/`). The root layout is `src/routes/__root.tsx`.

---

## 3. Local Development Setup

### Prerequisites

- **Node.js 20 LTS or newer** (Node 22 is fine).
- **Bun 1.1+** (recommended — `bunfig.toml` enables a 24-hour supply-chain guard). `npm` and `pnpm` also work.
- **Git**.

### Install

```bash
bun install
# or: npm install
# or: pnpm install
```

### Run

| Task | Bun | npm |
| --- | --- | --- |
| Dev server (http://localhost:8080) | `bun run dev` | `npm run dev` |
| Production build | `bun run build` | `npm run build` |
| Dev-mode build (looser checks) | `bun run build:dev` | `npm run build:dev` |
| Preview production build | `bun run preview` | `npm run preview` |
| Lint | `bun run lint` | `npm run lint` |
| Format (Prettier) | `bun run format` | `npm run format` |
| Unit tests (Vitest) | `bun run test` | `npm run test` |
| Test watch | `bun run test:watch` | `npm run test:watch` |
| Re-scrape faculty pages | `bun run rescrape:faculty` | `npm run rescrape:faculty` |

The dev server binds to `0.0.0.0:8080` (configured by `@lovable.dev/vite-tanstack-config`).

---

## 4. Environment Configuration

Two `.env` files exist:

- `.env` — real values (checked in for this project; contains only publishable keys).
- `.env.example` — template.

### Required variables

| Variable | Scope | Purpose | Where to get it |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | Client + Server | Supabase project URL | Lovable Cloud → Backend / Supabase project settings |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client + Server | Publishable (anon) API key | Same as above. **Safe to commit.** |
| `VITE_SUPABASE_PROJECT_ID` | Client | Convenience id used by tooling | Same |
| `SUPABASE_URL` | Server (SSR) | Fallback for server code | Same as `VITE_SUPABASE_URL` |
| `SUPABASE_PUBLISHABLE_KEY` | Server | Fallback for server code | Same |
| `SUPABASE_PROJECT_ID` | Server | Fallback | Same |

### Optional / feature-gated variables

| Variable | Purpose | Notes |
| --- | --- | --- |
| `FIRECRAWL_API_KEY` | Required by `scripts/rescrape-faculty.mjs` and `api.admin.rescrape-faculty.ts` | Provisioned by the Firecrawl connector in Lovable. For local runs, sign up at firecrawl.dev and paste the key. |
| `RESCRAPE_ADMIN_TOKEN` | Bearer token required by `POST /api/admin/rescrape-faculty` | Any strong random string; set the same value on server and in the admin UI form. |
| `LOVABLE_API_KEY` | Lovable AI Gateway (models, embeddings, TTS) | Only needed if you wire AI features. Rotate via Lovable, not by editing `.env`. |
| `GOOGLE_SEARCH_CONSOLE_API_KEY` | Managed connector | Not read at runtime by the app today. |
| `SUPABASE_SERVICE_ROLE_KEY` | Would be needed to run privileged server code locally | **Not available on Lovable Cloud** — only obtainable if you self-host Supabase. Not required to run the site. |

### Current `.env` contents (safe / publishable only)

```env
SUPABASE_PROJECT_ID="sgveynrlliserfuxksrx"
SUPABASE_PUBLISHABLE_KEY="sb_publishable_YPiXGRz2gbhkCd-Z5ILb-A_w8vFAbFJ"
SUPABASE_URL="https://sgveynrlliserfuxksrx.supabase.co"
VITE_SUPABASE_PROJECT_ID="sgveynrlliserfuxksrx"
VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_YPiXGRz2gbhkCd-Z5ILb-A_w8vFAbFJ"
VITE_SUPABASE_URL="https://sgveynrlliserfuxksrx.supabase.co"
```

If `.env` is missing, copy the block above into a new `.env` file at the repo root. The publishable key is a public API key and can be committed.

> `src/integrations/supabase/client.ts` is auto-generated. **Do not edit** it or the `.env` variable names — regeneration will overwrite your changes.

---

## 5. Database

- **Provider**: Supabase (managed by Lovable Cloud).
- **Schema**: No application tables currently exist. The project database has no user-defined tables, functions, triggers, or storage buckets.
- **Migrations**: When you add tables, place SQL under `supabase/migrations/`. On Lovable Cloud, use the migration tool via the platform. Locally with the Supabase CLI: `supabase db push`.
- **Seed data**: none.
- Every new `public` table **must** include `GRANT` statements plus `ENABLE ROW LEVEL SECURITY` and explicit policies (Lovable Cloud does not grant default privileges).

---

## 6. Deployment

- **Platform**: Lovable — auto-deploys on every accepted change. There is no separate CI/CD pipeline.
- **Runtime**: Cloudflare Workers (Nitro preset configured by `@lovable.dev/vite-tanstack-config`).
- **Build command**: `vite build` (Nitro output).
- **Preview vs production**: preview builds are served at `id-preview--<id>.lovable.app`; published builds at the custom domain and `atme-new.lovable.app`.
- **Publishing manually**: Lovable UI → Publish. External CI is not required.

---

## 7. Major Dependencies (purpose & upgrade notes)

| Package | Purpose | Upgrade note |
| --- | --- | --- |
| `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin` | Meta-framework, file-based routing, SSR | Upgrade together, test SSR after |
| `@lovable.dev/vite-tanstack-config` | Vite preset (Nitro, plugins, aliases) | **Pinned** to `2.7.1` in `bunfig.toml` bypass list — do not bump ad-hoc |
| `nitro` | Server bundler (beta) | **Pinned to a beta** (`3.0.260603-beta`) — leave alone unless the preset requires it |
| `@tanstack/react-query` | Data cache | Safe to upgrade within v5 |
| `@supabase/supabase-js` | Backend SDK | Safe within v2 |
| Radix + shadcn/ui components | Accessible primitives | Safe minor upgrades |
| `tailwindcss` v4 + `@tailwindcss/vite` | Styling | Keep both in sync |
| `react`, `react-dom` @ 19 | UI runtime | Do not downgrade below 19 |
| `pdfjs-dist` | PDF rendering | Watch for worker path changes on major bumps |
| `framer-motion`, `recharts`, `embla-carousel-*` | Motion, charts, carousels | Safe |
| `zod`, `react-hook-form`, `@hookform/resolvers` | Forms/validation | Safe within majors |
| `@mendable/firecrawl-js` | Scraper (scripts only, not shipped) | Safe |
| `vite`, `vitest`, `eslint`, `typescript` | Tooling | Safe |

---

## 8. Development Notes

### Auto-generated / do-not-edit files

- `src/routeTree.gen.ts` — regenerated by `@tanstack/router-plugin` on every dev/build run.
- `src/integrations/supabase/client.ts`, `client.server.ts`, `auth-middleware.ts`, `auth-attacher.ts`, `types.ts`.
- `.env` variable **names** (VITE_SUPABASE_*, SUPABASE_*) are managed by Lovable.
- `supabase/config.toml` — do not change project-level settings.

### Conventions & constraints

- **File-based routing only.** Do NOT create `src/pages/` (Next.js convention) or `src/routes/_app/` (Remix-style) — TanStack Start will fail with a duplicate `/` route.
- Filenames use **dots**, route strings use **slashes**: `departments.$slug.faculty.$facultyId.tsx` → `createFileRoute("/departments/$slug/faculty/$facultyId")`.
- `src/routes/__root.tsx` **must** keep `<Outlet />` inside `RootComponent`.
- SSR runs on **Cloudflare Workers with `nodejs_compat`**: avoid Node-only packages (`sharp`, `canvas`, `puppeteer`, `child_process`, `fs.watch`) in server code.
- Tailwind v4 config lives in `src/styles.css` (`@theme`, `@import`). Never author a legacy `tailwind.config.js`.
- Faculty content in `src/data/facultyPages.ts` is **exact verbatim markdown** from `old.atme.edu.in`. The rescrape script preserves prior entries when a fetch fails — never hand-edit to shorten.

### Known limitations / TODOs

- No authenticated user flows are implemented (Supabase Auth is available but unused).
- No unit test coverage beyond `src/test/setup.ts` scaffolding.
- Faculty photos and profiles rely on the legacy host (`old.atme.edu.in`); if that site disappears, rescrape will fail and cached data must be used.
- Some CV PDFs in `src/assets/` may be stale; verified via `scripts/verify-faculty-profiles.mjs`.

### Security

- Only publishable (`sb_publishable_*`) Supabase keys are used in-app. The service-role key is not required and is not available on Lovable Cloud.
- The admin re-scrape endpoint (`/api/admin/rescrape-faculty`) is gated by `RESCRAPE_ADMIN_TOKEN`; do not remove the bearer check.
- No user PII is stored client-side.

### Performance

- Content pages are SSR + statically cacheable at the edge; images live in `src/assets/` and are hashed by Vite.
- Route code-splitting is automatic — do not add module-scope statements that reference route components (they are hoisted out and will throw `ReferenceError` at runtime; see project rules).

---

## 9. Local Execution Checklist

1. **Prerequisites**: install Node.js 20+ and Bun 1.1+ (or use `npm`/`pnpm`).
2. **Clone**:
   ```bash
   git clone <your-repo-url> atme-college
   cd atme-college
   ```
3. **Environment**: if `.env` is missing, create it with the block from §4.
4. **Install**:
   ```bash
   bun install
   ```
5. **Run**:
   ```bash
   bun run dev
   ```
6. **Open** http://localhost:8080 and verify:
   - Homepage loads with the ATME hero and news grid.
   - `/departments/cse` (and other departments) render with sidebar navigation.
   - A faculty profile page (e.g. `/departments/cse/faculty/<id>`) renders markdown + photo.
   - `/sitemap.xml` returns XML.
7. **Optional**: run tests (`bun run test`) and linter (`bun run lint`).
8. **Optional (data refresh)**: export `FIRECRAWL_API_KEY=...` then run `bun run rescrape:faculty` — this rewrites `src/data/facultyPages.ts`.

### Troubleshooting

- **Blank page / route mismatch after adding a route** — restart `bun run dev` so `router-plugin` regenerates `src/routeTree.gen.ts`.
- **`Missing Supabase environment variable(s)`** — recreate `.env` from §4.
- **`Unauthorized: No authorization header provided`** in server-fn calls — you added a `requireSupabaseAuth` function but no signed-in session exists. This site currently has no auth flow.
- **Build fails with `[unenv] X is not implemented yet!`** — a server import uses a Node-only API that Workers don't support. Replace the package with a fetch-based or WASM alternative.
- **`Failed to resolve import ...`** — the referenced file doesn't exist or the package isn't installed. Add it with `bun add <pkg>` before importing.

---

## 10. Missing Configuration Recovery

If any of the following are missing, recreate them as described:

| Missing | Recovery |
| --- | --- |
| `.env` | Copy the block in §4 verbatim. Publishable keys are public. |
| `.env.example` | Already in repo; copy from §4 if lost. |
| `node_modules` | `bun install` |
| `src/routeTree.gen.ts` | Regenerated automatically by `bun run dev` or `bun run build`. |
| `FIRECRAWL_API_KEY` | Sign up at https://firecrawl.dev; only needed for scraping scripts. |
| `RESCRAPE_ADMIN_TOKEN` | Choose any long random string (e.g. `openssl rand -hex 32`) and set it wherever you deploy. |
| `SUPABASE_SERVICE_ROLE_KEY` | Not required. Only obtainable if you migrate off Lovable Cloud to self-hosted Supabase. |

---

## License

Proprietary — © ATME College of Engineering. All rights reserved.
