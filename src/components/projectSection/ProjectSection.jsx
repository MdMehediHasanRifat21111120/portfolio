import { ProjectCard } from "./ProjectCard";
import { projects } from "../../lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />
            <span className="text-[11px] tracking-[0.4em] text-zinc-500 uppercase">
              My Work
            </span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
                Projects
              </span>
            </h2>
            <span className="text-zinc-600 text-sm tracking-widest uppercase border-b border-zinc-800 pb-0.5">
              {projects.length} projects
            </span>
          </div>
          <div className="h-px w-12 bg-zinc-700" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
