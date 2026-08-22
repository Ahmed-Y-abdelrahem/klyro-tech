"use client";

import { motion } from "framer-motion";
import { Check, Target, Zap, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";
import { useLocale } from "@/contexts/LocaleContext";

const icons = [Target, Zap, Handshake];

export default function WhyKlyro() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Why Klyro Tech", ar: "لماذا كليرو تك" }}
          title={{
            en: "A partner engineered around outcomes, not output.",
            ar: "شريك مُهندس حول النتائج، لا المخرجات.",
          }}
          description={{
            en: "We built Klyro Tech to close the gap between strategy and execution — one team accountable for the whole system, not a single deliverable.",
            ar: "أسسنا كليرو تك لسد الفجوة بين الاستراتيجية والتنفيذ — فريق واحد مسؤول عن المنظومة كاملة، لا عن مخرج واحد.",
          }}
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {company.differentiators.map((item, index) => {
            const Icon = icons[index] || Check;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative border-t border-line pt-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-mono text-sm text-accent">{item.number}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-text">
                  {t({ en: item.title, ar: item.titleAr })}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t({ en: item.description, ar: item.descriptionAr })}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}