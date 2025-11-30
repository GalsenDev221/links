import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  description?: string;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function LinkButton({
  href,
  icon,
  children,
  description,
  variant = "outline",
  className = "",
}: LinkButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size="lg"
      className={`w-full justify-start ${description ? 'gap-3 sm:gap-4 h-auto py-3 sm:py-4' : 'gap-3 h-14'} text-left font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={description ? "flex items-start sm:items-center gap-3 sm:gap-4" : "flex items-center"}
        aria-label={`${children} (ouvre dans un nouvel onglet)`}
      >
        {icon && (
          <span className={`flex-shrink-0 ${description ? 'mt-0.5 sm:mt-0' : ''}`} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={description ? "flex-1 min-w-0" : "flex-1"}>
          {description ? (
            <>
              <span className="block text-sm sm:text-base font-medium leading-snug break-words">
                {children}
              </span>
              <span className="block text-xs sm:text-sm text-muted-foreground font-normal mt-1 leading-relaxed break-words whitespace-normal">
                {description}
              </span>
            </>
          ) : (
            children
          )}
        </span>
        <ExternalLink
          className={description ? "w-4 h-4 opacity-50 flex-shrink-0 mt-0.5 sm:mt-1" : "w-4 h-4 opacity-50"}
          aria-hidden="true"
        />
      </a>
    </Button>
  );
}
