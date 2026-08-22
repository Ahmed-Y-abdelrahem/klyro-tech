import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/features/contact/ContactSection";
import FAQ from "@/features/contact/FAQ";
import { media } from "@/lib/media";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with Klyro Tech. Reach us by email or phone across Egypt and Saudi Arabia, or send project details directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={media.pages.contact}
        eyebrow={{ en: "Contact", ar: "تواصل معنا" }}
        title={{
          en: "Let's start with your goals.",
          ar: "لنبدأ من أهدافك.",
        }}
        description={{
          en: "Tell us what you're building and we'll come back with a clear next step — no generic sales pitch.",
          ar: "أخبرنا عما تبنيه، وسنعود إليك بخطوة تالية واضحة — دون عبارات بيع عامة.",
        }}
      />
      <ContactSection />
      <FAQ />
    </>
  );
}