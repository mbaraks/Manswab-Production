"use client";

import { motion, useReducedMotion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=2200&h=1650&fit=crop",
    alt: "Wedding couple during their celebration",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&h=2000&fit=crop",
    alt: "Wedding celebration with family and friends",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2200&h=1400&fit=crop",
    alt: "Quiet wedding ceremony moment",
    aspect: "aspect-[16/10]",
  },
];

function GalleryImage({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`group overflow-hidden ${aspect} bg-[#F3EEE8]`}>
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

export default function ExperienceGallery() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        {/* Section introduction */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              The Experience
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              Beautifully present.
              <br />
              Completely yours.
            </h2>
          </div>
        </div>

        {/* Editorial image arrangement */}
        <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <GalleryImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              aspect={galleryImages[0].aspect}
            />
          </div>

          <div className="md:col-span-4 md:col-start-9 md:mb-20">
            <GalleryImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              aspect={galleryImages[1].aspect}
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12 md:ml-[16.666667%] md:w-[66.666667%]">
          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            aspect={galleryImages[2].aspect}
          />
        </div>
      </div>
    </section>
  );
}
