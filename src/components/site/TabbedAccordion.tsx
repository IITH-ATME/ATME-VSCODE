import { useMemo, useRef, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";


export type TabbedAccordionItem = {
  label: string;
  content: ReactNode;
};

type Props = {
  items: TabbedAccordionItem[];
  /** Optional explicit categorization for an item; if omitted we auto-derive. */
  categorize?: (label: string) => string | null;
  className?: string;
};

/**
 * Renders an accordion list with quick filter tabs above it. Tabs are
 * auto-derived from the item labels (year, decade or first letter) so any
 * accordion section across the site gets the same tab-filter layout.
 */
export function TabbedAccordion({ items, categorize, className }: Props) {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const enriched = useMemo(
    () =>
      items.map((it) => ({
        ...it,
        cat: (categorize?.(it.label) ?? deriveCategory(it.label)) || "Other",
      })),
    [items, categorize],
  );

  const tabs = useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    enriched.forEach((it) => {
      if (!seen.has(it.cat)) {
        seen.add(it.cat);
        ordered.push(it.cat);
      }
    });
    return ordered;
  }, [enriched]);

  const showTabs = false;
  const [active, setActive] = useState<string>("All");

  const visible = active === "All" ? enriched : enriched.filter((it) => it.cat === active);
  const allTabs = ["All", ...tabs];

  return (
    <div className={cn("my-6", className)}>
      {showTabs && (
        <div className="mb-3 flex flex-wrap gap-2">
          {allTabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors",
                  isActive
                    ? "bg-[#129199] text-white border-[#129199] shadow-sm"
                    : "bg-white text-[#129199] border-[#f5c518] hover:bg-[#129199]/5",
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      )}

      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        onValueChange={(val) => {
          if (!val) return;
          requestAnimationFrame(() => {
            setTimeout(() => {
              const el = itemRefs.current[val];
              if (el && typeof el.scrollIntoView === "function") {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 80);
          });
        }}
      >
        {visible.map((it) => {
          const i = enriched.indexOf(it);
          const value = `tab-${i}`;
          return (
            <AccordionItem
              key={i}
              value={value}
              ref={(el) => { itemRefs.current[value] = el; }}
              className="rounded-xl border-2 border-[#f5c518] bg-white overflow-hidden shadow-sm scroll-mt-28"
            >
              <AccordionTrigger className="px-5 sm:px-6 py-5 sm:py-6 text-left font-display font-semibold text-base sm:text-lg bg-[#129199] text-white hover:bg-[#0f7a80] hover:no-underline [&_svg]:text-white [&_svg]:h-5 [&_svg]:w-5 data-[state=open]:bg-[#0d3438] min-h-[64px]">
                {it.label.replace(/\\([.\-_*()[\]])/g, "$1")}
              </AccordionTrigger>

              <AccordionContent className="px-5 sm:px-6 py-6 bg-[#129199]/5">
                {it.content ?? (
                  <p className="text-sm text-foreground/60 italic m-0">
                    Coming Soon
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}

        {visible.length === 0 && (
          <div className="px-4 py-6 text-sm text-foreground/60 italic">
            No items in this category.
          </div>
        )}
      </Accordion>
    </div>
  );
}

function deriveCategory(label: string): string | null {
  // Year-range like "2024-25", "AY 2024-2025", "2018 - 2019"
  const yr = label.match(/(20\d{2})\s*[-–to]+\s*(\d{2,4})/i);
  if (yr) {
    const y = parseInt(yr[1], 10);
    if (y >= 2023) return "Recent";
    if (y >= 2020) return "2020–2022";
    if (y >= 2015) return "2015–2019";
    return "Earlier";
  }
  // Single year
  const single = label.match(/\b(20\d{2})\b/);
  if (single) {
    const y = parseInt(single[1], 10);
    if (y >= 2023) return "Recent";
    if (y >= 2020) return "2020–2022";
    return "Earlier";
  }
  // First letter grouping for non-date labels
  const m = label.trim().match(/[A-Za-z]/);
  if (m) {
    const c = m[0].toUpperCase();
    if (/[A-G]/.test(c)) return "A–G";
    if (/[H-N]/.test(c)) return "H–N";
    if (/[O-T]/.test(c)) return "O–T";
    return "U–Z";
  }
  return null;
}
