"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import { process } from "@/data/process";
import { useLocale } from "@/contexts/LocaleContext";

export default function ProcessStrip() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={{ en: "Delivery Process", ar: "منهجية التسليم" }}
            title={{
              en: "The same five phases behind every service.",
              ar: "المراحل الخمس ذاتها وراء كل خدمة.",
            }}
          />
          <Button href="/process" variant="secondary" className="shrink-0">
            {t({ en: "Explore The Full Process", ar: "استكشف العملية كاملة" })}
          </Button>
        </div>

        <div className="relative mt-16">
          {/* Spine line */}
          <div className="absolute inset-x-10 top-6 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-space font-mono text-sm text-accent shadow-glow">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-text">
                  {t({ en: step.title, ar: step.titleAr })}
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-xs leading-relaxed text-muted">
                  {t({ en: step.description, ar: step.descriptionAr })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}