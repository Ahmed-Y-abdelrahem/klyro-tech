"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";

const steps = [
  {
    number: "01",
    title: { en: "Apply", ar: "قدّم" },
    description: {
      en: "Send your CV or portfolio with the role title in the subject line.",
      ar: "أرسل سيرتك الذاتية أو معرض أعمالك مع ذكر اسم الوظيفة في عنوان الرسالة.",
    },
  },
  {
    number: "02",
    title: { en: "Intro Call", ar: "مكالمة تعارف" },
    description: {
      en: "A 30-minute conversation about your experience and what you want next.",
      ar: "محادثة لمدة 30 دقيقة حول خبرتك وما تطمح إليه في محطتك القادمة.",
    },
  },
  {
    number: "03",
    title: { en: "Practical Session", ar: "جلسة عملية" },
    description: {
      en: "A short, paid exercise on a real problem — no whiteboard puzzles.",
      ar: "تمرين قصير مدفوع الأجر على مشكلة حقيقية — لا ألغاز نظرية.",
    },
  },
  {
    number: "04",
    title: { en: "Offer & Onboarding", ar: "العرض والانضمام" },
    description: {
      en: "Clear feedback either way, and fast onboarding when it's a match.",
      ar: "ملاحظات واضحة في الحالتين، وانضمام سريع عند وجود توافق.",
    },
  },
];

export default function HiringProcess() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Hiring Process", ar: "عملية التوظيف" }}
          title={{
            en: "Four steps. No ghosting.",
            ar: "أربع خطوات، ودون أن نختفي عنك.",
          }}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span className="font-mono text-sm text-accent">{step.number}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text">
                {t(step.title)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t(step.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}