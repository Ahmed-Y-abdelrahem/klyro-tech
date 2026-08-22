"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

function AnimatedNumber({ value, started }) {
  const target = parseInt(value, 10) || 0;
  const pad = /^0/.test(String(value));
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf;
    const t0 = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  const out = String(n);
  return <>{pad ? out.padStart(2, "0") : out}</>;
}

export default function Stats({ stats = [], className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("grid grid-cols-2 gap-10 md:grid-cols-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-start">
          <div className="font-display text-4xl font-semibold text-text md:text-5xl">
            <AnimatedNumber value={stat.value} started={inView} />
          </div>
          <div className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}