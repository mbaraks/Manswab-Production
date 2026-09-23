import HeroSection from "@/components/home/HeroSection";
import BrandIntroduction from "@/components/home/BrandIntroduction";
import FeaturedStories from "@/components/home/FeaturedStories";
import FeaturedMoments from "@/components/home/FeaturedMoments";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandIntroduction />
      <FeaturedStories />
      <FeaturedMoments />
      <ExperiencePreview />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}