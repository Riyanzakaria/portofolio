"use client";

import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

const TECH_STACK_ROW_1 = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" }, // fallback icon
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
];

const TECH_STACK_ROW_2 = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TanStack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }, 
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-3 group">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-accent dark:group-hover:border-accent shadow-sm">
        <div className="relative w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
           {/* Using img tag to avoid remote pattern configuration for Next Image */}
           <img src={icon} alt={name} className="w-full h-full object-contain drop-shadow-sm" />
        </div>
      </div>
      <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
};

export function TechStackSection() {
  return (
    <section className="w-full pt-24 pb-12 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
          Technology <span className="text-accent">Stack</span>
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <ScrollVelocityContainer className="flex flex-col gap-2">
          
          <ScrollVelocityRow baseVelocity={1} direction={1}>
            <div className="flex px-3 py-2">
              {TECH_STACK_ROW_1.map((tech, i) => (
                <TechCard key={`row1-${i}`} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </ScrollVelocityRow>
          
          <ScrollVelocityRow baseVelocity={1} direction={-1}>
            <div className="flex px-3 py-2">
              {TECH_STACK_ROW_2.map((tech, i) => (
                <TechCard key={`row2-${i}`} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </ScrollVelocityRow>

        </ScrollVelocityContainer>
        
        {/* Gradient overlays for seamless edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
      </div>
    </section>
  );
}
