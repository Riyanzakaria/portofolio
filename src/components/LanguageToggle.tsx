"use client";

import { Code2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export function LanguageToggle() {
  const { locale, setLocale } = useAppStore();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
      className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Toggle Language"
    >
      <Code2 className="w-3 h-3 text-accent" />
      <span className="font-mono uppercase">{locale}</span>
    </button>
  );
}
