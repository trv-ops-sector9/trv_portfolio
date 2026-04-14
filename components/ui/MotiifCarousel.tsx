"use client";

import { Carousel, CarouselItem } from "./Carousel";
import { assetPath } from "@/lib/assetPath";
import styles from "./MotiifCarousel.module.css";

const SLIDES = [
  "/Motiif_SS/img1.png",
  "/Motiif_SS/img2.png",
  "/Motiif_SS/img3.png",
  "/Motiif_SS/img4.png",
  "/Motiif_SS/img5.png",
  "/Motiif_SS/img6.png",
];

export function MotiifCarousel() {
  return (
    <Carousel>
      {SLIDES.map((src, i) => (
        <CarouselItem key={i}>
          <img
            src={assetPath(src)}
            alt={`Motiif screenshot ${i + 1}`}
            className={styles.img}
            data-zoomable
            loading={i === 0 ? "eager" : "lazy"}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
