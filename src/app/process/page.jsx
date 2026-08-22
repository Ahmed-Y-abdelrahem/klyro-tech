import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import ProcessPrinciples from "@/features/process/ProcessPrinciples";
import { media } from "@/lib/media";

export const metadata = {
  title: "Process",
  description:
    "The five-phase process behind every Klyro Tech engagement — discovery, planning, development, testing, and launch & growth.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        image={media.pages.process}
        eyebrow={{ en: "Our Process", ar: "منهجيتنا" }}
        title={{
          en: "Five phases. The same discipline, every time.",
          ar: "خمس مراحل. الانضباط ذاته، في كل مرة.",
        }}
        description={{
          en: "Every engagement — regardless of service or industry — runs through the same process, so you always know what stage you're in and what happens next.",
          ar: "يمر كل مشروع — بغض النظر عن الخدمة أو القطاع — بالعملية ذاتها، لتعرف دائمًا في أي مرحلة أنت وماذا يحدث بعدها.",
        }}
      />
      <ProcessPrinciples />
      <CTA
        eyebrow={{ en: "Start With Discovery", ar: "ابدأ بالاستكشاف" }}
        title={{
          en: "Every engagement starts the same way — with your goals.",
          ar: "كل مشروع يبدأ بالطريقة ذاتها — بأهدافك.",
        }}
        description={{
          en: "Book a discovery conversation and we'll map where your project sits in the process.",
          ar: "احجز مكالمة استكشاف، وسنحدد لك موقع مشروعك ضمن العملية.",
        }}
      />
    </>
  );
}