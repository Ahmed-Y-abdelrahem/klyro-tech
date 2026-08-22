"use client";

import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/logos/logo-light.png";
import logoLight from "@/assets/logos/logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";

export default function Logo({ className = "" }) {
  const { isDark } = useTheme();

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Klyro Tech home"
    >
      <Image
        src={isDark ? logoDark : logoLight}
        alt="Klyro Tech — Engineering Digital Growth"
        width={80}
        height={80}
        priority
        className="shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_14px_rgba(139,139,240,0.45)]"
      />
    </Link>
  );
}