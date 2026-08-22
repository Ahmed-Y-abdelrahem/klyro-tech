import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import { media } from "@/lib/media";
import ServicesStats from "@/features/services/ServicesStats";
import ServicesIndex from "@/features/services/ServicesIndex";
import IntegratedSystem from "@/features/services/IntegratedSystem";
import CapabilitiesMarquee from "@/features/services/CapabilitiesMarquee";
import EngagementModels from "@/features/services/EngagementModels";
import ProcessStrip from "@/features/services/ProcessStrip";
import ServicesFAQ from "@/features/services/ServicesFAQ";

export const metadata = {
  title: "Services",
  description:
    "Digital marketing, web development, mobile app development, UI/UX design, digital strategy, and corporate branding — six disciplines, one accountable team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={media.pages.services}
        eyebrow={{ en: "Services", ar: "خدماتنا" }}
        title={{
          en: "Six disciplines. One integrated system.",
          ar: "ستة تخصصات. منظومة واحدة متكاملة.",
        }}
        description={{
          en: "From strategy and design to engineering and growth, every service line is built to work together — so nothing gets lost between teams.",
          ar: "من الاستراتيجية والتصميم إلى الهندسة والنمو، كل خط خدمة مصمم ليعمل مع الآخر — فلا يضيع شيء بين الفرق.",
        }}
      />

      <ServicesStats />
      <ServicesIndex />
      <IntegratedSystem />
      <CapabilitiesMarquee />
      <EngagementModels />
      <ProcessStrip />
      <ServicesFAQ />

      <CTA
        eyebrow={{ en: "Not Sure Where To Start", ar: "غير متأكد من أين تبدأ؟" }}
        title={{
          en: "Let's map the right service mix for your goals.",
          ar: "لنحدد معًا مزيج الخدمات الأنسب لأهدافك.",
        }}
        description={{
          en: "Most engagements combine more than one discipline. Tell us the outcome you're after and we'll scope the right approach.",
          ar: "معظم المشاريع تجمع أكثر من تخصص. أخبرنا بالنتيجة التي تسعى إليها، وسنحدد المنهج الأنسب.",
        }}
      />
    </>
  );
}