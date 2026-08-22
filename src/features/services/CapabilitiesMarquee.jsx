"use client";

import Marquee from "@/components/ui/Marquee";

const items = [
  "SEO",
  "Performance Marketing",
  "Next.js",
  "iOS & Android",
  "E-commerce",
  "Design Systems",
  "Brand Identity",
  "CMS",
  "Analytics",
  "Cross-Platform",
];

export default function CapabilitiesMarquee() {
  return <Marquee items={items} className="bg-transparent" />;
}