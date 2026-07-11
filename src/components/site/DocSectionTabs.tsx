import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PdfEmbed } from "./PdfEmbed";
import { PdfThumbCard } from "./PdfThumbCard";
import { FileText, Layers, ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export type DocSection = {
  title: string;
  description?: string;
  pdfs: { url: string; label: string }[];
};

/**
 * Renders a styled accordion (one panel per section) with PDF thumbnails
 * segregated under each. Despite the name (kept for backward compat), this is
 * an accordion — horizontal tabs have been retired across the site.
 */
export function DocSectionTabs({
  sections,
  label = "Document sections",
}: {
  sections: DocSection[];
  label?: string;
}) {
  const allIds = sections.map((_, i) => `sec-${i}`);
  const [value, setValue] = useState<string[]>([]);
  const allOpen = value.length === allIds.length && allIds.length > 0;

  return (
    <div className="rounded-2xl border border-[#f5c518] bg-white shadow-sm overflow-hidden" aria-label={label}>
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#f1f8f9] border-b border-[#f5c518]/40">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0d6f76]">
          {sections.length} {sections.length === 1 ? "section" : "sections"}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setValue(allIds)}
            disabled={allOpen}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#129199]/30 bg-white px-3 py-1.5 text-xs font-semibold text-[#129199] hover:bg-[#129199] hover:text-white hover:border-[#129199] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronsUpDown className="h-3.5 w-3.5" />
            Expand all
          </button>
          <button
            type="button"
            onClick={() => setValue([])}
            disabled={value.length === 0}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#129199]/30 bg-white px-3 py-1.5 text-xs font-semibold text-[#129199] hover:bg-[#129199] hover:text-white hover:border-[#129199] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronsDownUp className="h-3.5 w-3.5" />
            Collapse all
          </button>
        </div>
      </div>
      <Accordion
        type="multiple"
        value={value}
        onValueChange={(v) => setValue(v as string[])}
        className="divide-y divide-[#f5c518]/40"
      >
        {sections.map((sec, i) => {
          const id = `sec-${i}`;
          const isOpen = value.includes(id);

          return (
            <AccordionItem key={id} value={id} className="border-0">
              <AccordionTrigger
                className={[
                  "w-full px-4 sm:px-6 py-4 sm:py-5 gap-4 min-h-[72px] items-center hover:no-underline transition-colors",
                  "[&>svg]:h-5 [&>svg]:w-5 [&>svg]:mt-0 [&>svg]:self-center",
                  isOpen
                    ? "bg-[#129199] text-white [&>svg]:text-white"
                    : "bg-gradient-to-r from-white to-[#f1f8f9] text-foreground hover:bg-[#129199]/10 [&>svg]:text-[#129199]",
                ].join(" ")}
              >
                <span className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 text-left">
                  <span
                    className={[
                      "shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold font-display",
                      isOpen ? "bg-white text-[#129199]" : "bg-[#129199] text-white",
                    ].join(" ")}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display font-semibold text-[15px] sm:text-base leading-snug">
                      {sec.title}
                    </span>
                    <span
                      className={[
                        "mt-1 inline-flex items-center gap-1.5 text-xs leading-none",
                        isOpen ? "text-white/90" : "text-foreground/60",
                      ].join(" ")}
                    >
                      <Layers className="h-3 w-3" />
                      {sec.pdfs.length} {sec.pdfs.length === 1 ? "document" : "documents"}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-white px-4 sm:px-6 pt-5 pb-6">
                {sec.description && (
                  <p className="text-sm text-foreground/75 mb-4 flex items-start gap-2 leading-relaxed">
                    <FileText className="h-4 w-4 text-[#129199] mt-0.5 shrink-0" />
                    <span>{sec.description}</span>
                  </p>
                )}
                {sec.pdfs.length >= 2 ? (
                  <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
                    {sec.pdfs.map((p) => (
                      <PdfThumbCard key={p.url} url={p.url} title={p.label} />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {sec.pdfs.map((p) => (
                      <PdfEmbed key={p.url} url={p.url} title={p.label} />
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

