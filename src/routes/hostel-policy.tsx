import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pdf } from "@/data/pdfs";
import { Download } from "lucide-react";

export const Route = createFileRoute("/hostel-policy")({
  head: () => ({
    meta: [
      { title: "Hostel Rules & Regulations — ATME College of Engineering" },
      { name: "description", content: "Hostel policies, rules and regulations for residential students at ATME." },
    ],
  }),
  component: Page,
});

function Page() {
  const url = pdf("HOSTEL-Rules-Regulation-v3.pdf");
  return (
    <InfoPage eyebrow="Residential Life" title="Hostel Rules & Regulations" subtitle="Official hostel policies for boys' and girls' hostels">
      <div className="mt-6">
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
          <Download className="h-4 w-4" /> Download Policy (PDF)
        </a>
      </div>
      <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
        <iframe src={url} title="Hostel Rules" className="w-full h-[80vh]" />
      </div>
    </InfoPage>
  );
}
