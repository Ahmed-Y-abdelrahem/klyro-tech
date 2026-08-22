"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkCard from "@/components/shared/WorkCard";
import { work } from "@/data/work";
import { useLocale } from "@/contexts/LocaleContext";

export default function WorkPreview() {
  const { t } = useLocale();
  const featured = work.slice(0, 3);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={{ en: "Selected Work", ar: "أعمال مختارة" }}
            title={{
              en: "Real delivery, real outcomes.",
              ar: "تسليم حقيقي، ونتائج حقيقية.",
            }}
            description={{
              en: "A sample of engagements across e-commerce, real estate, healthcare, and beyond.",
              ar: "نماذج من مشاريعنا في التجارة الإلكترونية والعقارات والرعاية الصحية وغيرها.",
            }}
          />
          <Link
            href="/work"
            className="shrink-0 font-mono text-sm text-accent transition-colors hover:text-lavender"
          >
            {t({ en: "View All Work", ar: "استعرض جميع الأعمال" })} →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}