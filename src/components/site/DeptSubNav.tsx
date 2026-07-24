import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
// Lightweight per-department page-KEY index (no markdown) — this component
// only ever checks whether a page key exists, never its content, so it
// doesn't need the full ~1.6MB deptScraped.json that departments.$slug.$page
// loads for actual page bodies.
import deptScrapedKeys from "@/data/deptScrapedKeys.json";
import { getDeptPages } from "@/data/deptPageConfig";
import { getDept, resolveDeptSlug } from "@/data/departments";
import { resolveCanonicalSections, PLACEHOLDER_PREFIX, isCanonicalSectionAvailable, FULL_MENU_DEPTS, DEPT_EXCLUDED_SECTIONS } from "@/data/canonicalSections";
import { INFRA_DATA } from "@/data/infrastructureScraped";
import {
  BookOpen,
  Users2,
  Trophy,
  Newspaper,
  Calendar,
  FileText,
  Microscope,
  Building2,
  Briefcase,
  Lightbulb,
  Award,
  GraduationCap,
  Image as ImageIcon,
  Wrench,
  ClipboardList,
  Megaphone,
  Heart,
  Globe,
  FlaskConical,
  Factory,
  Library,
  type LucideIcon,
} from "lucide-react";

type KeysMap = Record<string, string[]>;

function pickIcon(key: string, label: string): LucideIcon {
  const s = (key + " " + label).toLowerCase();
  if (/(about|vision|mission|hod|overview|profile)/.test(s)) return BookOpen;
  if (/(faculty|teacher|staff|hod)/.test(s)) return Users2;
  if (/(achievement|award|honou?r)/.test(s)) return Trophy;
  if (/(news|letter|magazine|bulletin)/.test(s)) return Newspaper;
  if (/(event|calendar|schedule|workshop|seminar|fdp|conference)/.test(s)) return Calendar;
  if (/(research|publication|paper|journal|patent)/.test(s)) return Microscope;
  if (/(lab|laborator|infrastructure|facilit)/.test(s)) return Building2;
  if (/(placement|internship|career|recruit)/.test(s)) return Briefcase;
  if (/(innovat|idea|incub|entrepreneur)/.test(s)) return Lightbulb;
  if (/(certif|accredit|rank)/.test(s)) return Award;
  if (/(syllabus|curriculum|course|programme|program|peo|pso|po\b)/.test(s)) return GraduationCap;
  if (/(gallery|photo|image)/.test(s)) return ImageIcon;
  if (/(project|technical|workshop)/.test(s)) return Wrench;
  if (/(notice|circular|announc)/.test(s)) return Megaphone;
  if (/(activit|club|chapter)/.test(s)) return Heart;
  if (/(mou|industry|collab|partnership)/.test(s)) return Factory;
  if (/(international|exchange|global)/.test(s)) return Globe;
  if (/(experiment|virtual)/.test(s)) return FlaskConical;
  if (/(library|resource|notes|material)/.test(s)) return Library;
  if (/(report|annual|coe|exam)/.test(s)) return ClipboardList;
  return FileText;
}

function toTitleCase(s: string) {
  const small = new Set(["of", "and", "the", "for", "in", "on", "to", "a", "an", "at", "by", "with", "or"]);
  const parts = s.toLowerCase().split(/\s+/);
  return parts
    .map((w, i) => {
      if (i !== 0 && small.has(w)) return w;
      // keep all-caps tokens like CSE, ECE, HOD, PEO etc. if originally so
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

/**
 * Horizontal tab navigation listing all scraped sub-pages for a department.
 * Icons + Title Case labels; active = filled teal.
 */
export function DeptSubNav({ slug, activeKey }: { slug: string; activeKey?: string }) {
  // (BCA previously hid the sub-nav; now uses canonical Coming-Soon tabs)
  const resolvedSlug = resolveDeptSlug(slug);
  const keysList = (deptScrapedKeys as KeysMap)[resolvedSlug] ?? (deptScrapedKeys as KeysMap)[slug] ?? [];
  const pages: Record<string, true> = {};
  for (const k of keysList) pages[k] = true;
  const dept = getDept(slug);
  const cfg = getDeptPages(resolvedSlug) ?? getDeptPages(slug) ?? [];
  const hasFacultyScraped = cfg.some((p) => p.label === "Faculty" && pages[p.key]);
  const hasFaculty = (dept?.faculty?.length ?? 0) > 0 || hasFacultyScraped;
  const hasHod = Boolean(dept?.hod);
  const hasInfra = (INFRA_DATA[resolvedSlug]?.sections?.length ?? 0) > 0
    || (INFRA_DATA[slug]?.sections?.length ?? 0) > 0;
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // On mount / when the active tab changes:
  // 1. Smoothly center the active tab inside the horizontal scroller so it
  //    is never clipped off-screen on narrow viewports.
  // 2. Smoothly scroll the page so the tab row + content sit just below the
  //    sticky header — gives a consistent "jump to this section" feel.
  useEffect(() => {
    if (!activeKey) return;
    const tab = activeRef.current;
    const scroller = scrollerRef.current;
    const nav = navRef.current;
    if (tab && scroller) {
      const sLeft = scroller.scrollLeft;
      const sWidth = scroller.clientWidth;
      const tLeft = tab.offsetLeft;
      const tWidth = tab.offsetWidth;
      const target = tLeft - sWidth / 2 + tWidth / 2;
      const clamped = Math.max(0, Math.min(target, scroller.scrollWidth - sWidth));
      if (Math.abs(clamped - sLeft) > 4) {
        scroller.scrollTo({ left: clamped, behavior: "smooth" });
      }
    }
    if (nav) {
      // Defer to next frame so layout is settled (post-hero render).
      requestAnimationFrame(() => {
        const top = nav.getBoundingClientRect().top + window.scrollY - 8;
        if (Math.abs(window.scrollY - top) > 8) {
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    }
  }, [activeKey, slug]);

  // Always render canonical sections — even when no scraped pages exist
  // (e.g. AIML, Cybersecurity, MBA, MCA). Missing scraped pages fall back
  // to placeholder routes.
  void getDeptPages;
  void toTitleCase;
  type Entry = { key: string; label: string; rawLabel: string; staff?: boolean };

  let entries: Entry[];
  // Basic-science / humanities depts: do NOT use canonical Coming-Soon
  // placeholders. Instead build the tab list from DEPT_PAGES which lists
  // only the pages that actually exist on old.atme.edu.in for this dept.
  // Insert a "Staff Details" entry that routes to the faculty directory.
  if (!FULL_MENU_DEPTS.has(resolvedSlug) && cfg.length > 0) {
    const filtered = cfg
      .filter((p) => p.label !== "Faculty")
      .filter((p) => Boolean(pages[p.key]));
    entries = filtered.map((p) => ({ key: p.key, label: p.label, rawLabel: p.label }));
    if (hasFaculty) {
      // Place Staff Details right after About (or first when no About present).
      const aboutIdx = entries.findIndex((e) => /about/i.test(e.label));
      const staff: Entry = { key: "_section_staff-details", label: "Staff Details", rawLabel: "Staff Details", staff: true };
      const insertAt = aboutIdx >= 0 ? aboutIdx + 1 : 0;
      entries.splice(insertAt, 0, staff);
    }
  } else {
    // Only the canonical 13 sections — no HOD Profile / Counselling / Resources
    // extras. Keeps the horizontal menu focused on the standard structure.
    const canonical = resolveCanonicalSections(pages as Record<string, unknown>);
    const excluded = DEPT_EXCLUDED_SECTIONS[resolvedSlug];
    entries = canonical
      .filter((c) => !excluded?.has(c.canonicalKey))
      .filter((c) =>
        isCanonicalSectionAvailable(c.canonicalKey, {
          hasScraped: c.scrapedKey != null,
          hasHod,
          hasFaculty,
          hasInfra,
          slug: resolvedSlug,
        })
      )
      .map((c) => ({
        key: c.pageParam,
        label: c.short,
        rawLabel: c.label,
        staff: c.canonicalKey === "staff-details",
      }));
  }
  if (entries.length === 0) return null;

  // Active matching: also flag canonical placeholder when the active key
  // matches a canonical scraped key alias.
  void PLACEHOLDER_PREFIX;
  return (
    <nav
      ref={navRef}
      aria-label="Department pages"
      className="w-full bg-background relative scroll-mt-20"
    >
      <div ref={scrollerRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
        <ul className="relative flex flex-nowrap items-end gap-1.5 px-3 sm:px-6 pt-3 min-w-max">
          {entries.map(({ key, label, rawLabel, staff }) => {
            const active = key === activeKey || (staff && activeKey === "_section_staff-details");
            const Icon = pickIcon(key, rawLabel);
            const cls =
              "group relative inline-flex items-center gap-2 rounded-t-xl px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 " +
              (active
                ? "bg-[#129199] text-white shadow-[0_-2px_8px_-2px_rgba(18,145,153,0.45)] -mb-[2px] pb-3"
                : "bg-white text-foreground border border-b-0 border-[#129199]/15 hover:bg-[#129199]/10 hover:text-[#0d3438]");
            const inner = (
              <>
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{label}</span>
              </>
            );
            return (
              <li key={key} className="shrink-0">
                {staff ? (
                  <Link
                    ref={active ? (activeRef as never) : undefined}
                    to="/departments/$slug/faculty"
                    params={{ slug }}
                    aria-current={active ? "page" : undefined}
                    className={cls}
                  >
                    {inner}
                  </Link>
                ) : (
                  <Link
                    ref={active ? (activeRef as never) : undefined}
                    to="/departments/$slug/$page"
                    params={{ slug, page: key }}
                    aria-current={active ? "page" : undefined}
                    className={cls}
                  >
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {/* Continuous teal underline bar beneath the tab row */}
        <div className="h-[3px] w-full bg-[#129199]" />
      </div>
    </nav>
  );
}


