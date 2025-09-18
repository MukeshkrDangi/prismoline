"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { V } from "framer-motion/dist/types.d-Cjd591yU";

const TABS = ["Events", "Seminars", "Awards", "Exhibitions"] as const;

const GALLERY_DATA: Record<(typeof TABS)[number], { src: string; caption: string }[]> = {
  Events: [
    { src: "/images/gallery/04.jpg", caption: "Road Marking in Progress" },
    { src: "/images/gallery/04.jpg", caption: "Team at Work" },
    { src: "/images/gallery/04.jpg", caption: "Fresh Marking Finish" },
    { src: "/images/gallery/04.jpg", caption: "Safety First" },
    { src: "/images/gallery/04.jpg", caption: "Mountain Highway" },
    { src: "/images/gallery/04.jpg", caption: "Evening Sunset" },
    { src: "/images/gallery/04.jpg", caption: "Road Marking in Progress" },
    { src: "/images/gallery/04.jpg", caption: "Team at Work" },
    { src: "/images/gallery/04.jpg", caption: "Fresh Marking Finish" },
    { src: "/images/gallery/04.jpg", caption: "Safety First" },
    { src: "/images/gallery/04.jpg", caption: "Mountain Highway" },
    { src: "/images/gallery/04.jpg", caption: "Evening Sunset" },
    { src: "/images/gallery/04.jpg", caption: "Road Marking in Progress" },
    { src: "/images/gallery/04.jpg", caption: "Team at Work" },
    { src: "/images/gallery/04.jpg", caption: "Fresh Marking Finish" },
    { src: "/images/gallery/04.jpg", caption: "Safety First" },
    { src: "/images/gallery/04.jpg", caption: "Mountain Highway" },
    { src: "/images/gallery/04.jpg", caption: "Evening Sunset" },
    { src: "/images/gallery/04.jpg", caption: "Road Marking in Progress" },
    { src: "/images/gallery/04.jpg", caption: "Team at Work" },
    { src: "/images/gallery/04.jpg", caption: "Fresh Marking Finish" },
    { src: "/images/gallery/04.jpg", caption: "Safety First" },
    { src: "/images/gallery/04.jpg", caption: "Mountain Highway" },
    { src: "/images/gallery/04.jpg", caption: "Evening Sunset" },
  ],
  Seminars: [
    { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
     { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
     { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
     { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
     { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
     { src: "/images/gallery/n1.jpg", caption: "Leadership Seminar" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Discussion" },
    { src: "/images/gallery/n1.jpg", caption: "Knowledge Sharing" },
  ],
  Awards: [
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },
    { src: "/images/gallery/n1.jpg", caption: "Excellence Award" },
    { src: "/images/gallery/n1.jpg", caption: "Best Innovation" },
    { src: "/images/gallery/n1.jpg", caption: "Team Recognition" },

  ],
  Exhibitions: [
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    { src: "/images/gallery/n1.jpg", caption: "Expo Showcase" },
    { src: "/images/gallery/n1.jpg", caption: "Corporate Stall" },
    { src: "/images/gallery/04.jpg", caption: "Product Display" },
    
  ],
};

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Events");

  return (
    <main className="bg-gray-50 min-h-screen pt-24">
      {/* Hero */}
      <section className="px-4 md:px-10 lg:px-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-xl">
          <div className="rounded-3xl bg-white px-6 py-10 md:px-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Moments
              </span>
            </h1>
            <p className="mt-3 max-w-3xl text-gray-600">
              Highlights from our events, seminars, awards and exhibitions.
              Switch between categories below.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center mt-10">
        <div className="flex bg-gray-100 rounded-full p-1 shadow-md">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section with animation */}
      <div className="px-4 md:px-10 lg:px-16 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {GALLERY_DATA[activeTab].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={400}
                    height={400}
                    className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center px-2">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
