"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "The photographs brought us straight back to the feeling of that day. Every image felt honest, beautiful, and completely us.",
    names: "Sarah & James",
    location: "Nairobi, Kenya",
  },
  {
    quote:
      "There was something incredibly calm about having Manswab Production there. We could simply enjoy our day and trust the moments were being captured.",
    names: "Ali & Alia",
    location: "Mombasa, Kenya",
  },
  {
    quote:
      "Looking through our photographs feels like stepping back into the celebration. The emotions, the people, and all the little moments are still there.",
    names: "Daniel & Amina",
    location: "Zanzibar, Tanzania",
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => current - 1);
  };

  const goToNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -24,
    },
  };

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === testimonials.length - 1;

  return (
    <section className="bg-[#7A5C45] px-6 py-24 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: "#D8C3A5" }}
          >
            Testimonials
          </p>
        </motion.div>

        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <blockquote
                className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.12]"
                style={{ color: "#FAF8F5" }}
              >
                “{activeTestimonial.quote}”
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-details`}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : -16,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className="mb-2 text-sm"
                style={{ color: "#FAF8F5" }}
              >
                {activeTestimonial.names}
              </p>

              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#D8C3A5" }}
              >
                {activeTestimonial.location}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4">
            {!isFirst && (
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:bg-[#D8C3A5] hover:text-[#7A5C45] active:scale-[0.94]"
                style={{
                  borderColor: "rgba(216,195,165,0.6)",
                  color: "#D8C3A5",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                ←
              </button>
            )}

            {!isLast && (
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:bg-[#D8C3A5] hover:text-[#7A5C45] active:scale-[0.94]"
                style={{
                  borderColor: "rgba(216,195,165,0.6)",
                  color: "#D8C3A5",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
