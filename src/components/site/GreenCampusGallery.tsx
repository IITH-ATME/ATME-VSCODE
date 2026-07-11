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
  { src: "/__l5e/assets-v1/f8c70446-0948-4cdd-85ef-09c3809707ce/Solar.jpg", alt: "Rooftop solar plant" },
  { src: "/__l5e/assets-v1/8c8ba1fa-88cc-4b33-9cf5-5a25aca2234b/Mechanical-Block-1.jpg", alt: "Mechanical Block — green campus" },
  { src: "https://atme.edu.in/wp-content/uploads/2022/05/EE-Block-1.jpg", alt: "Electrical Engineering Block" },
  { src: "/__l5e/assets-v1/052edabe-1286-48fb-a921-a74a12fd1912/Solar-2-1.jpg", alt: "Solar panels array" },
  { src: "https://atme.edu.in/wp-content/uploads/2022/05/1-9-1.jpg", alt: "Landscaped green campus" },
];

export function GreenCampusGallery() {
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
