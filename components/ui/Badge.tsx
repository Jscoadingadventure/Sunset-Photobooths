import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "sunset" | "lake" | "olive";
  className?: string;
};

const variants = {
  default: "bg-mint text-olive",
  sunset: "bg-sunset/15 text-sunset",
  lake: "bg-lake/10 text-lake",
  olive: "bg-olive/10 text-olive",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
