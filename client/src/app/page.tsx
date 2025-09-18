"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Component
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/whychooseus";
import OurCustomers from "../components/ourCustomers";
import ProductsProjects from "../components/ProductsProjects";
import ProductsSection from "@/components/ProductsSection";
import CertificatesAwardsSection from "@/components/CertificatesAwardsSection";
import Testimonials from "@/components/Testimonials";



interface Banner {
  _id: string;
  video?: string;
  poster?: string;
  heading: string;
  tagline: string;
}

export default function HomePage() {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Banners
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/banners");
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        console.error("❌ Banner fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {loading ? (
            <SwiperSlide>
              <div className="flex items-center justify-center h-full bg-gray-200">
                <p className="text-gray-600">Loading banners...</p>
              </div>
            </SwiperSlide>
          ) : slides.length > 0 ? (
            slides.map((slide) => (
              <SwiperSlide key={slide._id}>
                <div className="relative w-full h-full">
                  {slide.video ? (
                    <video
                      src={slide.video}
                      poster={slide.poster}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={slide.poster || "/images/fallback.jpg"}
                      alt={slide.heading}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                      {slide.heading}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                      {slide.tagline}
                    </p>
                    <div className="mt-6 flex gap-4">
                      <a
                        href="/contact"
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
                      >
                        Request Quote
                      </a>
                      <a
                        href="/products"
                        className="px-6 py-3 bg-white/90 text-gray-900 rounded-lg shadow-lg hover:bg-gray-200 transition"
                      >
                        Explore Products
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="flex items-center justify-center h-full bg-gray-200">
                <p className="text-gray-600">No banners available</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </section>

      {/* ================= PRODUCTS & PROJECTS ================= */}
      <ProductsProjects />


      {/* ================= WHO WE ARE ================= */}
      <WhoWeAre />

      {/* ================= WHAT WE DO ================= */}
      <WhatWeDo />

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= PRODUCTS SECTION ================= */}
      <ProductsSection />

      {/* Hero / other sections */}

      <Testimonials />   {/* Yeh trusted by leaders se pehle aayega */}

      {/* Trusted by Leaders section */}

      {/* ================= OUR CUSTOMERS ================= */}
      <OurCustomers />

      {/* Certificates & Awards at the bottom */}
      <CertificatesAwardsSection />
    </main>
  );
}
