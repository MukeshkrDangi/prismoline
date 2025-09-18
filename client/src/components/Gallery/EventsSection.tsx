"use client";

import GalleryCard from "./GalleryCard";
import { motion } from "framer-motion";

const images = [
  { src: "/images/icons/04.jpg", alt: "Annual Meet", type: "hexagon" as const },
  { src: "/images/who2.jpg", alt: "Product Launch", type: "square" as const },
  { src: "/images/who3.jpg", alt: "Booth Interaction", type: "hexagon" as const },
  { src: "/images/who4.jpg", alt: "CSR Drive", type: "square" as const },
  { src: "/images/who5.jpg", alt: "Field Demo", type: "hexagon" as const },
  { src: "/images/who6.jpg", alt: "Townhall", type: "square" as const },
  { src: "/images/whatwedo/smart.jpg", alt: "Roadshow", type: "hexagon" as const },
  { src: "/images/whatwedo/smart1.jpg", alt: "Partner Meet", type: "square" as const },
];

export default function EventsSection() {
  return (
    <section className="py-14 px-4 md:px-10 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Events
      </motion.h2>
      <div className="mx-auto mt-2 mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <GalleryCard key={i} src={img.src} alt={img.alt} type={img.type} />
        ))}
      </div>
    </section>
  );
}
