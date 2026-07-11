import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pdf } from "@/data/pdfs";
import { Download } from "lucide-react";

export const Route = createFileRoute("/employee-handbook")({
  head: () => ({
    meta: [
      { title: "Employee Handbook — ATME College of Engineering" },
      { name: "description", content: "ATME College Employee Handbook covering HR policies, service rules and code of conduct." },
    ],
  }),
  component: Page,
});

function Page() {
  const url = pdf("Handbook-3-3.pdf");
  return (
    <InfoPage eyebrow="For Faculty & Staff" title="Employee Handbook" subtitle="HR policies, service rules and code of conduct">
      <div className="mt-6">
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
          <Download className="h-4 w-4" /> Download Handbook (PDF)
        </a>
      </div>
      <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
        <iframe src={url} title="Employee Handbook" className="w-full h-[80vh]" />
      </div>
    </InfoPage>
  );
}
