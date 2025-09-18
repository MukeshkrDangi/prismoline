"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  Palette,
  TriangleAlert,
  Moon,
  Columns,
  ParkingCircle,
  GitBranch,
  Sparkles,
  Route,
  LucideIcon,
} from "lucide-react";

export default function ProductsProjects() {
  const items: { title: string; icon: LucideIcon; href: string }[] = [
    { title: "Airfield Marking", icon: Plane, href: "/products/airfield-marking" },
    { title: "Colored Road Surfacing", icon: Palette, href: "/products/colored-road-surfacing" },
    { title: "Blackspot Remedial Measures", icon: TriangleAlert, href: "/products/blackspot" },
    { title: "Night Vision Solutions", icon: Moon, href: "/products/night-vision" },
    { title: "Vertical Surface Markings", icon: Columns, href: "/products/vertical-surface" },
    { title: "Parking & Industrial", icon: ParkingCircle, href: "/products/parking" },
    { title: "Junction Improvement", icon: GitBranch, href: "/products/junction-improvement" },
    { title: "Urban Beautification", icon: Sparkles, href: "/products/junction-beautification" },
  ];

  const mainItem = { title: "Road & Highway Markings", icon: Route, href: "/products/road-highway" };

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-gray-100 text-gray-900 font-inter overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm"
          >
            Our Expertise in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We offer a comprehensive suite of solutions covering every aspect of
            modern infrastructure, from advanced road markings to critical safety
            installations.
          </motion.p>
        </div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center"
        >
          {/* Left 4 Items */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            {items.slice(0, 4).map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} href={item.href}>
                  <motion.div
                    variants={itemVariants}
                    className="group relative flex flex-col justify-center items-center text-center rounded-2xl cursor-pointer bg-white/70 backdrop-blur-md p-5 h-36 border border-gray-200 shadow-lg transform transition-all duration-300 hover:bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Icon className="w-8 h-8 mb-3 text-blue-500 transition-colors group-hover:text-blue-600" />
                    <h3 className="text-sm md:text-base font-semibold leading-tight">{item.title}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          {/* Center Large Item */}
          <Link href={mainItem.href}>
            <motion.div
              variants={itemVariants}
              className="group relative order-first md:order-none mx-auto w-full h-56 md:h-72 flex flex-col justify-center items-center text-center rounded-2xl cursor-pointer bg-blue-600/10 backdrop-blur-md text-gray-900 p-6 border border-blue-600 shadow-2xl transition-all duration-300 hover:bg-blue-600/20 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <mainItem.icon className="w-14 h-14 mb-4 text-blue-600 transition-colors group-hover:text-blue-700" />
              <h3 className="text-lg md:text-xl font-bold leading-tight px-2">{mainItem.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Explore our core solutions</p>
            </motion.div>
          </Link>

          {/* Right 4 Items */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            {items.slice(4, 8).map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} href={item.href}>
                  <motion.div
                    variants={itemVariants}
                    className="group relative flex flex-col justify-center items-center text-center rounded-2xl cursor-pointer bg-white/70 backdrop-blur-md p-5 h-36 border border-gray-200 shadow-lg transform transition-all duration-300 hover:bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Icon className="w-8 h-8 mb-3 text-blue-500 transition-colors group-hover:text-blue-600" />
                    <h3 className="text-sm md:text-base font-semibold leading-tight">{item.title}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
