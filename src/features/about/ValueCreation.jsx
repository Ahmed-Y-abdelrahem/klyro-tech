"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";

const columns = [
  {
    title: { en: "How We Create Value", ar: "كيف نصنع القيمة" },
    points: [
      { en: "We help businesses turn digital challenges into measurable growth through smart, scalable technology.", ar: "نساعد الشركات على تحويل التحديات الرقمية إلى نمو قابل للقياس عبر تكنولوجيا ذكية وقابلة للتوسع." },
      { en: "We combine strategy, performance-focused execution, and clear communication to deliver solutions that drive results.", ar: "نجمع بين الاستراتيجية والتنفيذ المركّز على الأداء والتواصل الواضح لتقديم حلول تقود النتائج." },
    ],
  },
  {
    title: { en: "What Makes Us Different", ar: "ما الذي يميزنا" },
    points: [
      { en: "Strategy-first execution with real business impact.", ar: "تنفيذ يبدأ بالاستراتيجية مع أثر حقيقي على الأعمال." },
      { en: "Scalable digital solutions built for growth.", ar: "حلول رقمية قابلة للتوسع مبنية للنمو." },
      { en: "Transparent communication and long-term partnership mindset.", ar: "تواصل شفاف وعقلية شراكة طويلة الأمد." },
    ],
  },
  {
    title: { en: "The Result", ar: "النتيجة" },
    points: [
      { en: "Digital systems that perform and scale with confidence.", ar: "أنظمة رقمية تعمل وتتوسع بثقة." },
      { en: "Solutions designed for efficiency and measurable growth.", ar: "حلول مصممة للكفاءة والنمو القابل للقياس." },
      { en: "Long-term value aligned with your business objectives.", ar: "قيمة طويلة الأمد متوافقة مع أهداف عملك." },
    ],
  },
];

export default function ValueCreation() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Digital Growth", ar: "النمو الرقمي" }}
          title={{
            en: "From challenge to measurable growth.",
            ar: "من التحدي إلى نمو قابل للقياس.",
          }}
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border border-line bg-surface p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t(col.title)}
              </h3>
              <ul className="mt-6 space-y-4">
                {col.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-muted">
                      {t(point)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}