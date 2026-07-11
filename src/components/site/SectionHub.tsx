import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import type { NavSection } from "@/lib/navStructure";

export function SectionTileGrid({ section }: { section: NavSection }) {
  return (
    <div className="space-y-12">
      {section.columns.map((col) => (
        <div key={col.heading}>
          <div className="flex items-end justify-between gap-4 border-b border-border pb-3 mb-6">
            <h2 className="text-2xl font-bold text-foreground">{col.heading}</h2>
            <div className="text-sm text-muted-foreground">{col.links.length} pages</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {col.links.map((l) => {
              const inner = (
                <div className="group h-full rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                      {l.label}
                    </h4>
                    {l.href ? (
                      <FileText className="h-4 w-4 text-primary/60 shrink-0 mt-1" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-primary/60 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                  {l.desc && (
                    <p className="mt-2 text-sm text-muted-foreground leading-snug">{l.desc}</p>
                  )}
                </div>
              );
              if (l.href) {
                return (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                );
              }
              if (l.slug) {
                return (
                  <Link key={l.label} to="/p/$" params={{ _splat: l.slug }}>
                    {inner}
                  </Link>
                );
              }
              if (l.to) {
                return (
                  <Link key={l.label} to={l.to as string} params={l.params as never}>
                    {inner}
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
