import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
};

export function Card({ children, className, highlighted = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 md:p-8",
        highlighted
          ? "border-sunset shadow-lg shadow-sunset/10 ring-2 ring-sunset/20"
          : "border-mint/60 hover:border-sage/40 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
