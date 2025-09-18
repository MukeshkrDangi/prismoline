"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function AboutHero() {
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
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            About <span className="text-indigo-600">Prismoline</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-prose mx-auto md:mx-0">
            <strong>PRISMOLINE</strong> was established to make roads safer. We
            are a leading manufacturer & exporter of thermoplastic materials.
            Our rich experience & expertise in thermoplastic, along with
            advanced thermoplastic formulation, are leading the way to safer
            traffic on roads for the world’s population. We are committed to
            quality, Safety, Environment & Customers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-prose mx-auto md:mx-0">
            Our Quality Management System starts with quality assurance testing
            on all incoming raw materials, the entire manufacturing process, and
            finished products. Our quality control system & computerized batch
            control manufacturing facility delivers excellent product every
            time. PRISMOLINE is passionate towards maintaining quality from raw
            material to application on the road by providing expert technical
            field support. At PRISMOLINE our goal is 100% customer satisfaction.
            We believe that our success depends only on the success of our
            valued customers. We believe in producing environment-friendly
            marking and BS materials, and all our markings match or exceed
            standards like MORTH 803.4 and BS 36262.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Discover Our Values
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <Image
              src="/images/icons/04.jpg" // ✅ From public folder
              alt="Prismoline Road Safety Manufacturing"
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
