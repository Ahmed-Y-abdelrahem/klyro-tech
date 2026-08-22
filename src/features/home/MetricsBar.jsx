"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { useLocale } from "@/contexts/LocaleContext";

const metrics = [
  { value: 6, suffix: "", label: { en: "Core Service Lines", ar: "خطوط خدمات أساسية" } },
  { value: 5, suffix: "", label: { en: "Phase Delivery Process", ar: "مراحل تنفيذ" } },
  { value: 2, suffix: "", label: { en: "Markets — EG & KSA", ar: "سوقان — مصر والسعودية" } },
  { value: 1, suffix: "", label: { en: "Accountable Team, End-To-End", ar: "فريق واحد مسؤول من البداية إلى النهاية" } },
];

function AnimatedCounter({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <>{String(count).padStart(2, "0")}</>;
}

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLocale();

  return (
    <section ref={ref} className="border-y border-line bg-surface/40 py-16 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-start"
            >
              <div className="font-display text-4xl font-semibold text-text md:text-5xl">
                <AnimatedCounter value={metric.value} inView={inView} />
                {metric.suffix}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
                {t(metric.label)}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}