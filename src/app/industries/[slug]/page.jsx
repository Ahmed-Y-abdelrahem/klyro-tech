import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/data/industries";
import { media } from "@/lib/media";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import IndustryDetails from "@/features/industries/IndustryDetails";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        image={media.industries?.[industry.slug] || media.pages.industries}
        eyebrow={{ en: "Industry", ar: "القطاع" }}
        title={{ en: industry.title, ar: industry.titleAr }}
        description={{ en: industry.description, ar: industry.descriptionAr }}
      />
      <IndustryDetails industry={industry} />
      <CTA
        title={{
          en: `Building for ${industry.title.toLowerCase()}?`,
          ar: `أتبني لقطاع ${industry.titleAr}؟`,
        }}
        description={{
          en: "Let's talk through the specific constraints your industry brings and how our process adapts to them.",
          ar: "لنتحدث عن القيود الخاصة التي يفرضها قطاعك، وكيف تتكيف عمليتنا معها.",
        }}
      />
    </>
  );
}