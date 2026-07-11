// Rewrites any atme.edu.in PDF URL in a string of HTML/markdown to its rehosted CDN counterpart.
import map from "./pdfAssets.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

const PDF_MAP: Record<string, string> = map as Record<string, string>;

// Build lookup by original filename (decoded, with _ instead of spaces, sanitized like uploader)
function keyOf(url: string): string {
  try {
    let fn = decodeURIComponent(url.split("/").pop() || "");
    fn = fn.replace(/ /g, "_").replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 180);
    return fn;
  } catch {
    return "";
  }
}

const PDF_RE = /https?:\/\/(?:www\.|new\.|old\.)?atme\.edu\.in\/wp-content\/uploads\/[^\s"'<>)\]]+\.pdf/gi;

// Bare/www/new atme.edu.in often 404s for /wp-content/uploads PDFs; the live
// file lives on old.atme.edu.in. When no rehosted copy exists in the map,
// rewrite the host to old.atme.edu.in so the embed at least loads.
function toOldHost(url: string): string {
  return url.replace(
    /^(https?:\/\/)(?:www\.|new\.)?atme\.edu\.in\//i,
    "$1old.atme.edu.in/",
  );
}

export function rewritePdfUrls(input: string): string {
  if (!input) return input;
  return input.replace(PDF_RE, (orig) => {
    const k = keyOf(orig);
    return resolveAssetUrl(PDF_MAP[k] || toOldHost(orig));
  });
}

export function pdfFromAtmeUrl(url: string): string {
  const k = keyOf(url);
  if (PDF_MAP[k]) return resolveAssetUrl(PDF_MAP[k]);
  if (/^https?:\/\/(?:www\.|new\.)?atme\.edu\.in\/wp-content\/uploads\//i.test(url)) {
    return resolveAssetUrl(toOldHost(url));
  }
  return resolveAssetUrl(url);
}
