import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as: Tag = "div",
  size = "default", // default | narrow | wide
  ...props
}) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-container",
    wide: "max-w-[1600px]",
  };

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}