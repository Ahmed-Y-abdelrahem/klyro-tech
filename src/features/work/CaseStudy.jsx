"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useLocale } from "@/contexts/LocaleContext";

export default function CaseStudy({ item }) {
  const { t } = useLocale();

  const blocks = [
    {
      label: { en: "The Challenge", ar: "التحدي" },
      text: { en: item.challenge, ar: item.challengeAr },
    },
    {
      label: { en: "Our Approach", ar: "منهجنا" },
      text: { en: item.approach, ar: item.approachAr },
    },
    {
      label: { en: "The Outcome", ar: "النتيجة" },
      text: { en: item.outcome, ar: item.outcomeAr },
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border-t border-line pt-6"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t(block.label)}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t(block.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}