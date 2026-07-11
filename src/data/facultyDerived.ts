import { facultyPages } from "./facultyPages";
import { FACULTY_PHOTOS } from "./facultyPhotos";
import { resolveAssetUrl } from "@/lib/assetUrl";

export type DerivedFacultyInfo = {
  designation?: string;
  qualification?: string;
  doj?: string;
  experience?: string;
  image?: string;
  department?: string;
};

function clean(v: string): string {
  return v
    .replace(/\\\*\\\*|\*\*/g, "")
    .replace(/<br\s*\/?>/gi, " · ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .replace(/\s*\|\s*$/, "")
    .trim();
}

/** Strip leading list markers like "-", "·", "*", "•" from a single qualification item. */
function stripListMarker(s: string): string {
  return s.replace(/^[\s·•\-*–—]+/, "").replace(/[\s·•\-*–—]+$/, "").trim();
}

/** Parse a qualification blob into a clean list of qualification items. */
function normalizeQual(s: string): string {
  return s
    .replace(/\bM[\.\-\s]*Tech\b/gi, "MTech")
    .replace(/\bB[\.\-\s]*Tech\b/gi, "BTech")
    .replace(/\bM\.?\s*E\b/g, "ME")
    .replace(/\bB\.?\s*E\b/g, "BE")
    .replace(/\bPh[\.\s]*D\.?\b/gi, "PhD")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function parseQualificationList(raw?: string): string[] {
  if (!raw) return [];
  // Normalize: convert <br> tags into a separator first so we don't lose breaks
  const normalized = raw
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Split on newlines OR the "·"/"•" bullet glyphs
  const parts = normalized
    .split(/\n+|\s+[·•]\s+/)
    .map((p) => normalizeQual(stripListMarker(p.replace(/\s+/g, " "))))
    .filter((p) => p.length > 1);
  // Dedup while preserving order
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of parts) {
    const k = p.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(p);
  }
  return out;
}

function pick(md: string, patterns: RegExp[]): string | undefined {
  for (const re of patterns) {
    const m = md.match(re);
    if (m && m[1]) {
      const v = clean(m[1]);
      if (v && v !== "—" && v !== "-" && v !== "–") return v;
    }
  }
  return undefined;
}

const CACHE = new Map<string, DerivedFacultyInfo>();

export function getDerived(id: string): DerivedFacultyInfo {
  if (CACHE.has(id)) return CACHE.get(id)!;
  const page = facultyPages[id];
  const md = page?.md ?? "";
  const info: DerivedFacultyInfo = {};

  if (md) {
    info.designation = pick(md, [
      /\*\*Designation:?\*\*\s*([^\n|*]+)/i,
      /Designation[:\s]*\*\*\s*([^\n|*]+)\*\*/i,
      /Designation\s*\|\s*([^\n|]+)/i,
      /\*\*Designation:\s*([^\n*|]+)\*\*/i,
    ]);
    info.qualification = pick(md, [
      /\*\*Qualification\*\*[:\s|]*([^\n|]+)/i,
      /Qualification\s*\|\s*([^\n|]+)/i,
      /\*\*Qualification:\*\*\s*([^\n|]+)/i,
    ]);
    info.doj = pick(md, [
      /Date of Joining[^|]*\|\s*([0-9/\-\.]+)/i,
      /\*\*Date of Joining[^*]*\*\*\s*([0-9/\-\.]+)/i,
    ]);
    info.experience = pick(md, [
      /\*\*Professional Experience:?\*\*\s*\*\*([^\n*|]+)\*\*/i,
      /\*\*Professional Experience:?\*\*\s*([^\n*|]+)/i,
      /\*\*Total Experience[^*]*\*\*\s*\|\s*([^\n|]+)/i,
      /Total Experience[^|]*\|\s*([^\n|]+)/i,
    ]);
    info.department = pick(md, [
      /\*\*Program:?\*\*\s*([^\n*|]+)/i,
      /\*\*Department\*\*\s*\|\s*([^\n|]+)/i,
    ]);
    // Try first real image in markdown (not logo/icon)
    const imgs = md.match(/!\[[^\]]*\]\((https?:[^)]+)\)/g) || [];
    for (const tag of imgs) {
      const m = tag.match(/\((https?:[^)]+)\)/);
      const url = m?.[1] || "";
      if (!url) continue;
      if (/logo|icon|share|visit|placeholder|ATME-Final|admin-ajax|ultimate-social/i.test(url)) continue;
      info.image = url;
      break;
    }
  }

  CACHE.set(id, info);
  return info;
}

const PLACEHOLDER_IMG_RE = /ATME-Final-logo|ATME-logo|logo-copy|placeholder|admin-ajax|ultimate-social|share-icon/i;

export function normalizeFacultyImageUrl(url?: string): string {
  return resolveAssetUrl(url);
}

function isUsableImage(url?: string): boolean {
  if (!url) return false;
  const v = url.trim();
  if (!v) return false;
  return !PLACEHOLDER_IMG_RE.test(v);
}

export function mergeFaculty<T extends { id: string; designation?: string; qualification?: string; doj?: string; image?: string }>(f: T): T & { experience?: string } {
  const d = getDerived(f.id);
  const originalImage = isUsableImage(f.image) ? f.image : undefined;
  const derivedImage = isUsableImage(d.image) ? d.image : undefined;
  const scrapedImage = isUsableImage(FACULTY_PHOTOS[f.id]) ? FACULTY_PHOTOS[f.id] : undefined;
  return {
    ...f,
    designation: (f.designation && f.designation.trim()) || d.designation || "",
    qualification: (f.qualification && f.qualification.trim()) || d.qualification || f.qualification,
    doj: (f.doj && f.doj.trim()) || d.doj || f.doj,
    // Prefer the image set on the data record (e.g. curated bg-removed PNG asset)
    // over scraped/derived fallbacks.
    image: normalizeFacultyImageUrl(originalImage || scrapedImage || derivedImage || ""),
    experience: d.experience,
  };
}
