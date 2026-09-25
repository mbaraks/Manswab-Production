export default function ConsultationDetails() {
  const steps = [
    {
      number: "01",
      title: "We Read Your Story",
      description:
        "We take the time to understand your plans, your priorities, and what you want your photographs to feel like.",
    },
    {
      number: "02",
      title: "We Start A Conversation",
      description:
        "We will get back to you to talk through your celebration, answer your questions, and explore whether we are the right fit.",
    },
    {
      number: "03",
      title: "We Plan Together",
      description:
        "If everything feels right, we will guide you through the next steps and begin thoughtfully preparing for your day.",
    },
  ];

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
              What Happens Next
            </p>
          </div>

          {/* Content */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              A simple beginning.
              <br />
              A thoughtful process.
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Getting to know each other is the first part of creating
              photographs that feel personal, honest, and true to your day.
            </p>

            {/* Steps */}
            <div className="mt-14 border-t border-[#D8C3A5]">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-[#D8C3A5] py-8 md:grid-cols-12 md:gap-8"
                >
                  <p
                    className="text-xs uppercase tracking-[0.2em] md:col-span-2"
                    style={{ color: "#7A5C45" }}
                  >
                    {step.number}
                  </p>

                  <div className="md:col-span-4">
                    <h3
                      className="font-display text-2xl font-light md:text-3xl"
                      style={{ color: "#1A1A1A" }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-7 md:col-span-5 md:col-start-8"
                    style={{ color: "#5A5A5A" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

