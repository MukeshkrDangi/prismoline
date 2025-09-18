// src/components/Projects/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  image: string;
  status: "ongoing" | "completed";
  description?: string; // ✅ add this optional field
};

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
