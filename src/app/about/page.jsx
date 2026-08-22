import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import { media } from "@/lib/media";
import CompanyOverview from "@/features/about/CompanyOverview";
import CeoMessage from "@/features/about/CeoMessage";
import MissionVision from "@/features/about/MissionVision";
import Values from "@/features/about/Values";
import Differentiators from "@/features/about/Differentiators";
import ValueCreation from "@/features/about/ValueCreation";
import SwotAnalysis from "@/features/about/SwotAnalysis";

export const metadata = {
  title: "About",
  description:
    "Klyro Tech is a digital partner combining strategy, design, technology, and marketing under one ecosystem — engineered around measurable outcomes.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={media.pages.about}
        eyebrow={{ en: "About Klyro Tech", ar: "عن كليرو تك" }}
        title={{
          en: "A digital partner engineered like a product studio.",
          ar: "شريك رقمي مُهندس بعقلية استوديو منتجات عالمي.",
        }}
        description={{
          en: "We combine strategy, creativity, and technology to build solutions that deliver real results.",
          ar: "نجمع بين الاستراتيجية والإبداع والتقنية لبناء حلول تحقق نتائج حقيقية.",
        }}
      />
      <CompanyOverview />
      <CeoMessage />
      <MissionVision />
      <Values />
      <Differentiators />
      <ValueCreation />
      <SwotAnalysis />
      <CTA
        title={{
          en: "Ready to build with a partner, not a vendor?",
          ar: "جاهز للبناء مع شريك، لا مجرد مورد؟",
        }}
        description={{
          en: "Tell us about your goals — we'll show you how strategy, design, and engineering come together at Klyro Tech.",
          ar: "أخبرنا عن أهدافك، وسنريك كيف تكتمل الاستراتيجية والتصميم والهندسة في كليرو تك.",
        }}
      />
    </>
  );
}