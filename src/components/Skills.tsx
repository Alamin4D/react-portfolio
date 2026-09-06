import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiVercel,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Modern, responsive & interactive interfaces",
    number: "01",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB",
        featured: true,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#ffffff",
        featured: true,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3178C6",
        featured: true,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "#06B6D4",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "#764ABC",
      },
    ],
  },
  {
    title: "Backend",
    description: "Scalable APIs, databases & server-side systems",
    number: "02",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "#339933",
        featured: true,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#ffffff",
        featured: true,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#336791",
        featured: true,
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
        color: "#ffffff",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
      },
    ],
  },
  {
    title: "Tools & Others",
    description: "Development workflow, deployment & ecosystem",
    number: "03",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "#F05032",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "#FFCA28",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "#ffffff",
        featured: true,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        color: "#1572B6",
      },
    ],
  },
];

const allSkills = skillCategories.flatMap((category) => category.skills);

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050509] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]"
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.035] blur-[120px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>

            <span className="text-sm font-medium tracking-wide text-indigo-300">
              My Tech Stack
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A modern toolkit I use to build scalable, high-performance and
            production-ready web applications.
          </p>
        </motion.div>

        {/* =========================================================
            SKILL MARQUEE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 overflow-hidden"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#050509] to-transparent sm:w-32" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#050509] to-transparent sm:w-32" />

          <div className="flex w-max animate-marquee">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="mx-2 flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07]"
              >
                <span
                  className="text-xl"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 8px ${skill.color}50)`,
                  }}
                >
                  {skill.icon}
                </span>

                <span className="whitespace-nowrap text-sm font-medium text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            CATEGORY CARDS
        ========================================================= */}

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.25 + categoryIndex * 0.12,
              }}
              className="group/category relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.035] sm:p-8"
            >
              {/* Category glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/[0.06] blur-[90px] transition-all duration-700 group-hover/category:bg-purple-500/[0.09]" />

              {/* Category Header */}
              <div className="relative mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-sm font-semibold text-indigo-300">
                    {category.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="hidden h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent sm:ml-8 sm:block" />
              </div>

              {/* Skills */}
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay:
                        0.35 +
                        categoryIndex * 0.1 +
                        skillIndex * 0.06,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black/20 p-5 text-center transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]">
                      {/* Hover background */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                        }}
                      />

                      {/* Featured badge */}
                      {skill.featured && (
                        <div className="absolute right-2 top-2">
                          <span className="rounded-full bg-indigo-500/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-indigo-300">
                            Core
                          </span>
                        </div>
                      )}

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                          rotate: 3,
                        }}
                        className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-3xl transition-all duration-300"
                        style={{
                          color: skill.color,
                        }}
                      >
                        <span
                          style={{
                            filter: `drop-shadow(0 0 10px ${skill.color}35)`,
                          }}
                        >
                          {skill.icon}
                        </span>
                      </motion.div>

                      {/* Name */}
                      <h4 className="relative text-sm font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                        {skill.name}
                      </h4>

                      {/* Bottom indicator */}
                      <div className="mx-auto mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-8" />
                    </div>

                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                      style={{
                        background: skill.color,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM STATS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              value: "15+",
              label: "Technologies",
            },
            {
              value: "3+",
              label: "Development Areas",
            },
            {
              value: "∞",
              label: "Learning Mindset",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.04]"
            >
              <div className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                {stat.value}
              </div>

              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.95,
          }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-6 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-gray-400">
              Constantly learning.{" "}
              <span className="text-gray-200">
                Always building.
              </span>
            </span>

            <span className="text-lg">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}