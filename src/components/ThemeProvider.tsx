"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useAppStore } from "@/store/useAppStore";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const setThemeStore = useAppStore((state) => state.setTheme);

  return (
    <NextThemesProvider
      {...props}
    >
      <ThemeSync />
      {children}
    </NextThemesProvider>
  );
}

function ThemeSync() {
  const { theme, systemTheme } = require("next-themes").useTheme();
  const setThemeStore = useAppStore((state) => state.setTheme);

  React.useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark' || currentTheme === 'light') {
      setThemeStore(currentTheme);
    }
  }, [theme, systemTheme, setThemeStore]);

  return null;
}
