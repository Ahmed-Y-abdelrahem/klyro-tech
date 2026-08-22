"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: { en: "Can we start with one service and expand later?", ar: "هل يمكننا البدء بخدمة واحدة والتوسع لاحقًا؟" },
    a: {
      en: "Yes. Most clients start with a single service line and expand as results compound — every roadmap is built to accommodate that from day one.",
      ar: "نعم. يبدأ معظم العملاء بخط خدمة واحد ويتوسعون مع تراكم النتائج — وكل خارطة طريق مصممة لاستيعاب ذلك منذ اليوم الأول.",
    },
  },
  {
    q: { en: "Do you take over existing projects or codebases?", ar: "هل تتسلمون مشاريع أو قواعد كود قائمة؟" },
    a: {
      en: "Yes. We start with a technical and strategic audit, then stabilize, optimize, and scale what you already have.",
      ar: "نعم. نبدأ بتدقيق تقني واستراتيجي، ثم نثبّت ونحسّن ونطوّر ما لديكم بالفعل.",
    },
  },
  {
    q: { en: "How do you report progress?", ar: "كيف تبلغوننا بسير العمل؟" },
    a: {
      en: "A shared dashboard plus a fixed reporting cadence — weekly during development, monthly for growth work.",
      ar: "لوحة معلومات مشتركة مع دورة إبلاغ ثابتة — أسبوعيًا خلال التطوير، وشهريًا لأعمال النمو.",
    },
  },
  {
    q: { en: "Can you work alongside our in-house team?", ar: "هل يمكنكم العمل إلى جانب فريقنا الداخلي؟" },
    a: {
      en: "Absolutely. We plug in as a partner — covering strategy, design, engineering, or marketing where you need it most.",
      ar: "بالتأكيد. نندمج كشريك — لنغطي الاستراتيجية أو التصميم أو الهندسة أو التسويق حيثما تحتاجون إليه أكثر.",
    },
  },
];

export default function ServicesFAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Services FAQ", ar: "أسئلة عن الخدمات" }}
          title={{
            en: "What clients ask before starting.",
            ar: "ما يسأله العملاء قبل البدء.",
          }}
          align="center"
        />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-start"
                aria-expanded={open === i}
              >
                <span className="font-display text-lg font-semibold text-text">{t(faq.q)}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-muted">{t(faq.a)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}