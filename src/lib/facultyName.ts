// Presentation helpers for faculty names and ordering.
// These are applied at render time so we don't have to rewrite scraped data.

// ----- Name formatting -----------------------------------------------------
//
// Goal: Title-case the visible name while preserving initials like "C V" or
// "J V" intact (NOT "C V" -> "C v"). Examples:
//   "Dr. NasreenFathima"        -> "Dr. Nasreen Fathima"
//   "mrs. lakshmi shree c v"    -> "Mrs. Lakshmi Shree C V"
//   "DR.JAYANTKUMAR A RATHOD"   -> "Dr. Jayantkumar A Rathod"
//   "Dr. M S Sunitha Patel"     -> "Dr. M S Sunitha Patel"

const HONORIFIC_RE = /^(dr|mr|mrs|ms|prof|smt|sri|shri|er|cap|capt)\.?$/i;

function titleCaseWord(w: string): string {
  if (!w) return w;
  // single-letter token = initial, force uppercase
  if (w.length === 1) return w.toUpperCase();
  // word made entirely of consonants/uppercase 2-3 chars that LOOK like
  // initials run together (e.g. "MS", "KB") — leave UPPERCASE so we don't
  // damage real abbreviations.
  if (w.length <= 3 && /^[A-Z]+$/.test(w)) return w;
  // hyphenated bits
  if (w.includes("-")) return w.split("-").map(titleCaseWord).join("-");
  // dotted bits like "M.S" or "C.V"
  if (w.includes(".") && !HONORIFIC_RE.test(w.replace(/\.$/, ""))) {
    return w.split(".").map(titleCaseWord).join(".");
  }
  return w[0].toUpperCase() + w.slice(1).toLowerCase();
}

export function formatFacultyName(input: string): string {
  if (!input) return input;
  let s = input.trim();
  // 1. Split honorific stuck to a name: "Dr.NasreenFathima" / "DR.JAYANTKUMAR".
  //    The lookahead MUST be case-sensitive (uppercase only), otherwise inputs
  //    like "Mrs. Bharathi" get parsed as "Mr" + "s. Bharathi" because the
  //    `i` flag makes [A-Z] match the lowercase `s` of "Mrs." too. Longer
  //    honorifics are listed first so alternation picks them before shorter
  //    prefixes like "mr".
  s = s.replace(
    /^([Cc][Aa][Pp][Tt]|[Pp][Rr][Oo][Ff]|[Ss][Hh][Rr][Ii]|[Mm][Rr][Ss]|[Cc][Aa][Pp]|[Dd][Rr]|[Mm][Rr]|[Mm][Ss]|[Ss][Mm][Tt]|[Ss][Rr][Ii]|[Ee][Rr])\.?(?=[A-Z])/,
    "$1. ",
  );
  // 2. Split camelCase joined names: "NasreenFathima" -> "Nasreen Fathima"
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  // 3. Collapse whitespace
  s = s.replace(/\s+/g, " ").trim();

  const out = s.split(" ").map((tok) => {
    if (!tok) return tok;
    const bare = tok.replace(/\.$/, "");
    if (HONORIFIC_RE.test(bare)) {
      // Normalize to "Dr." style (first cap + trailing dot)
      const cap = bare[0].toUpperCase() + bare.slice(1).toLowerCase();
      return cap + ".";
    }
    return titleCaseWord(tok);
  });
  return out.join(" ");
}

// ----- Designation ordering ------------------------------------------------
//
// Order: Principal → Dean → HOD → Professor → Associate Professor → Assistant
// Professor → Lecturer → everything else. Within the same rank, sort by name.

export function designationRank(d: string | undefined | null): number {
  const s = (d || "").toLowerCase();
  if (/principal/.test(s)) return 0;
  // Dean (without Head) is bumped above HOD so e.g. Dean Academics appears
  // ahead of the departmental HOD in faculty listings.
  if (/dean/.test(s) && !/\bhod\b|head of (the )?department|& head|and head/.test(s)) return 1;
  // HOD/Head jumps above non-HOD professors.
  if (/\bhod\b|head of (the )?department|& head|and head/.test(s)) return 2;
  if (/\bassociate prof/.test(s)) return 4;
  if (/\bassistant prof/.test(s) || /\basst\.? prof/.test(s)) return 5;
  if (/\bprofessor\b|\bprof\.?\b/.test(s)) return 3; // plain Professor
  if (/lecturer/.test(s)) return 6;
  return 99;
}

export function sortByDesignation<T extends { designation?: string; name: string }>(list: T[]): T[] {
  // Stable sort by rank only — preserve original (scraped) order within the
  // same rank so cards appear in the same order as the old atme.edu.in site.
  return [...list].sort((a, b) => designationRank(a.designation) - designationRank(b.designation));
}
