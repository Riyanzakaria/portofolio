"use client";

import { useEffect, useRef } from "react";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ExternalLink, Code2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";

function ModalInner({ project, onClose }: { project: any, onClose: () => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      className="fixed inset-0 z-[150] flex justify-center items-end sm:items-center p-0 sm:p-6 md:p-12 bg-slate-950/60 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0" 
        onClick={onClose} 
      />
      
      <m.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
        className="relative w-full max-w-6xl h-[95vh] sm:h-[90vh] bg-slate-50 dark:bg-slate-950 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/50 dark:border-slate-800/50"
      >
        {/* Glossy Noise Overlay */}
        <div className="absolute inset-0 z-50 pointer-events-none opacity-20 dark:opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <button 
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-3 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 text-white rounded-full backdrop-blur-md z-[60] transition-colors shadow-lg border border-white/20"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div ref={scrollContainerRef} data-lenis-prevent="true" className="w-full h-full overflow-y-auto scrollbar-hide relative z-10">
          
          {/* Parallax Header */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden bg-slate-900">
            <m.div 
              style={{ y: headerY, opacity: headerOpacity }}
              className="absolute inset-0 w-full h-[120%]"
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-900/40 to-transparent" />
            </m.div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 lg:p-16 z-20">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag: string) => (
                    <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white font-mono text-sm rounded-full border border-white/20 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-xl">
                  {project.title}
                </h2>
              </m.div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative w-full bg-slate-50 dark:bg-slate-950 z-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left: Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Overview
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Proyek ini dibangun dengan fokus pada performa tinggi dan pengalaman pengguna (UX) yang imersif. Tantangan utamanya adalah mengelola status aplikasi yang kompleks sambil mempertahankan animasi 60fps tanpa hambatan.
                  </p>
                  
                  <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Arsitektur modern dan skalabel",
                        "Optimasi performa & SEO",
                        "Animasi halus berbasis GPU (Framer Motion)",
                        "Sistem keamanan dengan Autentikasi JWT"
                      ].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <ChevronRight className="w-4 h-4 text-accent" />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Sidebar / Actions */}
                <div className="space-y-8">
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Role
                    </h4>
                    <p className="font-medium text-slate-900 dark:text-white mb-6">
                      Lead Developer
                    </p>
                    
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Timeline
                    </h4>
                    <p className="font-medium text-slate-900 dark:text-white">
                      3 Bulan
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a href="#" className="w-full px-6 py-4 bg-slate-900 dark:bg-white hover:bg-accent dark:hover:bg-accent text-white dark:text-slate-900 hover:text-white rounded-2xl font-bold flex justify-center items-center gap-3 transition-all duration-300 shadow-lg shadow-slate-900/10 dark:shadow-white/10 group">
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Live Preview
                    </a>
                    <a href="#" className="w-full px-6 py-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold flex justify-center items-center gap-3 transition-colors">
                      <Code2 className="w-5 h-5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </m.div>
    </div>
  );
}

export function ProjectModal() {
  const { selectedProject, setSelectedProject } = useAppStore();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <ModalInner 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </AnimatePresence>
  );
}
