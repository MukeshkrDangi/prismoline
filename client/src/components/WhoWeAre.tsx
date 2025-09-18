"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/who1.jpg",
  "/images/who2.jpg",
  "/images/who3.jpg",
  "/images/who4.jpg",
  "/images/who5.jpg",
  "/images/who6.jpg",
  "/images/who6.jpg", // Note: Duplicate images in original code
  "/images/who4.jpg",
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
          Who We Are
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Discover the core of our identity through a gallery that showcases our team, our projects, and the values that drive us forward.
        </p>
      </div>

      <div className="mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Increased space
          slidesPerView={1.2}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
          }}
          className="pb-16 px-4" // Adjusted padding
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative w-[300px] h-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <Image
                  src={src}
                  alt={`Who we are ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Subtle Gradient Overlay for a premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}