import { Reveal } from "@/components/site/Reveal";
import { resolveAssetUrl } from "@/lib/assetUrl";

// Auto-imported logo asset pointers
import a00 from "@/assets/recruiters/00-akamai.jpg.asset.json";
import a01 from "@/assets/recruiters/01-accenture.jpg.asset.json";
import a02 from "@/assets/recruiters/02-lumos-learning.jpg.asset.json";
import a03 from "@/assets/recruiters/03-light-and-wonder.jpg.asset.json";
import a04 from "@/assets/recruiters/04-pg-settry.jpg.asset.json";
import a05 from "@/assets/recruiters/05-nnf-technologies.jpg.asset.json";
import a06 from "@/assets/recruiters/06-juspay.jpg.asset.json";
import a07 from "@/assets/recruiters/07-onetrust.jpg.asset.json";
import a08 from "@/assets/recruiters/08-kasmo.jpg.asset.json";
import a09 from "@/assets/recruiters/09-l7-informatics.jpg.asset.json";
import a10 from "@/assets/recruiters/10-nilaya-construction.jpg.asset.json";
import a11 from "@/assets/recruiters/11-onyx-systems.jpg.asset.json";
import a12 from "@/assets/recruiters/12-eleation.jpg.asset.json";
import a13 from "@/assets/recruiters/13-fci.jpg.asset.json";
import a14 from "@/assets/recruiters/14-advance-estimating.jpg.asset.json";
import a15 from "@/assets/recruiters/15-difacto.jpg.asset.json";
import a16 from "@/assets/recruiters/16-devrev.jpg.asset.json";
import a17 from "@/assets/recruiters/17-deltax.jpg.asset.json";
import a18 from "@/assets/recruiters/18-all-grow-technologies.jpg.asset.json";
import a19 from "@/assets/recruiters/19-ibm.jpg.asset.json";
import a20 from "@/assets/recruiters/20-infosys.jpg.asset.json";
import a21 from "@/assets/recruiters/21-capillary.jpg.asset.json";
import a22 from "@/assets/recruiters/22-aptus.jpg.asset.json";
import a23 from "@/assets/recruiters/23-cognizant.jpg.asset.json";
import a24 from "@/assets/recruiters/24-evobi-automations.jpg.asset.json";
import a25 from "@/assets/recruiters/25-tcs.jpg.asset.json";
import a26 from "@/assets/recruiters/26-cloudinvent.jpg.asset.json";
import a27 from "@/assets/recruiters/27-te-connectivity.jpg.asset.json";
import a28 from "@/assets/recruiters/28-encora.jpg.asset.json";
import a29 from "@/assets/recruiters/29-cleanfix.jpg.asset.json";
import a30 from "@/assets/recruiters/30-tech-mahindra.jpg.asset.json";
import a31 from "@/assets/recruiters/31-prdc.jpg.asset.json";
import a32 from "@/assets/recruiters/32-transform.jpg.asset.json";
import a33 from "@/assets/recruiters/33-jk-maini.jpg.asset.json";
import a34 from "@/assets/recruiters/34-total-environment.jpg.asset.json";
import a35 from "@/assets/recruiters/35-rprocess.jpg.asset.json";
import a36 from "@/assets/recruiters/36-tap-academy.jpg.asset.json";
import a37 from "@/assets/recruiters/37-vtiger.jpg.asset.json";
import a38 from "@/assets/recruiters/38-wafer-space.jpg.asset.json";
import a39 from "@/assets/recruiters/39-roboyo.jpg.asset.json";
import a40 from "@/assets/recruiters/40-towell-engineering.jpg.asset.json";
import a41 from "@/assets/recruiters/41-skit-ai.jpg.asset.json";
import a42 from "@/assets/recruiters/42-solaredge.jpg.asset.json";
import a43 from "@/assets/recruiters/43-tata-elxsi.jpg.asset.json";
import a44 from "@/assets/recruiters/44-sobha-constructions.jpg.asset.json";
import a45 from "@/assets/recruiters/45-veltrix.jpg.asset.json";
import a46 from "@/assets/recruiters/46-toyota-kirloskar.jpg.asset.json";
import a47 from "@/assets/recruiters/47-infrrd.jpg.asset.json";

const RECRUITERS: { name: string; url: string }[] = [
  { name: "Akamai", url: a00.url },
  { name: "Accenture", url: a01.url },
  { name: "Lumos Learning", url: a02.url },
  { name: "Light & Wonder", url: a03.url },
  { name: "PG Settry", url: a04.url },
  { name: "NNF Technologies", url: a05.url },
  { name: "Juspay", url: a06.url },
  { name: "OneTrust", url: a07.url },
  { name: "Kasmo", url: a08.url },
  { name: "L7 Informatics", url: a09.url },
  { name: "Nilaya Construction", url: a10.url },
  { name: "Onyx Systems", url: a11.url },
  { name: "Eleation", url: a12.url },
  { name: "FCI", url: a13.url },
  { name: "Advance Estimating", url: a14.url },
  { name: "DiFACTO", url: a15.url },
  { name: "DevRev", url: a16.url },
  { name: "DeltaX", url: a17.url },
  { name: "All Grow Technologies", url: a18.url },
  { name: "IBM", url: a19.url },
  { name: "Infosys", url: a20.url },
  { name: "Capillary", url: a21.url },
  { name: "Aptus", url: a22.url },
  { name: "Cognizant", url: a23.url },
  { name: "Evobi Automations", url: a24.url },
  { name: "TCS", url: a25.url },
  { name: "CloudInvent", url: a26.url },
  { name: "TE Connectivity", url: a27.url },
  { name: "Encora", url: a28.url },
  { name: "Cleanfix", url: a29.url },
  { name: "Tech Mahindra", url: a30.url },
  { name: "PRDC", url: a31.url },
  { name: "Transform", url: a32.url },
  { name: "JK Maini", url: a33.url },
  { name: "Total Environment", url: a34.url },
  { name: "rProcess", url: a35.url },
  { name: "TAP Academy", url: a36.url },
  { name: "Vtiger", url: a37.url },
  { name: "Wafer Space", url: a38.url },
  { name: "Roboyo", url: a39.url },
  { name: "Towell Engineering", url: a40.url },
  { name: "Skit.ai", url: a41.url },
  { name: "SolarEdge", url: a42.url },
  { name: "Tata Elxsi", url: a43.url },
  { name: "Sobha Constructions", url: a44.url },
  { name: "Veltrix", url: a45.url },
  { name: "Toyota Kirloskar", url: a46.url },
  { name: "Infrrd", url: a47.url },
];

type Props = {
  limit?: number;
  cols?: string;
  showNames?: boolean;
};

export function RecruiterLogoGrid({ limit, showNames = true }: Props = {}) {
  const items = typeof limit === "number" ? RECRUITERS.slice(0, limit) : RECRUITERS;
  return (
    <Reveal>
      <div
        className="rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
        style={{ backgroundColor: "#129199" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-lg p-3 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1 w-full flex items-center justify-center min-h-[80px]">
                <img
                  src={resolveAssetUrl(r.url)}
                  alt={`${r.name} logo`}
                  loading="lazy"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              {showNames && (
                <p className="mt-2 text-xs sm:text-sm font-medium text-slate-700 text-center leading-tight">
                  {r.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
