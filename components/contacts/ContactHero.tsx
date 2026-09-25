export default function ContactHero() {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-24 pt-40 md:px-20 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#7A5C45" }}
            >
              Get In Touch
            </p>
          </div>

          {/* Introduction */}
          <div className="md:col-span-8 md:col-start-5">
            <h1
              className="font-display text-[clamp(48px,7vw,96px)] font-light leading-[0.95] tracking-[0.01em]"
              style={{ color: "#1A1A1A" }}
            >
              Let&apos;s talk
              <br />
              about your story.
            </h1>

            <p
              className="mt-10 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Whether you are planning your wedding or simply want to learn
              more about working together, we would love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
