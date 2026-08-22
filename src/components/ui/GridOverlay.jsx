export default function GridOverlay({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] ${className}`}
    />
  );
}