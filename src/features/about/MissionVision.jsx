"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { useLocale } from "@/contexts/LocaleContext";

export default function MissionVision() {
  const { t } = useLocale();

  const cards = [
    { icon: Target, eyebrow: { en: "Our Mission", ar: "رسالتنا" }, text: company.mission },
    { icon: Eye, eyebrow: { en: "Our Vision", ar: "رؤيتنا" }, text: company.vision },
  ];

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-10 transition-colors duration-500 hover:border-accent/40"
            >
              <div className="absolute inset-0 bg-radial-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <card.icon className="relative h-8 w-8 text-accent" />
              <h3 className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t(card.eyebrow)}
              </h3>
              <p className="relative mt-4 font-display text-xl leading-relaxed text-text md:text-2xl">
                {t(card.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}