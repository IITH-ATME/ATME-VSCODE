import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pdf, approvals } from "@/data/pdfs";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Disclosure — ATME College of Engineering" },
      { name: "description", content: "AICTE Mandatory Disclosure 2026-27 and statutory approvals for ATME College of Engineering, Mysuru." },
    ],
  }),
  component: Page,
});

function Page() {
  const url = pdf("Mandatory-Disclosure-2026-27.pdf");
  return (
    <InfoPage eyebrow="Statutory" title="Mandatory Disclosure 2026-27" subtitle="As required by AICTE, New Delhi">
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
          <Download className="h-4 w-4" /> Download Disclosure (PDF)
        </a>
      </div>
      <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
        <iframe src={url} title="Mandatory Disclosure" className="w-full h-[80vh]" />
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-bold">Statutory Approvals</h2>
        <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-card">
          {approvals.map((a) => (
            <li key={a.file} className="flex items-center gap-3 p-4">
              <FileText className="h-4 w-4 text-primary" />
              <a href={pdf(a.file)} target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary flex-1">{a.title}</a>
              <Download className="h-4 w-4 text-muted-foreground" />
            </li>
          ))}
        </ul>
      </div>
    </InfoPage>
  );
}
