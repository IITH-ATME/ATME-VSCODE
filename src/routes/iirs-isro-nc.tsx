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
  // body rows with a trailing empty cell. Rebuild it as a clean 6-col table.
  const headerRegex =
    /\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\n\|\s*---[\s\S]*?\|\s*\*\*Institution Certificate\*\*\s*\|\s*\*\*Coordinator Certificate\*\*\s*\|\s*\|\s*\n/;
  if (!headerRegex.test(md)) return md;
  let out = md.replace(
    headerRegex,
    "| Sl. No | Program Name | Students Registered | Students Certified | Institution Certificate | Coordinator Certificate |\n| --- | --- | --- | --- | --- | --- |\n",
  );
  // Strip trailing " |" empty cell from achievement body rows
  out = out.replace(
    /(\|\s*\d+\s*\|[^\n]*IIRS Outreach Program[^\n]*?\.(?:pdf|jpg)\)\s*\|)\s*\|\s*$/gim,
    "$1",
  );
  return out;
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
