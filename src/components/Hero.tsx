
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { HiDownload, HiSparkles } from "react-icons/hi";

import alamin from "../assets/alamin.png";

const socialLinks = [
  {
    icon: <FaGithub size={19} />,
    href: "https://github.com/Alamin4D",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={19} />,
    href: "https://www.linkedin.com/in/mdalaminhossain2/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter size={19} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

const particles = [
  { left: "8%", top: "18%", delay: 0, duration: 4 },
  { left: "18%", top: "72%", delay: 1, duration: 5 },
  { left: "31%", top: "30%", delay: 0.5, duration: 3.5 },
  { left: "44%", top: "82%", delay: 1.5, duration: 4.5 },
  { left: "58%", top: "15%", delay: 0.8, duration: 5 },
  { left: "69%", top: "67%", delay: 1.2, duration: 3.8 },
  { left: "81%", top: "25%", delay: 0.3, duration: 4.8 },
  { left: "92%", top: "78%", delay: 1.8, duration: 4 },
  { left: "14%", top: "44%", delay: 2, duration: 5 },
  { left: "76%", top: "48%", delay: 0.7, duration: 3.7 },
  { left: "52%", top: "55%", delay: 1.1, duration: 4.2 },
  { left: "35%", top: "65%", delay: 2.2, duration: 5.2 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050509]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-600/15 blur-[150px]"
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-1/4 h-[550px] w-[550px] rounded-full bg-purple-600/12 blur-[160px]"
        />

        {/* Bottom cyan glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        {/* Particles */}
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-indigo-400/50"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] px-4 py-2 backdrop-blur-xl"
            >
              <HiSparkles className="text-yellow-400" />

              <span className="text-xs font-medium tracking-wide text-indigo-200 sm:text-sm">
                Available for new opportunities
              </span>

              <span className="relative ml-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Md Alamin
              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ahmed.
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 min-h-[42px] text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl"
            >
              <span className="mr-2 text-gray-500">
                I'm a
              </span>

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2200,
                  "React & Next.js Developer",
                  2200,
                  "TypeScript Developer",
                  2200,
                  "Backend Engineer",
                  2200,
                  "Problem Solver",
                  2200,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg lg:mx-0"
            >
              I build modern, scalable web applications with{" "}
              <span className="text-gray-200">
                React, Next.js, Node.js and TypeScript
              </span>
              . I care about clean architecture, thoughtful UI, and creating
              digital experiences that actually solve problems.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              {/* Primary */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] bg-left px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-500/20 transition-all duration-500 hover:bg-right hover:shadow-indigo-500/35"
              >
                <span className="relative z-10">
                  View My Work
                </span>

                <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                {/* shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.a>

              {/* CV */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-4 font-semibold text-gray-200 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.07] hover:text-white"
              >
                <HiDownload className="text-xl text-indigo-400 transition-transform duration-300 group-hover:translate-y-0.5" />

                Download CV
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="mr-2 hidden text-xs uppercase tracking-widest text-gray-600 sm:block">
                Find me
              </span>

              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-gray-500 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.08] hover:text-white"
                >
                  {social.icon}

                  <span className="pointer-events-none absolute mt-20 scale-0 rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT PROFILE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-10 rounded-full bg-indigo-600/20 blur-[70px]"
              />

              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-full border border-dashed border-indigo-400/20"
              />

              {/* Main ring */}
              <div className="relative h-[290px] w-[290px] sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px]">
                {/* Gradient ring */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6366f1,#a855f7,#06b6d4,#6366f1)] p-[2px]"
                >
                  <div className="h-full w-full rounded-full bg-[#050509]" />
                </motion.div>

                {/* Image frame */}
                <div className="absolute inset-[7px] overflow-hidden rounded-full border border-white/10 bg-[#0b0b12] p-2 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <img
                      src={alamin}
                      alt="Md Alamin Ahmed"
                      className="h-full w-full object-cover object-top"
                    />

                    {/* image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Orbit dot 1 */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-18px]"
                >
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
                </motion.div>

                {/* Orbit dot 2 */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-28px]"
                >
                  <span className="absolute bottom-8 right-3 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/60" />
                </motion.div>
              </div>

              {/* Experience card */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-8 rounded-2xl border border-white/10 bg-[#0d0d14]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-left-10"
              >
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  Experience
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  3+ Years Learning
                </p>
              </motion.div>

              {/* Available card */}
              <motion.div
                animate={{
                  y: [-7, 7, -7],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-15px] top-1/2 rounded-2xl border border-emerald-500/10 bg-[#0d0d14]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-[-25px]"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-semibold text-white">
                    Open to Work
                  </span>
                </div>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-6 rounded-xl border border-white/10 bg-[#0d0d14]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:left-[-15px]"
              >
                <span className="text-xs font-medium text-gray-300">
                  ⚛️ React
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM SCROLL INDICATOR
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gray-600">
              Scroll
            </span>

            <span className="flex h-8 w-5 justify-center rounded-full border border-gray-700 p-1.5">
              <motion.span
                animate={{
                  y: [0, 9, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1 rounded-full bg-indigo-400"
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}