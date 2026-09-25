"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type StoryCardProps = {
  title: string;
  location: string;
  description: string;
  image: string;
  aspect?: "vertical" | "square" | "wide";
  href?: string;
};

export default function StoryCard({
  title,
  location,
  description,
  image,
  aspect = "vertical",
  href = "/stories",
}: StoryCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const aspectClass =
    aspect === "vertical"
      ? "aspect-[3/4]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[21/9]";

  return (
    <article>
      <Link href={href} className="group block">
        <div
          className={`${aspectClass} overflow-hidden`}
          style={{ backgroundColor: "#F3EEE8" }}
        >
          <motion.img
            src={image}
            alt={`${title} wedding`}
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
          className="mt-6 border-t pt-5"
          style={{ borderColor: "#D8C3A5" }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
            <div>
              <h2
                className="font-display text-2xl font-light md:text-3xl"
                style={{ color: "#1A1A1A" }}
              >
                {title}
              </h2>

              <p
                className="mt-2 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#7A5C45" }}
              >
                {location}
              </p>
            </div>

            <p
              className="max-w-md text-sm leading-7"
              style={{ color: "#5A5A5A" }}
            >
              {description}
            </p>
          </div>

          <div className="mt-5 inline-flex items-center gap-3 text-sm">
            <span
              className="border-b pb-1 transition-colors duration-300 group-hover:text-[#7A5C45]"
              style={{
                color: "#1A1A1A",
                borderColor: "#1A1A1A",
              }}
            >
              View story
            </span>

            <span
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7A5C45]"
              style={{ color: "#1A1A1A" }}
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
