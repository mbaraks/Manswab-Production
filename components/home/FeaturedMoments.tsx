"use client";

import { motion, useReducedMotion } from "framer-motion";

const moments = [
  {
    number: "01",
    title: "Before the celebration",
    description:
      "The quiet moments before everything begins. A breath, a glance, and the anticipation of what is to come.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "In the moment",
    description:
      "The laughter, movement, and emotion that make every celebration completely their own.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "When it all settles",
    description:
      "The moments after the celebration — when the people, places, and emotions become memories.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1800&auto=format&fit=crop",
  },
];

export default function FeaturedMoments() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F3EEE8] px-6 py-24 md:px-20 md:py-32">
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
            Featured Moments
          </p>

          <h2
            className="font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] tracking-[0.01em]"
            style={{ color: "#1A1A1A" }}
          >
            The moments
            <br />
            between.
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.number}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              <div
                className={`group relative overflow-hidden ${
                  index % 2 === 0
                    ? "md:col-span-8"
                    : "md:col-span-8 md:col-start-5"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={moment.image}
                    alt={moment.title}
                    initial={{
                      scale: shouldReduceMotion ? 1 : 1.05,
                    }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.2,
                      delay: shouldReduceMotion ? 0 : index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 25,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.2 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`md:col-span-4 ${
                  index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"
                }`}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.7,
                    delay: shouldReduceMotion ? 0 : 0.3 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-6 h-px w-12 origin-left"
                  style={{ backgroundColor: "#D8C3A5" }}
                />

                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="text-xs tracking-[0.2em]"
                    style={{ color: "#7A5C45" }}
                  >
                    {moment.number}
                  </span>

                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: "#D8C3A5" }}
                  />
                </div>

                <h3
                  className="mb-5 font-display text-3xl font-light leading-tight md:text-4xl"
                  style={{ color: "#1A1A1A" }}
                >
                  {moment.title}
                </h3>

                <p
                  className="max-w-sm text-sm leading-7"
                  style={{ color: "#5A5A5A" }}
                >
                  {moment.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
