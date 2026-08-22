"use client";

import Container from "@/components/ui/Container";
import { useLocale } from "@/contexts/LocaleContext";

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "TailwindCSS",
  "Figma",
  "Swift",
  "Kotlin",
  "Google Ads",
  "Meta Ads",
  "Google Analytics",
  "WordPress",
  "Flutter",
  "AWS",
  "Shopify",
];

export default function TechStack() {
  const { direction } = useLocale();
  const items = [...stack, ...stack];

  return (
    <section className="border-y border-line py-10 overflow-hidden">
      <Container>
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {direction === "rtl" ? "الأدوات والمنصات اللي بنبني بيها" : "Tools & Platforms We Build With"}
        </p>
      </Container>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-20 bg-gradient-to-r from-space to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-20 bg-gradient-to-l from-space to-transparent" />

        <div
          className={`flex w-max gap-16 ${
            direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee"
          }`}
        >
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-display text-xl whitespace-nowrap text-text/25 transition-colors hover:text-accent"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}