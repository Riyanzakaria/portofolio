"use client";

import { Globe, Briefcase, Mail, Code2, Download, Cpu } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { WavePath } from "@/components/ui/wave-path";
import { ContactForm } from "@/components/ContactForm";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SocialDock } from "@/components/SocialDock";
import projectsData from "@/data/projects.json";
import { useAppStore } from "@/store/useAppStore";
import { translations } from "@/lib/translations";

export default function Home() {
  const { setSelectedProject, locale } = useAppStore();
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-accent/30 selection:text-accent">

      <Navbar />

      <main className="pt-32">

        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[85vh] flex flex-col lg:flex-row justify-center items-center px-6 max-w-7xl mx-auto overflow-hidden gap-12 lg:gap-20">

          <div className="absolute inset-0 bg-cyber-grid opacity-50 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

          <div className="relative z-10 flex-1 space-y-6 max-w-2xl text-center lg:text-left mt-10 lg:mt-0">
            <p className=" text-slate-500 dark:text-slate-400 font-semibold tracking-wider flex items-center justify-center lg:justify-start gap-3 text-sm">
              <span className="w-8 h-[2px] bg-slate-400 dark:bg-slate-600 hidden lg:block"></span>
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
              <span className="block mb-2">Riyan Zakaria</span>
              <span className="text-accent flex items-center justify-center lg:justify-start">
                Zulkarnain<span className="text-slate-900 dark:text-white">.</span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 mt-2">
              {t.hero.role}
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-5 my-6">
              <SocialDock />
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 bg-accent hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex items-center gap-2 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] group">
                <span className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors"><Code2 className="w-4 h-4" /></span>
                {t.hero.viewProjects}
              </a>

              <a href="#contact" className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-accent hover:text-accent text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex items-center gap-2 shadow-sm">
                <Mail className="w-5 h-5" />
                {t.hero.contactMe}
              </a>
            </div>
          </div>

          <div className="relative z-10 flex-1 w-full max-w-md flex justify-center mt-12 lg:mt-0 group perspective-1000">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 transform transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-blue-900">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
                  alt="Architectural background"
                  fill
                  className="object-cover opacity-60 mix-blend-overlay"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90"></div>
              </div>

              <div className="absolute top-6 left-6 right-6 z-20">
                <h3 className="text-white font-bold text-2xl tracking-tight">Riyan Zakaria <span className="text-amber-400">Zulkarnain</span></h3>
                <p className="text-slate-300 text-sm font-mono mt-1">Software Engineer</p>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 z-10" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.8))' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
                  alt="Riyan Zakaria Zulkarnain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-slate-800 border-2 border-accent overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                      alt="Avatar small"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">@riyanzakaria</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                      <span className="text-slate-300 text-xs font-mono">Online</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 text-white text-sm font-medium rounded-xl backdrop-blur-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <TechStackSection />

        {/* ABOUT SECTION */}
        <section id="about" className="pt-12 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="relative w-full max-w-[340px] aspect-[3/4] bg-amber-400 rounded-[2.5rem] shadow-sm flex items-end justify-center">
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-amber-400/40 blur-xl rounded-full z-0"></div>
              <div className="relative z-10 w-[85%] h-full" style={{ maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
                  alt="Riyan Zakaria"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.3] tracking-tight">
              {t.about.title} <span className="inline-block bg-accent text-white px-5 py-2 rounded-xl transform -rotate-1 shadow-sm mt-1 sm:mt-0">RIYAN ZAKARIA</span>
              <br className="hidden sm:block" />
              <span className="inline-block bg-emerald-500 text-white px-5 py-2 rounded-xl transform rotate-1 shadow-sm mt-3">{t.about.subtitle}</span>
            </h2>

            <div className="border-l-4 border-accent pl-6 space-y-5 text-slate-600 dark:text-slate-400 text-base md:text-lg text-left max-w-2xl mx-auto lg:mx-0">
              <p>{t.about.para1}</p>
              <p>{t.about.para2}</p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a href="/resume.pdf" download className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 text-white rounded-xl font-bold font-sans tracking-wide transition-all duration-300 flex items-center gap-3 shadow-lg shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-accent hover:-translate-y-1">
                <Download className="w-5 h-5" />
                {t.about.downloadCv}
              </a>
            </div>
          </div>
        </section>

        <ExperienceTimeline />

        <div className="max-w-7xl mx-auto px-6 relative py-8">
           <WavePath />
        </div>

        {/* FEATURED WORKS */}
        <section id="projects" className="pt-16 pb-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
              {t.projects.title} <span className="text-accent">{t.projects.subtitle}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 font-mono text-sm">
              {t.projects.desc}
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {projectsData.map((project, idx) => {
              const currentContent = project.content[locale as keyof typeof project.content] || project.content['en'];
              const classNames = [
                "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3",
                "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4",
                "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
                "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
              ];

              return (
                <BentoCard
                  key={project.id}
                  name={currentContent.title}
                  description={currentContent.short_desc}
                  href="#"
                  cta={t.projects.viewDetails}
                  className={`${classNames[idx % classNames.length]} cursor-pointer group`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject({
                      id: project.id,
                      title: currentContent.title,
                      description: currentContent.short_desc,
                      image: project.thumbnail_url,
                      tags: project.tech_stack,
                      span: project.span
                    });
                  }}
                  background={
                    <>
                      <img
                        src={project.thumbnail_url}
                        alt={currentContent.title}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-50 dark:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
                    </>
                  }
                />
              )
            })}
          </BentoGrid>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
                {t.contact.title} <span className="text-accent">{t.contact.subtitle}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400">{t.contact.desc}</p>
            </div>

            <ContactForm />
          </div>
        </section>

      </main>

      <footer className="py-8 pb-24 md:pb-8 text-center text-slate-500 font-mono text-sm border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <p>© {new Date().getFullYear()} Riyan Zakaria Zulkarnain. {t.footer}</p>
      </footer>
    </div>
  );
}
