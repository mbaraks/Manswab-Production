export default function StoryIntroduction() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Editorial label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              The Story
            </p>
          </div>

          {/* Story introduction */}
          <div className="md:col-span-7 md:col-start-5">
            <p
              className="font-display text-[clamp(30px,4vw,52px)] font-light leading-[1.25]"
              style={{ color: "#1A1A1A" }}
            >
              A celebration shaped by connection, laughter, and the quiet
              moments between it all.
            </p>

            <p
              className="mt-10 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              From the anticipation before the ceremony to the final moments
              of the evening, Ali and Alia's celebration unfolded naturally.
              Surrounded by the people closest to them, their day was filled
              with the kind of moments that are felt before they are
              photographed.
            </p>

            <p
              className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Our approach was simple — remain present, observe carefully, and
              preserve the atmosphere of the day as honestly as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
