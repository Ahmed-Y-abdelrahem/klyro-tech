import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import WorkGrid from "@/features/work/WorkGrid";
import { media } from "@/lib/media";

export const metadata = {
  title: "Work",
  description:
    "Case studies from Klyro Tech across e-commerce, real estate, healthcare, logistics, branding, and education.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        image={media.pages.work}
        eyebrow={{ en: "Selected Work", ar: "أعمال مختارة" }}
        title={{
          en: "Real delivery stories, not portfolio filler.",
          ar: "قصص تسليم حقيقية، لا حشو أعمال.",
        }}
        description={{
          en: "Each engagement below reflects an actual challenge, approach, and outcome — the same way we'll document yours.",
          ar: "كل مشروع أدناه يعكس تحديًا ومنهجًا ونتيجة حقيقية — بالطريقة ذاتها التي سنوثق بها مشروعك.",
        }}
      />
      <WorkGrid />
      <CTA
        eyebrow={{ en: "Your Project Next", ar: "مشروعك هو التالي" }}
        title={{
          en: "Let's build the next case study together.",
          ar: "لنبنِ معًا دراسة الحالة القادمة.",
        }}
        description={{
          en: "Tell us about the outcome you're after — we'll show you how we'd approach it.",
          ar: "أخبرنا عن النتيجة التي تسعى إليها، وسنريك كيف سنعالجها.",
        }}
      />
    </>
  );
}