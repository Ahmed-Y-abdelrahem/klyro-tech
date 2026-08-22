"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GridOverlay from "@/components/ui/GridOverlay";
import RevealText from "@/components/ui/RevealText";
import { useLocale } from "@/contexts/LocaleContext";

export default function PageHero({ eyebrow, title, description, children, image }) {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-20 md:pt-48 md:pb-24">
      {image ? (
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={image} alt="" className="h-full w-full object-cover opacity-90" />
        </motion.div>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-space/60 via-space/85 to-space" />
      <GridOverlay />
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="noise-layer" />

      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow ? (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              {t(eyebrow)}
            </motion.span>
          ) : null}

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-text sm:text-5xl lg:text-[3.5rem]">
            <RevealText text={t(title)} delay={0.15} />
          </h1>

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-base leading-relaxed text-muted md:text-lg"
            >
              {t(description)}
            </motion.p>
          ) : null}
        </div>

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12"
          >
            {children}
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}