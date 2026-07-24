import { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupAsset from "@/assets/admissions-popup.jpg.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

export function AdmissionsPopup() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setShow(true));
    }, 800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => {
    setShow(false);
    setTimeout(() => setOpen(false), 250);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Admissions announcement"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(8, 30, 45, 0.78)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-[92vw] sm:max-w-[440px] md:max-w-[520px] w-full transition-all duration-500 ease-out ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"
        }`}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-[#0b2447] shadow-lg hover:scale-110 hover:rotate-90 transition-transform"
        >
          <X className="h-5 w-5" />
        </button>
        <a
          href="/admissions"
          className="block rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-[popIn_0.5s_ease-out]"
        >
          <img
            src={resolveAssetUrl(popupAsset.url)}
            alt="ATME Admissions Open — No Donation, No Development Fee"
            className="block w-full h-auto"
            loading="eager"
            width={1100}
            height={1320}
          />
        </a>
      </div>
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
