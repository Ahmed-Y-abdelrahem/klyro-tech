"use client";

import { process } from "@/data/process";
import { useLocale } from "@/contexts/LocaleContext";

export default function Timeline({ items = process }) {
  const { t } = useLocale();

  return (
    <ol className="relative border-s border-line ps-8 md:ps-10">
      {items.map((step) => (
        <li key={step.number} className="relative pb-12 last:pb-0">
          <span className="absolute -start-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface font-mono text-[11px] text-accent md:-start-[49px]">
            {step.number}
          </span>
          <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
            {t({ en: step.title, ar: step.titleAr })}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {t({ en: step.description, ar: step.descriptionAr })}
          </p>
        </li>
      ))}
    </ol>
  );
}