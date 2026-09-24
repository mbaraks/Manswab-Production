"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const stories = [
  {
    title: "Ali & Alia",
    location: "Amwaj Seafront Venue",
    description:
      "A celebration filled with warmth, movement, and the people who made their day unforgettable.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=2133&fit=crop",
    aspect: "vertical",
  },
  {
    title: "Sarah & James",
    location: "Nairobi, Kenya",
    description:
      "An intimate celebration shaped by quiet moments and genuine connection.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&h=1400&fit=crop",
    aspect: "square",
  },
  {
    title: "Daniel & Amina",
    location: "Zanzibar, Tanzania",
    description:
      "A joyful coastal celebration where every moment unfolded naturally.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=2200&h=943&fit=crop",
    aspect: "wide",
  },
];

export default function FeaturedStories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF8F5] px-6 py-32 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 max-w-3xl md:mb-28">
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#7A5C45" }}
          >
            Featured Stories
          </p>

          <h2
            className="font-display text-[clamp(40px,5vw,64px)] font-light leading-[1.1]"
            style={{ color: "#1A1A1A" }}
          >
            Stories worth
            <br />
            remembering.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {stories.map((story) => (
            <article
              key={story.title}
              className={
                story.aspect === "vertical"
                  ? "md:col-span-7"
                  : story.aspect === "square"
                    ? "md:col-span-4 md:col-start-9 md:mt-32"
                    : "md:col-span-10 md:col-start-2"
              }
            >
              <Link href="/stories" className="group block">
                <div
                  className={
                    story.aspect === "vertical"
                      ? "aspect-[3/4]"
                      : story.aspect === "square"
                        ? "aspect-square"
                        : "aspect-[21/9]"
                  }
                  style={{
                    overflow: "hidden",
                    backgroundColor: "#F3EEE8",
                  }}
                >
                  <motion.img
                    src={story.image}
                    alt={`${story.title} wedding`}
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

                <div
                  className="mt-7 border-t pt-5"
                  style={{ borderColor: "#D8C3A5" }}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                    <div>
                      <h3
                        className="font-display text-2xl font-light md:text-3xl"
                        style={{ color: "#1A1A1A" }}
                      >
                        {story.title}
                      </h3>

                      <p
                        className="mt-2 text-xs uppercase tracking-[0.2em]"
                        style={{ color: "#7A5C45" }}
                      >
                        {story.location}
                      </p>
                    </div>

                    <p
                      className="max-w-md text-sm leading-7"
                      style={{ color: "#5A5A5A" }}
                    >
                      {story.description}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-end md:mt-28">
          <Link
            href="/stories"
            className="group inline-flex items-center gap-4 rounded-[8px] px-3 py-2 text-sm transition-all duration-300 hover:bg-[#D8C3A5]/30 active:scale-[0.97]"
            style={{
              color: "#1A1A1A",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span className="border-b border-[#1A1A1A] pb-1 transition-all duration-300 group-hover:border-[#7A5C45] group-hover:text-[#7A5C45]">
              Explore all stories
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
    </section>
  );
}
