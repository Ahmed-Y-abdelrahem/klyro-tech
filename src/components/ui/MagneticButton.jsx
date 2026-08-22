"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MagneticButton({ href, children, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-[#05060F] transition-transform duration-300 hover:brightness-110 shadow-glow",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}