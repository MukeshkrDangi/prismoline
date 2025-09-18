"use client";

import ProjectsSection from "@/components/Projects/ProjectsSection";

export default function OnGoingProjectsPage() {
  return (
    <main className="pt-28 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        On-Going Projects
      </h1>
      <ProjectsSection /> {/* ✅ auto detects via route */}
    </main>
  );
}
