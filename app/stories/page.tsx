import StoriesHero from "@/components/stories/StoriesHero";
import FeaturedStory from "@/components/stories/FeaturedStory";
import StoryGrid from "@/components/stories/StoryGrid";

export default function StoriesPage() {
  return (
    <main>
      <StoriesHero />
      <FeaturedStory />
      <StoryGrid />
    </main>
  );
}
