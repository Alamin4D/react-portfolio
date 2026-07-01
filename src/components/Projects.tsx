// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/project";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            My Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A few projects that highlight my skills across the full stack —
            from UI/UX to backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    navigate(`/project/${project.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-semibold text-white transition-colors bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                >
                  View Details <FiArrowUpRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}