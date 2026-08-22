"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { useLocale } from "@/contexts/LocaleContext";

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "What Clients Say", ar: "ماذا يقول عملاؤنا" }}
          title={{
            en: "Partnerships, not projects.",
            ar: "شراكات، لا مشاريع.",
          }}
          description={{
            en: "Feedback from teams we've worked with across strategy, design, and engineering.",
            ar: "آراء فرق عملنا معها عبر الاستراتيجية والتصميم والهندسة.",
          }}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-glow"
            >
              <Quote className="h-8 w-8 text-accent/30 transition-colors group-hover:text-accent" />
              <p className="mt-4 text-base leading-relaxed text-text">
                "{t({ en: item.quote, ar: item.quoteAr })}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-[#05060F]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-text">
                    {t({ en: item.name, ar: item.nameAr })}
                  </div>
                  <div className="font-mono text-xs text-muted">
                    {t({ en: item.role, ar: item.roleAr })} · {item.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}