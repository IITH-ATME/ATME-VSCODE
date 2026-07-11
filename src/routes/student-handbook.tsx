import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pdf, policies } from "@/data/pdfs";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/student-handbook")({
  head: () => ({
    meta: [
      { title: "Student Handbook — ATME College of Engineering" },
      { name: "description", content: "Download the ATME Student Handbook with academic policies, rules and regulations." },
    ],
  }),
  component: Page,
});

function Page() {
  const url = pdf("Handbook-3-3.pdf");
  return (
    <InfoPage eyebrow="For Students" title="Student Handbook" subtitle="Academic regulations, code of conduct and student support information">
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
          <Download className="h-4 w-4" /> Download Handbook (PDF)
        </a>
      </div>
      <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
        <iframe src={url} title="Student Handbook" className="w-full h-[80vh]" />
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-bold">Related Documents</h2>
        <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-card">
          {policies.map((p) => (
            <li key={p.file} className="flex items-center gap-3 p-4">
              <FileText className="h-4 w-4 text-primary" />
              <a href={pdf(p.file)} target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary flex-1">{p.title}</a>
              <Download className="h-4 w-4 text-muted-foreground" />
            </li>
          ))}
        </ul>
      </div>
    </InfoPage>
  );
}
