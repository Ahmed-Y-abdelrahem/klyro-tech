"use client";

import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

const serviceAr = Object.fromEntries(services.map((s) => [s.title, s.titleAr]));

export default function CaseResults({ item }) {
  const { t } = useLocale();

  const facts = [
    { label: { en: "Year", ar: "السنة" }, value: item.year },
    {
      label: { en: "Industry", ar: "القطاع" },
      value: t({ en: item.category, ar: item.categoryAr }),
    },
    {
      label: { en: "Service", ar: "الخدمة" },
      value: t({ en: item.service, ar: serviceAr[item.service] }),
    },
  ];

  return (
    <section className="border-t border-line py-16">
      <Container>
        {item.liveUrl ? (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-[#05060F] shadow-glow transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
          >
            <ExternalLink className="h-4 w-4" />
            {t({ en: "Visit Live Project", ar: "زيارة المشروع المباشر" })}
          </a>
        ) : null}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {facts.map((fact, i) => (
            <div key={i} className="border-t border-line pt-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t(fact.label)}
              </span>
              <p className="mt-2 font-display text-lg text-text">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}