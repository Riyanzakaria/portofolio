"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";

export function ProjectModal() {
  const { selectedProject, setSelectedProject } = useAppStore();

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-6 md:p-12 bg-slate-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0" 
            onClick={() => setSelectedProject(null)} 
          />
          
          <m.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            
            <button 
              className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full backdrop-blur-md z-50 transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none shadow-sm"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 dark:bg-slate-800 relative">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 overflow-y-auto flex flex-col bg-white dark:bg-slate-900">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-mono text-xs rounded-full border border-indigo-100 dark:border-indigo-800/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none mb-10">
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-4">
                  Di area ini, Anda dapat menjelaskan arsitektur sistem, tantangan teknis yang dihadapi, dan solusi yang diimplementasikan secara rinci. (Data akan diambil dari JSON content.full_desc di iterasi selanjutnya).
                </p>
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t border-slate-100 dark:border-slate-800">
                <button className="flex-1 px-6 py-3 bg-accent hover:bg-indigo-700 text-white rounded-xl font-medium flex justify-center items-center gap-2 transition-colors shadow-md shadow-accent/20">
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </button>
                <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium flex justify-center items-center transition-colors">
                  <Code2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
