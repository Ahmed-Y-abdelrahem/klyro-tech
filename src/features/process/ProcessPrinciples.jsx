"use client";

import { motion } from "framer-motion";
import { FileCheck2, GitBranch, LineChart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import { process } from "@/data/process";
import { useLocale } from "@/contexts/LocaleContext";

const principles = [
  {
    icon: GitBranch,
    title: { en: "Structured & Repeatable", ar: "منظمة وقابلة للتكرار" },
    description: {
      en: "The same five phases run across every engagement — no skipped steps, no improvisation.",
      ar: "تسير المراحل الخمس ذاتها في كل مشروع — لا خطوات تُتخطى ولا ارتجال.",
    },
  },
  {
    icon: FileCheck2,
    title: { en: "Clear Output Per Phase", ar: "مخرج واضح لكل مرحلة" },
    description: {
      en: "Each phase ends with a defined deliverable that feeds directly into the next one.",
      ar: "تنتهي كل مرحلة بمخرج محدد يغذي المرحلة التالية مباشرة.",
    },
  },
  {
    icon: LineChart,
    title: { en: "Transparent Reporting", ar: "تقارير شفافة" },
    description: {
      en: "You always know what stage you're in, what's done, and what comes next.",
      ar: "لتعرف دائمًا في أي مرحلة أنت، وما الذي أُنجز، وما التالي.",
    },
  },
];

export default function ProcessPrinciples() {
  const { t } = useLocale();

  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow={{ en: "How It Works", ar: "كيف تعمل" }}
                title={{
                  en: "Structured, transparent, repeatable.",
                  ar: "منظمة، شفافة، قابلة للتكرار.",
                }}
                description={{
                  en: "No engagement skips a phase. Each one has a clear output that feeds directly into the next.",
                  ar: "لا يتخطى أي مشروع مرحلة؛ فلكل مرحلة مخرج واضح يغذي المرحلة التالية.",
                }}
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Timeline />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow={{ en: "Principles", ar: "مبادئ" }}
            title={{
              en: "Three rules we never break.",
              ar: "ثلاث قواعد لا نكسرها أبدًا.",
            }}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group rounded-2xl border border-line bg-surface p-8 transition-colors duration-500 hover:border-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated transition-colors group-hover:border-accent/50">
                  <principle.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-text">
                  {t(principle.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(principle.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow={{ en: "Inside Each Phase", ar: "داخل كل مرحلة" }}
            title={{
              en: "What actually happens.",
              ar: "ما الذي يحدث فعليًا.",
            }}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {process.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <span className="font-mono text-sm text-accent">{step.number}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-text">
                  {t({ en: step.title, ar: step.titleAr })}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t({ en: step.description, ar: step.descriptionAr })}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                  {t({ en: step.details, ar: step.detailsAr })}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}