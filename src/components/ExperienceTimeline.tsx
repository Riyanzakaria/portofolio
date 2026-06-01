"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Tech Solutions Inc.",
    date: "2023 - Sekarang",
    type: "work",
    description: "Merancang arsitektur pipeline data menggunakan Laravel, Python (PySpark), dan PostgreSQL untuk memproses jutaan baris data setiap harinya. Mengoptimalkan query database dan membangun sistem caching.",
    technologies: ["Python", "Laravel", "PostgreSQL", "PySpark", "Redis"]
  },
  {
    id: 2,
    title: "Mobile App Developer",
    company: "Creative Studio",
    date: "2021 - 2023",
    type: "work",
    description: "Mengembangkan aplikasi mobile native menggunakan Kotlin dan Jetpack Compose. Mengimplementasikan arsitektur MVVM dan integrasi dengan RESTful API.",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"]
  },
  {
    id: 3,
    title: "Bachelor of Computer Science",
    company: "Universitas Teknologi",
    date: "2017 - 2021",
    type: "education",
    description: "Lulus dengan predikat Cum Laude. Fokus pada rekayasa perangkat lunak dan analisis data. Aktif dalam klub pemrograman kampus.",
    technologies: ["C++", "Java", "Data Structures", "Algorithms"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
          Journey & <span className="text-accent">Experience.</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-mono text-sm max-w-xl mx-auto">
          Perjalanan karir dan pendidikan saya sejauh ini.
        </p>
      </div>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:border-none">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 bg-white dark:bg-slate-950 p-2 z-10 rounded-full">
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-accent flex items-center justify-center shadow-lg">
                {exp.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-accent" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-accent" />
                )}
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
              <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
                <div className={`flex items-center gap-2 text-xs font-mono text-accent mb-3 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {exp.company}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
