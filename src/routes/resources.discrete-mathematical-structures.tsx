import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { BookOpen, GraduationCap, ListChecks, Lightbulb } from "lucide-react";

const URL = "https://atme.edu.in/resources/discrete-mathematical-structures";
const TITLE = "Discrete Mathematical Structures (DMS) Notes — VTU 2022 Scheme | ATME";
const DESC =
  "Complete VTU Discrete Mathematical Structures (DMS) study guide: module-wise notes, the pigeonhole principle, set theory, logic, combinatorics, graph theory and relations for the 2022 scheme.";

const DMS_ARTICLE_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Discrete Mathematical Structures (DMS) — VTU 2022 Scheme Notes",
  description: DESC,
  author: { "@type": "Organization", name: "ATME College of Engineering" },
  publisher: { "@type": "Organization", name: "ATME College of Engineering" },
  mainEntityOfPage: URL,
});

const DMS_FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Discrete Mathematical Structures (DMS) in VTU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discrete Mathematical Structures is a core VTU subject (course code BCS405A under the 2022 scheme) covering logic, set theory, relations, functions, combinatorics, recurrence relations and graph theory — the mathematical foundations of computer science.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pigeonhole principle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The pigeonhole principle states that if n+1 objects are placed into n boxes, then at least one box must contain two or more objects. Its generalised form: if N objects are placed into k boxes, at least one box contains ⌈N/k⌉ objects.",
      },
    },
    {
      "@type": "Question",
      name: "Which modules does the VTU 2022 DMS syllabus cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Module 1: Fundamentals of Logic. Module 2: Set Theory & Counting (including the pigeonhole principle). Module 3: Relations and Functions. Module 4: Recurrence Relations and Generating Functions. Module 5: Introduction to Graph Theory.",
      },
    },
  ],
});

export const Route = createFileRoute("/resources/discrete-mathematical-structures")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "dms notes, discrete mathematical structures vtu, discrete mathematical structures notes, vtu dms 2022 scheme, pigeonhole principle, BCS405A notes" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: DMSPage,
});

const MODULES = [
  {
    n: "Module 1",
    title: "Fundamentals of Logic",
    topics: [
      "Propositions and logical connectives",
      "Truth tables, tautologies and contradictions",
      "Logical equivalence and laws of logic",
      "Rules of inference and methods of proof",
      "Quantifiers — universal and existential",
    ],
  },
  {
    n: "Module 2",
    title: "Set Theory & Counting (with Pigeonhole Principle)",
    topics: [
      "Sets, subsets, power set, Venn diagrams",
      "Set operations and Cartesian product",
      "Rules of sum and product, permutations and combinations",
      "Binomial theorem and combinations with repetition",
      "The Pigeonhole Principle and its generalised form",
      "Principle of Inclusion and Exclusion",
    ],
  },
  {
    n: "Module 3",
    title: "Relations and Functions",
    topics: [
      "Cartesian products and relations",
      "Properties: reflexive, symmetric, transitive",
      "Equivalence relations and partitions",
      "Partial orders, Hasse diagrams, lattices",
      "Functions: one-to-one, onto, composition, inverse",
    ],
  },
  {
    n: "Module 4",
    title: "Recurrence Relations & Generating Functions",
    topics: [
      "The first-order linear recurrence relation",
      "Second-order linear homogeneous recurrence with constant coefficients",
      "Non-homogeneous recurrence relations",
      "Generating functions — definition and applications",
      "Solving recurrences using generating functions",
    ],
  },
  {
    n: "Module 5",
    title: "Introduction to Graph Theory",
    topics: [
      "Graphs, sub-graphs, complement, graph isomorphism",
      "Euler trails and circuits, Hamilton paths and cycles",
      "Planar graphs, Euler's formula",
      "Trees — properties, spanning trees, minimum spanning trees",
      "Graph colouring and chromatic polynomials",
    ],
  },
];

function DMSPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: DMS_ARTICLE_JSON_LD }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: DMS_FAQ_JSON_LD }}
      />
      <PageHero
        eyebrow="VTU 2022 Scheme · BCS405A"
        title="Discrete Mathematical Structures (DMS)"
        subtitle="A complete study guide for VTU students — module-wise notes, key concepts and worked examples."
        bgImage={SECTION_BANNER.resources}
      />

      <section className="container-page py-12">
        <article className="prose prose-slate max-w-none">
          <p className="lead text-lg text-muted-foreground">
            <strong>Discrete Mathematical Structures (DMS)</strong> is a foundational
            VTU course (course code <strong>BCS405A</strong>, 2022 scheme) for
            computer-science and engineering students. It develops the mathematical
            toolkit — logic, sets, relations, counting and graphs — that underpins
            algorithms, databases, cryptography and theoretical computer science.
            This page summarises the full syllabus and links to detailed
            branch-wise DMS notes hosted on the ATME resources portal.
          </p>
        </article>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { icon: GraduationCap, label: "Course code", value: "BCS405A" },
            { icon: BookOpen, label: "Scheme", value: "VTU 2022" },
            { icon: ListChecks, label: "Modules", value: "5" },
            { icon: Lightbulb, label: "Credits", value: "3" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
              <div className="text-lg font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">VTU 2022 Scheme Syllabus — Module-wise</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {MODULES.map((m) => (
            <div key={m.n} className="rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow">
              <div className="text-xs font-bold uppercase tracking-wide text-primary">{m.n}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{m.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                {m.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">The Pigeonhole Principle — Quick Reference</h2>
          <p className="mt-3 text-muted-foreground">
            One of the most elegant ideas in discrete mathematics and a frequent
            VTU exam topic.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-card border border-border p-4">
              <div className="text-sm font-semibold">Basic form</div>
              <p className="mt-1 text-sm text-muted-foreground">
                If <em>n + 1</em> pigeons are placed into <em>n</em> pigeonholes,
                at least one hole contains two or more pigeons.
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <div className="text-sm font-semibold">Generalised form</div>
              <p className="mt-1 text-sm text-muted-foreground">
                If <em>N</em> objects are placed into <em>k</em> boxes, some box
                contains at least <em>⌈N / k⌉</em> objects.
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4 md:col-span-2">
              <div className="text-sm font-semibold">Classic example</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Among any 13 people, at least two are born in the same month
                (13 people → 12 months → ⌈13/12⌉ = 2).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold">Looking for branch-wise DMS PDFs?</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Download semester-wise notes including DMS from the ATME Notes hub.
            </p>
          </div>
          <Link
            to="/resources/notes"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Browse Notes by Branch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
