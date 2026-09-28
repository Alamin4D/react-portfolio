"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Software Engineer", "Backend Developer", "MERN Stack Developer", "UI/UX Designer", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 text-slate-50 md:px-12">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row w-full z-10">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center md:max-w-2xl md:text-left"
        >
          <span className="text-sm font-semibold tracking-widest text-sky-400 uppercase">
            Available for Freelance & Full-time
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Alamin</span>
          </h1>

          {/* Typewriter Effect Container */}
          <h2 className="text-2xl font-medium text-slate-400 sm:text-3xl min-h-[40px]">
            I am a <span>{text}</span>
            <Cursor cursorColor="#38bdf8" />
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            I craft high-performance web experiences using cutting-edge technologies. 
            Let's turn your ideas into functional digital realities.
          </p>

          {/* Normal HTML/Tailwind Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2 btn-shine"
            >
              View My Work <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Contact Me <Mail className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Glow Background */}
          <motion.div 
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute h-72 w-72 rounded-full bg-sky-500/20 blur-3xl sm:h-96 sm:w-96" 
          />

          {/* Fluid Morphing Shape */}
          <motion.div
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 30% 70% / 70% 70% 30% 30%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative h-64 w-64 overflow-hidden border-4 border-slate-800 bg-slate-900 sm:h-80 sm:w-80"
          >
            <img
              src="/images/alamin.png"
              alt="Developer Profile"
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
