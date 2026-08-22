"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

function AnimatedCounter({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
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

  return <>{count}</>;
}

export default function ServicesStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLocale();

  const capabilities = services.reduce((sum, s) => sum + s.capabilities.length, 0);
  const deliverables = services.reduce((sum, s) => sum + s.deliverables.length, 0);

  const stats = [
    { value: services.length, label: { en: "Integrated Service Lines", ar: "خطوط خدمات متكاملة" } },
    { value: capabilities, label: { en: "Specialized Capabilities", ar: "قدرات متخصصة" } },
    { value: deliverables, label: { en: "Defined Deliverables", ar: "مخرجات محددة" } },
    { value: 1, label: { en: "Accountable Team", ar: "فريق واحد مسؤول" } },
  ];

  return (
    <section ref={ref} className="border-b border-line bg-surface/40 py-14 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-start">
              <div className="font-display text-4xl font-semibold text-text md:text-5xl">
                <AnimatedCounter value={stat.value} inView={inView} />
                {i === 1 || i === 2 ? <span className="text-accent">+</span> : null}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
                {t(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}