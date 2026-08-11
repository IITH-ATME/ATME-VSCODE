import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { FileText, Download, ExternalLink, LayoutGrid, Sparkles } from "lucide-react";
import { circulars, pdf } from "@/data/pdfs";
import { CIRCULAR_CATEGORIES, CIRCULAR_CATEGORY_ICONS, type CircularCategory } from "@/data/circularCategories";

export const Route = createFileRoute("/circulars")({
  head: () => ({
    meta: [
      { title: "Circulars & Notifications — ATME College of Engineering" },
      { name: "description", content: "Official circulars, notifications and approvals from ATME College of Engineering, Mysuru." },
    ],
  }),
  component: CircularsPage,
});

function ImportantBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-[0_2px_8px_-1px_rgba(220,38,38,0.6)] animate-pulse"
      style={{ background: "linear-gradient(90deg, #dc2626 0%, #f97316 100%)" }}
    >
      <Sparkles className="h-3 w-3" /> Important
    </span>
  );
}

function Row({ title, date, file, important }: { title: string; date?: string; file: string; important?: boolean }) {
  const url = pdf(file);
  return (
    <li
      className={
        "flex flex-col sm:flex-row sm:items-center gap-3 p-5 transition-colors " +
        (important
          ? "bg-gradient-to-r from-amber-50 via-orange-50 to-transparent ring-1 ring-inset ring-orange-300/70 hover:from-amber-100"
          : "hover:bg-secondary/40")
      }
    >
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div
          className={
            "grid h-10 w-10 place-items-center rounded-lg shrink-0 " +
            (important ? "bg-orange-500/15 text-orange-600" : "bg-primary/10 text-primary")
          }
        >
          <FileText className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-semibold text-foreground leading-snug break-words">{title}</div>
            {important && <ImportantBadge />}
          </div>
          {date && <div className="text-xs text-muted-foreground mt-0.5">{date}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0 pl-14 sm:pl-0">
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:opacity-90">
          <Download className="h-3.5 w-3.5" /> Download
        </a>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary">
          <ExternalLink className="h-3.5 w-3.5" /> View
        </a>
      </div>
    </li>
  );
}

const ALL_KEY = "All";

// Dates are stored as "DD/MM/YYYY"; entries without a real date ("—") sort last.
function parseDMY(d?: string): number {
  if (!d || d === "—") return -Infinity;
  const [dd, mm, yyyy] = d.split("/").map(Number);
  if (!dd || !mm || !yyyy) return -Infinity;
  return new Date(yyyy, mm - 1, dd).getTime();
}

function CategoryTab({
  label,
  count,
  active,
  Icon,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  Icon: typeof LayoutGrid;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 border",
        active
          ? "bg-[#129199] text-white border-[#129199] shadow-[0_4px_12px_-4px_rgba(18,145,153,0.55)]"
          : "bg-white text-foreground border-[#129199]/20 hover:border-[#129199]/50 hover:bg-[#129199]/5",
      ].join(" ")}
    >
      <Icon className={"h-3.5 w-3.5 shrink-0 " + (active ? "text-white" : "text-[#129199]")} />
      <span>{label}</span>
      <span
        className={[
          "inline-flex items-center justify-center rounded-full min-w-[1.25rem] h-5 px-1 text-[11px] font-bold",
          active ? "bg-white/25 text-white" : "bg-[#f5c518]/25 text-[#0d3438]",
        ].join(" ")}
      >
        {count}
      </span>
    </button>
  );
}

function CircularsPage() {
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of circulars) m.set(c.category, (m.get(c.category) ?? 0) + 1);
    return m;
  }, []);

  // Only categories that actually have at least one circular become a tab —
  // the full 30-category taxonomy stays defined in circularCategories.ts so
  // a newly tagged circular gets its own tab automatically, with no UI change.
  const presentCategories = CIRCULAR_CATEGORIES.filter((cat) => (counts.get(cat) ?? 0) > 0);

  const [active, setActive] = useState<string>("Fee Circulars");

  const filtered = active === ALL_KEY ? circulars : circulars.filter((c) => c.category === active);

  const sorted = [...filtered].sort((a, b) => parseDMY(b.date) - parseDMY(a.date));

  const byYear = sorted.reduce<Record<string, typeof circulars>>((acc, c) => {
    (acc[c.year] ||= []).push(c);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <InfoPage eyebrow="Office of the Principal" title="Circulars & Notifications" subtitle="Latest notices, schedules and announcements">
      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-border">
        <CategoryTab
          label="All Circulars"
          count={circulars.length}
          active={active === ALL_KEY}
          Icon={LayoutGrid}
          onClick={() => setActive(ALL_KEY)}
        />
        {presentCategories.map((cat) => (
          <CategoryTab
            key={cat}
            label={cat}
            count={counts.get(cat) ?? 0}
            active={active === cat}
            Icon={CIRCULAR_CATEGORY_ICONS[cat as CircularCategory]}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      {years.map((y) => (
        <section key={y} className="mt-10 first:mt-0">
          <h2 className="text-xl font-bold text-foreground mb-3">Student Circulars · AY {y}</h2>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {byYear[y].map((c) => <Row key={c.file} title={c.title} date={c.date} file={c.file} important={c.important} />)}
          </ul>
        </section>
      ))}

      {years.length === 0 && (
        <p className="text-sm text-muted-foreground py-10 text-center">No circulars in this category yet.</p>
      )}
    </InfoPage>
  );
}
