import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/nabl")({
  head: () => ({
    meta: [
      { title: "NABL Accreditation — ATME College of Engineering" },
      { name: "description", content: "ATME Civil Engineering Laboratory is NABL accredited under ISO/IEC 17025:2017." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Quality & Accreditation"
      title="NABL Accreditation"
      subtitle="ISO/IEC 17025:2017 — Civil Engineering Laboratory"
      intro="ATME College of Engineering's Civil Engineering Laboratory is accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL) under ISO/IEC 17025:2017, certifying our competence to carry out specific tests and calibrations with reliable, internationally recognised results."
      sections={[
        {
          heading: "Scope of Accreditation",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Mechanical tests on cement, aggregates and concrete</li>
              <li>Soil testing — compaction, CBR, shear strength, consolidation</li>
              <li>Bitumen and bituminous mix design tests</li>
              <li>Non‑destructive testing of structural elements</li>
            </ul>
          ),
        },
        {
          heading: "Why NABL Matters",
          body: "NABL accreditation ensures that test reports issued by our laboratory are accepted across India and by international regulators, giving students hands‑on exposure to industry‑grade quality protocols and giving consultancy clients full confidence in results.",
        },
      ]}
    />
  ),
});
