import React from "react";
import { motion } from "framer-motion";

// Icons from lucide-react (Built-in standard library setup)
import { 
  Code2, 
  Layers, 
  Database, 
  Terminal, 
  Cpu, 
  Globe 
} from "lucide-react";

// Skill Data Structure
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6 text-sky-400" />,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-6 w-6 text-indigo-400" />,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM", "RESTful APIs"],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="h-6 w-6 text-emerald-400" />,
    skills: ["Git & GitHub", "Docker", "AWS (S3)", "Vercel", "Firebase", "Linux Terminal"],
  },
  {
    title: "Design & UX/UI",
    icon: <Layers className="h-6 w-6 text-pink-400" />,
    skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping", "Motion Graphics"],
  },
];

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 px-6 py-24 text-slate-50 md:px-12">
      {/* Subtle Background Decorative Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.05),rgba(255,255,255,0))]" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-sm font-semibold tracking-widest text-sky-400 uppercase">
            My Expertise
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Skills & <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            A comprehensive overview of the tools, frameworks, and core technologies I use to bring modern digital solutions to life.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              // variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-slate-900 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/70 shadow-lg"
            >
              {/* Top Row: Icon & Category Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800/80 group-hover:border-sky-500/30 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-sky-500/40 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
