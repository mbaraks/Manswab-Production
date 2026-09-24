"use client";

import { motion, useReducedMotion } from "framer-motion";

const moments = [
  {
    number: "01",
    title: "The Quiet Before",
    description:
      "The stillness before everything begins. The final details, the anticipation, and the feeling that something meaningful is about to unfold.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&h=1200&fit=crop",
  },
  {
    number: "02",
    title: "In Between Moments",
    description:
      "The photographs between the photographs. A glance, a touch, a laugh shared quietly — moments that happen naturally when nobody is watching.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&h=1200&fit=crop",
  },
  {
    number: "03",
    title: "When It All Comes Together",
    description:
      "The celebration in full. The people you love, the energy of the room, and the moments that become part of your family's story.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&h=1200&fit=crop",
  },
];

export default function FeaturedMoments() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F3EEE8] px-6 py-32 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-24 max-w-3xl md:mb-32">
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#7A5C45" }}
          >
            The Moments
          </p>

          <h2
            className="font-display text-[clamp(40px,5vw,64px)] font-light leading-[1.1]"
            style={{ color: "#1A1A1A" }}
          >
            It is the little moments
            <br />
            that stay with us.
          </h2>
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {moments.map((moment, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={moment.number}
                className="grid gap-12 md:grid-cols-12 md:items-center md:gap-8"
              >
                <div
                  className={
                    imageFirst
                      ? "md:col-span-7"
                      : "md:col-span-7 md:col-start-6 md:row-start-1"
                  }
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                    <motion.img
                      src={moment.image}
                      alt={moment.title}
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

                <div
                  className={
                    imageFirst
                      ? "md:col-span-4 md:col-start-9"
                      : "md:col-span-4 md:col-start-2 md:row-start-1"
                  }
                >
                  <div
                    className="mb-8 h-px w-12"
                    style={{ backgroundColor: "#D8C3A5" }}
                  />

                  <p
                    className="mb-5 text-xs uppercase tracking-[0.25em]"
                    style={{ color: "#7A5C45" }}
                  >
                    {moment.number}
                  </p>

                  <h3
                    className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.1]"
                    style={{ color: "#1A1A1A" }}
                  >
                    {moment.title}
                  </h3>

                  <p
                    className="mt-6 text-sm leading-7 md:text-base"
                    style={{ color: "#5A5A5A" }}
                  >
                    {moment.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
