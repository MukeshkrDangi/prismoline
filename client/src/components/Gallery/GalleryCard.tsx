"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  type?: "hexagon" | "square";
};

const hexagonClip =
  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)";

export default function GalleryCard({ src, alt, type = "square" }: Props) {
  const isHex = type === "hexagon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-full aspect-square"
    >
      {/* shadow / border glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
          isHex ? "" : "shadow-[0_10px_30px_rgba(2,6,23,0.25)]"
        } group-hover:shadow-[0_12px_40px_rgba(2,6,23,0.35)]`}
        style={isHex ? { clipPath: hexagonClip } : {}}
      />

      {/* image wrapper */}
      <div
        className="relative w-full h-full overflow-hidden bg-gray-200"
        style={isHex ? { clipPath: hexagonClip } : { borderRadius: 16 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[1.5deg]"
          priority={false}
        />
      </div>

      {/* caption on hover */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-start">
        <div className="m-2 rounded-xl px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-md bg-black/35 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {alt}
        </div>
      </div>
    </motion.div>
  );
}
