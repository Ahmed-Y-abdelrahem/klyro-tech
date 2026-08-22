"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function TerminalCard({ 
  title = "klyro.config", 
  lines = [], 
  className, 
  animateTyping = false 
}) {
  // نتأكد إن lines array ونفلتر أي قيم undefined أو null
  const safeLines = useMemo(() => {
    return Array.isArray(lines) ? lines.filter(Boolean) : [];
  }, [lines]);

  const [visibleLines, setVisibleLines] = useState(
    animateTyping ? [] : safeLines
  );

  useEffect(() => {
    if (!animateTyping) {
      setVisibleLines(safeLines);
      return;
    }

    setVisibleLines([]);
    let i = 0;

    const timer = setInterval(() => {
      if (i >= safeLines.length) {
        clearInterval(timer);
        return;
      }
      setVisibleLines((prev) => [...prev, safeLines[i]]);
      i++;
    }, 400);

    return () => clearInterval(timer);
  }, [animateTyping, safeLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "rounded-2xl border border-line bg-surface/80 backdrop-blur-sm shadow-glow",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ms-2 font-mono text-[11px] text-muted">{title}</span>
      </div>
      <div className="px-5 py-5 font-mono text-[13px] leading-relaxed">
        {visibleLines.filter(Boolean).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3"
          >
            <span className="select-none text-muted/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                line.tone === "accent" && "text-accent",
                line.tone === "lavender" && "text-lavender",
                line.tone === "muted" && "text-muted",
                !line.tone && "text-text/80"
              )}
            >
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}