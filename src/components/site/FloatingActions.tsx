import { useEffect, useState } from "react";
import { Share2, Facebook, Twitter, Instagram, Linkedin, Youtube, X, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "919036926363"; // ATME enquiry

const socials = [
  { Icon: Facebook,  label: "Facebook",  href: "https://www.facebook.com/atmeceofficial/",                       color: "#1877F2" },
  { Icon: Twitter,   label: "Twitter",   href: "https://twitter.com/atmece1?t=zoaaeYpkOtJxZVPWD2WYaw&s=09",   color: "#000000" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/atmeceofficial/",   color: "#E1306C" },
  { Icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/school/atme-college-of-engineering",   color: "#0A66C2" },
  { Icon: Youtube,   label: "YouTube",   href: "https://youtube.com/c/ATMECEOfficial",                          color: "#FF0000" },
];

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      const pct = Math.min(100, Math.max(0, (h.scrollTop / max) * 100));
      setScrollPct(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const showBackToTop = scrollPct > 5;


  // Semi-circle layout: distribute icons across 180° arc above the trigger
  const radius = 110;
  const count = socials.length;

  return (
    <>
      {/* Vertical "Apply Now" tab pinned to right edge */}
      <style>{`
        @keyframes blink-bright {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
      `}</style>
      <a
        href="/admissions"
        aria-label="Apply Now"
        className="group fixed right-0 top-1/2 -translate-y-1/2 z-40 font-bold tracking-wider text-[12px] sm:text-sm px-2.5 py-4 rounded-l-lg shadow-xl border border-[#129199] border-r-0 bg-white text-[#129199] hover:bg-[#129199] hover:text-white hover:px-3.5 transition-all"
        style={{ writingMode: "vertical-rl" }}
      >
        <span
          className="rotate-180 inline-flex items-center gap-1.5"
          style={{ animation: "blink-bright 1s ease-in-out infinite", textShadow: "0 0 6px currentColor" }}
        >
          APPLY NOW
        </span>
      </a>



      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello ATME, I would like to know more about admissions.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-7 sm:w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      </a>

      {/* Back to top button — circular scroll-progress indicator */}
      {(() => {
        const size = 56; // px (sm:h-14)
        const stroke = 3;
        const r = (size - stroke) / 2;
        const c = 2 * Math.PI * r;
        const dash = c * (scrollPct / 100);
        return (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={`Back to top (${Math.round(scrollPct)}% scrolled)`}
            className={
              "fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 " +
              (showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none")
            }
          >
            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox={`0 0 ${size} ${size}`}
              aria-hidden
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={stroke}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="#f5c518"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${c - dash}`}
                style={{ transition: "stroke-dasharray 120ms linear" }}
              />
            </svg>
            <ArrowUp className="relative h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute -top-1 -right-1 text-[9px] sm:text-[10px] font-bold bg-[#f5c518] text-[#0d3438] rounded-full px-1.5 py-0.5 leading-none shadow">
              {Math.round(scrollPct)}%
            </span>
          </button>
        );
      })()}




      {/* Share trigger + semicircular popup */}
      <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-30">
        <div className="relative h-11 w-11 sm:h-14 sm:w-14">
          {/* Semi-circle icons */}
          {socials.map((s, i) => {
            const angleDeg = -90 + (i * 90) / (count - 1);
            const angle = (angleDeg * Math.PI) / 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="absolute top-0 left-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110"
                style={{
                  backgroundColor: s.color,
                  transform: open
                    ? `translate(${x}px, ${y}px) scale(1)`
                    : "translate(0,0) scale(0)",
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${i * 50}ms` : `${(count - i) * 30}ms`,
                  pointerEvents: open ? "auto" : "none",
                }}
              >
                <s.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            );
          })}

          {/* Trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close share menu" : "Open share menu"}
            aria-expanded={open}
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            {open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

    </>
  );
}
