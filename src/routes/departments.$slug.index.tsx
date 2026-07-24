import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getDept, resolveDeptSlug } from "@/data/departments";
import { getDeptPages } from "@/data/deptPageConfig";
import {
  resolveCanonicalSections,
  isCanonicalSectionAvailable,
} from "@/data/canonicalSections";
import { INFRA_DATA } from "@/data/infrastructureScraped";

type Map = Record<string, Record<string, { title: string }>>;

export const Route = createFileRoute("/departments/$slug/")({
  loader: async ({ params }) => {
    const { default: scrapedDept } = await import("@/data/deptScraped.json");
    const dept = getDept(params.slug);
    if (!dept) throw notFound();
    const resolvedSlug = resolveDeptSlug(params.slug);
    const pages = ((scrapedDept as Map)[resolvedSlug] || (scrapedDept as Map)[params.slug] || {}) as Record<
      string,
      { title: string }
    >;
    const cfg = getDeptPages(resolvedSlug) ?? getDeptPages(params.slug) ?? [];
    const hasFacultyScraped = cfg.some((p) => p.label === "Faculty" && pages[p.key]);
    const hasFaculty = (dept.faculty?.length ?? 0) > 0 || hasFacultyScraped;
    const hasHod = Boolean(dept.hod);

    const hasInfra = (INFRA_DATA[resolvedSlug]?.sections?.length ?? 0) > 0
      || (INFRA_DATA[params.slug]?.sections?.length ?? 0) > 0;

    const canonical = resolveCanonicalSections(pages as Record<string, unknown>).filter((c) =>
      isCanonicalSectionAvailable(c.canonicalKey, {
        hasScraped: c.scrapedKey != null,
        hasHod,
        hasFaculty,
        hasInfra,
      })
    );

    const about = canonical.find((c) => c.canonicalKey === "about");
    if (about) {
      throw redirect({
        to: "/departments/$slug/$page",
        params: { slug: dept.slug, page: about.pageParam },
      });
    }
    // No About — fall back to Faculty if available, then first available section.
    if (canonical.some((c) => c.canonicalKey === "staff-details")) {
      throw redirect({
        to: "/departments/$slug/faculty",
        params: { slug: dept.slug },
      });
    }
    const first = canonical[0];
    if (first) {
      throw redirect({
        to: "/departments/$slug/$page",
        params: { slug: dept.slug, page: first.pageParam },
      });
    }
    return { dept };
  },
  component: () => null,
});
