const approaches = [
  {
    title: "Present, not intrusive",
    description:
      "We stay close enough to notice the moments that matter, while giving you the freedom to experience your day without constantly thinking about the camera.",
  },
  {
    title: "Guided when it matters",
    description:
      "When a little direction is helpful, we step in with calm, simple guidance so portraits and important moments feel natural rather than overly posed.",
  },
  {
    title: "Attentive to the details",
    description:
      "From the atmosphere of the venue to the smallest personal details, we pay attention to the elements that give your celebration its character.",
  },
];

export default function ExperienceApproach() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Our Approach
            </p>
          </div>

          {/* Introduction */}
          <div className="md:col-span-7 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              There when you need us.
              <br />
              Invisible when you don't.
            </h2>

            <p
              className="mt-8 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Our approach is built around observation, connection, and
              restraint. We want you to remember how your day felt, not how
              often you were asked to pose for it.
            </p>
          </div>
        </div>

        {/* Approach principles */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-3 md:gap-8">
          {approaches.map((approach, index) => (
            <article
              key={approach.title}
              className="border-t border-[#D8C3A5] pt-6"
            >
              <p
                className="mb-8 text-xs uppercase tracking-[0.2em]"
                style={{ color: "#7A5C45" }}
              >
                0{index + 1}
              </p>

              <h3
                className="font-display text-3xl font-light md:text-4xl"
                style={{ color: "#1A1A1A" }}
              >
                {approach.title}
              </h3>

              <p
                className="mt-5 text-sm leading-7 md:text-base"
                style={{ color: "#5A5A5A" }}
              >
                {approach.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
