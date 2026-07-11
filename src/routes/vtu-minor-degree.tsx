import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { pdf } from "@/data/pdfs";

export const Route = createFileRoute("/vtu-minor-degree")({
  head: () => ({
    meta: [
      { title: "VTU Minor Degree — ATME College of Engineering" },
      { name: "description", content: "VTU Minor Degree programme details offered at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "VTU Minor Degree — ATME College of Engineering" },
      { property: "og:description", content: "Programme details for the VTU Minor Degree at ATME College of Engineering." },
    ],
  }),
  component: VtuMinorDegreePage,
});

function VtuMinorDegreePage() {
  return (
    <InfoPage
      eyebrow="Departments · Academic Programmes"
      title="VTU Minor Degree"
      subtitle="Programme details and curriculum"
    >
      <PdfEmbed
        url={pdf("ATME-VTU-Minor-degree-Details.pdf")}
        title="VTU Minor Degree — Programme Details"
      />
    </InfoPage>
  );
}
