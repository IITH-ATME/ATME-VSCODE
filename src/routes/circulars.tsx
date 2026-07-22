import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { FileText, Download, ExternalLink } from "lucide-react";
import { circulars, pdf } from "@/data/pdfs";

export const Route = createFileRoute("/circulars")({
  head: () => ({
    meta: [
      { title: "Circulars & Notifications — ATME College of Engineering" },
      { name: "description", content: "Official circulars, notifications and approvals from ATME College of Engineering, Mysuru." },
    ],
  }),
  component: CircularsPage,
});

function Row({ title, date, file }: { title: string; date?: string; file: string }) {
  const url = pdf(file);
  return (
    <li className="flex items-start gap-4 p-5 hover:bg-secondary/40 transition-colors">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
        <FileText className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-foreground">{title}</div>
        {date && <div className="text-xs text-muted-foreground mt-0.5">{date}</div>}
      </div>
      <div className="flex items-center gap-2 shrink-0">
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

function CircularsPage() {
  const byYear = circulars.reduce<Record<string, typeof circulars>>((acc, c) => {
    (acc[c.year] ||= []).push(c);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <InfoPage eyebrow="Office of the Principal" title="Circulars & Notifications" subtitle="Latest notices, schedules and announcements">
      {years.map((y) => (
        <section key={y} className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">Student Circulars · AY {y}</h2>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {byYear[y].map((c) => <Row key={c.file} title={c.title} date={c.date} file={c.file} />)}
          </ul>
        </section>
      ))}
    </InfoPage>
  );
}
