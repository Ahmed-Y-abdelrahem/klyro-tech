"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

const benefits = [
  { en: "Reduced handoffs between vendors", ar: "تقليل نقاط التسليم بين الموردين" },
  { en: "Faster delivery with one roadmap", ar: "تسليم أسرع بخارطة طريق واحدة" },
  { en: "Consistent quality across disciplines", ar: "جودة متسقة عبر جميع التخصصات" },
  { en: "Results that compound over time", ar: "نتائج تتراكم بمرور الوقت" },
];

function Node({ service, index }) {
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-accent">{service.number}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent/60 transition-transform duration-300 group-hover:scale-150" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-text">
        {t({ en: service.title, ar: service.titleAr })}
      </h3>
      <p className="mt-1 font-mono text-[11px] text-muted">
        {t({ en: service.shortTitle, ar: service.shortTitleAr })}
      </p>
    </motion.div>
  );
}

export default function IntegratedSystem() {
  const { t } = useLocale();
  const first = services.slice(0, 3);
  const second = services.slice(3);

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="noise-layer" />

      <Container className="relative">
        <SectionHeader
          eyebrow={{ en: "The Klyro Ecosystem", ar: "منظومة كليرو" }}
          title={{
            en: "One system. Every discipline connected.",
            ar: "منظومة واحدة. كل التخصصات متصلة.",
          }}
          description={{
            en: "Your goals sit at the center — every service line feeds them directly, under one roadmap and one accountable team.",
            ar: "أهدافك في المركز — كل خط خدمة يغذيها مباشرة، ضمن خارطة طريق واحدة وفريق واحد مسؤول.",
          }}
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Spine lines — CSS only, RTL-safe */}
          <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {first.map((s, i) => (
              <Node key={s.slug} service={s} index={i} />
            ))}

            <Node service={second[0]} index={3} />

            {/* ═══ HUB ═══ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-accent/40 bg-elevated/70 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-radial-violet" />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.1, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-44 w-44 rounded-full border border-accent/30"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute h-28 w-28 rounded-full border border-accent/40"
              />
              <div className="relative z-10 px-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  One System
                </span>
                <p className="mt-2 font-display text-xl font-semibold text-text">
                  {t({ en: "Your Business Goals", ar: "أهداف عملك" })}
                </p>
              </div>
            </motion.div>

            <Node service={second[1]} index={4} />
            <Node service={second[2]} index={5} />

            {/* ═══ Benefits ══ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl border border-line bg-surface p-6 sm:col-span-2 lg:col-span-2"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-xs leading-relaxed text-muted">
                      {t(benefit)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}