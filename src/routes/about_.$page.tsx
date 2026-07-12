import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { scraped } from "@/data/scrapedPages";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { SECTION_BANNER } from "@/lib/sectionBanners";
import imgAssets from "@/data/imgAssets.json";
import imageAssets from "@/data/imageAssets.json";

// Pages that should render one or more inline PDF embeds after the article body.
const INLINE_PDFS: Record<string, { title: string; url: string }[]> = {
  "statutory-declaration": [
    {
      title: "Statutory Declaration Under Section 4(1)(b) of the RTI Act, 2005",
      url: "https://new.atme.edu.in/wp-content/uploads/2026/04/Statutory-Declaration-Under-Section-41b-of-the-RTI-Act-2005.pdf",
    },
    {
      title: "Undertaking",
      url: "https://new.atme.edu.in/wp-content/uploads/2026/04/Undertaking.pdf",
    },
  ],
};


const ROUTE_MAP: Record<string, { key: keyof typeof scraped; section: string }> = {
  "vision-mission": { key: "vision-mission", section: "About" },
  "governing-council": { key: "governing-council", section: "About" },
  "chairmans-message": { key: "chairmans-message", section: "About" },
  
  "about-principal": { key: "about-principal", section: "About" },
  "principal-message": { key: "principal-message", section: "About" },
  "academic-council": { key: "academic-council", section: "About" },
  "statutory-declaration": { key: "statutory-declaration", section: "About" },
  "dean-student-affairs": { key: "dean-student-affairs", section: "About" },
};

// Portrait images for message / about-person pages — rendered adjacent to text.
const PORTRAIT: Record<string, { src: string; name: string; role: string }> = {
  "chairmans-message": {
    src: (imgAssets as Record<string, string>)["chairmans-message-01.jpg"],
    name: "Sri. L Arun Kumar",
    role: "Hon'ble Chairman, ATME College of Engineering",
  },
  "principal-message": {
    src: (imgAssets as Record<string, string>)["Principal-message-01-1.webp"],
    name: "Dr. Basavaraj L",
    role: "Principal, ATME College of Engineering",
  },
  "about-principal": {
    src: (imageAssets as Record<string, string>)["L-BASAVARAJ.jpg"],
    name: "Dr. L. Basavaraj",
    role: "Principal, ATME College of Engineering",
  },
};

export const Route = createFileRoute("/about_/$page")({
  component: AboutPage,
  head: ({ params }) => {
    const m = ROUTE_MAP[params.page];
    const title = m ? scraped[m.key].title : "About — ATME";
    return { meta: [{ title: `${title} — ATME College of Engineering` }, { name: "description", content: `${title} at ATME College of Engineering, Mysuru.` }] };
  },
});

function AboutPage() {
  const { page } = useParams({ from: "/about_/$page" });
  const m = ROUTE_MAP[page];
  if (!m) {
    return (
      <Layout>
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-display font-bold">Page not found</h1>
          <Link to="/about" className="text-primary hover:underline mt-4 inline-block">← Back to About</Link>
        </div>
      </Layout>
    );
  }
  const data = scraped[m.key];
  const paragraphs = data.text.split(/\n+/).filter(Boolean);
  const portrait = PORTRAIT[page];
  const inlinePdfs = INLINE_PDFS[page] ?? [];

  return (
    <Layout>
      <PageHero bgImage={SECTION_BANNER.about} eyebrow={m.section} title={data.title} />
      <div className="container-page py-12 grid lg:grid-cols-[1fr_280px] gap-10">
        <article className="content-card content-prose prose max-w-none">
          {portrait ? (
            <>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-[#129199] mt-0 mb-4 pb-2 border-b-2 border-[#129199]/30">
                {data.title}
              </h2>
              {paragraphs.slice(0, 1).map((p, i) => (
                <p key={`top-${i}`} className="text-foreground/85 leading-relaxed text-justify hyphens-auto mb-4">{p}</p>
              ))}
              <figure className="my-8 mx-auto block max-w-[320px] sm:max-w-[380px] text-center">
                <img
                  src={portrait.src}
                  alt={portrait.name}
                  className="w-full h-auto max-h-[420px] rounded-xl border border-[#f5c518] shadow-md bg-white object-contain mx-auto block"
                  loading="eager"
                />
                <figcaption className="mt-3">
                  <div className="font-semibold text-[#129199]">{portrait.name}</div>
                  <div className="text-xs text-foreground/70">{portrait.role}</div>
                </figcaption>
              </figure>
              {paragraphs.slice(1).map((p, i) => (
                <p key={`btm-${i}`} className="text-foreground/85 leading-relaxed text-justify hyphens-auto mb-4">{p}</p>
              ))}
            </>
          ) : (
            paragraphs.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed text-justify hyphens-auto mb-4">{p}</p>
            ))
          )}

        </article>

        <aside className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-2 mb-3">More in About</h4>
          {Object.entries(ROUTE_MAP).map(([slug, mm]) => (
            <Link key={slug} to="/about/$page" params={{ page: slug }} className={`block text-sm py-2 px-3 rounded transition-colors ${slug === page ? "bg-primary text-white" : "text-foreground/80 hover:bg-secondary hover:text-primary"}`}>
              {scraped[mm.key].title}
            </Link>
          ))}
        </aside>
      </div>

      {inlinePdfs.length > 0 && (
        <div className="container-page pb-12 space-y-8">
          {inlinePdfs.map((doc) => (
            <section key={doc.url}>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-[#129199] mb-3">
                {doc.title}
              </h3>
              <PdfEmbed url={doc.url} title={doc.title} />
            </section>
          ))}
        </div>
      )}
    </Layout>
  );
}

