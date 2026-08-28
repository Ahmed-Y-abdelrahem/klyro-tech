"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

const serviceAr = Object.fromEntries(services.map((s) => [s.title, s.titleAr]));
export default function WorkCard({ item, index = 0 }) {
  const { t, direction } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <Link
        href={`/work/${item.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:border-accent/40 hover:shadow-glow"
      >
        <div className="relative h-56 overflow-hidden bg-elevated">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space/90 via-space/20 to-transparent" />

          {item.liveUrl ? (
            <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-space/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-text backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              {t({ en: "Live", ar: "مباشر" })}
            </span>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
            <span className="rounded-full border border-line bg-space/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm">
              {item.year}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-space/60 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
              <ArrowUpRight
                className={cn(
                  "h-4 w-4 text-text transition-colors duration-300 group-hover:text-accent",
                  direction === "rtl" && "-scale-x-100"
                )}
              />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {t({ en: item.category, ar: item.categoryAr })} · {t({ en: item.service, ar: serviceAr[item.service] })}
          </span>
          <h3 className="mt-3 font-display text-xl font-semibold text-text">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {t({ en: item.summary, ar: item.summaryAr })}
          </p>
          <span className="mt-6 font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent">
            {t({ en: "Read Case Study", ar: "اقرأ دراسة الحالة" })} →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}