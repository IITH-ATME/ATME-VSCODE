// Rewrites atme.edu.in wp-content image URLs (and PDF poster viewer URLs in
// hrefs) to their rehosted CDN counterparts so faculty photos / banners /
// PDFs scraped from the old WP site don't 404 against the new domain.

import imgAssets from "./imgAssets.json";
import imageAssets from "./imageAssets.json";
import pdfAssets from "./pdfAssets.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

const IMG: Record<string, string> = { ...(imageAssets as Record<string, string>), ...(imgAssets as Record<string, string>) };
const PDF: Record<string, string> = pdfAssets as Record<string, string>;

function pdfFallback(url: string): string {
  return resolveAssetUrl(
    url.replace(/^(https?:\/\/)(?:www\.|new\.)?atme\.edu\.in\//i, "$1old.atme.edu.in/"),
  );
}

function basename(url: string): string {
  try {
    let fn = decodeURIComponent(url.split(/[?#]/)[0].split("/").pop() || "");
    fn = fn.replace(/ /g, "_").replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 180);
    return fn;
  } catch { return ""; }
}

// Strip WP image-size suffix: foo-300x200.jpg -> foo.jpg
function stripSize(fn: string): string {
  return fn.replace(/-\d+x\d+(\.[A-Za-z0-9]+)$/i, "$1");
}

function lookupImage(fn: string): string | undefined {
  if (!fn) return undefined;
  if (IMG[fn]) return resolveAssetUrl(IMG[fn]);
  const stripped = stripSize(fn);
  if (stripped !== fn && IMG[stripped]) return resolveAssetUrl(IMG[stripped]);
  return undefined;
}

const ATME_IMG_RE = /^https?:\/\/(?:www\.|new\.|old\.)?atme\.edu\.in\/wp-content\/uploads\/.+\.(?:jpe?g|png|gif|webp|svg)$/i;
const PLUGIN_NOISE_RE = /(ultimate-social|icons_theme|share_icons|visit_icons|atme-final-logo|wpforms|elementor|woocommerce)/i;

/**
 * Returns a usable image src, or null if the image should be hidden
 * (plugin noise, 1x1 spacer).
 *
 * For atme.edu.in/wp-content uploads, prefers the rehosted CDN copy and
 * falls back to old.atme.edu.in (where the originals still serve) so we
 * never render a broken atme.edu.in URL.
 */
export function rewriteImageSrc(src: string | undefined | null): string | null {
  const s = String(src || "").trim();
  if (!s) return null;
  if (/base64-image-removed|admin-ajax|placeholder|spacer|blank|1x1|pixel\.gif/i.test(s)) return null;
  if (PLUGIN_NOISE_RE.test(s)) return null;

  if (ATME_IMG_RE.test(s)) {
    const hit = lookupImage(basename(s));
    if (hit) return resolveAssetUrl(hit);
    // Fall back to old.atme.edu.in which still serves the originals.
    return resolveAssetUrl(s.replace(/^https?:\/\/(?:www\.)?atme\.edu\.in\//i, "https://old.atme.edu.in/"));
  }
  return resolveAssetUrl(s);
}

// PDF.js poster viewer wraps a real PDF in ?file=<encoded-url>. Pull it out.
const PDFJS_VIEWER_RE = /pdf-poster\/assets\/pdfjs[^?]*\?(?:[^#]*&)?file=([^&#]+)/i;

export function rewritePdfHref(href: string): string {
  const m = PDFJS_VIEWER_RE.exec(href);
  if (m) {
    try {
      const inner = decodeURIComponent(m[1]);
      const k = basename(inner);
      if (PDF[k]) return resolveAssetUrl(PDF[k]);
      return pdfFallback(inner);
    } catch { /* fall through */ }
  }
  if (/^https?:\/\/(?:www\.|new\.|old\.)?atme\.edu\.in\/wp-content\/uploads\/.+\.pdf(?:[?#].*)?$/i.test(href)) {
    const k = basename(href);
    if (PDF[k]) return resolveAssetUrl(PDF[k]);
    return pdfFallback(href);
  }
  return resolveAssetUrl(href);
}
