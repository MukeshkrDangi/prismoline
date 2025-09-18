"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ✅ 1. Define a TypeScript type for a Product
type Product = {
  id: number;
  name: string;
  desc: string;
  fullDesc: string;
  img: string;
};

// ✅ Product data split into categories
const products = {
  "Road Marking": [
    {
      id: 1,
      name: "Thermoplastic Road Marking Paint",
      desc: "Durable, premium-quality marking for highways & city roads, offering excellent visibility and longevity.",
      fullDesc: "Our thermoplastic paint is engineered for high performance in various weather conditions. It provides a durable, retro-reflective surface that significantly enhances road safety by improving visibility for drivers, especially at night and during adverse weather. It's a non-toxic, eco-friendly solution that meets international standards for road and traffic markings.",
      img: "/images/products/pro.jpg",
    },
    {
      id: 2,
      name: "Glass Beads for Retroreflection",
      desc: "Enhance road safety with superior reflective visibility at night, crucial for driver awareness.",
      fullDesc: "These high-quality glass beads are an essential component of road marking systems. When applied with paint, they reflect vehicle headlights back to the driver, creating a bright, visible line. Our beads are precisely graded for optimal performance, ensuring maximum retro-reflectivity and long-term durability on any road surface.",
      img: "/images/products/Snow.jpg",
    },
    {
      id: 3,
      name: "Glass Beads for Retroreflection",
      desc: "Enhance road safety with superior reflective visibility at night, crucial for driver awareness.",
      fullDesc: "These high-quality glass beads are an essential component of road marking systems. When applied with paint, they reflect vehicle headlights back to the driver, creating a bright, visible line. Our beads are precisely graded for optimal performance, ensuring maximum retro-reflectivity and long-term durability on any road surface.",
      img: "/images/products/Premium.jpg",
    },
  ],
  "Road Safety": [
    {
      id: 7,
      name: "Road Safety Cones",
      desc: "Flexible, highly durable cones for effective traffic control, hazard warnings & event safety.",
      fullDesc: "Our road safety cones are made from a premium, flexible PVC material that resists cracking and fading. They are designed with a weighted base for stability in windy conditions and feature high-visibility reflective collars for day and night use. Ideal for traffic management, construction sites, and event safety.",
      img: "/images/products/Prismolite pro.jpg",
    },
    {
      id: 8,
      name: "Speed Breakers (Rubber)",
      desc: "Robust rubber speed breakers designed to manage vehicle speeds safely and efficiently in various environments.",
      fullDesc: "These modular rubber speed breakers are a highly effective solution for controlling vehicle speed. They are easy to install and designed to withstand heavy traffic without deforming. The interlocking design allows for custom lengths, and the integrated reflectors ensure visibility, reducing the risk of accidents in residential areas, parking lots, and schools.",
      img: "/images/products/Prismolite pro.jpg",
    },
    {
      id: 9,
      name: "Traffic Barriers",
      desc: "Strong, modular plastic barriers for effective crowd and vehicle management on roads and construction sites.",
      fullDesc: "Our traffic barriers are lightweight yet incredibly strong, making them ideal for temporary or semi-permanent installations. They can be filled with water or sand for added stability and are designed with interlocking hooks for easy connection. Their bright color and reflective sheeting make them a highly visible deterrent for directing traffic and ensuring site safety.",
      img: "/images/products/Prismolite pro.jpg",
    },
  ],
};

// Framer motion variants for card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ✅ New Product Detail Modal Component with explicit type annotations
const ProductDetailModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  // Construct the dynamic WhatsApp message
  const phoneNumber = "917033275747";
  const whatsappMessage = `Hello, I'm interested in "${product.name}" (Product ID: ${product.id}). Can you please provide more information?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="md:flex">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/600x400/f0f4f8/333?text=Product+Image";
              }}
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-blue-900 mb-4">{product.name}</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {product.fullDesc}
            </p>
            <div className="mt-8">
              {/* ✅ Updated to a link with dynamic WhatsApp message */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors text-center w-full"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof products>("Road Marking");
  // ✅ 2. Explicitly type the state variable
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ✅ 3. Explicitly type the function parameter
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 font-inter relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/texture-light.png"
          alt="background texture"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-blue-900 tracking-tight leading-tight"
        >
          Explore Our Premium Products
        </motion.h2>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-white rounded-full p-2 shadow-xl border border-gray-200">
            {Object.keys(products).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as keyof typeof products)}
                className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 relative z-10
                  ${
                    activeTab === category
                      ? "text-white bg-blue-600 shadow-lg"
                      : "text-gray-800 hover:text-blue-600"
                  }`
                }
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Key changes to trigger re-animation on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {products[activeTab].map((p, index) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                onClick={() => handleProductClick(p)}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 cursor-pointer"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://placehold.co/600x400/f0f4f8/333?text=Product+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-all duration-300 group-hover:from-gray-900/80"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
                  <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors w-full">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}