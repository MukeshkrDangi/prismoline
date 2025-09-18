"use client";

import { ShieldCheck, Award, Sparkles } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We uphold honesty and transparency in every project." },
  { icon: Award, title: "Excellence", desc: "Delivering top-quality solutions every time." },
  { icon: Sparkles, title: "Innovation", desc: "Continuously improving our methods and technologies." },
];

export default function OurValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-700 rounded-full mb-4 mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
