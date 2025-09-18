"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProjectsGrid from "./ProjectsGrid";
import type { Project } from "./ProjectCard";

// ---- Tabs ----
const tabs = [
  { key: "ongoing", label: "Ongoing Projects" },
  { key: "completed", label: "Completed Projects" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

type ProjectsSectionProps = {
  defaultTab?: TabKey; // optional override
};

// ---- Animation Variants ----
const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ---- Sample Data (replace with API later) ----
const ONGOING: Project[] = [
  { id: "1", title: "Smart Highway Lighting", description: "IoT-based adaptive street lights.", image: "/images/who1.jpg", status: "ongoing" },
  { id: "2", title: "Urban Road Marking", description: "Durable thermoplastic line marking.", image: "/images/who2.jpg", status: "ongoing" },
];

const COMPLETED: Project[] = [
  { id: "3", title: "City Ring Road", description: "Completed smart signage installation.", image: "/images/who3.jpg", status: "completed" },
  { id: "4", title: "Industrial Safety Zone", description: "Road studs & reflective paint project.", image: "/images/who4.jpg", status: "completed" },
];

export default function ProjectsSection({ defaultTab }: ProjectsSectionProps) {
  const pathname = usePathname();

  // derive tab from URL
  const pathTab: TabKey =
    pathname.includes("completed") ? "completed" : "ongoing";

  const [active, setActive] = useState<TabKey>(defaultTab || pathTab);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setActive(defaultTab || pathTab);
  }, [pathname, defaultTab, pathTab]);

  const projects = active === "ongoing" ? ONGOING : COMPLETED;

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === tab.key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
          </motion.div>
        </AnimatePresence>

        {/* Modal (if you want to show details later) */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
              <h2 className="text-xl font-bold mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-slate-600 mb-4">
                {selectedProject.description}
              </p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
