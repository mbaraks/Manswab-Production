"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const featuredStory = {
  title: "Ali & Alia",
  location: "Amwaj Seafront Venue",
  description:
    "A celebration filled with warmth, movement, and the people who made their day unforgettable.",
  image:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1600&fit=crop",
};

export default function FeaturedStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F3EEE8] px-6 py-24 md:px-20 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <Link href="/stories/ali-and-alia" className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                <motion.img
                  src={featuredStory.image}
                  alt={`${featuredStory.title} wedding`}
                  initial={{
                    scale: shouldReduceMotion ? 1 : 1.06,
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
            </Link>
          </div>

          <div className="md:col-span-4">
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Featured Story
            </p>

            <h2
              className="font-display text-[clamp(40px,5vw,64px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              {featuredStory.title}
            </h2>

            <p
              className="mt-3 text-xs uppercase tracking-[0.2em]"
              style={{ color: "#7A5C45" }}
            >
              {featuredStory.location}
            </p>

            <p
              className="mt-7 max-w-md text-sm leading-7 md:text-base"
              style={{ color: "#5A5A5A" }}
            >
              {featuredStory.description}
            </p>

            <Link
              href="/stories/ali-and-alia"
              className="group mt-8 inline-flex items-center gap-4 rounded-[8px] px-3 py-2 text-sm transition-all duration-300 hover:bg-[#D8C3A5]/30 active:scale-[0.97]"
              style={{
                color: "#1A1A1A",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span className="border-b border-[#1A1A1A] pb-1 transition-colors duration-300 group-hover:border-[#7A5C45] group-hover:text-[#7A5C45]">
                View story
              </span>

              <span
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7A5C45]"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
