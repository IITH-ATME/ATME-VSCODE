// Shared on-page SEO tags. Every route's head() calls seo() so each page
// gets a unique <title>, meta description, self-referencing canonical and
// matching Open Graph / Twitter tags. Without this, child routes inherit the
// root's generic og:title and no canonical at all.

import heroImg from "@/assets/hero-campus.jpg";

export const SITE_URL = "https://atme.edu.in";
export const SITE_NAME = "ATME College of Engineering";

const BRAND_SUFFIX = ` | ${SITE_NAME}`;
const SHORT_SUFFIX = " | ATME Mysuru";
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

const DEFAULT_DESCRIPTION =
  "ATME College of Engineering, Mysuru — AICTE approved, VTU affiliated, NAAC A+ accredited engineering college offering UG and PG programmes.";

export interface SeoInput {
  /** Page-specific title, without the site name. */
  title: string;
  /** Route path starting with "/", used for the canonical URL. */
  path: string;
  description?: string | null;
  /** Fallback text (e.g. page markdown) used when description is missing or too short. */
  descriptionSource?: string | null;
  /** Lead-in for descriptions built from descriptionSource, so pages sharing body text stay unique. */
  descriptionPrefix?: string;
  image?: string | null;
  type?: "website" | "article" | "profile";
  /** Keep the page out of search results (stubs, admin tools). */
  noindex?: boolean;
  /** Override the canonical path when this URL duplicates another page. */
  canonicalPath?: string;
}

type MetaTag = Record<string, string>;
type LinkTag = { rel: string; href: string };

export const absoluteUrl = (pathOrUrl: string): string =>
  /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;

const normalizePath = (path: string): string => {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
};

const collapse = (s: string): string => s.replace(/\s+/g, " ").trim();

/** Title-case a title only when it is written entirely in capitals. */
export const softTitle = (s: string): string => softenAllCaps(collapse(s));

const softenAllCaps = (s: string): string =>
  /[a-z]/.test(s) || !/[A-Z]{3,}/.test(s)
    ? s
    : s.toLowerCase().replace(/(^|[\s(“"'/-])([a-z])/g, (_, p: string, c: string) => p + c.toUpperCase());

export function buildTitle(title: string): string {
  const base = softenAllCaps(collapse(title.replace(/\s*[—|–-]\s*ATME.*$/i, ""))) || SITE_NAME;
  // Titles that already name the college don't need the brand repeated.
  if (/\bATME\b/.test(base)) return base;
  if (base.length + BRAND_SUFFIX.length <= TITLE_MAX) return base + BRAND_SUFFIX;
  return base + SHORT_SUFFIX;
}

/** Plain text from markdown/HTML, for building descriptions. */
export function plainText(md: string): string {
  return collapse(
    md
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
      .replace(/\[pdfviewer[^\]]*\][^[]*\[\/pdfviewer\]/gi, " ")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/^\s*\|?\s*:?-{2,}.*$/gm, " ")
      .replace(/^#{1,6}\s+.*$/gm, " ")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/&nbsp;|&amp;|&#\d+;/g, (m) => (m === "&amp;" ? "&" : " "))
      .replace(/[*_`>|#]/g, " "),
  );
}

/** Keep only prose lines from line-per-item scraped text (drops menus, headings, table cells). */
export const proseLines = (text: string, minLength = 40): string =>
  text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length >= minLength)
    .map((l) => (/[.!?:]$/.test(l) ? l : `${l}.`))
    .join(" ");

/** First sentences of the text, cut at a word boundary to fit a meta description. */
export function summarize(text: string, max = DESC_MAX - 5): string {
  const t = collapse(text);
  if (t.length <= max) return t;
  const sentences = t.match(/[^.!?]+[.!?]+(\s|$)/g) || [];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= DESC_MIN) return out;
  const cut = t.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s–-]+$/, "")}…`;
}

export function buildDescription(
  input: Pick<SeoInput, "description" | "descriptionSource" | "descriptionPrefix" | "title">,
): string {
  const given = collapse(input.description || "");
  if (given.length >= DESC_MIN) return summarize(given);
  const body = input.descriptionSource ? plainText(input.descriptionSource) : "";
  const prefix = input.descriptionPrefix ? collapse(input.descriptionPrefix.replace(/[“”"]/g, "")) : "";
  const alreadyLeads = prefix && body.toLowerCase().replace(/[“”"]/g, "").startsWith(prefix.toLowerCase());
  const fromBody = body ? summarize(prefix && !alreadyLeads ? `${prefix} — ${body}` : body) : "";
  if (fromBody.length >= DESC_MIN) return fromBody;
  const lead = given || fromBody;
  const title = softenAllCaps(collapse(input.title));
  if (lead) return summarize(`${lead.replace(/[.\s]+$/, "")}. ${title} at ATME College of Engineering, Mysuru.`);
  return summarize(`${title} — ${DEFAULT_DESCRIPTION}`);
}

export function seo(input: SeoInput): { meta: MetaTag[]; links: LinkTag[] } {
  const title = buildTitle(input.title);
  const description = buildDescription(input);
  const url = absoluteUrl(normalizePath(input.canonicalPath ?? input.path));
  const image = absoluteUrl(input.image || heroImg);
  const meta: MetaTag[] = [
    { title } as MetaTag,
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:image", content: image },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
  if (input.noindex) meta.push({ name: "robots", content: "noindex, follow" });
  return { meta, links: input.noindex ? [] : [{ rel: "canonical", href: url }] };
}
