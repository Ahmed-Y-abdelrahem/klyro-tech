"use client";

import Container from "@/components/ui/Container";
import ContactForm from "@/components/shared/ContactForm";
import ContactInfo from "@/features/contact/ContactInfo";

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}