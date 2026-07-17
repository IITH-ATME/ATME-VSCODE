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
// asset has been downloaded and rehosted, with the mapping recorded in
// localAssets.json. That map is checked first; any /__l5e/ path missing
// from it (e.g. a newly-uploaded asset that hasn't been migrated yet)
// falls back to the Lovable CDN origin below so nothing 404s in the
// meantime.
//
// The rehosted assets themselves live in Cloudflare R2 (bucket
// "atme-assets"), not under Hostinger's public_html — Hostinger's
// Node.js deploy pipeline resyncs public_html on every push (auto-deploy
// can't be disabled for Node apps there) and wipes anything not tracked
// in git, so a git-ignored public_html upload doesn't survive. R2 is
// fully decoupled from that deploy cycle. localAssets.json still stores
// paths like "/images/uploads/<file>"; REHOSTED_ASSETS_ORIGIN is
// prepended here rather than baked into the JSON so the storage host
// can change in one place if ever needed.

import localAssets from "@/data/localAssets.json";

const LOCAL_ASSETS: Record<string, string> = localAssets as Record<string, string>;
const LOVABLE_CDN_ORIGIN = "https://ecc2b641-817e-4f14-aeea-8907ad2d13ff.lovableproject.com";
const REHOSTED_ASSETS_ORIGIN = "https://pub-1025be799f8d4e0fbf3e476b293c054f.r2.dev";

function toRehostedUrl(localPath: string): string {
  return `${REHOSTED_ASSETS_ORIGIN}${localPath}`;
}

export function resolveAssetUrl(url: string | undefined | null): string {
  const value = url?.trim() ?? "";
  if (!value) return "";
  if (value.startsWith("/__l5e/")) {
    const local = LOCAL_ASSETS[value];
    return local ? toRehostedUrl(local) : `${LOVABLE_CDN_ORIGIN}${value}`;
  }
  try {
    const parsed = new URL(value);
    if (parsed.pathname.startsWith("/__l5e/")) {
      const local = LOCAL_ASSETS[parsed.pathname];
      return local ? toRehostedUrl(local) : `${LOVABLE_CDN_ORIGIN}${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    // Relative paths fall through to the existing checks below.
  }
  if (value.startsWith("/images/uploads/") || value.startsWith("/pdfs/uploads/") || value.startsWith("/files/uploads/")) {
    return toRehostedUrl(value);
  }
  if (value.startsWith("https://atme.edu.in/wp-content/")) {
    return value.replace("https://atme.edu.in/wp-content/", "https://old.atme.edu.in/wp-content/");
  }
  if (value.startsWith("http://atme.edu.in/wp-content/")) {
    return value.replace("http://atme.edu.in/wp-content/", "https://old.atme.edu.in/wp-content/");
  }
  return value;
}
