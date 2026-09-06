
"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiCoffee,
  FiHeart,
  FiCamera,
  FiArrowUpRight,
} from "react-icons/fi";

const HIGHLIGHTS = [
  {
    icon: FiCode,
    title: "My Journey",
    text: "Started with simple HTML and CSS pages, then fell in love with problem-solving and gradually evolved into building complete full-stack applications.",
  },
  {
    icon: FiCoffee,
    title: "What I Enjoy",
    text: "Crafting clean interfaces, solving challenging problems, and turning rough ideas into polished, useful products that people can actually enjoy.",
  },
  {
    icon: FiCamera,
    title: "Beyond Code",
    text: "When I'm away from the keyboard, I enjoy football, sketching, photography, exploring new places, and discovering new ideas.",
  },
  {
    icon: FiHeart,
    title: "My Values",
    text: "Continuous learning, honest communication, clean code, and building things that make a meaningful difference.",
  },
];

const STATS = [
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "10+",
    label: "Projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050509] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[150px]"
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Get To Know Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            More Than Just{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A little story about who I am, what I build, and what keeps me
            curious about technology.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* =======================================================
              PROFILE IMAGE
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-[3rem] bg-indigo-500/10 blur-3xl" />

              {/* Decorative rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-indigo-400/20"
              />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.035] p-2 shadow-2xl backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/alamin.png"
                    alt="Alamin - Full Stack Web Developer"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/70 via-transparent to-transparent" />

                  {/* Bottom status */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                        </span>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Available
                          </p>
                          <p className="text-[10px] text-gray-400">
                            For opportunities
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-gray-500">
                        Dhaka, BD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="absolute -right-5 top-10 hidden rounded-2xl border border-white/10 bg-[#0d0d14]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
              >
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  Role
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Full Stack Developer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* =======================================================
              TEXT CONTENT
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Small label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-purple-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Who I Am
              </span>
            </div>

            {/* Main heading */}
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              A curious developer who loves building things that{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                matter.
              </span>
            </h3>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-400">
              <p>
                I'm{" "}
                <span className="font-medium text-white">
                  Alamin
                </span>
                , a Full Stack Web Developer based in Dhaka, Bangladesh. My
                programming journey started with curiosity about how websites
                actually work — and that curiosity quickly became a passion
                for building software.
              </p>

              <p>
                Over the years, I've spent countless hours learning, breaking
                things, fixing them, and turning ideas into real applications.
                I enjoy working across the stack — from creating thoughtful
                interfaces with React and Next.js to designing APIs,
                authentication systems, databases, and payment integrations
                on the backend.
              </p>

              <p>
                What excites me most is the complete process of transforming
                an idea into something people can actually use. I care about
                clean architecture, good UX, maintainable code, and continuous
                improvement.
              </p>
            </div>

            {/* =====================================================
                STATS
            ===================================================== */}

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.04] sm:px-5"
                >
                  <div className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    {stat.value}
                  </div>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-500 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            HIGHLIGHTS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                A Few Things About Me
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Beyond the code
              </h3>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent sm:ml-10 sm:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                {/* Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 group-hover:opacity-100" />

                <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-indigo-500/20 group-hover:bg-white/[0.04]">
                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-bold text-white/[0.08]">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.08] text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/[0.14]">
                    <Icon className="text-xl" />
                  </div>

                  {/* Content */}
                  <h4 className="text-base font-semibold text-white">
                    {title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {text}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-5 h-px w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.08] hover:text-white"
          >
            Let's build something together

            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}