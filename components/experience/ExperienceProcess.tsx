const processSteps = [
  {
    number: "01",
    title: "The Conversation",
    description:
      "We begin with a conversation about you, your plans, and what matters most about your celebration.",
  },
  {
    number: "02",
    title: "The Planning",
    description:
      "Once we move forward together, we take time to understand the rhythm of your day and prepare thoughtfully.",
  },
  {
    number: "03",
    title: "The Celebration",
    description:
      "On the day itself, we remain present and observant, allowing genuine moments to unfold naturally.",
  },
  {
    number: "04",
    title: "The Photographs",
    description:
      "After the celebration, your photographs are carefully selected and refined into a collection that tells your story.",
  },
];

export default function ExperienceProcess() {
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
              The Process
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              Considered from beginning to end.
            </h2>

            <p
              className="mt-8 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              A thoughtful experience means knowing what to expect while
              leaving enough space for your day to remain entirely your own.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20 border-t border-[#D8C3A5] md:mt-28">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 border-b border-[#D8C3A5] py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p
                className="text-xs uppercase tracking-[0.2em] md:col-span-2"
                style={{ color: "#7A5C45" }}
              >
                {step.number}
              </p>

              <h3
                className="font-display text-3xl font-light md:col-span-4 md:text-4xl"
                style={{ color: "#1A1A1A" }}
              >
                {step.title}
              </h3>

              <p
                className="max-w-xl text-sm leading-7 md:col-span-5 md:col-start-8 md:text-base"
                style={{ color: "#5A5A5A" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
