import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import Culture from "@/features/careers/Culture";
import OpenRoles from "@/features/careers/OpenRoles";
import HiringProcess from "@/features/careers/HiringProcess";
import { media } from "@/lib/media";

export const metadata = {
  title: "Careers",
  description:
    "Join Klyro Tech — a remote-first team building strategy, design, and engineering work across Egypt, Saudi Arabia, and the GCC.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        image={media.pages.careers}
        eyebrow={{ en: "Careers", ar: "الوظائف" }}
        title={{
          en: "Build growth systems for real clients, not internal drills.",
          ar: "ابنِ أنظمة نمو لعملاء حقيقيين، لا تمارين داخلية.",
        }}
        description={{
          en: "We're a small, cross-disciplinary team working across strategy, design, engineering, and marketing. If you want ownership over real outcomes, we'd like to hear from you.",
          ar: "نحن فريق صغير متعدد التخصصات يعمل عبر الاستراتيجية والتصميم والهندسة والتسويق. إن كنت تريد مسؤولية حقيقية عن نتائج حقيقية، يسعدنا أن نسمع منك.",
        }}
      />
      <Culture />
      <OpenRoles />
      <HiringProcess />
      <CTA
        title={{
          en: "Not sure? Start with a conversation.",
          ar: "غير متأكد؟ ابدأ بمحادثة.",
        }}
        description={{
          en: "Tell us what you're great at — we'll tell you honestly if there's a fit.",
          ar: "أخبرنا بما تتقن — وسنخبرك بصدق إن كان هناك توافق.",
        }}
        primaryLabel={{ en: "Send Your Portfolio", ar: "أرسل معرض أعمالك" }}
      />
    </>
  );
}