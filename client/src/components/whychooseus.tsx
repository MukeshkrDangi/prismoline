"use client";

import { Award, ShieldCheck, Truck, Users } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Award,
    value: 50,
    suffix: "+ Years",
    desc: "Leading in MEA",
  },
  {
    icon: ShieldCheck,
    value: 10000,
    suffix: "+ Projects",
    desc: "Delivered (and counting)",
  },
  {
    icon: Truck,
    value: 245,
    suffix: "+",
    desc: "Specialised vehicles in our growing fleet",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    desc: "Dedicated, innovative, and adaptable workforce",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-16">
      {/* 🔹 Same container as OurCustomers */}
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
          Why You Will Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          By adopting a partnership approach, our expert road marking contractors 
          will work with you to create a tailored solution with guaranteed 
          quality and on-time delivery.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:bg-blue-700"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 mb-4 transition-colors duration-300 group-hover:bg-white group-hover:text-blue-700">
                <item.icon className="w-8 h-8" />
              </div>

              {/* CountUp Number */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                <CountUp start={0} end={item.value} duration={3} separator="," />
                {item.suffix}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
