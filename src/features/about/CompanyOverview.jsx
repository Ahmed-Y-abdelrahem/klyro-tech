"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import TerminalCard from "@/components/ui/TerminalCard";

const terminalLines = [
  { text: "const klyro = {", tone: "muted" },
  { text: "  strategy: 'first',", tone: "accent" },
  { text: "  execution: 'performance-focused',", tone: "accent" },
  { text: "  communication: 'transparent',", tone: "lavender" },
  { text: "};", tone: "muted" },
];

export default function CompanyOverview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow={{ en: "Who We Are", ar: "من نحن" }}
              title={{
                en: "A technology-driven digital solutions company.",
                ar: "شركة حلول رقمية مدفوعة بالتقنية.",
              }}
              description={{
                en: "Klyro Tech combines strategy, creativity, and technology to build solutions that deliver real results — working with startups, growing brands, and established companies across Egypt, Saudi Arabia, and the GCC.",
                ar: "كليرو تك تجمع بين الاستراتيجية والإبداع والتقنية لبناء حلول تحقق نتائج حقيقية — نعمل مع شركات ناشئة وعلامات نامية وشركات راسخة في مصر والسعودية ودول الخليج.",
              }}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <TerminalCard title="who-we-are.js" lines={terminalLines} />
          </div>
        </div>
      </Container>
    </section>
  );
}