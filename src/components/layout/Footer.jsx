"use client";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { footerNav } from "@/data/navigation";
import { company } from "@/data/company";
import { useLocale } from "@/contexts/LocaleContext";

const countryAr = {
  Egypt: "مصر",
  "Saudi Arabia": "السعودية",
};

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative border-t border-line bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* ═══ Brand ═══ */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {t({ en: company.shortDescription, ar: company.shortDescriptionAr })}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted">
              {t({ en: company.slogan, ar: company.sloganAr })}
            </p>
          </div>

          {/* ═══ Services ═══ */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t({ en: "Services", ar: "الخدمات" })}
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {t({ en: item.label, ar: item.labelAr })}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══ Company ═══ */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t({ en: "Company", ar: "الشركة" })}
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {t({ en: item.label, ar: item.labelAr })}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══ Contact ═══ */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t({ en: "Contact", ar: "تواصل معنا" })}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-text"
                >
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone.country}>
                  <a
                    href={`tel:${phone.number.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-text"
                  >
                    <span dir="ltr">{phone.number}</span>
                  </a>{" "}
                  <span className="text-muted/60">
                    — {t({ en: phone.country, ar: countryAr[phone.country] })}
                  </span>
                </li>
              ))}
              <li className="pt-1 text-muted/70" dir="ltr">
                {company.website}
              </li>
            </ul>
          </div>
        </div>

        {/* ═══ Bottom bar ═══ */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {t({
              en: "Klyro Tech. All rights reserved.",
              ar: "كليرو تك. جميع الحقوق محفوظة.",
            })}
          </p>
          <p className="font-mono">
            {t({
              en: "Engineering Digital Growth — Egypt · Saudi Arabia · GCC",
              ar: "نهندس النمو الرقمي — مصر · السعودية · الخليج",
            })}
          </p>
        </div>
      </Container>
    </footer>
  );
}