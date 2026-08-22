"use client";

import PageHero from "@/components/shared/PageHero";
import { media } from "@/lib/media";
import { useLocale } from "@/contexts/LocaleContext";

export default function ServiceHero({ service }) {
  const { t } = useLocale();

  return (
    <PageHero
      image={media.services?.[service.slug] || media.pages.services}
      eyebrow={{ en: `Service ${service.number}`, ar: `خدمة ${service.number}` }}
      title={{ en: service.title, ar: service.titleAr }}
      description={{ en: service.description, ar: service.descriptionAr }}
    >
      <div className="flex flex-wrap gap-3">
        {service.capabilities.map((capability) => (
          <span
            key={capability.title}
            className="rounded-full border border-line bg-white/[0.02] px-4 py-1.5 font-mono text-xs text-muted backdrop-blur-sm"
          >
            {t({ en: capability.title, ar: capability.titleAr })}
          </span>
        ))}
      </div>
    </PageHero>
  );
}