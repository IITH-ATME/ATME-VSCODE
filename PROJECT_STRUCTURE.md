# Project Structure — ATME College Website

This document describes the **actual** current structure of the codebase (verified against the
filesystem), how routing works, and how routes/components/data/assets relate to each other.

> **Note:** [CLAUDE.md](CLAUDE.md) describes an aspirational folder layout (`src/pages/`,
> `content/`, `wordpress/export.xml`). None of those exist in this repo. The real structure —
> documented below — uses TanStack Start's file-based `src/routes/` convention and a static
> `src/data/` content layer instead. Treat this file as the source of truth for "what exists,"
> and CLAUDE.md as the source of truth for "how to behave when editing."

---

## 1. Tech stack

- **React 18** + **TypeScript**
- **TanStack Start** (SSR framework) + **TanStack Router** (file-based routing)
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (Radix UI primitives)
- **React Query** (`@tanstack/react-query`) — wired into router context
- **Supabase** — auth + one admin API route
- **Vitest** — test runner

---

## 2. Top-level layout

```
├── public/                  Static files served as-is (favicons, manifest, robots.txt, one PDF folder)
├── scripts/                 Standalone Node scripts: WordPress scraping & faculty-data generation
├── supabase/                Supabase project config (supabase/config.toml)
├── src/
│   ├── routes/               File-based pages (TanStack Router) — see §3
│   ├── components/
│   │   ├── site/              Business/page components — see §4.1
│   │   └── ui/                 shadcn/ui design-system primitives — see §4.2
│   ├── data/                 Static content layer: scraped + curated site content — see §5
│   ├── assets/                Imported images/PDFs (mostly Lovable-style, paired with .asset.json) — see §6
│   ├── integrations/supabase/  Supabase client (browser + server) + generated DB types
│   ├── lib/                    Cross-cutting utilities — see §7
│   ├── hooks/                  Custom React hooks (currently just use-mobile)
│   ├── test/                   Vitest setup
│   ├── types/                  Ambient .d.ts declarations
│   ├── router.tsx              Creates the router instance from the generated route tree
│   ├── routeTree.gen.ts        AUTO-GENERATED — do not hand-edit
│   ├── server.ts / start.ts    App server entry points
│   └── styles.css              Global Tailwind styles
├── CLAUDE.md                 Editing rules/conventions for AI-assisted changes
├── vite.config.ts             Vite + TanStack Start plugin config
└── package.json
```

---

## 3. Routing (`src/routes/`)

TanStack Start uses **flat-file routing**: every `.tsx`/`.ts` file in `src/routes/` is a route,
and dots in the filename become path segments. `$name` = dynamic param, `$` = splat,
`__root.tsx` = app shell. See [src/routes/README.md](src/routes/README.md) for the full
convention table.

- **`__root.tsx`** — the app shell wrapping every page: `<html>/<head>/<body>` skeleton, global
  meta/OG/JSON-LD tags, `QueryClientProvider`, top-level `<Outlet />`, global 404/error
  components.
- **`router.tsx`** builds the router from the generated `routeTree.gen.ts`.

### Route inventory

Every route below renders inside `Layout` (§4.1) unless noted, which itself renders `Header` +
`Footer` + `FloatingActions` around the page body.

| Route file | URL | Page title | Uses components | Uses data |
|---|---|---|---|---|
| `index.tsx` | `/` | ATME College of Engineering — Mysuru \| VTU Affiliated | HomeHero, Layout, RecruiterLogoGrid, Reveal | — (content inlined in file) |
| `about.tsx` | `/about` | About ATME College of Engineering — Mysuru | Layout | — |
| `about.$page.tsx` | `/about/:page` | (per-page, e.g. Statutory Declaration) | Layout, PdfEmbed | scrapedPages |
| `admissions.tsx` | `/admissions` | Admissions 2026-27 | Layout | — |
| `administration.tsx` | `/administration` | Administration | Layout | — |
| `campus-life.tsx` | `/campus-life` | Campus Life | (layout route → Outlet) | — |
| `campus-life.index.tsx` | `/campus-life` (index) | Library | Layout, Reveal | imageRewrite |
| `campus-life.$page.tsx` | `/campus-life/:page` | ATMEYA (etc.) | InfoPage, PdfEmbed | pdfRewrite |
| `campus-life.atmeya.tsx` | `/campus-life/atmeya` | ATMEYA — Annual Cultural Fest | Layout, PdfEmbed | — |
| `campus-tour.tsx` | `/campus-tour` | Campus Tour | InfoPage | — |
| `careers.tsx` | `/careers` | Careers | Layout, ScrapedBody | — |
| `circulars.tsx` | `/circulars` | Circulars & Notifications | InfoPage | pdfs |
| `contact.tsx` | `/contact` | Contact | Layout | — |
| `departments.tsx` | `/departments` | (layout route → Outlet) | — | — |
| `departments.index.tsx` | `/departments` (index) | Departments | Layout | departmentsIndex |
| `departments.$slug.tsx` | `/departments/:slug` | (layout route → Outlet) | — | departments |
| `departments.$slug.index.tsx` | `/departments/:slug` (index) | (per-dept) | — | canonicalSections, departments, deptPageConfig, infrastructureScraped |
| `departments.$slug.$page.tsx` | `/departments/:slug/:page` | (per-dept sub-page) | DeptSubNav, Layout, PdfEmbed, PdfThumbCard | canonicalSections, departmentLabs, departments, deptCanonicalFallbacks, deptPageConfig, imageRewrite, infrastructureScraped, linkRewrite, pdfRewrite, sanitizeMarkdown |
| `departments.$slug.faculty.index.tsx` | `/departments/:slug/faculty` | (per-dept faculty list) | DeptSubNav, FacultyDirectory, Layout | allFaculty, departments, facultyDesignations |
| `departments.$slug.faculty.$facultyId.tsx` | `/departments/:slug/faculty/:facultyId` | Academic Details (per-person) | FacultyDirectory, Layout | allFaculty, departments, extractContactFromMarkdown, facultyDerived, facultyExtras, facultyPageFallbacks, facultyPageOverrides, facultyPages, parseFacultyProfile, pdfRewrite, sanitizeMarkdown |
| `employee-handbook.tsx` | `/employee-handbook` | Employee Handbook | InfoPage | pdfs |
| `hostel-policy.tsx` | `/hostel-policy` | Hostel Rules & Regulations | InfoPage | pdfs |
| `iirs-isro-nc.tsx` | `/iirs-isro-nc` | IIRS-ISRO Network Centre | Layout, ScrapedBody | — |
| `library.tsx` | `/library` | Central Library | Layout, SectionTabNav | — |
| `mandatory-disclosure.tsx` | `/mandatory-disclosure` | Mandatory Disclosure | InfoPage | pdfs |
| `nabl.tsx` | `/nabl` | NABL Accreditation | InfoPage | — |
| `news-clippings.tsx` | `/news-clippings` | In the News | InfoPage | — |
| `nirf.tsx` | `/nirf` | NIRF Rankings & Reports | DocSectionTabs, Layout, Reveal | pdfs |
| `p.$.tsx` | `/p/*` (splat, legacy WP-style paths) | (per-page from scraped content) | AboutCollegeExtras, DocSectionTabs, GreenCampusGallery, Layout, LibraryStaffPhotos, MagazineGrid, PdfEmbed, PdfThumbCard, RecruiterLogoGrid, SectionTabNav, SeminarAuditoriumGallery, SolarRooftopGallery, TabbedAccordion | imageRewrite, pageBodyOverrides, pagePdfSections, pdfRewrite, sanitizeMarkdown |
| `placements.tsx` | `/placements` | Placements | Layout, RecruiterLogoGrid, Reveal | recruiters |
| `privacy-policy.tsx` | `/privacy-policy` | Privacy Policy | Layout | — |
| `professional-body-membership.tsx` | `/professional-body-membership` | Professional Body Membership | Layout, ScrapedBody | — |
| `research.tsx` | `/research` | Research at ATME | Layout | — |
| `research.$page.tsx` | `/research/:page` | (per-page) | Layout | scrapedPages |
| `resources.index.tsx` | `/resources` | Student Learning Hub | Layout | — |
| `resources.notes.tsx` | `/resources/notes` | Notes & Study Material | Layout | departmentsIndex |
| `resources.papers.tsx` | `/resources/papers` | Previous Year Question Papers | Layout | departmentsIndex |
| `resources.placement.tsx` | `/resources/placement` | Placement Prep | Layout | — |
| `resources.videos.tsx` | `/resources/videos` | Video Lectures | Layout | — |
| `resources.elibrary.tsx` | `/resources/elibrary` | E-Library & Journals | Layout | — |
| `resources.discrete-mathematical-structures.tsx` | `/resources/discrete-mathematical-structures` | Fundamentals of Logic | Layout | — |
| `sports.tsx` | `/sports` | Department of Sports | Layout, SectionTabNav | — |
| `student-handbook.tsx` | `/student-handbook` | Student Handbook | InfoPage | pdfs |
| `upcoming-events.tsx` | `/upcoming-events` | Upcoming Events | InfoPage | — |
| `virtual-lab.tsx` | `/virtual-lab` | Virtual Labs | InfoPage | — |
| `vtu-honor-degree.tsx` | `/vtu-honor-degree` | VTU Honor Degree | InfoPage, PdfEmbed | pdfs |
| `vtu-minor-degree.tsx` | `/vtu-minor-degree` | VTU Minor Degree | InfoPage, PdfEmbed | pdfs |
| `women-cell.tsx` | `/women-cell` | Women Cell | Layout, PdfThumbCard | — |
| `youth4work.tsx` | `/youth4work` | Youth4work | Layout, ScrapedBody | — |
| `admin.rescrape.tsx` | `/admin/rescrape` | Admin · Rescrape Faculty | — (internal admin tool) | — |
| `api.admin.rescrape-faculty.ts` | `/api/admin/rescrape-faculty` | (API route, no UI) | — | — |
| `sitemap[.]xml.ts` | `/sitemap.xml` | (generated XML, no UI) | — | scrapedPages / route metadata |

**Pattern to note:** most one-off informational pages (handbooks, policies, IIRS, women-cell,
etc.) go through the generic **`InfoPage`** or **`ScrapedBody`** components rather than each
having bespoke markup — content differences live in `src/data/`, not in the route file.

---

## 4. Components

### 4.1 `src/components/site/` — business/page components

| Component | Purpose |
|---|---|
| `Layout` | Page wrapper: renders `Header`, page `children`, `Footer`, `FloatingActions`, `AdmissionsPopup`. Used by nearly every route. |
| `Header` | Site navigation bar (uses `navStructure.ts` for menu structure). |
| `Footer` | Site footer: About/Quick Links/Department link columns + contact strip (see `Footer.tsx`). |
| `FloatingActions` | Floating action buttons (e.g. call/WhatsApp/apply-now shortcuts). |
| `AdmissionsPopup` | Modal/popup promoting admissions, shown site-wide via `Layout`. |
| `HomeHero` | Homepage hero/carousel section. |
| `Reveal` (+ `Counter`) | Scroll-reveal animation wrapper and animated number counter, used across marketing sections. |
| `InfoPage` | Generic template for simple content pages (title + body + optional PDF), backing most policy/handbook routes. |
| `ScrapedBody` | Renders sanitized markdown pulled from `scrapedPages`/`scrapedAll` scraped WordPress content. |
| `PdfEmbed` | Inline PDF viewer/embed block. |
| `PdfThumbCard` | Card-style thumbnail linking to a PDF. |
| `DeptStrip` | Horizontal strip of department links (e.g. shown on homepage/department pages). |
| `DeptSubNav` | Sub-navigation tabs within a single department's pages (About/Faculty/Infra/etc.). |
| `FacultyDirectory` | Faculty listing/grid + `categorize()` helper for grouping by designation; also used on individual faculty detail routes. |
| `DocSectionTabs` | Tabbed document sections (used on NIRF and legacy `/p/*` pages). |
| `SectionTabNav` | Generic tabbed section navigator (Library, Sports pages). |
| `SectionHub` (exports `SectionTileGrid`) | Tile-grid hub linking into a `NavSection`'s sub-pages. |
| `TabbedAccordion` | Combined tab + accordion content component. |
| `MagazineGrid` | Grid of magazine/publication cards. |
| `RecruiterLogoGrid` | Grid of recruiter/company logos, with `limit`/`showNames` props — used on homepage and Placements page. |
| `GreenCampusGallery`, `SolarRooftopGallery`, `SeminarAuditoriumGallery` | Image galleries for specific campus-infrastructure legacy pages (rendered via `p.$.tsx`). |
| `LibraryStaffPhotos` | Photo grid of library staff. |
| `AboutCollegeExtras` | Additional "About College" content blocks for legacy `/p/*` pages. |

### 4.2 `src/components/ui/` — shadcn/ui design-system primitives

Generic, content-agnostic Radix-based building blocks (46 files): `accordion`, `alert`,
`alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `button`, `calendar`, `card`,
`carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`,
`dropdown-menu`, `form`, `hover-card`, `input`, `input-otp`, `label`, `menubar`,
`navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`,
`scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`,
`switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`, `tooltip`.

`components/site/*` compose these primitives (plus Tailwind + lucide-react icons) into the
actual page sections; `components/ui/*` should stay generic and page-agnostic.

---

## 5. Data layer (`src/data/`, 37 files)

Rather than a CMS, page content is pre-generated/curated as static TS & JSON, produced by the
scripts in `scripts/` from the old WordPress site and then hand-overridden where needed.

**Scraped raw content**
- `scrapedAll.json`, `scrapedPages.ts` — full scraped WordPress page bodies (markdown).
- `deptScraped.json`, `infrastructureScraped.ts` — scraped department/infrastructure content.

**Sanitization / rewriting pipeline** (applied when rendering scraped markdown)
- `sanitizeMarkdown.ts` — strips scraper artifacts (nav cruft, injected spam links like
  `[ip stresser](...)`, etc.) before rendering.
- `imageRewrite.ts`, `pdfRewrite.ts`, `linkRewrite.ts` — rewrite old WordPress asset/link URLs
  to point at current hosted assets/routes.

**Departments**
- `departments.ts`, `departmentsIndex.ts` — department list + metadata/slugs.
- `deptPageConfig.ts` — per-department page/tab configuration.
- `canonicalSections.ts`, `deptCanonicalFallbacks.ts`, `canonicalFallbackContent.ts` — canonical
  section definitions and fallback content when scraped content is missing.
- `departmentLabs.ts`, `departmentResources.ts` — lab/resource listings per department.

**Faculty**
- `allFaculty.ts` — master faculty roster.
- `facultyProfiles.ts`, `facultyPages.ts`, `facultyPageOverrides.ts`, `facultyPageFallbacks.ts` —
  per-faculty profile markdown/content + manual overrides/fallbacks (this is where the
  Nalini Elizabeth Rebello Dean Academics email fix was applied).
- `facultyDerived.ts`, `facultyExtras.ts`, `facultyDesignations.ts`, `facultyPhotos.ts` —
  derived/computed fields, extra metadata, designation categorization, photo lookups.
- `parseFacultyProfile.ts` (+ stray `.bak` backup file) — markdown → structured profile parser.
- `extractContactFromMarkdown.ts` — pulls email/phone/contact fields out of profile markdown.

**Pages / misc content**
- `pageBodyOverrides.ts`, `pagePdfSections.ts`, `validatePagePdfSections.ts` — manual body
  overrides for legacy `/p/*` pages and their PDF sections (+ a validator).
- `pdfs.ts` — named PDF registry used by `InfoPage`/`PdfEmbed`/`PdfThumbCard` routes.
- `recruiters.ts` — recruiter list backing `RecruiterLogoGrid`.
- `bcaMaterialsManifest.json` — manifest of BCA study-material files.
- `imageAssets.json`, `imgAssets.json`, `pdfAssets.json` — asset URL manifests (Lovable-style
  asset registry, paired with `assetUrl.ts`).

> Housekeeping note: `parseFacultyProfile.ts.bak` looks like a stray backup file left in the
> data folder — worth confirming whether it's still needed.

---

## 6. Assets

### `src/assets/` (imported at build time)
- Most top-level files are paired with a `<name>.asset.json` (Lovable/Dyad-style asset
  metadata) — images and PDFs referenced via `resolveAssetUrl()` (`src/lib/assetUrl.ts`) rather
  than direct relative imports in most cases.
- Subfolders:
  - `pdfs/` — 757 files, bulk of the college's document library.
  - `bca-materials/` — 160 files, BCA course study materials.
  - `recruiters/` — 48 recruiter logos.
  - `faculty/` (incl. `faculty/ece/`) — 19 faculty photos.
  - `eee/` — 11 department images.
  - `ce-faculty/` — 10 Civil Engg faculty photos.
  - `bsh-sports/` — 9 Basic Sciences/Sports images.
  - `placed/` — 8 placed-student photos (used on homepage "Placement Excellence").
  - `library-staff/` — 6 staff photos (`LibraryStaffPhotos`).
  - `ce-infra/` — 5 Civil Engg infrastructure images.
  - `hod/` — 3 HOD photos.

### `public/` (served verbatim, no build processing)
- Favicons/app icons (multiple sizes), `site.webmanifest`, `robots.txt`, `llms.txt`.
- `pdfs/cse-teaching/` — a small set of publicly-served PDFs outside the `src/assets` pipeline.

---

## 7. Supporting layers

**`src/lib/`** — cross-cutting utilities:
- `assetUrl.ts` — resolves asset references (`.asset.json` → actual URL).
- `navStructure.ts`, `hubTabs.ts`, `sectionBanners.ts` — drive `Header` navigation and
  `SectionHub`/`SectionTabNav` content.
- `deptNames.ts`, `facultyName.ts`, `titleCase.ts` — name/label formatting helpers.
- `error-capture.ts`, `error-page.ts`, `lovable-error-reporting.ts` — error boundary + reporting
  hooks used by `__root.tsx`'s `ErrorComponent`.
- `config.server.ts` — server-only config.
- `api/example.functions.ts` — TanStack Start server-function example/scaffold.

**`src/hooks/`** — `use-mobile.tsx` (responsive/viewport detection hook).

**`src/integrations/supabase/`** — `client.ts` / `client.server.ts` (browser + server Supabase
clients), `auth-attacher.ts` / `auth-middleware.ts` (auth wiring), `types.ts` (generated DB
types). Used sparingly — primarily for the `/admin/rescrape` tool and its API route.

**`src/test/setup.ts`** — Vitest global setup.

**`src/types/build-id.d.ts`** — ambient type declaration (build id injection).

---

## 8. How it all fits together (data flow)

```
scripts/*.mjs (WordPress scrape)
        │
        ▼
src/data/scraped*.json, deptScraped.json, infrastructureScraped.ts
        │  (sanitizeMarkdown + imageRewrite/pdfRewrite/linkRewrite)
        ▼
src/data/* curated & override modules (facultyPage*, pageBodyOverrides, canonicalSections, ...)
        │
        ▼
src/routes/*.tsx  (imports the relevant data modules per page)
        │  (renders via)
        ▼
src/components/site/*  (Layout, InfoPage, ScrapedBody, FacultyDirectory, PdfEmbed, ...)
        │  (composed from)
        ▼
src/components/ui/*  (shadcn/ui primitives)  +  src/assets/*, public/*  (images/PDFs via assetUrl.ts)
```

Every route is wrapped by `__root.tsx` (global shell) and, for nearly all content pages, by
`Layout` (`Header` + page body + `Footer` + `FloatingActions` + `AdmissionsPopup`). Simple
content pages reuse `InfoPage`/`ScrapedBody` and differ only in which `src/data/` module they
point at; department and faculty pages are the most deeply data-driven, pulling from 6–11
different `src/data/` modules each to assemble canonical + fallback + scraped + override content
into one page.
