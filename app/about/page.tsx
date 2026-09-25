import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutGallery from "@/components/about/AboutGallery";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutGallery />
      <AboutCTA />
    </main>
  );
}
