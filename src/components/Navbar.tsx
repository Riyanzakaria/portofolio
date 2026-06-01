"use client";

import { useState, useEffect } from "react";
import { Mail, Home, User, FolderGit2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-full px-6 py-3 items-center justify-between shadow-sm">
        <div className="flex items-center gap-8 font-mono text-sm w-full justify-between">
          <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-700">
            <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 py-1 rounded-full font-sans font-black text-xs tracking-widest">RZ.</span>
          </a>

          <div className="flex items-center gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;
              const Icon = item.icon;
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-sans font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                    isActive 
                      ? "bg-accent text-white shadow-sm" 
                      : "text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "" : "opacity-70"}`} />
                  {item.name}
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center pl-4 border-l border-slate-200 dark:border-slate-700 gap-4">
            <ThemeToggle />
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR (DOCK) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[95vw] z-[100] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-full px-3 py-2.5 flex items-center shadow-2xl">
        <div className="flex items-center gap-1.5">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="font-bold tracking-tighter text-slate-900 dark:text-white flex items-center pr-2 border-r border-slate-200 dark:border-slate-700 relative">
            <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-1.5 py-1 rounded-full font-sans font-black text-[10px] tracking-widest relative">
               RZ.
               <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full border border-white dark:border-slate-900"></span>
            </span>
          </a>

          {/* Links (Icons Only) */}
          <div className="flex items-center gap-1">
            {[...navLinks, { name: 'Contact', href: '#contact', icon: Mail }].map((item) => {
              const isActive = activeSection === item.href;
              const Icon = item.icon;
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-accent text-white shadow-md shadow-accent/30" 
                      : "text-slate-500 dark:text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  aria-label={item.name}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>

          {/* Right Side (Theme & Lang) */}
          <div className="flex items-center pl-2 border-l border-slate-200 dark:border-slate-700 gap-1.5">
            <div className="scale-90 origin-right">
              <ThemeToggle />
            </div>
            <div className="scale-90 origin-right">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
