import ConsultationHero from "@/components/consultation/ConsultationHero";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import ConsultationDetails from "@/components/consultation/ConsultationDetails";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";

export default function ConsultationPage() {
  return (
    <main>
      <ConsultationHero />
      <ConsultationForm />
      <ConsultationDetails />
      <ConsultationCTA />
    </main>
  );
}
