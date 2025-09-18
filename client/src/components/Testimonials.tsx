"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    src: "/images/who1.jpg",
    alt: "Testimonial 1",
    text: "“Our collaboration with this team was a game-changer. Their innovative approach and unwavering dedication transformed our project into a huge success.”",
    linkedin: "https://www.linkedin.com/", // replace with real profile
  },
  {
    id: 2,
    src: "/images/who2.jpg",
    alt: "Testimonial 2",
    text: "“Working with them was an absolute pleasure. They truly listened to our vision and delivered beyond expectations.”",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 3,
    src: "/images/who3.jpg",
    alt: "Testimonial 3",
    text: "“The results speak for themselves. Strategic insights and flawless execution led to a huge market share increase.”",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 4,
    src: "/images/who4.jpg",
    alt: "Testimonial 4",
    text: "“Blown away by their professionalism and deep understanding of our industry. A top-tier experience.”",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 5,
    src: "/images/who5.jpg",
    alt: "Testimonial 5",
    text: "“Their ability to tackle complex challenges with such efficiency is remarkable. Superb work!”",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 6,
    src: "/images/who6.jpg",
    alt: "Testimonial 6",
    text: "“Technical expertise and commitment to quality are second to none. Highly impressed.”",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/images/texture-light.png"
          alt="background texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight">
            Hear From Our Satisfied Clients
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the words of those
            we've had the pleasure of working with.
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16 pt-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`relative flex flex-col items-center justify-center p-8 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform ${
                    isActive
                      ? "bg-blue-50 bg-opacity-70 backdrop-filter backdrop-blur-lg border border-blue-200 scale-110 z-20"
                      : "bg-gray-50 border border-gray-100 scale-90 z-10 hover:scale-95"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={280}
                      height={280}
                      className="rounded-3xl object-cover border-4 border-blue-500 shadow-xl ring-4 ring-blue-500 ring-opacity-50"
                    />
                  </div>
                  <p className="mt-5 text-gray-700 text-center text-sm md:text-base italic leading-relaxed font-light">
                    {item.text}
                  </p>
                  <div className="mt-5">
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 2.77 2.23 5 5 
                        5h14c2.77 0 5-2.23 5-5v-14c0-2.77-2.23-5-5-5zm-11 
                        19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 
                        0-.97.78-1.75 1.75-1.75s1.75.78 
                        1.75 1.75c0 .97-.78 1.76-1.75 
                        1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                        0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.88v1.36h.04c.4-.75 
                        1.38-1.54 2.84-1.54 3.04 0 3.6 2 
                        3.6 4.61v5.57z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
