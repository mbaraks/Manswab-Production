import StoryHero from "@/components/stories/StoryHero";
import StoryIntroduction from "@/components/stories/StoryIntroduction";
import StoryGallery from "@/components/stories/StoryGallery";
import StoryClosing from "@/components/stories/StoryClosing";

export default function StoryPage() {
  return (
    <main>
      {/* Individual story hero */}
      <StoryHero />

      {/* Story narrative */}
      <StoryIntroduction />

      {/* Editorial photography gallery */}
      <StoryGallery />

      {/* Story conclusion and CTA */}
      <StoryClosing />
    </main>
  );
}
