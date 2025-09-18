"use client";
import Image from "next/image";

const items = [
  {
    title: "Road Marking Paints",
    desc: "Durable, high-visibility paints used for highways and city roads.",
    img: "/images/whatwedo/smart2.jpg",
  },
  {
    title: "Thermoplastic Markings",
    desc: "Long-lasting thermoplastic for safe and clear road guidance.",
    img: "/images/whatwedo/smart.jpg",
  },
  {
    title: "Traffic Signage",
    desc: "Regulatory, warning, and informative signs for road safety.",
    img: "/images/whatwedo/smart2.jpg",
  },
  {
    title: "Smart Safety Solutions",
    desc: "Innovative IoT-enabled products for modern road infrastructure.",
    img: "/images/whatwedo/smart.jpg",
  },
  {
    title: "Consultancy & Projects",
    desc: "Expert services for highway projects and safety audits.",
    img: "/images/whatwedo/smart1.jpg",
  },
  {
    title: "Maintenance Services",
    desc: "Comprehensive upkeep for markings and safety devices.",
    img: "/images/whatwedo/smart.jpg",
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-10">
          What We Do
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-auto sm:h-80 p-6 hover:bg-blue-800"
            >
              {/* Left side → Text */}
              <div className="flex-1 sm:pr-6 text-center sm:text-left mb-6 sm:mb-0">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-2 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-white">
                  {item.desc}
                </p>
              </div>

              {/* Right side → Image */}
              <div className="relative w-40 h-60 md:w-44 md:h-64 flex-shrink-0 rounded-xl overflow-hidden my-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
