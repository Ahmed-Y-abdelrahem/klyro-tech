"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const models = [
  {
    id: "project",
    index: "Model 01",
    title: { en: "Fixed-Scope Project", ar: "مشروع محدد النطاق" },
    description: {
      en: "A defined deliverable with a clear timeline, milestones, and price.",
      ar: "مخرج محدد بجدول زمني ومحطات وسعر واضحين.",
    },
    features: [
      { en: "Clear scope and deliverables", ar: "نطاق ومخرجات واضحة" },
      { en: "Defined timeline and milestones", ar: "جدول زمني ومحطات محددة" },
      { en: "Fixed, transparent pricing", ar: "تسعير ثابت وشفاف" },
    ],
    bestFor: { en: "Websites, applications, and branding builds.", ar: "بناء المواقع والتطبيقات والهويات." },
    featured: false,
  },
  {
    id: "retainer",
    index: "Model 02",
    title: { en: "Growth Retainer", ar: "اشتراك النمو" },
    description: {
      en: "Ongoing marketing and optimization working as your growth team.",
      ar: "تسويق وتحسين مستمر يعملان كفريق نمو خاص بك.",
    },
    features: [
      { en: "Monthly planning and reporting", ar: "تخطيط وإبلاغ شهري" },
      { en: "Continuous optimization across channels", ar: "تحسين مستمر عبر القنوات" },
      { en: "Flexible priority adjustments", ar: "مرونة في تعديل الأولويات" },
    ],
    bestFor: { en: "Digital marketing and continuous growth.", ar: "التسويق الرقمي والنمو المستمر." },
    featured: true,
    badge: { en: "Most Common", ar: "الأكثر شيوعًا" },
  },
  {
    id: "partnership",
    index: "Model 03",
    title: { en: "Long-Term Partnership", ar: "شراكة طويلة الأمد" },
    description: {
      en: "An embedded partner covering strategy, design, engineering, and growth.",
      ar: "شريك مدمج يغطي الاستراتيجية والتصميم والهندسة والنمو.",
    },
    features: [
      { en: "Dedicated cross-disciplinary team", ar: "فريق مخصص متعدد التخصصات" },
      { en: "Roadmap aligned to business goals", ar: "خارطة طريق محاذاة لأهداف العمل" },
      { en: "Priority support and quarterly reviews", ar: "دعم ذو أولوية ومراجعات ربع سنوية" },
    ],
    bestFor: { en: "Companies scaling across markets.", ar: "الشركات المتوسعة عبر الأسواق." },
    featured: false,
  },
];

export default function EngagementModels() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Engagement Models", ar: "نماذج التعاون" }}
          title={{
            en: "Three ways to work with us.",
            ar: "ثلاث طرق للعمل معنا.",
          }}
          description={{
            en: "Every engagement — whatever the model — runs through the same five-phase process.",
            ar: "كل أشكال التعاون — أيًا كان النموذج — تمر بالعملية ذاتها ذات المراحل الخمس.",
          }}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1",
                model.featured
                  ? "border-accent/50 bg-elevated shadow-glow"
                  : "border-line bg-surface hover:border-accent/30"
              )}
            >
              {model.featured ? (
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
              ) : null}

              {model.featured ? (
                <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#05060F]">
                  <Sparkles className="h-3 w-3" />
                  {t(model.badge)}
                </span>
              ) : null}

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {model.index}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-text">
                {t(model.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t(model.description)}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {model.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {t(feature)}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-lg border border-line bg-space/40 px-4 py-3 font-mono text-xs text-muted">
                <span className="text-accent">
                  {t({ en: "Best for:", ar: "الأنسب لـ:" })}
                </span>{" "}
                {t(model.bestFor)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}