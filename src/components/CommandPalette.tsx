"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Moon, Sun, Download, Code2, User, Phone, Home, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useAppStore";
import { translations } from "@/lib/translations";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const { locale } = useAppStore();
  const t = translations[locale as keyof typeof translations] || translations.en;
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] sm:pt-[20vh] bg-slate-950/60 backdrop-blur-sm px-4">
      <div 
        className="fixed inset-0 z-[-1]" 
        onClick={() => setOpen(false)} 
      />
      <Command 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        loop
      >
        <div className="flex items-center border-b border-slate-100 dark:border-slate-800 px-3">
          <Command.Input 
            autoFocus
            placeholder={t.command.placeholder} 
            className="flex-1 h-14 bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 font-sans text-lg px-2"
          />
          <div className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
            ESC
          </div>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
          <Command.Empty className="py-6 text-center text-sm text-slate-500">
            {t.command.empty}
          </Command.Empty>

          <Command.Group heading={t.command.navTitle} className="text-xs font-semibold text-slate-500 px-2 py-2 mb-1">
            <Command.Item 
              onSelect={() => runCommand(() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <Home className="w-4 h-4 text-slate-400" />
              {t.command.backToTop}
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <User className="w-4 h-4 text-slate-400" />
              {t.command.about}
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <Code2 className="w-4 h-4 text-slate-400" />
              {t.command.projects}
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              {t.command.contact}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={t.command.actionsTitle} className="text-xs font-semibold text-slate-500 px-2 py-2 mb-1 mt-2">
            <Command.Item 
              onSelect={() => runCommand(() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Resume_Riyan_Zakaria.pdf';
                link.click();
              })}
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <Download className="w-4 h-4 text-slate-400" />
              {t.command.downloadCv}
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}
              className="flex items-center justify-between px-3 py-3 text-sm font-medium rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
            >
              <div className="flex items-center gap-3">
                {theme === "dark" ? <Sun className="w-4 h-4 text-slate-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
                {t.command.toggleTheme}
              </div>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
