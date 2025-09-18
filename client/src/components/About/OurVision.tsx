"use client";

import Image from "next/image";
// import visionImg from "@/public/window.svg";

export default function OurVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Vision</h2>
          <p className="text-gray-600 text-lg">
           To be the global leader in road safety solutions, setting the benchmark for quality and innovation in thermoplastic materials and road markings. We envision a future where our commitment to excellence and environmental responsibility creates safer roads and protects lives worldwide.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96 order-1 md:order-2">
          {/* <Image src={visionImg} alt="Vision" fill className="object-contain rounded-xl" /> */}
        </div>
      </div>
    </section>
  );
}
