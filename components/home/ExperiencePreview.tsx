import Link from "next/link";

const experiences = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Before the photographs, there is your story. We take the time to understand what matters to you, so your day feels personal from beginning to end.",
  },
  {
    number: "02",
    title: "Presence",
    description:
      "We believe the best moments happen naturally. Our approach is calm and observant, allowing you to experience your celebration while we preserve it.",
  },
  {
    number: "03",
    title: "Preservation",
    description:
      "Long after the day is over, your photographs should bring you back to how it felt. Every image is created with that lasting connection in mind.",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-24 md:px-20 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-20 max-w-3xl md:mb-28">
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: "#7A5C45" }}
          >
            The Experience
          </p>

          <h2
            className="font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1]"
            style={{ color: "#1A1A1A" }}
          >
            More than photographs.
            <br />
            An experience worth remembering.
          </h2>
        </div>

        <div
          className="border-t"
          style={{ borderColor: "#D8C3A5" }}
        >
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="grid gap-6 border-b py-10 md:grid-cols-12 md:items-start md:gap-8 md:py-14"
              style={{ borderColor: "#D8C3A5" }}
            >
              <div className="md:col-span-1">
                <p
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#7A5C45" }}
                >
                  {experience.number}
                </p>
              </div>

              <div className="md:col-span-4">
                <h3
                  className="font-display text-3xl font-light md:text-4xl"
                  style={{ color: "#1A1A1A" }}
                >
                  {experience.title}
                </h3>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <p
                  className="max-w-xl text-sm leading-7 md:text-base"
                  style={{ color: "#5A5A5A" }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-4 rounded-[8px] px-3 py-2 text-sm transition-all duration-300 hover:bg-[#D8C3A5]/30 active:scale-[0.97]"
            style={{
              color: "#1A1A1A",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span className="border-b border-[#1A1A1A] pb-1 transition-all duration-300 group-hover:border-[#7A5C45] group-hover:text-[#7A5C45]">
              Discover the experience
            </span>

            <span
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7A5C45]"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
