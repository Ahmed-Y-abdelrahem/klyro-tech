"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { industries } from "@/data/industries";
import { useLocale } from "@/contexts/LocaleContext";

export default function IndustriesSection() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={{ en: "Industries", ar: "القطاعات" }}
            title={{
              en: "Built for the sectors we know best.",
              ar: "مصمم للقطاعات التي نتقنها.",
            }}
            description={{
              en: "Every industry has different constraints. We bring patterns learned from real engagements, not a generic playbook.",
              ar: "لكل قطاع قيوده المختلفة؛ نحمل معنا الأنماط المكتسبة من مشاريع حقيقية، لا وصفات جاهزة.",
            }}
          />
          <Link
            href="/industries"
            className="shrink-0 font-mono text-sm text-accent transition-colors hover:text-lavender"
          >
            {t({ en: "View All Industries", ar: "استعرض جميع القطاعات" })} →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group block h-full bg-surface p-6 transition-all duration-300 hover:bg-elevated"
              >
                <h3 className="font-display text-base font-semibold text-text transition-colors group-hover:text-accent">
                  {t({ en: industry.title, ar: industry.titleAr })}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t({ en: industry.summary, ar: industry.summaryAr })}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}