"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";

export default function ServiceDetails({ service }) {
  const { t } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={{ en: "What's Included", ar: "ماذا يشمل" }}
              title={{ en: "Capabilities", ar: "القدرات" }}
              description={{
                en: "Every capability below is delivered by the same accountable team, under one roadmap.",
                ar: "كل قدرة مما يلي ينفذها الفريق المسؤول ذاته، ضمن خارطة طريق واحدة.",
              }}
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col divide-y divide-line border-t border-line">
              {service.capabilities.map((capability, i) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group py-6"
                >
                  <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
                    {t({ en: capability.title, ar: capability.titleAr })}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {t({ en: capability.description, ar: capability.descriptionAr })}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}