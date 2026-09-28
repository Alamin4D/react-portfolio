"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Award } from "lucide-react";

export default function About() {
  // Statistical Cards Data
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Briefcase className="h-5 w-5 text-sky-400" /> },
    { label: "Projects Completed", value: "40+", icon: <Award className="h-5 w-5 text-indigo-400" /> },
    { label: "Happy Clients", value: "15+", icon: <User className="h-5 w-5 text-emerald-400" /> },
  ];

  return (
    <section id="about" className="relative bg-slate-950 px-6 py-24 text-slate-50 md:px-12">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(129,140,248,0.05),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          
          {/* Left Column: Visual Box & Stats Card Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            {/* Visual Decorative Box */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-900 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-sky-400 mb-6 shadow-inner">
                <User className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Who Am I?</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                A dedicated builder who balances clean architecture with modern user experience. I bridge the gap between design concepts and cloud-scale engineering.
              </p>
            </div>

            {/* Micro Stats Row/Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-900 bg-slate-900/30 p-4 text-center backdrop-blur-xs transition-colors hover:border-slate-800"
                >
                  <div className="mb-2 p-1.5 bg-slate-950 rounded-lg border border-slate-900">
                    {stat.icon}
                  </div>
                  <span className="text-xl font-extrabold tracking-tight md:text-2xl text-slate-100">{stat.value}</span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Detailed Text Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <span className="text-sm font-semibold tracking-widest text-sky-400 uppercase">
                My Story
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                About <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              <p>
                Hello! I&apos;m <span className="text-slate-200 font-medium">Alamin</span>, a software engineer with a deep passion for digital craftsmanship. My journey in tech started with a curiosity about how things work on the internet, which quickly evolved into building dynamic, highly-optimized web applications.
              </p>
              <p>
                I thrive on turning complex problems into elegant, human-readable code. Whether I am tuning client-side performance, structuring robust APIs, or working on flexible UI components, I keep scale, security, and responsive systems front and center.
              </p>
            </div>

            {/* Quick Education / Focus Cards */}
            <div className="pt-4 border-t border-slate-900 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start space-x-3">
                <GraduationCap className="h-5 w-5 text-indigo-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Education</h4>
                  <p className="text-xs text-slate-500 mt-0.5">B.Sc. in Computer Science & Engineering</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Briefcase className="h-5 w-5 text-sky-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Current Focus</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Serverless Architecture & Next.js Performance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
