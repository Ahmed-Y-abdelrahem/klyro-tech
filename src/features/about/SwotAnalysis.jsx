"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { swot } from "@/data/values";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function SwotAnalysis() {
  const { t } = useLocale();

  const quadrants = [
    { letter: "S", title: { en: "Strengths", ar: "نقاط القوة" }, items: swot.strengths, highlight: true },
    { letter: "W", title: { en: "Weaknesses", ar: "نقاط الضعف" }, items: swot.weaknesses, highlight: false },
    { letter: "O", title: { en: "Opportunities", ar: "الفرص" }, items: swot.opportunities, highlight: true },
    { letter: "T", title: { en: "Threats", ar: "التهديدات" }, items: swot.threats, highlight: false },
  ];

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "SWOT Analysis", ar: "تحليل سوات" }}
          title={{
            en: "We know exactly where we stand.",
            ar: "ندرك تمامًا موقعنا.",
          }}
          description={{
            en: "Honest self-assessment is part of how we operate — the same clarity we bring to your business.",
            ar: "التقييم الذاتي الصادق جزء من منهجنا — وهو الوضوح ذاته الذي نقدمه لعملك.",
          }}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {quadrants.map((q, i) => (
            <motion.div
              key={q.letter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "rounded-2xl border p-8 transition-colors duration-300",
                q.highlight
                  ? "border-accent/30 bg-surface hover:border-accent/60"
                  : "border-line bg-surface hover:border-line-strong"
              )}
            >
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl border font-display text-xl font-semibold",
                    q.highlight
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-line bg-elevated text-muted"
                  )}
                >
                  {q.letter}
                </span>
                <h3 className="font-display text-lg font-semibold text-text">
                  {t(q.title)}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {q.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", q.highlight ? "bg-accent" : "bg-muted/40")} />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}