"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function RelatedServices({ current }) {
  const { t, direction } = useLocale();
  const others = services.filter((s) => s.slug !== current.slug).slice(0, 3);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Keep Exploring", ar: "واصل الاستكشاف" }}
          title={{ en: "Other service lines", ar: "خطوط خدمات أخرى" }}
        />
        <div className="mt-10 flex flex-col divide-y divide-line border-t border-line">
          {others.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between py-6 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm text-accent">{service.number}</span>
                  <span className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
                    {t({ en: service.title, ar: service.titleAr })}
                  </span>
                </div>
                <ArrowRight
                  className={cn(
                    "h-5 w-5 text-muted transition-all duration-300 group-hover:text-accent",
                    direction === "rtl"
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  )}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}