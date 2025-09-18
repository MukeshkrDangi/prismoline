// File: /src/app/products/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence, Variants, easeOut, easeIn } from "framer-motion";

// Type for product
type Product = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"roadmarking" | "roadsafety">("roadmarking");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = {
    roadmarking: [
      { id: 1, title: "Thermoplastic Paint", desc: "Durable highway marking with superior adhesion and visibility.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 2, title: "Cold Plastic Marking", desc: "High reflectivity and adhesion for enhanced safety, easy application.", img: "/images/products/Premium.jpg" },
      { id: 3, title: "Glass Beads", desc: "Retro-reflective marking beads ensuring night-time visibility for all road users.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 4, title: "Road Studs", desc: "Cat’s eye reflective studs for clear lane delineation and improved driver guidance.", img: "/images/products/Prismolite pro.jpg" },
      { id: 5, title: "Preformed Tape", desc: "Instant, durable, and easy-to-apply marking tape for quick installations.", img: "/images/products/PrismoRib.jpg" },
      { id: 6, title: "Marking Machine", desc: "Advanced thermoplastic applicator machine for efficient and precise road marking.", img: "/images/products/Pro Maxx.jpg" },
    ],
    roadsafety: [
      { id: 7, title: "Traffic Cones", desc: "Portable, highly visible safety cones for temporary traffic control and awareness.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 8, title: "Speed Breakers", desc: "Durable rubber speed breakers designed to reduce vehicle speeds safely and effectively.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 9, title: "Traffic Barriers", desc: "Strong, interlocking plastic barricades for robust crowd and vehicle control.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 10, title: "Safety Sign Boards", desc: "Retro-reflective signage ensuring maximum visibility day and night, critical for safety.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 11, title: "Convex Mirrors", desc: "Wide-angle safety mirrors to eliminate blind spots at intersections and challenging corners.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 12, title: "Road Delineators", desc: "Flexible, high-impact spring posts for clear road guidance and hazard warnings.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 13, title: "Guard Rails", desc: "Robust steel guard rails offering crucial protection on highways and dangerous curves.", img: "/images/products/Pro-Maxx.jpg" },
      { id: 14, title: "Reflective Jackets", desc: "High-visibility reflective jackets for worker safety in low-light conditions.", img: "/images/products/Pro-Maxx.jpg" },
      // { id: 15, title: "Wheel Stoppers", desc: "Durable wheel stoppers for secure parking and protection of property.", img: "/images/products/Pro-Maxx.jpg" },
    ],
  };

  const currentProducts = products[activeTab];

  // Card animations
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
    }),
    exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.3, ease: easeIn } },
  };

  // Content fade variants
  const contentVariants: Variants = {
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: easeIn } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white font-inter">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/products/hero-banner.jpg"
          alt="Road Products Hero"
          fill
          priority
          quality={80}
          style={{ objectFit: "cover" }}
          className="absolute inset-0 opacity-40 blur-sm"
        />
        <div className="relative z-10 px-6 py-20 bg-black/50 rounded-lg backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Our Innovative Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            Delivering cutting-edge solutions for safer and smarter infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 md:space-x-8 mt-12 mb-10 px-4">
        <button
          onClick={() => setActiveTab("roadmarking")}
          className={`relative px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out ${
            activeTab === "roadmarking"
              ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 shadow-xl"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
        >
          Road Marking Materials
        </button>
        <button
          onClick={() => setActiveTab("roadsafety")}
          className={`relative px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out ${
            activeTab === "roadsafety"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 shadow-xl"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
        >
          Road Safety Products
        </button>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="exit"
            animate="enter"
            exit="exit"
            variants={contentVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
          >
            {currentProducts.map((product, index) => (
              <Tilt
                key={product.id}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.03}
                transitionSpeed={700}
                className="w-full h-full"
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  className="relative bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-orange-300">{product.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed">{product.desc}</p>
                    </div>

                    {/* Premium Explore Product Button */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-6 w-full relative group"
                    >
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 p-[2px] transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/40"></span>
                      <span className="relative block w-full px-6 py-3 rounded-xl bg-gray-900 text-lg font-semibold text-white transition-all duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:text-gray-900">
                        Explore Product
                      </span>
                    </button>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-900 rounded-2xl p-6 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">{selectedProduct.title}</h2>
              <p className="text-gray-300 text-base">{selectedProduct.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
