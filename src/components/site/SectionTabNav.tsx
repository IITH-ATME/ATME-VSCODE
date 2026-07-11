import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export type SectionTabItem = {
  key: string;
  label: string;
  /** Path under `/p/` — e.g. "sports/about-the-department" */
  splat: string;
  icon: LucideIcon;
};

/**
 * Horizontal teal tab nav that visually matches DeptSubNav, but every link
 * routes through `/p/$` so the destination is rendered as a sub-page of the
 * same hub (Sports / Library / etc.).
 */
export function SectionTabNav({
  items,
  activeKey,
  ariaLabel = "Section pages",
}: {
  items: SectionTabItem[];
  activeKey?: string;
  ariaLabel?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!activeKey) return;
    const tab = activeRef.current;
    const scroller = scrollerRef.current;
    if (tab && scroller) {
      const sLeft = scroller.scrollLeft;
      const sWidth = scroller.clientWidth;
      const tLeft = tab.offsetLeft;
      const tWidth = tab.offsetWidth;
      const target = tLeft - sWidth / 2 + tWidth / 2;
      const clamped = Math.max(0, Math.min(target, scroller.scrollWidth - sWidth));
      if (Math.abs(clamped - sLeft) > 4) {
        scroller.scrollTo({ left: clamped, behavior: "smooth" });
      }
    }
  }, [activeKey]);

  if (items.length === 0) return null;

  return (
    <nav ref={navRef} aria-label={ariaLabel} className="w-full bg-background relative scroll-mt-20">
      <div ref={scrollerRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
        <ul className="relative flex flex-nowrap items-end gap-1.5 px-3 sm:px-6 pt-3 min-w-max">
          {items.map(({ key, label, splat, icon: Icon }) => {
            const active = key === activeKey;
            const cls =
              "group relative inline-flex items-center gap-2 rounded-t-xl px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 " +
              (active
                ? "bg-[#129199] text-white shadow-[0_-2px_8px_-2px_rgba(18,145,153,0.45)] -mb-[2px] pb-3"
                : "bg-white text-foreground border border-b-0 border-[#129199]/15 hover:bg-[#129199]/10 hover:text-[#0d3438]");
            return (
              <li key={key} className="shrink-0">
                <Link
                  ref={active ? (activeRef as never) : undefined}
                  to="/p/$"
                  params={{ _splat: splat }}
                  aria-current={active ? "page" : undefined}
                  className={cls}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="h-[3px] w-full bg-[#129199]" />
      </div>
    </nav>
  );
}
