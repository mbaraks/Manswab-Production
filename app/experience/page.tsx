import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperiencePhilosophy from "@/components/experience/ExperiencePhilosophy";
import ExperienceProcess from "@/components/experience/ExperienceProcess";
import ExperienceApproach from "@/components/experience/ExperienceApproach";
import ExperienceGallery from "@/components/experience/ExperienceGallery";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <ExperiencePhilosophy />
      <ExperienceProcess />
      <ExperienceApproach />
      <ExperienceGallery />
      <ExperienceCTA />
    </main>
  );
}
