import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#F3EEE8] px-6 py-32 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-4xl">
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#7A5C45" }}
          >
            Your Story, Beautifully Preserved
          </p>

          <h2
            className="font-display text-[clamp(44px,6vw,80px)] font-light leading-[1.05]"
            style={{ color: "#1A1A1A" }}
          >
            Some moments
            <br />
            deserve to live forever.
          </h2>

          <p
            className="mt-8 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "#5A5A5A" }}
          >
            Your wedding day moves quickly. The photographs remain. Let us
            create something that brings you back to how it felt, long after
            the celebration is over.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 rounded-[12px] bg-[#D8C3A5] px-6 py-4 text-sm uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#7A5C45] hover:text-[#FAF8F5] hover:shadow-[0_10px_30px_rgba(26,26,26,0.12)] active:translate-y-0 active:scale-[0.98]"
            style={{
              fontWeight: 400,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span>Begin Your Story</span>

            <span
              className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        <div
          className="mt-24 h-px w-full"
          style={{ backgroundColor: "#D8C3A5" }}
        />
      </div>
    </section>
  );
}
