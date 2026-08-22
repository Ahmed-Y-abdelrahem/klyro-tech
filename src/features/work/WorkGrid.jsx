"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import WorkCard from "@/components/shared/WorkCard";
import { work } from "@/data/work";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function WorkGrid() {
  const { t } = useLocale();
  const [active, setActive] = useState("All");

  const categories = ["All", ...Array.from(new Set(work.map((w) => w.category)))];
  const categoryAr = (cat) => work.find((w) => w.category === cat)?.categoryAr;

  const filtered = active === "All" ? work : work.filter((w) => w.category === active);

  return (
    <section className="py-24 md:py-32">
      <Container>
        {/* ═══ Filter Chips ═══ */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300",
                active === cat
                  ? "border-transparent bg-brand-gradient font-semibold text-[#05060F]"
                  : "border-line text-muted hover:border-accent/40 hover:text-text"
              )}
            >
              {cat === "All"
                ? `${t({ en: "All", ar: "الكل" })} (${work.length})`
                : `${t({ en: cat, ar: categoryAr(cat) })} (${work.filter((w) => w.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* ═══ Grid ═══ */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>

        {/* ═══ Live counter ═══ */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center font-mono text-xs text-muted"
        >
          {work.filter((w) => w.liveUrl).length}{" "}
          {t({ en: "live deployments · ", ar: "مشروعًا مباشرًا · " })}
          {new Set(work.map((w) => w.category)).size}{" "}
          {t({ en: "sectors covered", ar: "قطاعات مغطاة" })}
        </motion.p>
      </Container>
    </section>
  );
}