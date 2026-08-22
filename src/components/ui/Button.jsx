"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-gradient text-[#05060F] font-semibold hover:brightness-110 hover:scale-[1.02] shadow-glow",
  secondary:
    "bg-transparent text-text border border-line hover:border-accent/60 hover:bg-accent/10",
  ghost:
    "bg-transparent text-accent hover:text-lavender hover:underline underline-offset-4",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  disabled,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-body transition-all duration-300",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}