"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const directors = [
  {
    name: "R. Verma",
    role: "Project Director",
    photo: "/images/who3.jpg",
    message:
      "At Prismoline, we believe every project is an opportunity to set new benchmarks. Our commitment to safety and innovation drives us forward.",
    linkedin: "https://www.linkedin.com/in/r-verma-profile", // ⬅️ Add director's LinkedIn URL here
  },
  {
    name: "S. Iyer",
    role: "Finance Director",
    photo: "/images/who4.jpg",
    message:
      "Financial discipline and strategic planning are the backbone of our sustainable growth. We invest in quality that lasts generations.",
    linkedin: "https://www.linkedin.com/in/s-iyer-profile", // ⬅️ Add director's LinkedIn URL here
  },
  {
    name: "A. Sharma",
    role: "Operations Director",
    photo: "/images/who2.jpg",
    message:
      "Operations excellence is not just a goal, it is our habit. We ensure smooth execution and timely delivery across all projects.",
    linkedin: "https://www.linkedin.com/in/a-sharma-profile", // ⬅️ Add director's LinkedIn URL here
  },
];

export default function DirectorsMessage() {
  const [activeDirector, setActiveDirector] = useState(directors[0]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/texture-light.png"
          alt="Background texture"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[6px] text-blue-500 font-semibold mb-3">
            Leadership
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Meet Our <span className="text-blue-600">Directors</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Visionary leadership, unwavering dedication, and commitment to
            innovation — hear from the people who guide Prismoline forward.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          {/* Active Director Spotlight */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDirector.name}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12 md:mb-0 relative group overflow-hidden"
            >
              {/* Blue Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700" />
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-100"
                >
                  <Image
                    src={activeDirector.photo}
                    alt={activeDirector.name}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {activeDirector.name}
                  </h3>
                  <p className="text-base font-medium text-blue-600 mt-1 mb-5">
                    {activeDirector.role}
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-700 text-lg italic leading-relaxed"
                  >
                    “{activeDirector.message}”
                  </motion.p>
                  {/* LinkedIn Button linking to the active director's profile */}
                  <div className="mt-6 flex justify-center md:justify-start">
                    <a
                      href={activeDirector.linkedin} // ⬅️ The link now uses the active director's URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
                    >
                      <FaLinkedin size={24} />
                      <span>{activeDirector.name}&apos;s LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Director Selector */}
          <div className="grid grid-cols-1 gap-6">
            {directors.map((director) => (
              <motion.div
                key={director.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeDirector.name === director.name
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 shadow-lg"
                    : "bg-slate-100 border border-slate-200 hover:bg-slate-200"
                }`}
                onClick={() => setActiveDirector(director)}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                  <Image
                    src={director.photo}
                    alt={director.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    {director.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {director.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}