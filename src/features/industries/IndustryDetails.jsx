"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { work } from "@/data/work";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function IndustryDetails({ industry }) {
  const { t, direction } = useLocale();

  const relatedWork = work
    .filter(
      (item) =>
        item.category === industry.title ||
        industry.title.startsWith(item.category)
    )
    .slice(0, 2);

  return (
    <>
      {/* ═══ Focus Areas (صفوف مرقمة مضغوطة) ═══ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow={{ en: "Focus Areas", ar: "مجالات التركيز" }}
                title={{
                  en: "Where we add the most value.",
                  ar: "أين نضيف القيمة الأكبر.",
                }}
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-line">
                {industry.focus.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group flex items-center gap-6 border-b border-line py-6"
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ Related Work (كروت أفقية صغيرة) ═══ */}
      {relatedWork.length > 0 ? (
        <section className="border-t border-line py-24 md:py-32">
          <Container>
            <SectionHeader
              eyebrow={{ en: "Related Work", ar: "أعمال ذات صلة" }}
              title={{
                en: "Engagements in this industry.",
                ar: "مشاريع في هذا القطاع.",
              }}
            />
            <div className="mt-10 border-t border-line">
              {relatedWork.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={`/work/${item.slug}`}
                    className="group grid grid-cols-1 gap-4 border-b border-line py-7 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-center md:px-6"
                  >
                    <span className="font-mono text-xs uppercase tracking-wide text-accent md:col-span-3">
                      {item.service}
                    </span>
                    <div className="md:col-span-5">
                      <h3 className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted md:col-span-3">
                      {item.year}
                    </p>
                    <div className="flex md:col-span-1 md:justify-end">
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 text-muted transition-all duration-300 group-hover:text-accent",
                          direction === "rtl" && "-scale-x-100"
                        )}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}