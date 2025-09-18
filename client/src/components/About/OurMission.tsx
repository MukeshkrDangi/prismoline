"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function OurMission() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
    },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
            Our <span className="text-indigo-600">Mission</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-prose mx-auto md:mx-0">
            <strong>PRISMOLINE</strong> is dedicated to enhancing global road
            safety by manufacturing and exporting superior thermoplastic and
            road safety products. With our extensive experience and advanced
            formulations, we are committed to providing high-quality,
            environment-friendly materials that consistently meet or exceed
            international standards like MORTH 803.4 and BS 3262.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-prose mx-auto md:mx-0">
            We achieve this through a rigorous quality management system, from
            raw material testing to final product delivery. Our success is a
            direct result of our customers&apos; success, and we are passionate
            about providing expert support to ensure their satisfaction. Our
            mission is to lead the way to safer traffic for the world&apos;s
            population.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <Image
              src="/images/icons/n1.jpg" // ✅ Put your mission image in public/images/icons/
              alt="Our Mission - Prismoline"
              fill
              className="object-cover rounded-3xl"
              quality={90}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
