// Rewrites links scraped from old.atme.edu.in so they resolve correctly on the
// new build instead of 404-ing on the live atme.edu.in domain.
//
// Two real classes of breakage exist in the scraped markdown:
//
// 1. Faculty profile links — `https://atme.edu.in/<faculty-slug>/` — those
//    pages don't exist on atme.edu.in (only on old.atme.edu.in), so clicking
//    them in the UI 404s. We re-route to the internal
//    `/departments/<dept>/faculty/<slug>` route which renders the migrated
//    profile.
//
// 2. WordPress decorative anchors — `…/cse-faculty-profile/#1671524976909-…`
//    — these are accordion-tab toggles that don't exist outside the old WP
//    theme. We drop the link entirely and keep the link text as plain
//    styled text so the heading-like label still reads naturally.
//
// Everything else (external sites, mailto:, real internal routes) is returned
// unchanged so existing behaviour is preserved.

import {
  aimlAllFaculty, ceAllFaculty, csdAllFaculty, cseAllFaculty, cyAllFaculty,
  dsAllFaculty, eceAllFaculty, eeeAllFaculty, mbaAllFaculty, mcaAllFaculty,
  meAllFaculty,
} from "./allFaculty";

const FACULTY_BY_SLUG: Record<string, true> = {};
for (const list of [
  cseAllFaculty, eceAllFaculty, eeeAllFaculty, meAllFaculty, ceAllFaculty,
  dsAllFaculty, aimlAllFaculty, csdAllFaculty, cyAllFaculty, mcaAllFaculty,
  mbaAllFaculty,
]) {
  for (const f of list) if (f.id) FACULTY_BY_SLUG[f.id] = true;
}

export type RewriteResult =
  | { kind: "drop" }
  | { kind: "facultyInternal"; deptSlug: string; facultyId: string }
  | { kind: "asIs"; href: string };

const ATME_FACULTY_RE = /^https?:\/\/(?:www\.)?(?:old\.)?atme\.edu\.in\/([a-z0-9][a-z0-9-]+)\/?(?:[#?].*)?$/i;
// Dept-page anchor URL like .../<dept-path>/<page>/#1234567890-xxx-yyy or /#content
const ATME_DEPT_ANCHOR_RE =
  /^https?:\/\/(?:www\.)?(?:old\.)?atme\.edu\.in\/[a-z0-9][a-z0-9-]+\/[a-z0-9][a-z0-9-]+\/?[\\]?#.+$/i;

export function rewriteHref(href: string | undefined, currentDeptSlug?: string): RewriteResult {
  if (!href) return { kind: "asIs", href: "" };
  const h = href.trim();
  if (!h) return { kind: "asIs", href: "" };

  // Drop decorative WP TOC/scroll anchors on dept sub-pages.
  if (ATME_DEPT_ANCHOR_RE.test(h)) return { kind: "drop" };

  // Faculty profile rewrite — only when current dept context is known.
  const m = ATME_FACULTY_RE.exec(h);
  if (m && currentDeptSlug) {
    const slug = m[1].toLowerCase();
    if (FACULTY_BY_SLUG[slug]) {
      return { kind: "facultyInternal", deptSlug: currentDeptSlug, facultyId: slug };
    }
  }

  return { kind: "asIs", href: h };
}
