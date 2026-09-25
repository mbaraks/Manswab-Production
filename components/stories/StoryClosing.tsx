import Link from "next/link";

export default function StoryClosing() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-28 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Closing label */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#7A5C45" }}
            >
              Until the next story
            </p>
          </div>

          {/* Closing content */}
          <div className="md:col-span-7 md:col-start-5">
            <h2
              className="font-display text-[clamp(40px,5vw,68px)] font-light leading-[1.05]"
              style={{ color: "#1A1A1A" }}
            >
              The day ends.
              <br />
              The memories remain.
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "#5A5A5A" }}
            >
              Every celebration has its own rhythm and its own story. We are
              here to preserve yours with honesty, intention, and care.
            </p>

            {/* Primary story CTA */}
            <Link
              href="/consultation"
              className="group mt-10 inline-flex items-center gap-5 rounded-[12px] bg-[#D8C3A5] px-7 py-4 text-sm uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:translate-y-0 active:scale-[0.98]"
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
