"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import GridOverlay from "@/components/ui/GridOverlay";
import RevealText from "@/components/ui/RevealText";
import TerminalCard from "@/components/ui/TerminalCard";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import { media } from "@/lib/media";
import { useLocale } from "@/contexts/LocaleContext";

const terminalLinesEn = [
  { text: "$ klyro strategy --define", tone: "muted" },
  { text: "> mapping goals to a digital roadmap...", tone: "accent" },
  { text: "$ klyro build --scale", tone: "muted" },
  { text: "> shipping production-grade systems...", tone: "accent" },
  { text: "$ klyro growth --measure", tone: "muted" },
  { text: "> tracking outcomes, not vanity metrics.", tone: "lavender" },
];

const terminalLinesAr = [
  { text: "$ klyro strategy --define", tone: "muted" },
  { text: "> نحوّل الأهداف إلى خارطة طريق رقمية...", tone: "accent" },
  { text: "$ klyro build --scale", tone: "muted" },
  { text: "> نسلّم أنظمة بمستوى الإنتاج...", tone: "accent" },
  { text: "$ klyro growth --measure", tone: "muted" },
  { text: "> نقيس النتائج الحقيقية لا المؤشرات الشكلية.", tone: "lavender" },
];

export default function Hero() {
  const { locale, direction } = useLocale();
  const isArabic = locale === "ar";

  const content = {
    badge: isArabic ? "استراتيجية · تصميم · تقنية · نمو" : "Strategy · Design · Technology · Growth",
    title1: isArabic ? "نُهندس" : "Engineering",
    title2: isArabic ? "النمو الرقمي." : "Digital Growth.",
    description: isArabic
      ? "كليرو تك شريك رقمي طويل الأمد — يجمع بين الاستراتيجية والتصميم والتقنية والتسويق ضمن منظومة واحدة، من خارطة الطريق الأولى إلى نمو قابل للقياس ومتراكم."
      : "Klyro Tech is a long-term digital partner — combining strategy, design, technology, and marketing under one ecosystem, from first roadmap to measurable, compounding growth.",
    cta1: isArabic ? "ابدأ مشروعك" : "Start A Project",
    cta2: isArabic ? "استكشف أعمالنا" : "View Our Work",
    trust: isArabic ? "شريك موثوق عبر مصر والسعودية" : "Trusted partners across Egypt & KSA",
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={media.heroPoster}
          className="h-full w-full object-cover opacity-25"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-space/70 via-space/85 to-space" />
        <div className="absolute inset-0 bg-radial-violet" />
        <GridOverlay />
        <div className="noise-layer" />
      </div>

      <div className="pointer-events-none absolute -top-20 start-1/4 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 end-1/4 h-96 w-96 rounded-full bg-lavender/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {content.badge}
            </motion.span>

            <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.02] text-text sm:text-7xl lg:text-[5.5rem]">
              <RevealText text={content.title1} delay={0.3} />
              <br />
              <span className="text-gradient">
                <RevealText text={content.title2} delay={0.55} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/contact">
                {content.cta1}
                <ArrowRight className={`h-4 w-4 ${direction === "rtl" ? "rotate-180" : ""}`} />
              </MagneticButton>
              <Button href="/work" variant="secondary">
                {content.cta2}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-14 flex items-center gap-6 border-t border-line pt-6"
            >
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-space bg-brand-gradient" />
                ))}
              </div>
              <div className="font-mono text-xs text-muted">
                <span className="text-text">50+</span> {content.trust}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: direction === "rtl" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <TerminalCard
              title="klyro.strategy.js"
              lines={isArabic ? terminalLinesAr : terminalLinesEn}
              animateTyping
            />
          </motion.div>
        </div>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
        aria-hidden="true"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}