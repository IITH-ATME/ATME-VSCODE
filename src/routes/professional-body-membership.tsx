import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import { SECTION_BANNER } from "@/lib/sectionBanners";

type S = Record<string, { title?: string; markdown?: string }>;

export const Route = createFileRoute("/professional-body-membership")({
  loader: async () => {
    const { default: scrapedAll } = await import("@/data/scrapedAll.json");
    const SA = scrapedAll as S;
    const page = SA["professional-body-membership"] || SA["ieee-home-2"];
    return { markdown: page?.markdown || "" };
  },
  component: PBMPage,
  head: () => ({
    meta: [
      { title: "Professional Body Membership — ATME" },
      { name: "description", content: "Institutional professional society chapters and faculty/student memberships at ATME College of Engineering." },
    ],
  }),
});

function PBMPage() {
  const { markdown: md } = Route.useLoaderData();
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.about} eyebrow="Quick Links" title="Professional Body Membership" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
