// Resolves Lovable CDN paths so they work outside Lovable hosting too
// (e.g. when this project is exported via Dyad and run elsewhere).
//
// Lovable serves uploaded assets from a project-scoped path like
// `/__l5e/assets-v1/<asset-id>/<filename>`. That path only resolves when
// the app is served by Lovable's infrastructure. Anywhere else (local dev
// after a Dyad export, a third-party host, etc.) the request 404s.
//
// We prefix such paths with the project's published Lovable URL so the
// CDN keeps working regardless of where the app itself is hosted.
//
// IMPORTANT: this must be the project's own Lovable-hosted origin, not the
// custom domain — atme.edu.in does not currently proxy the /__l5e/ asset
// path (every request under it 404s, verified against many unrelated
// assets), while <project-id>.lovableproject.com serves them correctly.
// That mismatch was breaking every /__l5e/ image site-wide.

const LOVABLE_CDN_ORIGIN = "https://ecc2b641-817e-4f14-aeea-8907ad2d13ff.lovableproject.com";

export function resolveAssetUrl(url: string | undefined | null): string {
  const value = url?.trim() ?? "";
  if (!value) return "";
  if (value.startsWith("/__l5e/")) return `${LOVABLE_CDN_ORIGIN}${value}`;
  try {
    const parsed = new URL(value);
    if (parsed.pathname.startsWith("/__l5e/")) return `${LOVABLE_CDN_ORIGIN}${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    // Relative paths fall through to the existing checks below.
  }
  if (value.startsWith("https://atme.edu.in/wp-content/")) {
    return value.replace("https://atme.edu.in/wp-content/", "https://old.atme.edu.in/wp-content/");
  }
  if (value.startsWith("http://atme.edu.in/wp-content/")) {
    return value.replace("http://atme.edu.in/wp-content/", "https://old.atme.edu.in/wp-content/");
  }
  return value;
}
