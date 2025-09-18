"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

type Props = {
  members: TeamMember[];
};

export default function TeamSpotlight({ members }: Props) {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number>(0);

  const activeMember = members[activeMemberIndex];

  const handleNext = () => {
    setActiveMemberIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const handlePrev = () => {
    setActiveMemberIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  const visibleMembers = [
    members[(activeMemberIndex - 2 + members.length) % members.length],
    members[(activeMemberIndex - 1 + members.length) % members.length],
    activeMember,
    members[(activeMemberIndex + 1) % members.length],
    members[(activeMemberIndex + 2) % members.length],
  ];

  // ✅ type-safe getMemberClass
  const getMemberClass = (index: number): string => {
    if (index === activeMemberIndex) {
      return "scale-100 ring-2 ring-blue-500 shadow-2xl";
    }
    return "scale-75 opacity-50 hover:opacity-100 transition-all duration-300";
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50 text-slate-800">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Our Visionaries
      </h2>
      <p className="text-lg md:text-xl text-center max-w-2xl text-slate-600 mb-12">
        Meet the core team driving our success with passion and expertise.
      </p>

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl flex flex-col items-center p-4">
        {/* Profile Card & Bio (Spotlight) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMember.name}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm md:max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 text-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto -mt-20 md:-mt-24 border-4 border-white overflow-hidden shadow-lg mb-4">
              <img
                src={activeMember.photo}
                alt={activeMember.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold">{activeMember.name}</h3>
            <p className="text-sm text-blue-600 font-semibold mb-4">{activeMember.role}</p>
            <p className="text-sm md:text-base text-slate-600 mb-6">{activeMember.bio}</p>
            {/* Social Links */}
            <div className="flex justify-center space-x-4 text-slate-500">
              {activeMember.linkedin && (
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {activeMember.instagram && (
                <a
                  href={activeMember.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {activeMember.facebook && (
                <a
                  href={activeMember.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
              )}
              {activeMember.twitter && (
                <a
                  href={activeMember.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Member Carousel / Navigator */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex -space-x-8">
            {visibleMembers.map((member, index: number) => (
              <motion.div
                key={member.name}
                className={`w-28 h-28 rounded-full overflow-hidden transition-all duration-300 cursor-pointer border-4 border-white ${getMemberClass(
                  activeMemberIndex + index - 2
                )}`}
                onClick={() =>
                  setActiveMemberIndex(
                    (activeMemberIndex + index - 2 + members.length) % members.length
                  )
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ zIndex: index }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
