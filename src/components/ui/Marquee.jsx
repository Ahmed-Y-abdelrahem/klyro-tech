"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function Marquee({ items, className = "" }) {
  const { direction } = useLocale();
  const row = [...items, ...items];

  return (
    <div className={`relative overflow-hidden border-y border-line bg-surface/40 py-7 ${className}`}>
      <div
        className={`flex w-max items-center gap-12 ${
          direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-display text-3xl font-semibold uppercase tracking-tight text-text/15 md:text-5xl">
              {item}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}