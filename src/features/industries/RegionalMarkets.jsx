"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { site } from "@/data/site";
import { useLocale } from "@/contexts/LocaleContext";

export default function RegionalMarkets() {
  const { t } = useLocale();

  const markets = [
    {
      index: "01",
      country: { en: "Egypt", ar: "مصر" },
      city: { en: "Cairo", ar: "القاهرة" },
      desc: {
        en: "A fast-digitizing economy of startups and established enterprises.",
        ar: "اقتصاد يتحول رقميًا بسرعة، بشركات ناشئة ومؤسسات راسخة.",
      },
      phone: site.phones[0],
    },
    {
      index: "02",
      country: { en: "Saudi Arabia", ar: "السعودية" },
      city: { en: "Riyadh", ar: "الرياض" },
      desc: {
        en: "Vision 2030 is driving one of the world's fastest transformation programs.",
        ar: "رؤية 2030 تقود أحد أسرع برامج التحول الرقمي في العالم.",
      },
      phone: site.phones[1],
    },
    {
      index: "03",
      country: { en: "GCC", ar: "الخليج" },
      city: { en: "Region-wide", ar: "عبر المنطقة" },
      desc: {
        en: "Expanding online markets across the Gulf, served remote-first.",
        ar: "أسواق إلكترونية متوسعة عبر الخليج، نخدمها بنهج عن بُعد أولًا.",
      },
      phone: null,
    },
  ];

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Regional Presence", ar: "حضور إقليمي" }}
          title={{
            en: "Built for the region's fastest-moving markets.",
            ar: "مبني لأسرع أسواق المنطقة حركة.",
          }}
          description={{
            en: "From Cairo to Riyadh and across the GCC — one accountable team, with local understanding.",
            ar: "من القاهرة إلى الرياض وعبر الخليج — فريق واحد مسؤول، بفهم محلي.",
          }}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {markets.map((market, i) => (
            <motion.div
              key={market.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent">{market.index}</span>
                <MapPin className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-text">
                {t(market.country)}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {t(market.city)}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {t(market.desc)}
              </p>

              {market.phone ? (
                <a
                  href={`tel:${market.phone.number.replace(/\s/g, "")}`}
                  className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 font-mono text-xs text-muted transition-colors hover:text-accent"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span dir="ltr">{market.phone.number}</span>
                </a>
              ) : (
                <p className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 font-mono text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  {t({ en: "Remote-first delivery", ar: "تسليم عن بُعد أولًا" })}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}