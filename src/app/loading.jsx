import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Loading
        </span>
      </div>
    </div>
  );
}