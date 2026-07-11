import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/admin/rescrape")({
  head: () => ({
    meta: [
      { title: "Admin · Rescrape Faculty" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: RescrapePage,
});

function RescrapePage() {
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const append = (line: string) => setLog((l) => [...l, line]);

  async function runRescrape() {
    if (!token.trim()) {
      append("⚠️ Enter the admin token first.");
      return;
    }
    setBusy(true);
    setLog([]);
    append("🔥 Starting bulk re-scrape (this may take 1–3 minutes)...");
    try {
      const res = await fetch(`/api/admin/rescrape-faculty`, {
        method: "POST",
        headers: { "x-admin-token": token.trim() },
      });
      if (!res.ok) {
        const text = await res.text();
        append(`❌ Server returned ${res.status}: ${text}`);
        return;
      }
      const ok = res.headers.get("X-Scraped-Count");
      const failed = res.headers.get("X-Failed-Count");
      append(`✅ Scraped: ${ok ?? "?"} profiles. Failed: ${failed ?? "0"}.`);
      // Trigger download of the regenerated TS file.
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "facultyPages.ts";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      append("⬇️  Downloaded facultyPages.ts — commit it to src/data/ to publish.");

      const failuresB64 = res.headers.get("X-Failures");
      if (failuresB64) {
        try {
          const failures = JSON.parse(atob(failuresB64)) as Array<{ id: string; error: string }>;
          for (const f of failures) append(`   ⚠️ ${f.id}: ${f.error}`);
        } catch { /* ignore */ }
      }
    } catch (e) {
      append(`❌ ${(e as Error).message}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container max-w-3xl py-10 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Bulk Re-scrape Faculty Profiles</h1>
        <p className="text-muted-foreground mt-2">
          Re-fetches every teaching faculty page from atme.edu.in via Firecrawl, cleans the markdown,
          and produces a fresh <code className="px-1 py-0.5 rounded bg-muted">src/data/facultyPages.ts</code>.
          The runtime cannot write to the repo, so the regenerated file is downloaded to your browser —
          commit it to apply changes site-wide.
        </p>
      </header>

      <Card className="p-5 space-y-4">
        <div className="space-y-2">
          <label htmlFor="token" className="text-sm font-medium">Admin token</label>
          <Input
            id="token"
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="RESCRAPE_ADMIN_TOKEN"
            autoComplete="off"
          />
          <p className="text-xs text-muted-foreground">
            Set the secret <code>RESCRAPE_ADMIN_TOKEN</code> in project secrets, then enter the same value here.
          </p>
        </div>
        <Button onClick={runRescrape} disabled={busy} className="w-full">
          {busy ? "Re-scraping..." : "Run bulk re-scrape"}
        </Button>
      </Card>

      <Card className="p-5">
        <h2 className="text-sm font-semibold mb-2">Alternative: CLI</h2>
        <p className="text-sm text-muted-foreground mb-3">
          From a local checkout you can run the same pipeline and have it write
          <code className="mx-1 px-1 py-0.5 rounded bg-muted">src/data/facultyPages.ts</code> directly:
        </p>
        <pre className="text-xs bg-muted p-3 rounded overflow-auto">bun run rescrape:faculty</pre>
      </Card>

      {log.length > 0 && (
        <Card className="p-5">
          <h2 className="text-sm font-semibold mb-2">Activity</h2>
          <pre className="text-xs whitespace-pre-wrap leading-relaxed">{log.join("\n")}</pre>
        </Card>
      )}
    </div>
  );
}
