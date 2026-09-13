"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/images/contact/cloud-bun-bakery-pickup-collage.webp",
    alt: "Cloud Bun Bakery pickup collage with Spanish bread, boxed bakes, and ensaymada",
  },
  {
    src: "/images/contact/cloud-bun-bakery-order-collage.webp",
    alt: "Cloud Bun Bakery order collage with bakery boxes, pandesal, scones, and customers",
  },
  {
    src: "/images/contact/cloud-bun-bakery-customer-collage.webp",
    alt: "Cloud Bun Bakery customer pickup collage with Filipino breads, scones, and bakery boxes",
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
