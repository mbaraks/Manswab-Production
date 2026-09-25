import ContactHero from "@/components/contacts/ContactHero";
import ContactDetails from "@/components/contacts/ContactDetails";
import ContactForm from "@/components/contacts/ContactForm";
import ContactCTA from "@/components/contacts/ContactCTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactCTA />
    </main>
  );
}
