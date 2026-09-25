"use client";

import { motion, useReducedMotion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2000&h=1500&fit=crop",
    alt: "Wedding ceremony",
    layout: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&h=1800&fit=crop",
    alt: "Wedding couple",
    layout: "half",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1400&h=1800&fit=crop",
    alt: "Wedding celebration",
    layout: "half",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1000&fit=crop",
    alt: "Wedding reception",
    layout: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2200&h=1650&fit=crop",
    alt: "Wedding moment",
    layout: "large",
  },
];

function GalleryImage({
  src,
  alt,
  className,
  aspectClass,
}: {
  src: string;
  alt: string;
  className?: string;
  aspectClass: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`group overflow-hidden ${aspectClass} ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{
          scale: shouldReduceMotion ? 1 : 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export default function StoryGallery() {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-28 md:px-20 md:pb-40">
      <div className="mx-auto max-w-[1440px] space-y-8 md:space-y-12">
        {/* Large opening image */}
        <GalleryImage
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          aspectClass="aspect-[4/3] md:aspect-[16/9]"
        />

        {/* Two-image editorial spread */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <GalleryImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            aspectClass="aspect-[3/4]"
          />

          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            aspectClass="aspect-[3/4]"
          />
        </div>

        {/* Wide cinematic image */}
        <GalleryImage
          src={galleryImages[3].src}
          alt={galleryImages[3].alt}
          aspectClass="aspect-[21/9]"
        />

        {/* Closing image */}
        <GalleryImage
          src={galleryImages[4].src}
          alt={galleryImages[4].alt}
          aspectClass="aspect-[4/3] md:aspect-[16/10]"
        />
      </div>
    </section>
  );
}
