"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "Selamat Datang"
];

export function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    
    // Prevent scrolling while welcome screen is active
    document.body.style.overflow = "hidden";
    
    // Cycle through greetings
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 400); // Change language every 400ms

    // Hide screen after all greetings finish + a small delay
    const totalDuration = (greetings.length * 400) + 800; 
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, totalDuration);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-screen"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 text-white overflow-hidden"
        >
          {/* BACKGROUND ANIMATION */}
          <div className="absolute inset-0 z-0 opacity-50">
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-cyber-grid pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} />
            
            {/* Floating glowing orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -60, 0],
                y: [0, 60, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px]" 
            />
          </div>

          {/* TEXT ANIMATION */}
          <div className="relative z-10 flex overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{
                  duration: 0.3,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="flex items-center gap-2"
              >
                <span className="text-5xl md:text-7xl font-black font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400 drop-shadow-sm">
                  {greetings[index]}
                </span>
                {/* Dot at the end, colored with accent */}
                <span className="text-5xl md:text-7xl font-black font-sans tracking-tight text-accent">
                  .
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
