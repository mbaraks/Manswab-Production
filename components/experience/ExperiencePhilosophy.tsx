export default function ExperiencePhilosophy() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Our Philosophy
            </p>
          </div>

          {/* Philosophy content */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              We believe the best photographs are the ones that feel like
              memories.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6">
              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                Your wedding day is not a photoshoot. It is a collection of
                moments, people, emotions, and experiences that happen only
                once.
              </p>

              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                Our role is to be present without taking you out of the
                moment. We observe, anticipate, and create space for the day
                to unfold naturally.
              </p>

              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                The result is imagery that feels honest, refined, and deeply
                connected to the people and atmosphere that made your
                celebration yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
