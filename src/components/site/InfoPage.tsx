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
  afterChildren,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  intro?: string;
  sections?: { heading: string; body: ReactNode }[];
  children?: ReactNode;
  // Rendered at full page width (container-page) below the normal
  // max-w-4xl content column — for content like embeds that need much
  // more room than the prose-width sections above (e.g. campus-tour's
  // Street View widget, whose own navigation controls get cramped
  // inside the narrow column).
  afterChildren?: ReactNode;
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
      {afterChildren && <section className="container-page pb-14">{afterChildren}</section>}
    </Layout>
  );
}
