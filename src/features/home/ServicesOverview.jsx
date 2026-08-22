"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function ServicesOverview() {
  const { t, direction } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={{ en: "What We Do", ar: "ماذا نقدم" }}
            title={{
              en: "Six disciplines. One accountable team.",
              ar: "ستة تخصصات. فريق واحد مسؤول.",
            }}
            description={{
              en: "Every engagement draws from the same integrated system — strategy, design, engineering, and growth working together instead of in silos.",
              ar: "يستمد كل مشروع من المنظومة المتكاملة ذاتها — استراتيجية وتصميم وهندسة ونمو تعمل معًا لا في صوامع منفصلة.",
            }}
          />
          <Link
            href="/services"
            className="shrink-0 font-mono text-sm text-accent transition-colors hover:text-lavender"
          >
            {t({ en: "View All Services", ar: "استعرض جميع الخدمات" })} →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col justify-between bg-surface p-8 transition-all duration-500 hover:bg-elevated"
              >
                <div>
                  <span className="font-mono text-xs text-accent">{service.number}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-text">
                    {t({ en: service.title, ar: service.titleAr })}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t({ en: service.summary, ar: service.summaryAr })}
                  </p>
                </div>
                <span
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted transition-all duration-300 group-hover:text-accent",
                    direction === "rtl" && "flex-row-reverse"
                  )}
                >
                  {t({ en: "Explore Service", ar: "استكشف الخدمة" })}
                  <ArrowUpRight
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      direction === "rtl"
                        ? "rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1"
                        : "group-hover:translate-x-1 group-hover:-translate-y-1"
                    )}
                  />
                </span>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}