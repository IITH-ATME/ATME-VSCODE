import { PdfThumbCard } from "./PdfThumbCard";
import { resolveAssetUrl } from "@/lib/assetUrl";

type Magazine = {
  ay: string;
  title: string;
  url: string;
};

// All editions of DYNAMICS — the ATME college magazine. PDFs are
// rehosted on the Lovable CDN so they load from the same origin
// (no CORS issues with pdfjs thumbnails, no redirects to the old
// atme.edu.in domain).
const MAGAZINES: Magazine[] = [
  { ay: "2024-25", title: "Dynamics 2025", url: "/__l5e/assets-v1/1cea3506-a44a-442c-96fb-b6d1abe5d39c/Dynamics_2025.pdf" },
  { ay: "2023-24", title: "Dynamics 2024", url: "/__l5e/assets-v1/68f73a1d-c949-4492-8862-59317c6286ef/Dynamics_2024.pdf" },
  { ay: "2022-23", title: "Dynamics 2023", url: "/__l5e/assets-v1/15b55e9e-ab50-45d5-bbb3-0f60a53753a6/Dynamics_2023_Final_compressed.pdf" },
  { ay: "2021-22", title: "Dynamics 2022", url: "/__l5e/assets-v1/c61c47f0-9f50-4914-8821-e0f8d41a0c4b/Dynamics_2022_Final_compressed.pdf" },
  { ay: "2020-21", title: "Dynamics 2021", url: "/__l5e/assets-v1/12f032be-9e07-4178-9949-a57f80054281/ATME_Dynamic_Magazine_2021_11zon.pdf" },
  { ay: "2019-20", title: "Dynamics 2020", url: "/__l5e/assets-v1/fcb12011-1ca5-4574-b0d8-d02eaa007202/Dynamics_2020_Final_2_compressed.pdf" },
  { ay: "2018-19", title: "Dynamics 2019", url: "/__l5e/assets-v1/6353cb42-a0bf-42f5-91ef-2d49f0b21fc0/Dynamics-2019.pdf" },
  { ay: "2017-18", title: "Dynamics 2018", url: "/__l5e/assets-v1/b8f88d5e-ac41-4418-891a-33e57f078066/Dynamics-2018.pdf" },
  { ay: "2016-17", title: "Dynamics 2017", url: "/__l5e/assets-v1/54f21242-05a6-4a01-8d28-b59c853c96fa/Dynamics-2017.pdf" },
];

export function MagazineGrid() {
  return (
    <div className="not-prose my-8">
      <div className="flex items-center gap-3 border-b border-[#f5c518]/60 pb-2 mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#0d3438]">
          DYNAMICS — All Editions
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MAGAZINES.map((m) => (
          <div key={m.ay} className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#129199] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                AY {m.ay}
              </span>
              <span className="text-sm font-semibold text-[#0d3438]">{m.title}</span>
            </div>
            <PdfThumbCard url={resolveAssetUrl(m.url)} title={m.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
