import { useMatches } from "@tanstack/react-router";
import { getDept } from "@/data/departments";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

// Structured data (schema.org JSON-LD) rendered in the page body — the root
// shell explains why it isn't emitted through head().scripts.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const SECTION_LABELS: Record<string, string> = {
  about: "About",
  departments: "Departments",
  "campus-life": "Campus Life",
  research: "Research",
  resources: "Resources",
  faculty: "Faculty & Staff",
};

const titleOf = (meta: unknown): string | null => {
  if (!Array.isArray(meta)) return null;
  const tag = [...meta].reverse().find((m) => m && typeof m === "object" && "title" in m);
  return tag ? String((tag as { title: string }).title) : null;
};

const stripBrand = (title: string) => title.replace(/\s*\|\s*ATME.*$/, "").trim();

/** BreadcrumbList for the current URL: Home › known sections › this page. */
export function BreadcrumbJsonLd() {
  const leaf = useMatches({
    select: (matches) => {
      const last = matches[matches.length - 1];
      return { pathname: last?.pathname ?? "/", title: titleOf(last?.meta) };
    },
  });
  const pathname = leaf.pathname.replace(/\/+$/, "") || "/";
  if (pathname === "/" || !leaf.title) return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { name: string; path: string }[] = [{ name: SITE_NAME, path: "/" }];
  segments.slice(0, -1).forEach((seg, i) => {
    const path = `/${segments.slice(0, i + 1).join("/")}`;
    const deptName = segments[0] === "departments" && i === 1 ? getDept(seg)?.name : undefined;
    const name = deptName ?? SECTION_LABELS[seg];
    // Segments without a page of their own (e.g. /p, /p/event) are skipped.
    if (name) crumbs.push({ name, path });
  });
  crumbs.push({ name: stripBrand(leaf.title), path: pathname });

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.path === "/" ? `${SITE_URL}/` : absoluteUrl(c.path),
        })),
      }}
    />
  );
}
