// src/app/about/page.tsx
"use client";

import AboutHero from "@/components/About/AboutHero";
import OurMission from "@/components/About/OurMission";
import OurVision from "@/components/About/OurVision";
import OurValues from "@/components/About/OurValues";
import Team from "@/components/About/Team";
import AboutCTA from "@/components/About/AboutCTA";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <OurMission />
      <OurVision />
      <OurValues />
      <Team />
      <AboutCTA />
    </main>
  );
}
