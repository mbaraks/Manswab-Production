"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1600&fit=crop&auto=format";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-ink">
        <img
          src={HERO_IMAGE}
          alt="A couple on their wedding day"
          className="h-full w-full object-cover"
          style={{ opacity: 0.75 }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.65) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-6 pb-16 md:px-20 md:pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs uppercase tracking-[0.3em]"
          style={{ color: "rgba(216,195,165,0.8)" }}
        >
          Wedding Photography
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-6 max-w-[800px] font-display font-light leading-none tracking-[0.02em]"
          style={{
            color: "#FAF8F5",
            fontSize: "clamp(48px, 7vw, 96px)",
          }}
        >
          Timeless Moments.
          <br />
          Held Forever.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-10 max-w-lg font-light"
          style={{
            color: "rgba(250,248,245,0.75)",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          We preserve life's most meaningful moments with timeless imagery
          that families and friends will cherish for generations.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/consultation"
            className="inline-flex items-center px-8 py-4 text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: "#D8C3A5",
              color: "#1A1A1A",
              borderRadius: "12px",
            }}
          >
            Begin Your Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-3 md:right-20"
      >
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-12 w-px"
          style={{
            backgroundColor: "rgba(216,195,165,0.5)",
          }}
        />
      </motion.div>
    </section>
  );
}