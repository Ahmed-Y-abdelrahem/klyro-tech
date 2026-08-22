"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkCard from "@/components/shared/WorkCard";
import { work } from "@/data/work";
import { useLocale } from "@/contexts/LocaleContext";

export default function RelatedWork({ current }) {
  const { t } = useLocale();

  const related = work
    .filter((w) => w.slug !== current.slug)
    .sort(
      (a, b) =>
        (b.category === current.category) - (a.category === current.category)
    )
    .slice(0, 2);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow={{ en: "Related Work", ar: "أعمال ذات صلة" }}
          title={{ en: "More delivery stories.", ar: "المزيد من قصص التسليم." }}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}