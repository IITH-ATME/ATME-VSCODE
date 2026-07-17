// Resolves Lovable CDN paths so they work outside Lovable hosting too
// (e.g. when this project is exported via Dyad and run elsewhere).
//
// Lovable serves uploaded assets from a project-scoped path like
// `/__l5e/assets-v1/<asset-id>/<filename>`. That path only resolves when
// the app is served by Lovable's infrastructure. Anywhere else (local dev
// after a Dyad export, a third-party host, etc.) the request 404s.
//
// atme.edu.in does not proxy the /__l5e/ asset path either (every request
// under it 404s, verified against many unrelated assets) — so every such
// asset has been downloaded and rehosted under public/{pdfs,images,files}
// /uploads, with the mapping recorded in localAssets.json. That map is
// checked first; any /__l5e/ path missing from it (e.g. a newly-uploaded
// asset that hasn't been migrated yet) falls back to the Lovable CDN
// origin below so nothing 404s in the meantime.

import localAssets from "@/data/localAssets.json";

const LOCAL_ASSETS: Record<string, string> = localAssets as Record<string, string>;
const LOVABLE_CDN_ORIGIN = "https://ecc2b641-817e-4f14-aeea-8907ad2d13ff.lovableproject.com";

export function resolveAssetUrl(url: string | undefined | null): string {
  const value = url?.trim() ?? "";
  if (!value) return "";
  if (value.startsWith("/__l5e/")) return LOCAL_ASSETS[value] || `${LOVABLE_CDN_ORIGIN}${value}`;
  try {
    const parsed = new URL(value);
    if (parsed.pathname.startsWith("/__l5e/")) {
      return LOCAL_ASSETS[parsed.pathname] || `${LOVABLE_CDN_ORIGIN}${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
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
