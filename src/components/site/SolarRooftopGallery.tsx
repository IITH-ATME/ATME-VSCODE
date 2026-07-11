import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IMAGES = [
  { src: "/__l5e/assets-v1/1190e5b9-d3f4-48d6-8308-8bf3eaf07824/Solar-2-01.jpg", alt: "Solar inverter installation" },
  { src: "/__l5e/assets-v1/7b34a222-570d-4ee9-a976-77f6bfac4725/Solar-1-01.jpg", alt: "Rooftop solar panel array" },
];

export function SolarRooftopGallery() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  return (
    <div className="not-prose mb-8">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent>
          {IMAGES.map((img) => (
            <CarouselItem key={img.src}>
              <div className="overflow-hidden rounded-xl border border-[#f5c518]/40 shadow-md bg-[#0d3438]/5">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:-left-4" />
        <CarouselNext className="right-2 sm:-right-4" />
      </Carousel>
    </div>
  );
}
