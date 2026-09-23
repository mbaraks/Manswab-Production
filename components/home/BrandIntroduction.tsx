"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BrandIntroduction() {
  const shouldReduceMotion = useReducedMotion();

  const revealTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="bg-cream px-6 py-32 md:px-20 md:py-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.05,
            }}
            className="mb-8 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#D8C3A5" }}
          >
            Our Belief
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.95,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 font-display text-[clamp(32px,4vw,56px)] font-light leading-tight tracking-[0.02em]"
            style={{ color: "#1A1A1A" }}
          >
            For the moments
            <br />
            that matter most.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="max-w-[560px] text-xl font-light leading-[1.8]"
            style={{ color: "#5A5A5A" }}
          >
            Manswab Production preserves the feeling, the people, and the
            moments that make your story yours.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
