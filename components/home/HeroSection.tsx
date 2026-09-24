"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1600&fit=crop";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1],
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"],
  );

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Hero photography */}
      <motion.div
        className="absolute inset-0 bg-ink"
        style={{
          scale: shouldReduceMotion ? 1 : backgroundScale,
          y: shouldReduceMotion ? 0 : backgroundY,
        }}
      >
        <motion.img
          src={HERO_IMAGE}
          alt="A couple on their wedding day"
          initial={{
            scale: shouldReduceMotion ? 1 : 1.08,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 0.75,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.65) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-6 pb-16 md:px-20 md:pb-24">
        <p
          className="mb-6 text-xs uppercase tracking-[0.3em]"
          style={{ color: "rgba(216,195,165,0.8)" }}
        >
          Wedding Photography
        </p>

        <h1
          className="mb-6 max-w-[800px] font-display font-light leading-none tracking-[0.02em]"
          style={{
            color: "#FAF8F5",
            fontSize: "clamp(48px, 7vw, 96px)",
          }}
        >
          Timeless Moments.
          <br />
          Held Forever.
        </h1>

        <p
          className="mb-10 max-w-lg font-light"
          style={{
            color: "rgba(250,248,245,0.75)",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          We preserve life's most meaningful moments with timeless imagery
          that families and friends will cherish for generations.
        </p>

        <Link
          href="/consultation"
          className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-[12px] px-6 py-3 text-sm uppercase tracking-widest transition-all duration-500 active:scale-[0.97] md:px-8 md:py-4"
          style={{
            backgroundColor: "#D8C3A5",
            color: "#1A1A1A",
            letterSpacing: "0.1em",
            fontWeight: 400,
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Hover background */}
          <span
            className="absolute inset-0 origin-left scale-x-0 bg-[#7A5C45] transition-transform duration-500 ease-out group-hover:scale-x-100"
            aria-hidden="true"
          />

          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FAF8F5]">
            Begin Your Story
          </span>

          <span
            className="relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#FAF8F5]"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 1.2,
        }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-3 md:right-20"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.5 }
              : { opacity: [0.3, 0.8, 0.3] }
          }
          transition={{
            duration: 2,
            repeat: shouldReduceMotion ? 0 : Infinity,
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
