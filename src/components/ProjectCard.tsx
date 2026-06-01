"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

interface ProjectData {
  id: number | string;
  slug: string;
  thumbnail_url: string;
  tech_stack: string[];
  span?: string;
  content: {
    [key: string]: {
      title: string;
      short_desc: string;
      full_desc: string;
    };
  };
}

export function ProjectCard({ project }: { project: ProjectData }) {
  const { locale, setSelectedProject } = useAppStore();
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const currentContent = project.content[locale] || project.content['en'];

  return (
    <m.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelectedProject({
        id: project.id,
        title: currentContent.title,
        description: currentContent.short_desc,
        image: project.thumbnail_url,
        tags: project.tech_stack,
        span: project.span
      })}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl rounded-2xl cursor-pointer hover:border-accent dark:hover:border-accent transition-all duration-300 ${project.span}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setSelectedProject({
            id: project.id,
            title: currentContent.title,
            description: currentContent.short_desc,
            image: project.thumbnail_url,
            tags: project.tech_stack,
            span: project.span
          });
        }
      }}
    >
      <div 
        className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800 rounded-t-2xl"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover:bg-transparent transition-colors z-10"></div>
        <Image 
          src={project.thumbnail_url}
          alt={currentContent.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div 
        className="flex flex-col flex-grow p-6 relative z-20"
        style={{ transform: "translateZ(40px)" }}
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
          {currentContent.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
          {currentContent.short_desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech_stack.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-[10px] uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </m.article>
  );
}
