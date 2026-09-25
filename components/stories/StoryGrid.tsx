import StoryCard from "./StoryCard";

const stories = [
  {
    title: "Ali & Alia",
    location: "Amwaj Seafront Venue",
    description:
      "A celebration filled with warmth, movement, and the people who made their day unforgettable.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=2133&fit=crop",
    aspect: "vertical" as const,
  },
  {
    title: "Sarah & James",
    location: "Nairobi, Kenya",
    description:
      "An intimate celebration shaped by quiet moments and genuine connection.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&h=1400&fit=crop",
    aspect: "square" as const,
  },
  {
    title: "Daniel & Amina",
    location: "Zanzibar, Tanzania",
    description:
      "A joyful coastal celebration where every moment unfolded naturally.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=2200&h=943&fit=crop",
    aspect: "wide" as const,
  },
];

export default function StoryGrid() {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-32 md:px-20 md:pb-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-x-8 md:gap-y-28">
          <div className="md:col-span-7">
            <StoryCard {...stories[0]} />
          </div>

          <div className="md:col-span-4 md:col-start-9 md:mt-32">
            <StoryCard {...stories[1]} />
          </div>

          <div className="md:col-span-10 md:col-start-2">
            <StoryCard {...stories[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
