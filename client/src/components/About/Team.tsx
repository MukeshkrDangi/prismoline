"use client";

import Image from "next/image";

const team = [
  { img: "/images/who1.jpg", name: "John Doe", position: "CEO" },
  { img: "/images/who2.jpg", name: "Jane Smith", position: "COO" },
  { img: "/images/who3.jpg", name: "Mark Lee", position: "CTO" },
  { img: "/images/who4.jpg", name: "Lucy Liu", position: "Project Manager" },
  { img: "/images/who5.jpg", name: "Raj Patel", position: "Engineer" },
  { img: "/images/who6.jpg", name: "Sara Khan", position: "Designer" },
];

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-full h-64 rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
