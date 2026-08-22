import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { media } from "@/lib/media";
import ServiceHero from "@/features/services/ServiceHero";
import ServiceDetails from "@/features/services/ServiceDetails";
import ServiceScope from "@/features/services/ServiceScope";
import RelatedServices from "@/features/services/RelatedServices";
import CTA from "@/components/shared/CTA";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} image={media.services[service.slug]} />
      <ServiceDetails service={service} />
      <ServiceScope service={service} />
      <RelatedServices current={service} />
      <CTA
        title={{
          en: `Start a ${service.title.toLowerCase()} engagement.`,
          ar: `ابدأ مشروع ${service.titleAr}.`,
        }}
        description={{
          en: "Tell us about your goals and current setup — we'll come back with a scoped plan.",
          ar: "أخبرنا عن أهدافك ووضعك الحالي، وسنعود إليك بخطة محددة النطاق.",
        }}
      />
    </>
  );
}