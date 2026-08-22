"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function ServicesIndex() {
  const { t, direction } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "What We Do", ar: "ماذا نقدم" }}
          title={{
            en: "Six disciplines. One accountable team.",
            ar: "ستة تخصصات. فريق واحد مسؤول.",
          }}
          description={{
            en: "Every service line is engineered to work together — strategy, design, engineering, and growth under one roadmap.",
            ar: "كل خط خدمة مُهندس ليعمل مع الآخر — استراتيجية وتصميم وهندسة ونمو ضمن خارطة طريق واحدة.",
          }}
        />

        <div className="mt-14 border-t border-line">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-1 gap-5 border-b border-line py-9 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-center md:px-6"
              >
                <span className="font-mono text-sm text-accent md:col-span-1">
                  {service.number}
                </span>

                <h3 className="font-display text-2xl font-semibold text-text transition-colors duration-300 group-hover:text-accent md:col-span-4">
                  {t({ en: service.title, ar: service.titleAr })}
                </h3>

                <p className="text-sm leading-relaxed text-muted md:col-span-4">
                  {t({ en: service.summary, ar: service.summaryAr })}
                </p>

                <div className="flex flex-wrap gap-2 md:col-span-2">
                  {service.capabilities.slice(0, 2).map((c) => (
                    <span
                      key={c.title}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted"
                    >
                      {t({ en: c.title, ar: c.titleAr })}
                    </span>
                  ))}
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-accent">
                    +{service.capabilities.length - 2}
                  </span>
                </div>

                <div className="flex md:col-span-1 md:justify-end">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 text-muted transition-all duration-300 group-hover:text-accent",
                        direction === "rtl" && "-scale-x-100"
                      )}
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}