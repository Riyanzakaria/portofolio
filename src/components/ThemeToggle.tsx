"use client";

import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <AnimatedThemeToggler 
      variant="circle" 
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center" 
    />
  );
}
