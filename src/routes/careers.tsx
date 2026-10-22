import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ScrapedBody } from "@/components/site/ScrapedBody";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import { seo } from "@/lib/seo";

type S = Record<string, { title?: string; markdown?: string }>;

export const Route = createFileRoute("/careers")({
  loader: async () => {
    const { default: scrapedAll } = await import("@/data/scrapedAll.json");
    const page = (scrapedAll as S)["careers"];
    return { markdown: page?.markdown || "" };
  },
  component: CareersPage,
  head: () =>
    seo({
      title: "Careers — ATME",
      path: "/careers",
      description: "Employment notifications and career opportunities at ATME College of Engineering, Mysuru.",
    }),
});

function CareersPage() {
  const { markdown: md } = Route.useLoaderData();
  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.careers} eyebrow="Quick Links" title="Careers @ ATME" />
      <div className="container-page py-12 max-w-5xl content-flow">
        <ScrapedBody markdown={md} />
      </div>
    </Layout>
  );
}
