import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "/__l5e/assets-v1/59370ca8-42af-4aa6-bea5-59bcb03094fc/a1.jpeg", alt: "Seminar & Auditorium — amphitheatre" },
  { src: "/__l5e/assets-v1/894f5a64-ce9e-4246-ab49-60ff7cd942ca/a2.jpeg", alt: "Seminar & Auditorium — open-air gallery" },
  { src: "/__l5e/assets-v1/72a31169-8957-4666-9d51-2644ca9f5199/a3.jpeg", alt: "Seminar hall with seating" },
  { src: "/__l5e/assets-v1/c2c01110-63be-4edd-a5bb-b592ff70d2de/Seminar-Auditorium.jpg", alt: "Main auditorium" },
];

type Props = {
  /** When true, renders edge-to-edge as a page hero/banner. */
  asBanner?: boolean;
};

export function SeminarAuditoriumGallery({ asBanner = false }: Props) {
  const autoplayRef = React.useRef<ReturnType<typeof Autoplay> | null>(null);
  if (autoplayRef.current === null) {
    autoplayRef.current = Autoplay({ delay: 3800, stopOnInteraction: false, stopOnMouseEnter: true });
  }
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true }, [autoplayRef.current]);
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "start",
  });
  const [selected, setSelected] = React.useState(0);

  const onThumbClick = React.useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi],
  );

  React.useEffect(() => {
    if (!mainApi) return;
    const handler = () => {
      const i = mainApi.selectedScrollSnap();
      setSelected(i);
      thumbApi?.scrollTo(i);
    };
    handler();
    mainApi.on("select", handler);
    mainApi.on("reInit", handler);
    return () => {
      mainApi.off("select", handler);
      mainApi.off("reInit", handler);
    };
  }, [mainApi, thumbApi]);

  const slideHeight = asBanner
    ? "h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px]"
    : "h-[260px] sm:h-[360px] md:h-[460px]";

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    asBanner ? (
      <section className="relative w-full bg-[#0d3438]">{children}</section>
    ) : (
      <div className="not-prose mb-8">{children}</div>
    );

  return (
    <Wrapper>
      <div className="relative">
        <div ref={mainRef} className="overflow-hidden">
          <div className="flex">
            {IMAGES.map((img) => (
              <div key={img.src} className="relative min-w-0 flex-[0_0_100%]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`block w-full ${slideHeight} object-cover`}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => mainApi?.scrollPrev()}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/85 hover:bg-white text-[#0d3438] shadow-md border border-[#f5c518]/60"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => mainApi?.scrollNext()}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/85 hover:bg-white text-[#0d3438] shadow-md border border-[#f5c518]/60"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className={asBanner ? "bg-[#0d3438] py-3 sm:py-4" : "mt-3"}>
        <div ref={thumbRef} className="overflow-hidden">
          <div className="flex gap-2 sm:gap-3 px-2 sm:px-4 justify-center">
            {IMAGES.map((img, i) => {
              const active = i === selected;
              return (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => onThumbClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`relative flex-[0_0_auto] overflow-hidden rounded-md border-2 transition ${
                    active
                      ? "border-[#f5c518] opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="block h-14 w-20 sm:h-16 sm:w-24 md:h-20 md:w-32 object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
