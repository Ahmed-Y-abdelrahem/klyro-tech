"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

const coverage = {
  "ecommerce-retail": ["01", "02", "04"],
  "real-estate": ["01", "02", "06"],
  "healthcare-clinics": ["01", "02", "04"],
  "food-beverage": ["01", "02", "06"],
  "logistics-mobility": ["02", "03", "05"],
  education: ["02", "04", "06"],
  "saas-tech": ["01", "02", "04"],
  "digital-transformation": ["02", "03", "05"],
};

export default function CoverageMatrix() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={{ en: "Integrated Coverage", ar: "تغطية متكاملة" }}
              title={{
                en: "Every sector, backed by the full system.",
                ar: "كل قطاع، تدعمه المنظومة كاملة.",
              }}
              description={{
                en: "Typical engagement mixes per industry — always adapted, never templated.",
                ar: "خلطات تعاون نموذجية لكل قطاع — تُكيَّف دائمًا، ولا تُستنسخ أبدًا.",
              }}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service.slug}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted"
                >
                  <span className="text-accent">{service.number}</span>{" "}
                  {t({ en: service.shortTitle, ar: service.shortTitleAr })}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="overflow-hidden rounded-2xl border border-line">
              {/* Header */}
              <div className="flex items-center border-b border-line bg-surface px-6 py-4">
                <span className="flex-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {t({ en: "Industry", ar: "القطاع" })}
                </span>
                <div className="flex gap-6 md:gap-8">
                  {services.map((service) => (
                    <span key={service.slug} className="w-6 text-center font-mono text-[10px] text-muted">
                      {service.number}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rows */}
              {industries.map((industry, i) => (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center border-b border-line bg-space/40 px-6 py-4 transition-colors last:border-b-0 hover:bg-elevated/60"
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="flex-1 font-display text-sm font-semibold text-text transition-colors hover:text-accent"
                  >
                    {t({ en: industry.title, ar: industry.titleAr })}
                  </Link>
                  <div className="flex gap-6 md:gap-8">
                    {services.map((service) => (
                      <span key={service.slug} className="flex w-6 justify-center">
                        {coverage[industry.slug]?.includes(service.number) ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        ) : (
                          <span className="h-px w-3 self-center bg-line" />
                        )}
                      </span>
                    ))}
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