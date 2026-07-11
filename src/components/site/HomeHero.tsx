import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, Pencil, Globe } from "lucide-react";
import slide2 from "@/assets/slide-2.jpg.asset.json";
import home1 from "@/assets/home-slide-1.jpg.asset.json";
import home2 from "@/assets/home-slide-2.jpg.asset.json";
import home3 from "@/assets/home-slide-3.jpg.asset.json";
import home4 from "@/assets/home-slide-4.jpg.asset.json";
import home5 from "@/assets/home-slide-5.jpg.asset.json";
import home6 from "@/assets/home-slide-6.jpg.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

const slides = [
  {
    img: resolveAssetUrl(slide2.url),
    eyebrow: "Accredited Excellence",
    title: ["NAAC · NBA · AICTE", "Approved Institution"],
  },
  {
    img: resolveAssetUrl(home1.url),
    eyebrow: "Campus & Facilities",
    title: ["World-Class", "Infrastructure"],
  },
  {
    img: resolveAssetUrl(home2.url),
    eyebrow: "Atmeya Cultural Fest",
    title: ["Stars, Stage", "& Spotlight"],
  },
  {
    img: resolveAssetUrl(home3.url),
    eyebrow: "Aerial View",
    title: ["A Sprawling", "Green Campus"],
  },
  {
    img: resolveAssetUrl(home4.url),
    eyebrow: "Architecture",
    title: ["Iconic Spaces", "for Learning"],
  },
  {
    img: resolveAssetUrl(home5.url),
    eyebrow: "Labs & Learning",
    title: ["Modern Labs,", "Real Skills"],
  },
  {
    img: resolveAssetUrl(home6.url),
    eyebrow: "Innovation & Sports",
    title: ["Where Talent", "Comes Alive"],
  },
];


export function HomeHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[420px] sm:h-[520px] md:h-[640px] lg:h-[720px] w-full overflow-hidden">
                <motion.img
                  src={s.img}
                  alt={s.title.join(" ")}
                  width={1920}
                  height={720}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding={i === 0 ? "sync" : "async"}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={selected === i ? { scale: 1.08 } : { scale: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />

                <div className="absolute inset-0" style={{ background: "var(--banner-overlay)" }} />
                <div className="relative container-page h-full flex items-center" style={{ color: "var(--banner-text)" }}>
                  <AnimatePresence mode="wait">
                    {selected === i && (
                      <motion.div
                        key={`slide-${i}`}
                        className="max-w-2xl py-10 sm:py-16"
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
                        variants={{
                          hidden: {},
                          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                        }}
                      >
                        <motion.div
                          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                          style={{ color: "var(--banner-eyebrow)" }}
                          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } } }}
                        >
                          {s.eyebrow}
                        </motion.div>
                        <motion.h1
                          className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.05]"
                          style={{ color: "var(--banner-text)" }}
                          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } } }}
                        >
                          {s.title[0]}
                          <br />
                          <span style={{ color: "var(--banner-accent)" }}>{s.title[1]}</span>
                        </motion.h1>
                        <motion.div
                          className="mt-5 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3"
                          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } } }}
                        >
                          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                            <Link
                              to="/about"
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary hover:bg-primary-glow hover:text-primary-foreground transition-colors"
                            >
                              <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Campus Information
                            </Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                            <Link
                              to="/admissions"
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors"
                            >
                              <Pencil className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Apply Now
                            </Link>
                          </motion.div>
                          <motion.a
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://www.google.com/maps/@12.3155768,76.7708122,3a,90y,178.98h,89.65t/data=!3m8!1e1!3m6!1sAF1QipMbNIRJSbCpE4gGO5jl1O4MdzpwoC9alp83E754!2e10!3e12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
                          >
                            <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Take a Tour
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows - visible on md+ (tablet/desktop), hidden on mobile */}
      <button
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="hidden md:grid absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 h-9 w-9 lg:h-11 lg:w-11 place-items-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/25 transition"
      >
        <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="hidden md:grid absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 h-9 w-9 lg:h-11 lg:w-11 place-items-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/25 transition"
      >
        <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>

      {/* Dots - larger touch targets on mobile */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-3 w-3 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
              i === selected
                ? "w-8 sm:w-8 bg-primary-foreground"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
