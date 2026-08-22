"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import Timeline from "@/components/shared/Timeline";
import { useLocale } from "@/contexts/LocaleContext";

export default function ProcessPreview() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={{ en: "How We Work", ar: "كيف نعمل" }}
              title={{
                en: "Five phases. Zero guesswork.",
                ar: "خمس مراحل. دون أي تخمين.",
              }}
              description={{
                en: "The same process runs across every engagement, so you always know what stage you're in and what comes next.",
                ar: "تسير العملية ذاتها في كل مشروع، لتعرف دائمًا في أي مرحلة أنت وماذا يليها.",
              }}
            />
            <Button href="/process" variant="secondary" className="mt-8">
              {t({ en: "See The Full Process", ar: "استعرض العملية كاملة" })}
            </Button>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Timeline />
          </div>
        </div>
      </Container>
    </section>
  );
}