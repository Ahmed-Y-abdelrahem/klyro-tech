"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";
import { useLocale } from "@/contexts/LocaleContext";

export default function Differentiators() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={{ en: "Why Klyro Tech", ar: "لماذا كليرو تك" }}
              title={{
                en: "What makes us different.",
                ar: "ما الذي يميزنا.",
              }}
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col divide-y divide-line border-t border-line">
              {company.differentiators.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-12"
                >
                  <span className="font-mono text-sm text-accent md:col-span-1">
                    {item.number}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
                      {t({ en: item.title, ar: item.titleAr })}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {t({ en: item.description, ar: item.descriptionAr })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}