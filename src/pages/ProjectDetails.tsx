import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/project";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-5 text-center text-white">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="mt-3 text-slate-400">
          The project you're looking for doesn't exist or was moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Link
          to="/"
          onClick={() =>
            setTimeout(
              () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
              100
            )
          }
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <img src={project.image} alt={project.name} className="h-72 w-full object-cover sm:h-96" />
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{project.name}</h1>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
            >
              <FiExternalLink /> Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-indigo-400 hover:text-indigo-400"
            >
              <FiGithub /> GitHub (Client)
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-bold text-indigo-400">Project Overview</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-bold text-indigo-400">Challenges Faced</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{project.challenges}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-indigo-400">Future Improvements</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{project.improvements}</p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-white/15 p-6 text-center">
          <p className="text-slate-400">Interested in more of my work?</p>
          <Link
            to="/"
            onClick={() =>
              setTimeout(
                () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
                100
              )
            }
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 text-sm font-semibold text-slate-950"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
