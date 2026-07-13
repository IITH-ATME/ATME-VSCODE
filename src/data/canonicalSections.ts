// Canonical sub-page structure shown on every department, regardless of
// whether the underlying scraped page exists. Items that don't have content
// link to a placeholder with "Content coming soon".

export type CanonicalSection = {
  key: string;          // canonical id used for the placeholder param
  label: string;        // long display label
  short: string;        // short label for horizontal nav
  aliases: string[];    // scraped page keys to look up, in priority order
};

export const CANONICAL_SECTIONS: CanonicalSection[] = [
  { key: "about", label: "About The Department", short: "About",
    aliases: ["about-the-department", "about-the-department-2", "ee-about-the-department", "about-mechanical-department-2", "about-mechanical-department", "chem-about-the-department"] },
  { key: "infrastructure", label: "Infrastructure", short: "Infrastructure",
    aliases: ["infrastructure", "cs-infrastructure", "mca-infrastructure", "bca-infrastructure"] },
  { key: "staff-details", label: "Staff Details", short: "Staff Details", aliases: [] },
  { key: "achievements", label: "Achievements", short: "Achievements",
    aliases: ["achievements", "achievements-2", "achivements", "civil-achievements", "cseds-achievements"] },
  { key: "research-initiative", label: "Research Initiative", short: "Research",
    aliases: ["research-initiative", "research-initiatives", "civil-research-initiatives", "cseds-research-initiative"] },
  { key: "student-learning-centric", label: "Student Learning Centric", short: "Student Learning",
    aliases: ["civil-resources", "cyber-security-resources", "mca-resources", "resources-mba", "resources", "resourses", "rd-for-students", "teachers-teaching-analysis", "cseds-resources", "bca-resources"] },
  { key: "industry-interface", label: "Industry Interface", short: "Industry Interface",
    aliases: ["industry-interface", "industry-interface-3", "ee-industry-interface", "civil-industry-interface", "data-science-industry-interface"] },
  { key: "placement", label: "Placement and Higher Studies", short: "Placements",
    aliases: ["placement", "placement-details", "placement-higher-studies", "cseds-placements"] },
  { key: "co-curricular", label: "Co-curricular & Extracurricular Activities", short: "Activities",
    aliases: ["co-curricular-extracurricular-activities", "co-curricular-extra-curricular-activities", "extra-curricular-activities", "co-curricular-extracurricular-activities-mba", "professional-society-activities"] },
  { key: "news-letter", label: "News Letter", short: "Newsletter",
    aliases: ["e-news-letter", "ee-e-news-letter", "cse-news-letter-2", "cse-news-letter", "ce-news-letter"] },
  { key: "coe", label: "Calendar of Events (COE)", short: "COE", aliases: ["coe-cs", "coe-cse-ds", "coe-cse-aiml"] },
];

export const PLACEHOLDER_PREFIX = "_section_";

/**
 * Departments that should always expose the full canonical sub-page menu,
 * even when individual sections have no scraped content. Missing sections
 * render the "Coming Soon" card via the placeholder route.
 *
 * Excludes basic-science / humanities departments (physics, chemistry,
 * mathematics, humanities) which only show what's actually scraped.
 */
export const FULL_MENU_DEPTS = new Set<string>([
  "cse",
  "ece",
  "eee",
  "me",
  "ce",
  "aiml",
  "csd",
  "cy",
  "ds",
  "mca",
  "mba",
  "bca",

]);

/**
 * Per-department overrides that drop a canonical section even though the
 * department is in FULL_MENU_DEPTS. Use when old.atme.edu.in genuinely has
 * no such page for that specific department.
 */
export const DEPT_EXCLUDED_SECTIONS: Record<string, Set<string>> = {
  mba: new Set(["infrastructure"]),
};

export type ResolvedSection = {
  canonicalKey: string;
  label: string;
  short: string;
  /** scraped key to deep-link into; null = placeholder route */
  scrapedKey: string | null;
  /** the page param to use in URL: either scrapedKey or `_section_<canonicalKey>` */
  pageParam: string;
};

export function resolveCanonicalSections(
  pages: Record<string, unknown>
): ResolvedSection[] {
  return CANONICAL_SECTIONS.map((s) => {
    const scrapedKey = s.aliases.find((a) => pages[a]) || null;
    return {
      canonicalKey: s.key,
      label: s.label,
      short: s.short,
      scrapedKey,
      pageParam: scrapedKey ?? `${PLACEHOLDER_PREFIX}${s.key}`,
    };
  });
}

export function getCanonicalByKey(key: string): CanonicalSection | null {
  return CANONICAL_SECTIONS.find((s) => s.key === key) ?? null;
}

/**
 * Whether a canonical section should appear in a dept's menu / be reachable.
 * Mirrors the old.atme.edu.in structure: a section only appears when it has
 * real content. About is allowed when curated (dept.hod present);
 * Staff Details is allowed when the dept has a faculty directory.
 */
export function isCanonicalSectionAvailable(
  canonicalKey: string,
  opts: { hasScraped: boolean; hasHod: boolean; hasFaculty: boolean; hasInfra?: boolean; slug?: string }
): boolean {
  if (opts.hasScraped) return true;
  if (canonicalKey === "about") return opts.hasHod || (opts.slug ? FULL_MENU_DEPTS.has(opts.slug) : false);
  if (canonicalKey === "staff-details") return opts.hasFaculty;
  if (canonicalKey === "infrastructure") {
    return Boolean(opts.hasInfra) || (opts.slug ? FULL_MENU_DEPTS.has(opts.slug) : false);
  }
  // For full-menu departments, expose every canonical section so users can
  // see the standard structure; missing pages render the Coming Soon card.
  if (opts.slug && FULL_MENU_DEPTS.has(opts.slug)) return true;
  return false;
}

