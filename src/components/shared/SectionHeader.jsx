"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "@/contexts/LocaleContext";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  maxWidth = "max-w-2xl",
  animate = true,
}) {
  const { t, direction } = useLocale();

  const alignClasses = {
    left: direction === "rtl" ? "mr-0 ml-auto text-right" : "text-left",
    center: "mx-auto text-center",
    right: direction === "rtl" ? "ml-0 mr-auto text-left" : "text-right",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const content = (
    <div className={cn(maxWidth, alignClasses[align], className)}>
      {eyebrow && (
        <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t(eyebrow)}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-text md:text-4xl lg:text-[2.75rem]">
        {t(title)}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {t(description)}
        </p>
      )}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && (
        <motion.span
          variants={itemVariants}
          className={cn(
            "inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent",
            alignClasses[align]
          )}
        >
          {t(eyebrow)}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.1] text-text md:text-4xl lg:text-[2.75rem]",
          alignClasses[align]
        )}
      >
        {t(title)}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "mt-4 text-base leading-relaxed text-muted md:text-lg",
            alignClasses[align]
          )}
        >
          {t(description)}
        </motion.p>
      )}
    </motion.div>
  );
}