import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import scrapedAll from "@/data/scrapedAll.json";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;
const SA = scrapedAll as S;

export const Route = createFileRoute("/iirs-isro-nc")({
  component: IIRSPage,
  head: () => ({
    meta: [
      { title: "IIRS-ISRO Network Centre — ATME" },
      { name: "description", content: "IIRS-ISRO Network Centre at ATME — online courses on Remote Sensing, GIS and related areas offered by IIRS Dehradun." },
    ],
  }),
});

function fixAchievementsTable(md: string): string {
  // The scraped Achievements table has an empty header row, a 7-col separator,
  // then a 5-cell bold row + a 3-cell bold row (continuation), then 7-cell
  // body rows with a trailing empty cell. Rebuild it as a clean 6-col table
  // using the exact column labels from the source (not a paraphrase).
  //
  // IMPORTANT: this must only touch the "Achievements:" section. An earlier
  // version of this regex had no start/end anchor, so its lazy `[\s\S]*?`
  // matched from the *first* empty-header row it found — which is actually
  // the unrelated, well-formed "Programs Coordinated:" table above this one
  // — all the way down to "Institution Certificate", swallowing that whole
  // table's real data rows and replacing them with this fabricated header.
  const startMarker = "#### [Achievements:](/p/iirs-isro-nc)";
  const start = md.indexOf(startMarker);
  if (start === -1) return md;
  const restStart = start + startMarker.length;
  const nextHeading = md.indexOf("\n#### ", restStart);
  const sectionEnd = nextHeading === -1 ? md.length : nextHeading;
  const section = md.slice(restStart, sectionEnd);

  const headerRegex =
    /\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\n\|\s*---(?:\s*\|\s*---)*\s*\|?\s*\n\|\s*\*\*Sl\.\s*no\*\*\s*\|\s*\*\*Program Name\*\*\s*\|\s*\*\*No\. of students registered to the course\*\*\s*\|\s*\*\*No\. of students successfully received the certificate\*\*\s*\|\s*\*\*Certificates\*\*\s*\|\s*\n\|\s*\*\*Institution Certificate\*\*\s*\|\s*\*\*Coordinator Certificate\*\*\s*\|\s*\|\s*\n/;
  if (!headerRegex.test(section)) return md;
  let newSection = section.replace(
    headerRegex,
    "| Sl. no | Program Name | No. of students registered to the course | No. of students successfully received the certificate | Institution Certificate | Coordinator Certificate |\n| --- | --- | --- | --- | --- | --- |\n",
  );
  // Strip the redundant trailing empty 7th cell from each data row.
  newSection = newSection.replace(
    /(\|\s*\d+\s*\|[^\n]*IIRS Outreach Program[^\n]*?\.(?:pdf|jpg)\)\s*\|)\s*\|\s*$/gim,
    "$1",
  );
  return md.slice(0, restStart) + newSection + md.slice(sectionEnd);
}

function IIRSPage() {
  const page = SA["iirs-isro-nc"];
  const md = fixAchievementsTable(page?.markdown || "");
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.research} eyebrow="Research" title="IIRS-ISRO Network Centre" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
