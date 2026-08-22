import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import { media } from "@/lib/media";
import IndustriesGrid from "@/features/industries/IndustriesGrid";
import CoverageMatrix from "@/features/industries/CoverageMatrix";
import RegionalMarkets from "@/features/industries/RegionalMarkets";

export const metadata = {
  title: "Industries",
  description:
    "Klyro Tech partners with e-commerce, real estate, healthcare, food & beverage, logistics, education, SaaS, and digital transformation programs across Egypt, Saudi Arabia, and the GCC.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        image={media.pages.industries}
        eyebrow={{ en: "Industries", ar: "القطاعات" }}
        title={{
          en: "Patterns learned from real engagements.",
          ar: "أنماط اكتسبناها من مشاريع حقيقية.",
        }}
        description={{
          en: "Every sector has different constraints — regulatory, operational, or behavioral. We bring what we've learned building for these industries, not a generic playbook.",
          ar: "لكل قطاع قيوده المختلفة — تنظيمية أو تشغيلية أو سلوكية. نحن نحمل معنا ما تعلمناه من العمل في هذه القطاعات، لا وصفات جاهزة.",
        }}
      />

      <IndustriesGrid />
      <CoverageMatrix />
      <RegionalMarkets />

      <CTA
        eyebrow={{ en: "Don't See Your Industry", ar: "لا ترى قطاعك؟" }}
        title={{
          en: "We adapt our system to your sector.",
          ar: "نكيّف منظومتنا مع قطاعك.",
        }}
        description={{
          en: "These are where we have the deepest pattern library — but our process is built to translate across industries.",
          ar: "هذه القطاعات نملك فيها أعمق مكتبة أنماط — لكن عمليتنا مصممة لتعمل عبر أي قطاع.",
        }}
      />
    </>
  );
}