const values = [
  {
    number: "01",
    title: "Authenticity",
    description:
      "We preserve moments as they happen, creating photographs that feel honest to the people and atmosphere of your day.",
  },
  {
    number: "02",
    title: "Connection",
    description:
      "The relationships surrounding you are at the heart of every celebration. We pay attention to the people who make your story meaningful.",
  },
  {
    number: "03",
    title: "Intention",
    description:
      "Every frame has a purpose. We approach composition, light, timing, and emotion with care rather than simply documenting everything.",
  },
  {
    number: "04",
    title: "Elegance",
    description:
      "Our visual language is refined and timeless, allowing the photographs to remain meaningful long after the day itself has passed.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        {/* Section introduction */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              What Guides Us
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              A way of working built around what matters.
            </h2>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 border-t border-[#D8C3A5] md:mt-28">
          {values.map((value) => (
            <article
              key={value.number}
              className="grid gap-6 border-b border-[#D8C3A5] py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p
                className="text-xs uppercase tracking-[0.2em] md:col-span-2"
                style={{ color: "#7A5C45" }}
              >
                {value.number}
              </p>

              <h3
                className="font-display text-3xl font-light md:col-span-4 md:text-4xl"
                style={{ color: "#1A1A1A" }}
              >
                {value.title}
              </h3>

              <p
                className="max-w-xl text-sm leading-7 md:col-span-5 md:col-start-8 md:text-base"
                style={{ color: "#5A5A5A" }}
              >
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
