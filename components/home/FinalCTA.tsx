"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-28 md:px-20 md:py-48">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-16 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 text-xs uppercase tracking-[0.3em]"
              style={{ color: "#7A5C45" }}
            >
              Your Story, Beautifully Preserved
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(42px,6vw,80px)] font-light leading-[1.05] tracking-[0.01em]"
              style={{ color: "#1A1A1A" }}
            >
              Some moments
              <br />
              deserve to live forever.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-4 md:pt-16"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 h-px w-16 origin-left"
              style={{ backgroundColor: "#D8C3A5" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm text-base leading-8"
              style={{ color: "#5A5A5A" }}
            >
              Your wedding day will move quickly. We are here to preserve the
              feeling, the people, and the moments you never want to forget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/contact"
                className="group relative mt-10 inline-flex touch-manipulation items-center gap-8 overflow-hidden rounded-[12px] border px-7 py-4 transition-all duration-500 active:scale-[0.97] md:px-8"
                style={{
                  borderColor: "#7A5C45",
                  color: "#1A1A1A",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-[#7A5C45] transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <span className="relative z-10 text-xs uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-[#FAF8F5]">
                  Begin Your Story
                </span>

                <span
                  className="relative z-10 text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#FAF8F5]"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 origin-left border-t md:mt-40"
          style={{ borderColor: "#D8C3A5" }}
        />
      </div>
    </section>
  );
}
