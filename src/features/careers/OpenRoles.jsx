"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import { openRoles } from "@/data/roles";
import { company } from "@/data/company";
import { useLocale } from "@/contexts/LocaleContext";

export default function OpenRoles() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Open Roles", ar: "الوظائف المتاحة" }}
          title={{ en: "Current openings.", ar: "الفرص المفتوحة حاليًا." }}
        />
        <div className="mt-12 flex flex-col divide-y divide-line border-t border-line">
          {openRoles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-text">
                  {role.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                 {t({ en: role.description, ar: role.descriptionAr })}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-muted">
                  <span>{role.type}</span>
                  <span>·</span>
                  <span>{role.location}</span>
                </div>
              </div>
              <Button
                href={`mailto:${company.email}?subject=Application: ${role.title}`}
                variant="secondary"
              >
                {t({ en: "Apply Now", ar: "قدّم الآن" })}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          {t({ en: "Don't see the right role?", ar: "لا ترى الدور المناسب؟" })}{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-accent transition-colors hover:text-lavender"
          >
            {t({ en: "Send us your portfolio", ar: "أرسل لنا معرض أعمالك" })}
          </a>{" "}
          — {t({
            en: "we're always open to meeting strong people.",
            ar: "فنحن منفتحون دائمًا على لقاء الأشخاص المميزين.",
          })}
        </p>
      </Container>
    </section>
  );
}