import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const experiences = [
  {
    type: "work",
    title: "MERN Stack Developer (Internship)",
    company: "PeopleNTech",
    location: "Dhaka, Bangladesh",
    period: "2025",
    description:
      "Developed and maintained multiple web applications, collaborated with cross-functional teams, and improved application performance through optimized frontend and backend implementations.",
    skills: ["React", "Express.js", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Programming Hero",
    location: "Dhaka, Bangladesh",
    period: "January 2024 - June 2024",
    description:
      "Built responsive user interfaces, implemented modern design systems, and worked closely with UX-focused workflows to deliver clean and pixel-perfect web experiences.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
  },
];

const education = [
  {
    type: "education",
    title: "Diploma in Computer Science",
    company: "Mir Shamsul Islam Polytechnic Institute",
    location: "Dhaka, Bangladesh",
    period: "2021 - 2025",
    description:
      "Completed a Diploma in Computer Science with a strong focus on software development, web technologies, and database systems. Gained practical experience through academic projects and programming activities.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
    ],
  },
];

const allItems = [...experiences, ...education];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-[#050509] py-28 sm:py-32"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Ambient glows */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]"
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.025] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>

            <span className="text-sm font-medium text-indigo-300">
              My Journey
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A journey of continuous learning, professional growth, and
            building real-world software experiences.
          </p>

          {/* Small line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/60 to-purple-500/0 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {allItems.map((item, index) => {
              const isWork = item.type === "work";
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{
                    opacity: 0,
                    y: 60,
                    x: isLeft ? -20 : 20,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-[15px] top-8 z-20 -translate-x-1/2 md:left-1/2">
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 scale-[2.5] rounded-full blur-md ${
                        isWork ? "bg-indigo-500/30" : "bg-purple-500/30"
                      }`}
                    />

                    {/* Outer ring */}
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border ${
                        isWork
                          ? "border-indigo-400/40 bg-indigo-500/10"
                          : "border-purple-400/40 bg-purple-500/10"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          isWork
                            ? "bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.9)]"
                            : "bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.9)]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.25 },
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/25 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-indigo-950/30 sm:p-7"
                    >
                      {/* Card glow */}
                      <div
                        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${
                          isWork
                            ? "bg-indigo-500/15"
                            : "bg-purple-500/15"
                        } opacity-50`}
                      />

                      {/* Top accent */}
                      <div
                        className={`absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent ${
                          isWork ? "via-indigo-400/70" : "via-purple-400/70"
                        } to-transparent`}
                      />

                      {/* Header */}
                      <div className="relative mb-6 flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                            isWork
                              ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-400"
                              : "border-purple-400/20 bg-purple-500/10 text-purple-400"
                          }`}
                        >
                          {isWork ? (
                            <FaBriefcase size={19} />
                          ) : (
                            <FaGraduationCap size={21} />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          {/* Type */}
                          <div className="mb-1 flex items-center gap-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                                isWork
                                  ? "text-indigo-400"
                                  : "text-purple-400"
                              }`}
                            >
                              {isWork ? "Professional" : "Education"}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-gray-600" />

                            <span className="text-[10px] font-medium text-gray-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-indigo-300 sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-1 font-medium text-gray-400">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="relative mb-5 flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs text-gray-400">
                          <FaCalendarAlt className="text-indigo-400" />
                          <span>{item.period}</span>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs text-gray-400">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="relative text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>

                      {/* Divider */}
                      <div className="my-6 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                      {/* Skills */}
                      <div className="relative">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/10 hover:text-indigo-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom corner number */}
                      <span className="pointer-events-none absolute -bottom-5 -right-2 select-none text-8xl font-black text-white/[0.015]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            {
              value: "2+",
              label: "Professional Roles",
            },
            {
              value: "4+",
              label: "Years of Learning",
            },
            {
              value: "15+",
              label: "Technologies",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center backdrop-blur-xl"
            >
              <div className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                {stat.value}
              </div>

              <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ================= RESUME CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-14 text-center"
        >
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10">
            {/* CTA glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[70px]" />

            <div className="relative">
              <p className="mb-2 text-sm font-medium text-indigo-400">
                Want to know more?
              </p>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Explore my complete journey
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Get a detailed overview of my experience, projects, skills,
                and professional background.
              </p>

              <a
                href="/resume.pdf"
                download
                className="group mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-950/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-indigo-500/20"
              >
                <FaDownload className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5" />

                <span>Download Full Resume</span>

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}