import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { pdf } from "@/data/pdfs";

export const Route = createFileRoute("/vtu-honor-degree")({
  head: () => ({
    meta: [
      { title: "VTU Honor Degree — ATME College of Engineering" },
      { name: "description", content: "VTU Honor Degree programme details offered at ATME College of Engineering, Mysuru." },
      { property: "og:title", content: "VTU Honor Degree — ATME College of Engineering" },
      { property: "og:description", content: "Programme details for the VTU Honor Degree at ATME College of Engineering." },
    ],
  }),
  component: VtuHonorDegreePage,
});

function VtuHonorDegreePage() {
  return (
    <InfoPage
      eyebrow="Departments · Academic Programmes"
      title="VTU Honor Degree"
      subtitle="Programme details and curriculum"
    >
      <PdfEmbed
        url={pdf("ATME-VTU-Honours-Degree-Details.pdf")}
        title="VTU Honor Degree — Programme Details"
      />
    </InfoPage>
  );
}
