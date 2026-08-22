"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { perks } from "@/data/roles";
import { useLocale } from "@/contexts/LocaleContext";

export default function Culture() {
  const { t } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Why Klyro Tech", ar: "لماذا كليرو تك" }}
          title={{
            en: "What it's like to work here.",
            ar: "كيف يبدو العمل هنا.",
          }}
          description={{
            en: "A small, cross-disciplinary team that ships real work for real clients — with ownership from day one.",
            ar: "فريق صغير متعدد التخصصات يسلّم عملًا حقيقيًا لعملاء حقيقيين — بمسؤولية منذ اليوم الأول.",
          }}
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-surface p-6 transition-colors duration-300 hover:bg-elevated"
            >
              <h3 className="font-display text-base font-semibold text-text transition-colors group-hover:text-accent">
                {t({ en: perk.title, ar: perk.titleAr })}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t({ en: perk.description, ar: perk.descriptionAr })}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}