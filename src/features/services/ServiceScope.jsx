"use client";

import { motion } from "framer-motion";
import { PackageCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLocale } from "@/contexts/LocaleContext";

export default function ServiceScope({ service }) {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Deliverables", ar: "المخرجات" }}
          title={{
            en: "What you walk away with.",
            ar: "ما الذي ستحصل عليه.",
          }}
        />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {service.deliverables.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-surface p-6 transition-colors duration-300 hover:bg-elevated"
            >
              <PackageCheck className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              <p className="mt-4 font-mono text-sm text-text">{item}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}