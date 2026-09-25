"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2400&h=1600&fit=crop";

export default function ExperienceHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF8F5] px-6 pb-24 pt-40 md:px-20 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-7">
            <p
              className="mb-7 text-xs uppercase tracking-[0.3em]"
              style={{ color: "#7A5C45" }}
            >
              The Experience
            </p>

            <h1
              className="font-display text-[clamp(48px,7vw,96px)] font-light leading-[0.95] tracking-[0.01em]"
              style={{ color: "#1A1A1A" }}
            >
              Your day.
              <br />
              Your story.
              <br />
              Your experience.
            </h1>

            <p
              className="mt-10 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              From our first conversation to the photographs you hold for
              generations, every part of the experience is considered with
              intention.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="aspect-[3/4] overflow-hidden bg-[#F3EEE8]">
              <motion.img
                src={HERO_IMAGE}
                alt="A quiet wedding moment"
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
                className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
