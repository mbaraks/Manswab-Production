import HeroSection from "@/components/home/HeroSection";
import BrandIntroduction from "@/components/home/BrandIntroduction";
import FeaturedStories from "@/components/home/FeaturedStories";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandIntroduction />
      <FeaturedStories />
    </main>
  );
}