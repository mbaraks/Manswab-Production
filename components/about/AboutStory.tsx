export default function AboutStory() {
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
              Our Story
            </p>
          </div>

          {/* Story content */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              The photographs matter.
              <br />
              But so does how you feel making them.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6">
              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                We approach every celebration with curiosity, patience, and
                attention. Rather than trying to manufacture perfect moments,
                we look for the ones that are already there.
              </p>

              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                A glance across the room. A parent holding back a tear. Friends
                laughing when nobody is watching. The quiet pause before
                everything begins.
              </p>

              <p
                className="text-base leading-8 md:text-lg"
                style={{ color: "#5A5A5A" }}
              >
                These details become part of the larger story. Our work is to
                notice them, preserve them, and give them a place in your
                memories for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
