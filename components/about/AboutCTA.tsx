import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#7A5C45] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Section label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#D8C3A5" }}
            >
              Your Story
            </p>
          </div>

          {/* CTA content */}
          <div className="md:col-span-8 md:col-start-5">
            <h2
              className="font-display text-[clamp(42px,5vw,72px)] font-light leading-[1.05]"
              style={{ color: "#FAF8F5" }}
            >
              Let&apos;s make something
              <br />
              worth remembering.
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "rgba(250,248,245,0.78)" }}
            >
              If our approach feels right for you, we would love to hear about
              your celebration and begin the conversation.
            </p>

            {/* Primary CTA */}
            <Link
              href="/consultation"
              className="group mt-10 inline-flex items-center gap-4 rounded-[12px] px-6 py-4 text-sm uppercase tracking-[0.12em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:translate-y-0 active:scale-[0.98]"
              style={{
                backgroundColor: "#D8C3A5",
                color: "#1A1A1A",
              }}
            >
              <span>Begin Your Story</span>

              <span
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
