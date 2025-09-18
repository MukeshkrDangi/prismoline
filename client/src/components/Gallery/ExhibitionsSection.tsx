"use client";

import GalleryCard from "./GalleryCard";
import { motion } from "framer-motion";

const images = [
  { src: "/images/who1.jpg", alt: "Stall A1", type: "hexagon" as const },
  { src: "/images/who2.jpg", alt: "Visitors", type: "square" as const },
  { src: "/images/who3.jpg", alt: "Demo Zone", type: "hexagon" as const },
  { src: "/images/who4.jpg", alt: "Showcase", type: "square" as const },
  { src: "/images/who5.jpg", alt: "Live Test", type: "hexagon" as const },
  { src: "/images/who6.jpg", alt: "Networking", type: "square" as const },
  { src: "/images/whatwedo/smart1.jpg", alt: "Panel Visit", type: "hexagon" as const },
  { src: "/images/whatwedo/smart2.jpg", alt: "Closing Walk", type: "square" as const },
];

export default function ExhibitionsSection() {
  return (
    <section className="py-14 px-4 md:px-10 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Exhibitions
      </motion.h2>
      <div className="mx-auto mt-2 mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600" />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <GalleryCard key={i} src={img.src} alt={img.alt} type={img.type} />
        ))}
      </div>
    </section>
  );
}
