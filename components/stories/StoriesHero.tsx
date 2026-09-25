export default function StoriesHero() {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-24 pt-40 md:px-20 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p
            className="mb-7 text-xs uppercase tracking-[0.3em]"
            style={{ color: "#7A5C45" }}
          >
            Wedding Stories
          </p>

          <h1
            className="font-display text-[clamp(48px,7vw,96px)] font-light leading-[0.95] tracking-[0.01em]"
            style={{ color: "#1A1A1A" }}
          >
            Stories that
            <br />
            stay with you.
          </h1>

          <p
            className="mt-10 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "#5A5A5A" }}
          >
            Every celebration has its own rhythm, its own people, and its own
            moments. These are the stories we have had the privilege of
            preserving.
          </p>
        </div>
      </div>
    </section>
  );
}
