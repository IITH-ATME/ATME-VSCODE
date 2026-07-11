import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Library, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resources/elibrary")({
  head: () => ({
    meta: [
      { title: "E-Library & Journals — ATME" },
      { name: "description", content: "Access IEEE, Springer, DELNET, NDL and curated open-access journals at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "E-Library & Journals — ATME" },
      { property: "og:description", content: "Curated subscriptions and open-access resources for ATME students and faculty." },
      { property: "og:url", content: "https://atme.edu.in/resources/elibrary" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/resources/elibrary" }],
  }),
  component: ElibPage,
});


const sources = [
  { name: "IEEE Xplore", desc: "Engineering and computer science research papers and standards.", url: "https://ieeexplore.ieee.org/" },
  { name: "Springer Link", desc: "Books, journals and reference works across disciplines.", url: "https://link.springer.com/" },
  { name: "DELNET", desc: "Developing Library Network — inter-library lending and union catalogue.", url: "https://delnet.in/" },
  { name: "National Digital Library", desc: "MHRD initiative providing free access to academic content.", url: "https://ndl.iitkgp.ac.in/" },
  { name: "DOAJ", desc: "Directory of Open Access Journals — peer-reviewed open research.", url: "https://doaj.org/" },
  { name: "Shodhganga", desc: "Indian Theses & Dissertations repository (INFLIBNET).", url: "https://shodhganga.inflibnet.ac.in/" },
  { name: "VTU Consortium", desc: "VTU e-resources accessible to affiliated colleges.", url: "https://vtu.ac.in/" },
  { name: "arXiv", desc: "Open-access preprints in physics, math, CS and more.", url: "https://arxiv.org/" },
];

function ElibPage() {
  return (
    <Layout>
      <PageHero eyebrow="Learning Hub" title="E-Library & Journals" subtitle="A curated set of subscriptions and open-access resources available to ATME students and faculty."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sources.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-soft transition-all">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><Library className="h-5 w-5" /></div>
            <h4 className="mt-4 font-display font-semibold">{s.name}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open <ExternalLink className="h-3.5 w-3.5" /></div>
          </a>
        ))}
      </section>
    </Layout>
  );
}
