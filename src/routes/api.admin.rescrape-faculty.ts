// Admin-only endpoint: bulk re-scrape every teaching faculty profile via
// Firecrawl and return the regenerated facultyPages.ts file as a download.
// Workerd cannot write to the repo at runtime, so the user commits the
// downloaded file (or runs `bun run rescrape:faculty` locally).
//
// Security: requires a one-time RESCRAPE_ADMIN_TOKEN secret to be set, and
// the caller must pass it via ?token=... or `x-admin-token` header.

import { createFileRoute } from "@tanstack/react-router";
import Firecrawl from "@mendable/firecrawl-js";

import * as allFaculty from "@/data/allFaculty";

function buildList() {
  const seen = new Set<string>();
  const out: { id: string; name: string; url: string }[] = [];
  for (const value of Object.values(allFaculty as Record<string, unknown>)) {
    if (!Array.isArray(value)) continue;
    for (const f of value as Array<{ id?: string; name?: string; cvUrl?: string }>) {
      if (!f?.id || !f?.cvUrl || !/^https?:\/\/.+atme\.edu\.in/i.test(f.cvUrl)) continue;
      if (seen.has(f.id)) continue;
      seen.add(f.id);
      out.push({ id: f.id, name: f.name ?? f.id, url: f.cvUrl });
    }
  }
  return out;
}

function clean(md: string): string {
  if (!md) return "";
  let s = md;
  s = s.replace(/^[\s\S]*?Skip to content\]\([^)]*\)/, "");
  s = s.replace(/!\[ATME[^\]]*\]\([^)]*\)/gi, "");
  s = s.replace(/!\[[^\]]*\]\([^)]*ATME-Final-logo[^)]*\)/gi, "");
  for (const m of ["Social media & sharing icons", "UltimatelySocial", "Set Youtube Channel ID", "Copyright © ATME", "All Rights Reserved"]) {
    const i = s.indexOf(m);
    if (i > 200) s = s.slice(0, i);
  }
  s = s.replace(/!\[[^\]]*\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|youtube\.com\/c\/|facebook\.com\/sharer|sharer\.php)[^)]*\)/gi, "");
  s = s.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*(ultimate-social|icons_theme|share_icons|visit_icons|Visit_us|Twitter_Follow|Linkedin_Share|fb_icons|sharer\.php|atmeceofficial|youtube\.com\/c|linkedin\.com\/school|linkedin\.com\/sharing|twitter\.com\/intent|instagram\.com)[^)]*\)/gi, "");
  s = s.replace(/\[ip stresser\]\([^)]*\)/gi, "");
  s = s.replace(/!\[\]\([^)]*\/wp-content\/uploads\/[^)]*\)/gi, "");
  s = s.replace(/\n{3,}/g, "\n\n").trim();
  return s;
}

export const Route = createFileRoute("/api/admin/rescrape-faculty")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.RESCRAPE_ADMIN_TOKEN;
        if (!expected) return new Response("RESCRAPE_ADMIN_TOKEN is not configured", { status: 500 });
        const url = new URL(request.url);
        const provided = url.searchParams.get("token") ?? request.headers.get("x-admin-token") ?? "";
        if (provided !== expected) return new Response("Unauthorized", { status: 401 });

        const apiKey = process.env.FIRECRAWL_API_KEY;
        if (!apiKey) return new Response("FIRECRAWL_API_KEY is not configured", { status: 500 });

        const list = buildList();
        if (list.length === 0) return new Response("No faculty entries found", { status: 500 });

        const fc = new Firecrawl({ apiKey });
        const out: Record<string, { name: string; url: string; md: string }> = {};
        const failures: Array<{ id: string; url: string; error: string }> = [];

        // Concurrency-limited scrape
        const POOL = 6;
        let cursor = 0;
        await Promise.all(
          Array.from({ length: POOL }, async () => {
            while (cursor < list.length) {
              const f = list[cursor++];
              try {
                const r = await fc.scrape(f.url, { formats: ["markdown"], onlyMainContent: true });
                const md = clean((r as { markdown?: string }).markdown ?? "");
                if (!md) throw new Error("empty markdown");
                out[f.id] = { name: f.name, url: f.url, md };
              } catch (e) {
                failures.push({ id: f.id, url: f.url, error: String((e as Error)?.message ?? e) });
              }
            }
          }),
        );

        let body = "// AUTO-GENERATED from atme.edu.in faculty pages via Firecrawl. Do not edit by hand.\n";
        body += "// Re-run `bun run rescrape:faculty` or POST /api/admin/rescrape-faculty to refresh.\n\n";
        body += "export type FacultyPageData = { name: string; url: string; md: string };\n\n";
        body += "export const facultyPages: Record<string, FacultyPageData> = ";
        body += JSON.stringify(out, null, 2);
        body += ";\n";

        return new Response(body, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Content-Disposition": 'attachment; filename="facultyPages.ts"',
            "X-Scraped-Count": String(Object.keys(out).length),
            "X-Failed-Count": String(failures.length),
            "X-Failures": Buffer.from(JSON.stringify(failures)).toString("base64"),
          },
        });
      },
    },
  },
});
