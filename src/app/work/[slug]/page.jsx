import { notFound } from "next/navigation";
import { work, getWorkBySlug } from "@/data/work";
import { media } from "@/lib/media";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import CaseStudy from "@/features/work/CaseStudy";
import CaseResults from "@/features/work/CaseResults";
import RelatedWork from "@/features/work/RelatedWork";

export async function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        image={media.workImages[item.slug]}
        eyebrow={`${item.category} · ${item.year}`}
        title={item.title}
        description={item.summary}
      />
      <CaseResults item={item} />
      <CaseStudy item={item} />
      <RelatedWork current={item} />
      <CTA
        title={{
          en: "Interested in a similar outcome?",
          ar: "مهتم بتحقيق نتيجة مشابهة؟",
        }}
        description={{
          en: "Let's talk through your goals and how a similar approach could apply to your project.",
          ar: "لنتحدث عن أهدافك وكيف يمكن لمنهج مشابه أن يخدم مشروعك.",
        }}
      />
    </>
  );
}