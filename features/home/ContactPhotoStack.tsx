"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/images/contact/kentucky-filipino-bakery-box.webp",
    alt: "Fresh Cloud Bun Bakery box for Kentucky pickup",
  },
  {
    src: "/images/contact/homemade-filipino-ensaymada.webp",
    alt: "Homemade Filipino ensaymada from Cloud Bun Bakery",
  },
  {
    src: "/images/contact/kentucky-filipino-bakery-pickup-collage.webp",
    alt: "Cloud Bun Bakery pickup collage with Filipino breads, bakery boxes, and ensaymada",
  },
];

export function ContactPhotoStack() {
  const [topIndex, setTopIndex] = useState(0);
  const orderedPhotos = photos.map(
    (_, offset) => photos[(topIndex + offset) % photos.length],
  );

  return (
    <div
      className="contact-photo-stack"
      aria-label="Cloud Bun Bakery order photos"
    >
      {orderedPhotos.map((photo, index) => (
        <button
          type="button"
          key={photo.src}
          className={`contact-card contact-card-${index}`}
          aria-label={`Show photo ${index + 1} of ${photos.length}`}
          onClick={() => setTopIndex((topIndex + index + 1) % photos.length)}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={720}
            height={720}
            sizes="(max-width: 767px) 82vw, 520px"
          />
        </button>
      ))}
    </div>
  );
}
