import { Layout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ReactNode } from "react";

export function InfoPage({
  eyebrow,
  title,
  subtitle,
  intro,
  sections = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  intro?: string;
  sections?: { heading: string; body: ReactNode }[];
  children?: ReactNode;
}) {
  return (
    <Layout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="container-page py-14 max-w-4xl content-flow">
        {intro && (
          <Reveal>
            <p className="text-foreground/85 text-lg leading-relaxed">{intro}</p>
          </Reveal>
        )}
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 80}>
            <div className="mt-10 content-flow">
              <h2 className="text-2xl font-bold font-display tracking-tight text-[#129199]">{s.heading}</h2>
              <div className="mt-3 text-foreground/85 leading-relaxed">{s.body}</div>
            </div>
          </Reveal>
        ))}
        {children}
      </section>
    </Layout>
  );
}
