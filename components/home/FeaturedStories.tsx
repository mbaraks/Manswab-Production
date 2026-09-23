"use client";

import { motion, useReducedMotion } from "framer-motion";

const stories = [
  {
    title: "Ali and Alia's Wedding",
    location: "Amwaj Seafront Venue",
    description:
      "A celebration filled with quiet moments, joyful embraces, and memories shared with the people who matter most.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&auto=format&fit=crop",
    aspect: "vertical",
    className: "md:col-span-7",
  },
  {
    title: "A Day to Remember",
    location: "Nairobi, Kenya",
    description:
      "An intimate celebration captured through honest moments and effortless emotion.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop",
    aspect: "square",
    className: "md:col-span-4 md:col-start-9 md:mt-32",
  },
  {
    title: "Together, Always",
    location: "Coastal Celebration",
    description:
      "The atmosphere, the people, and the fleeting moments that become part of a family's story.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=2000&auto=format&fit=crop",
    aspect: "wide",
    className: "md:col-span-10 md:col-start-2",
  },
];

export default function FeaturedStories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF8F5] px-6 py-24 md:px-20 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 max-w-2xl md:mb-28"
        >
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#7A5C45" }}
          >
            Featured Stories
          </p>

          <h2
            className="font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] tracking-[0.01em]"
            style={{ color: "#1A1A1A" }}
          >
            Stories told through
            <br />
            feeling and light.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12 md:items-start">
          {stories.map((story, index) => {
            const aspectClass =
              story.aspect === "vertical"
                ? "aspect-[3/4]"
                : story.aspect === "square"
                  ? "aspect-square"
                  : "aspect-[21/9]";

            return (
              <motion.article
                key={story.title}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 45,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={story.className}
              >
                <div
                  className={`group relative mb-6 overflow-hidden ${aspectClass}`}
                >
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    initial={{
                      scale: shouldReduceMotion ? 1 : 1.04,
                    }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.2,
                      delay: shouldReduceMotion ? 0 : index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.7,
                    delay: shouldReduceMotion ? 0 : 0.18 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-t pt-4"
                  style={{ borderColor: "#D8C3A5" }}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p
                        className="mb-2 text-xs uppercase tracking-[0.2em]"
                        style={{ color: "#7A5C45" }}
                      >
                        {story.location}
                      </p>

                      <h3
                        className="font-display text-2xl font-light"
                        style={{ color: "#1A1A1A" }}
                      >
                        {story.title}
                      </h3>
                    </div>

                    <p
                      className="max-w-sm text-sm leading-7 md:text-right"
                      style={{ color: "#5A5A5A" }}
                    >
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
