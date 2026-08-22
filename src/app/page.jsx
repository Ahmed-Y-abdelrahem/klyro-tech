import Hero from "@/features/home/Hero";
import MetricsBar from "@/features/home/MetricsBar";
import ServicesOverview from "@/features/home/ServicesOverview";
import WhyKlyro from "@/features/home/WhyKlyro";
import ProcessPreview from "@/features/home/ProcessPreview";
import WorkPreview from "@/features/home/WorkPreview";
import IndustriesSection from "@/features/home/IndustriesSection";
import TechStack from "@/features/home/TechStack";
import Testimonials from "@/features/home/Testimonials";
import CTA from "@/components/shared/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata = {
  title: "Klyro Tech — Engineering Digital Growth",
  description:
    "A digital partner combining strategy, design, technology, and marketing under one ecosystem — from strategy to launch and growth, across Egypt, Saudi Arabia, and the GCC.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={["Strategy", "Design", "Engineering", "Growth", "Branding", "Marketing"]} />
      <MetricsBar />
      <ServicesOverview />
      <WhyKlyro />
      <ProcessPreview />
      <WorkPreview />
      <IndustriesSection />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  );
}