"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GridOverlay from "@/components/ui/GridOverlay";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { useLocale } from "@/contexts/LocaleContext";

export default function CTA({
  eyebrow = { en: "Start A Project", ar: "ابدأ مشروعك" },
  title = {
    en: "Let's engineer your next stage of growth.",
    ar: "لنُهندس معًا مرحلة نموك القادمة.",
  },
  description = {
    en: "Tell us where you're headed. We'll map the strategy, technology, and team it takes to get there.",
    ar: "أخبرنا إلى أين تتجه، وسنرسم الاستراتيجية والتقنية والفريق اللازم للوصول إلى هناك.",
  },
  primaryLabel = { en: "Start A Conversation", ar: "ابدأ محادثة" },
  primaryHref = "/contact",
  secondaryLabel = { en: "View Our Work", ar: "استكشف أعمالنا" },
  secondaryHref = "/work",
}) {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <GridOverlay />
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="noise-layer" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t(eyebrow)}
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] text-text md:text-5xl">
            {t(title)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {t(description)}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary">
              {t(primaryLabel)}
            </Button>
            <Button href={secondaryHref} variant="secondary">
              {t(secondaryLabel)}
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs text-muted">
            {site.email} · {site.phones[0].number} ({site.phones[0].country})
          </p>
        </motion.div>
      </Container>
    </section>
  );
}