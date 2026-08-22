"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

const inputClasses =
  "mt-2 w-full rounded-lg border border-line bg-elevated px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const { t } = useLocale();

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-text">
          {t({ en: "Thanks — we'll be in touch.", ar: "شكرًا لك — سنكون على تواصل." })}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t({
            en: "A member of the Klyro Tech team will reply within one business day.",
            ar: "سيرد عليك أحد أعضاء فريق كليرو تك خلال يوم عمل واحد.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-8 md:p-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-muted">
            {t({ en: "Full Name", ar: "الاسم الكامل" })}
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder={t({ en: "Your name", ar: "اسمك" })} />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted">
            {t({ en: "Email", ar: "البريد الإلكتروني" })}
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="company" className="font-mono text-xs uppercase tracking-wide text-muted">
            {t({ en: "Company", ar: "الشركة" })}
          </label>
          <input id="company" name="company" type="text" className={inputClasses} placeholder={t({ en: "Company name", ar: "اسم الشركة" })} />
        </div>
        <div>
          <label htmlFor="service" className="font-mono text-xs uppercase tracking-wide text-muted">
            {t({ en: "Service Of Interest", ar: "الخدمة المطلوبة" })}
          </label>
          <select id="service" name="service" className={inputClasses} defaultValue={services[0].title}>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {t({ en: service.title, ar: service.titleAr })}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-muted">
            {t({ en: "Project Details", ar: "تفاصيل المشروع" })}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputClasses}
            placeholder={t({
              en: "Tell us about your goals, timeline, and what you're looking to build.",
              ar: "أخبرنا عن أهدافك وجدولك الزمني وما تطمح إلى بنائه.",
            })}
          />
        </div>
      </div>

      <Button type="submit" variant="primary" className="mt-8 w-full md:w-auto">
        <Send className="h-4 w-4" />
        {t({ en: "Send Message", ar: "أرسل الرسالة" })}
      </Button>
    </form>
  );
}