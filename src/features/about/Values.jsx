"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, ShieldCheck, BarChart3, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { coreValues } from "@/data/values";
import { useLocale } from "@/contexts/LocaleContext";

const icons = { Award, Lightbulb, ShieldCheck, BarChart3, Users };

export default function Values() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Our Values", ar: "قيمنا" }}
          title={{
            en: "Five principles behind every engagement.",
            ar: "خمسة مبادئ وراء كل مشروع.",
          }}
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = icons[value.icon] || Award;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-surface p-6 transition-colors duration-300 hover:bg-elevated"
              >
                <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-base font-semibold text-text">
                  {t({ en: value.title, ar: value.titleAr })}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t({ en: value.description, ar: value.descriptionAr })}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}