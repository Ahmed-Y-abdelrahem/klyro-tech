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
    q: { en: "How long does a typical project take?", ar: "كم يستغرق المشروع النموذجي؟" },
    a: {
      en: "Most websites ship in 4–8 weeks; larger platforms and mobile apps run 8–16 weeks depending on scope. You get a clear timeline during Discovery.",
      ar: "تُسلَّم معظم المواقع خلال 4–8 أسابيع؛ فيما تستغرق المنصات الأكبر وتطبيقات الجوال 8–16 أسبوعًا وفق النطاق. وتحصل على جدول زمني واضح خلال مرحلة الاستكشاف.",
    },
  },
  {
    q: { en: "How is pricing structured?", ar: "كيف تُحدَّد الأسعار؟" },
    a: {
      en: "Fixed-scope pricing for defined projects, and monthly retainers for marketing and ongoing growth work. No hidden costs.",
      ar: "تسعير ثابت للمشاريع محددة النطاق، واشتراكات شهرية لأعمال التسويق والنمو المستمر. دون أي تكاليف خفية.",
    },
  },
  {
    q: { en: "Do you work with clients outside Egypt and Saudi Arabia?", ar: "هل تعملون مع عملاء خارج مصر والسعودية؟" },
    a: {
      en: "Yes — we're remote-first and work across the GCC and Europe, with reporting cadences that fit your timezone.",
      ar: "نعم — نحن فريق «عن بُعد أولًا» ونعمل عبر دول الخليج وأوروبا، بدورات إبلاغ تناسب نطاقك الزمني.",
    },
  },
  {
    q: { en: "What happens after launch?", ar: "ماذا يحدث بعد الإطلاق؟" },
    a: {
      en: "Every engagement includes a support window, and most clients continue on a maintenance or growth retainer.",
      ar: "يشمل كل مشروع فترة دعم بعد الإطلاق، ويواصل معظم العملاء العمل معنا عبر باقات صيانة أو نمو.",
    },
  },
  {
    q: { en: "Can you work with our existing team?", ar: "هل يمكنكم العمل مع فريقنا الحالي؟" },
    a: {
      en: "Absolutely. We plug into in-house teams as a partner — design, engineering, or strategy support where you need it.",
      ar: "بالتأكيد. نندمج مع الفرق الداخلية كشريك — دعمًا في التصميم أو الهندسة أو الاستراتيجية حيثما تحتاجون.",
    },
  },
];

export default function FAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "FAQ", ar: "الأسئلة الشائعة" }}
          title={{
            en: "Answers before you ask.",
            ar: "إجابات قبل أن تسأل.",
          }}
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl flex flex-col divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-start"
                aria-expanded={open === i}
              >
                <span className="font-display text-lg font-semibold text-text">
                  {t(faq.q)}
                </span>
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
                    <p className="pb-6 text-sm leading-relaxed text-muted">
                      {t(faq.a)}
                    </p>
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