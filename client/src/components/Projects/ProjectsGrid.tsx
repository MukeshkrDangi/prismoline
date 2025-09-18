"use client";

import ProjectCard, { Project } from "./ProjectCard";

type ProjectsGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

export default function ProjectsGrid({ projects, onSelect }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} onSelect={onSelect} />
      ))}
    </div>
  );
}
