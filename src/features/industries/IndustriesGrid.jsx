"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { industries } from "@/data/industries";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const adaptations = [
  {
    title: { en: "Regulatory constraints", ar: "قيود تنظيمية" },
    desc: { en: "Compliance-first builds for regulated sectors.", ar: "بناء يلتزم بالامتثال أولًا للقطاعات المنظمة." },
  },
  {
    title: { en: "Operational constraints", ar: "قيود تشغيلية" },
    desc: { en: "Solutions that fit real workflows, not ideal ones.", ar: "حلول تناسب سير العمل الحقيقي لا المثالي." },
  },
  {
    title: { en: "Behavioral constraints", ar: "قيود سلوكية" },
    desc: { en: "Experiences designed around real user behavior.", ar: "تجارب مصممة حول سلوك المستخدم الحقيقي." },
  },
];

export default function IndustriesGrid() {
  const { t, direction } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={{ en: "Industries", ar: "القطاعات" }}
            title={{
              en: "Patterns learned from real engagements.",
              ar: "أنماط اكتسبناها من مشاريع حقيقية.",
            }}
          />
          <span className="shrink-0 font-mono text-sm text-muted">
            {String(industries.length).padStart(2, "0")}{" "}
            {t({ en: "Sectors", ar: "قطاعات" })}
          </span>
        </div>

        {/* ═══ Index Rows ═══ */}
        <div className="mt-12 border-t border-line">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group grid grid-cols-1 gap-4 border-b border-line py-7 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-center md:px-6"
              >
                <span className="font-mono text-xs text-accent md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="font-display text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent md:col-span-4">
                  {t({ en: industry.title, ar: industry.titleAr })}
                </h2>

                <p className="text-sm leading-relaxed text-muted md:col-span-6">
                  {t({ en: industry.summary, ar: industry.summaryAr })}
                </p>

                <div className="flex md:col-span-1 md:justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent",
                        direction === "rtl" && "-scale-x-100"
                      )}
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ═══ Adaptation Strip (صغير وخفيف) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {adaptations.map((item, i) => (
            <div key={i} className="bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}