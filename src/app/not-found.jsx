import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32">
      <GridOverlay />
      <div className="absolute inset-0 bg-radial-violet" />
      <Container className="relative text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</span>
        <h1 className="mt-5 font-display text-4xl font-semibold text-text md:text-5xl">
          This page doesn&apos;t exist yet.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          The page you&apos;re looking for may have moved, or the link may be out of date.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/" variant="primary">Back To Home</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}