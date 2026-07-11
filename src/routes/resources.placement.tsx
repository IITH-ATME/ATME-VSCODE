import { SECTION_BANNER } from "@/lib/sectionBanners";
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Target, ExternalLink, Brain, MessageSquare, FileText, Code2 } from "lucide-react";

export const Route = createFileRoute("/resources/placement")({
  head: () => ({
    meta: [
      { title: "Placement Prep — ATME" },
      { name: "description", content: "Aptitude, coding practice, mock interviews and resume building resources for ATME students." },
      { property: "og:title", content: "Placement Prep — ATME" },
      { property: "og:description", content: "Aptitude, coding, mock interviews and resume kits for ATME students." },
      { property: "og:url", content: "https://atme.edu.in/resources/placement" },
    ],
    links: [{ rel: "canonical", href: "https://atme.edu.in/resources/placement" }],
  }),
  component: PlacementPrep,
});


const tracks = [
  { icon: Brain, t: "Aptitude & Reasoning", d: "Quantitative aptitude, logical reasoning and verbal sections.", links: [
    { name: "IndiaBix", url: "https://www.indiabix.com/" },
    { name: "PrepInsta", url: "https://prepinsta.com/" },
    { name: "GeeksforGeeks Aptitude", url: "https://www.geeksforgeeks.org/aptitude-questions-and-answers/" },
  ]},
  { icon: Code2, t: "Coding Practice", d: "Data structures, algorithms and competitive programming.", links: [
    { name: "LeetCode", url: "https://leetcode.com/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/" },
    { name: "CodeChef", url: "https://www.codechef.com/" },
    { name: "Codeforces", url: "https://codeforces.com/" },
  ]},
  { icon: MessageSquare, t: "Mock Interviews", d: "HR, technical and behavioural interview practice.", links: [
    { name: "Pramp", url: "https://www.pramp.com/" },
    { name: "InterviewBit", url: "https://www.interviewbit.com/" },
    { name: "Glassdoor Interviews", url: "https://www.glassdoor.co.in/Interview/index.htm" },
  ]},
  { icon: FileText, t: "Resume & Profile", d: "Templates, writing guides and LinkedIn optimisation.", links: [
    { name: "Overleaf Resume Templates", url: "https://www.overleaf.com/latex/templates/tagged/cv" },
    { name: "Resume.io", url: "https://resume.io/" },
    { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
  ]},
];

function PlacementPrep() {
  return (
    <Layout>
      <PageHero eyebrow="Learning Hub" title="Placement Preparation" subtitle="A focused set of resources to help you ace aptitude, coding rounds and interviews."  bgImage={SECTION_BANNER.resources} />
      <section className="container-page py-16 grid md:grid-cols-2 gap-6">
        {tracks.map(({ icon: Icon, t, d, links }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg gradient-hero text-primary-foreground"><Icon className="h-5 w-5" /></div>
            <h4 className="mt-4 font-display text-lg font-semibold">{t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <a href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark">
                    {l.name} <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}
