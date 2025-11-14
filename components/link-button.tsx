import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function LinkButton({
  href,
  icon,
  children,
  variant = "outline",
  className = "",
}: LinkButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size="lg"
      className={`w-full justify-start gap-3 h-14 text-left font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        aria-label={`${children} (ouvre dans un nouvel onglet)`}
      >
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="flex-1">{children}</span>
        <ExternalLink
          className="w-4 h-4 opacity-50"
          aria-hidden="true"
        />
      </a>
    </Button>
  );
}
