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
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-[12px] border px-7 py-4 text-sm uppercase tracking-widest transition-all duration-500 active:scale-[0.97]"
            style={{
              borderColor: "#7A5C45",
              backgroundColor: "transparent",
              color: "#7A5C45",
              letterSpacing: "0.1em",
              fontWeight: 400,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span
              className="absolute inset-0 origin-left scale-x-0 bg-[#7A5C45] transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden="true"
            />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FAF8F5]">
              Begin Your Story
            </span>

            <span
              className="relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#FAF8F5]"
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
