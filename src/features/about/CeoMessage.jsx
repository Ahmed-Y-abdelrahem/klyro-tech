"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import RevealText from "@/components/ui/RevealText";
import Button from "@/components/ui/Button";
import { ceo } from "@/data/leadership";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

export default function CeoMessage() {
  const { t, direction } = useLocale();
  const [imgFailed, setImgFailed] = useState(false);

  const fullName = t({ en: ceo.name, ar: ceo.nameAr });
  const initials = ceo.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="noise-layer" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* ═══ الصورة ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative">
              {/* Glow خلف الصورة */}
              <div className="absolute -inset-3 rounded-3xl bg-brand-gradient opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

              <div className="relative overflow-hidden rounded-2xl border border-line bg-elevated">
                {!imgFailed ? (
                  <img
                    src={ceo.image}
                    alt={fullName}
                    onError={() => setImgFailed(true)}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-brand-gradient">
                    <span className="font-display text-7xl font-semibold text-space">
                      {initials}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-space/90 via-transparent to-transparent" />

                {/* كارت الاسم العائم */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <div>
                    <p className="font-display text-xl font-semibold text-text">
                      {fullName}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {t({ en: ceo.role, ar: ceo.roleAr })}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-space/60 backdrop-blur-sm">
                    <Quote className="h-4 w-4 text-accent" />
                  </span>
                </div>
              </div>

              {/* شارة المكتب */}
              <span className="absolute -top-4 start-6 rounded-full border border-line bg-space px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {t({ en: "Founder's Office", ar: "مكتب المؤسس" })}
              </span>
            </div>
          </motion.div>

          {/* ═══ الرسالة ═══ */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              {t({ en: "A Word From Our CEO", ar: "كلمة من المؤسس" })}
            </motion.span>

            <h2 className="mt-6 font-display text-2xl font-semibold leading-snug text-text md:text-3xl lg:text-[2.5rem] lg:leading-[1.25]">
              <RevealText text={`"${t(ceo.quote)}"`} />
            </h2>

            <div className="mt-8 space-y-5">
              {ceo.message.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="max-w-2xl text-base leading-relaxed text-muted"
                >
                  {t(paragraph)}
                </motion.p>
              ))}
            </div>

            {/* التوقيع + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-line pt-8"
            >
              <div>
                <p className="font-display text-lg font-semibold text-text">
                  {fullName}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {t({ en: ceo.role, ar: ceo.roleAr })} — Klyro Tech
                </p>
              </div>
              <div className="hidden h-10 w-px bg-line md:block" />
              <Button href="/contact" variant="secondary">
                {t({ en: "Work With Us", ar: "اشتغل معانا" })}
                <ArrowRight
                  className={cn("h-4 w-4", direction === "rtl" && "rotate-180")}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}