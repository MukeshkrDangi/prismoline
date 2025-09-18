// File: /Users/apple/Desktop/Prismoline Web/prismoline/client/src/components/ourCustomers.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

export default function OurCustomers() {
  const customers = [
    { id: 1, logo: "/images/icons/cn1.png", name: "Customer 1" },
    { id: 2, logo: "/images/icons/cn2.svg", name: "Customer 2" },
    { id: 3, logo: "/images/icons/cn3.png", name: "Customer 3" },
    { id: 4, logo: "/images/icons/cn4.png", name: "Customer 4" },
    { id: 5, logo: "/images/icons/cn5.webp", name: "Customer 5" },
    { id: 6, logo: "/images/icons/cn6.png", name: "Customer 6" },
  ];


  return (
    <section className="py-20 md:py-28 bg-white text-gray-900 font-inter">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Trusted by Leaders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Our partners rely on our proven expertise and quality solutions for
          their most critical infrastructure projects.
        </motion.p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-16"
        >
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center justify-center h-28 bg-gray-100 rounded-xl border border-gray-200 p-4 shadow-lg group transition-all duration-300 transform hover:scale-105 hover:border-blue-600"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-16 object-contain relative z-10 transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}