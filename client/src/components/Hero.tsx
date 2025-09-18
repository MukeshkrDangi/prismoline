"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Banner {
  _id: string;
  video?: string;
  poster?: string;
  heading: string;
  tagline: string;
}

const Hero = () => {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

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
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {loading ? (
          <SwiperSlide>
            <div className="flex items-center justify-center h-full bg-gray-200">
              <p className="text-gray-600">Loading banners...</p>
            </div>
          </SwiperSlide>
        ) : slides.length > 0 ? (
          slides.map((slide) => (
            <SwiperSlide key={slide._id} className="relative w-full h-full">
              {/* Background Video or Image */}
              {slide.video ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video}
                  poster={slide.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.poster || "/images/fallback.jpg"}
                  alt={slide.heading}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="max-w-4xl text-center px-6">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                    {slide.heading}
                  </h1>
                  <p className="mt-6 text-lg md:text-2xl text-gray-200">
                    {slide.tagline}
                  </p>
                  <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition"
                    >
                      Request Quote
                    </a>
                    <a
                      href="/products"
                      className="px-6 py-3 bg-white/90 text-gray-900 text-lg rounded-lg shadow-lg hover:bg-gray-200 transition"
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
  );
};

export default Hero;
