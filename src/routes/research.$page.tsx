import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { scraped } from "@/data/scrapedPages";
import { ExternalLink } from "lucide-react";

const ROUTE_MAP: Record<string, { key: keyof typeof scraped; source: string }> = {
  "dean-message": { key: "dean-research", source: "https://new.atme.edu.in/atme-research/dean-research-message/" },
};

export const Route = createFileRoute("/research/$page")({
  component: ResearchPage,
  head: ({ params }) => {
    const m = ROUTE_MAP[params.page];
    const title = m ? scraped[m.key].title : "Research — ATME";
    return { meta: [{ title: `${title} — ATME` }, { name: "description", content: `${title} at ATME College of Engineering.` }] };
  },
});

function ResearchPage() {
  const { page } = useParams({ from: "/research/$page" });
  const m = ROUTE_MAP[page];
  if (!m) {
    return (
      <Layout>
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-display font-bold">Research — Coming soon</h1>
          <p className="text-muted-foreground mt-4">This research section is being built.</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">← Home</Link>
        </div>
      </Layout>
    );
  }
  const data = scraped[m.key];
  const paragraphs = data.text.split(/\n+/).filter(Boolean);
  return (
    <Layout>
      <div className="bg-primary text-white">
        <div className="container-page py-12">
          <div className="text-xs uppercase tracking-wider opacity-80 mb-2">Research</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold">{data.title}</h1>
        </div>
      </div>
      <div className="container-page py-12 max-w-4xl content-flow">
        <div className="content-card content-prose">
        {paragraphs.map((p, i) => <p key={i} className="text-foreground/85 leading-relaxed mb-4">{p}</p>)}
        <div className="mt-8 p-4 rounded-lg border border-border bg-secondary/40 text-sm text-muted-foreground">
          Summarized from ATME's website.{" "}
          <a href={m.source} target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
            View original <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        </div>
      </div>
    </Layout>
  );
}
