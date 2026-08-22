"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function ServiceCard({ service, index = 0 }) {
  const { t, direction } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:border-accent/40 hover:bg-elevated hover:shadow-glow"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-accent">{service.number}</span>
            <ArrowUpRight
              className={cn(
                "h-4 w-4 text-muted transition-all duration-300 group-hover:text-accent",
                direction === "rtl"
                  ? "rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  : "group-hover:translate-x-1 group-hover:-translate-y-1"
              )}
            />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-text">
            {t({ en: service.title, ar: service.titleAr })}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t({ en: service.summary, ar: service.summaryAr })}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-2 border-t border-line pt-4 font-mono text-xs text-muted">
          <Layers className="h-3.5 w-3.5 text-accent" />
          {service.capabilities.length}{" "}
          {t({ en: "capabilities", ar: "قدرات متخصصة" })}
        </div>
      </Link>
    </motion.div>
  );
}