import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";
import { projects } from "../data/project";

export default function Projects() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleViewDetails = (id:any) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
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

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]"
        />

        {/* Right glow */}
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
          className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-2">
            <FiLayers className="text-indigo-400" />

            <span className="text-sm font-medium text-indigo-300">
              {showAll ? "Complete Portfolio" : "Selected Work"}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {showAll ? (
              <>
                All{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </>
            ) : (
              <>
                Featured{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A collection of projects where I turn ideas into modern,
            scalable, and user-focused digital experiences.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/25 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-indigo-950/30"
            >
              {/* Card top glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-24 w-48 -translate-x-1/2 rounded-full bg-indigo-500/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* ================= IMAGE ================= */}
              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-[#050509]/20 to-transparent" />

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-transparent to-purple-600/0 transition-all duration-500 group-hover:from-indigo-600/20 group-hover:to-purple-600/20" />

                {/* Project number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-xs font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* View icon */}
                <button
                  onClick={() => handleViewDetails(project.id)}
                  aria-label={`View ${project.name}`}
                  className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-indigo-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <FiExternalLink size={17} />
                </button>

                {/* Bottom image label */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-300 backdrop-blur-md">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Project name */}
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {project.name}
                </h3>

                {/* Tagline */}
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.tagline}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                {/* Technologies */}
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.techStack.length > 4 && (
                      <span className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-gray-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleViewDetails(project.id)}
                  className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/20"
                >
                  <span>View Project</span>

                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </button>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500 group-hover:w-2/3" />
            </motion.article>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}
        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <span>View All Projects</span>

              <FiArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={17}
              />
            </button>
          </motion.div>
        )}

        {/* ================= PORTFOLIO FOOTER ================= */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 text-center"
          >
            <button
              onClick={() => setShowAll(false)}
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-indigo-400/30 hover:text-white"
            >
              Show Featured Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}