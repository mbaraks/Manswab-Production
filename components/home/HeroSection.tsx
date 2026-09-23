"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1600&fit=crop&auto=format";

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

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "-18%"],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, 0],
  );

  const motionDuration = shouldReduceMotion ? 0 : 0.9;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-ink"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <motion.img
          src={HERO_IMAGE}
          alt="A couple on their wedding day"
          initial={{ scale: shouldReduceMotion ? 1 : 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.75 }}
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

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-6 pb-16 md:px-20 md:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6 text-xs uppercase tracking-[0.3em]"
          style={{ color: "rgba(216,195,165,0.8)" }}
        >
          Wedding Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
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

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration,
            delay: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration,
            delay: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="/consultation"
            className="inline-flex items-center rounded-[12px] px-8 py-4 text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
            style={{
              backgroundColor: "#D8C3A5",
              color: "#1A1A1A",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Begin Your Story
          </Link>
        </motion.div>
      </motion.div>

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
