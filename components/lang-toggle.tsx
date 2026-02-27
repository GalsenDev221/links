"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function LangToggle() {
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-4 right-4 z-50 h-8 w-20" />;
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm px-3 py-1.5 text-sm">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={
          lang === "fr"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground transition-colors"
        }
      >
        FR
      </button>
      <span className="text-muted-foreground select-none">·</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground transition-colors"
        }
      >
        EN
      </button>
    </div>
  );
}
