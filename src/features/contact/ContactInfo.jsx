"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { useLocale } from "@/contexts/LocaleContext";

const countryAr = {
  Egypt: "مصر",
  "Saudi Arabia": "السعودية",
};

export default function ContactInfo() {
  const { t } = useLocale();

  return (
    <div className="flex flex-col gap-10">
      {/* ═══ البريد ═══ */}
      <div className="border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t({ en: "Email", ar: "البريد الإلكتروني" })}
          </span>
        </div>
        <p className="mt-3">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-xl text-text transition-colors hover:text-accent"
          >
            <span dir="ltr">{site.email}</span>
          </a>
        </p>
      </div>

      {/* ═══ الهاتف ═══ */}
      <div className="border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t({ en: "Phone", ar: "الهاتف" })}
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {site.phones.map((phone) => (
            <p key={phone.country} className="flex flex-wrap items-center gap-2">
              <a
                href={`tel:${phone.number.replace(/\s/g, "")}`}
                className="font-display text-lg text-text transition-colors hover:text-accent"
              >
                <span dir="ltr">{phone.number}</span>
              </a>
              <span className="text-sm text-muted">
                — {t({ en: phone.country, ar: countryAr[phone.country] })}
              </span>
            </p>
          ))}
        </div>
      </div>

      {/* ═══ الأسواق ═══ */}
      <div className="border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t({ en: "Markets", ar: "الأسواق" })}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t({
            en: `Serving clients across ${site.markets.join(", ")}, with remote-first delivery.`,
            ar: "نخدم عملاءنا عبر مصر والسعودية ودول الخليج، بنهج «عن بُعد أولًا».",
          })}
        </p>
      </div>
    </div>
  );
}