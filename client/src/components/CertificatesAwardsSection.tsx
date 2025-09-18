"use client";

import { useEffect, useState } from "react";

export interface CertificateAward {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

const MOCK_DATA: CertificateAward[] = [
  {
    _id: "1",
    title: "ISO Certification",
    description: "Certified ISO 9001 for quality management.",
    image: "/images/CertificateAward/ISO.jpg",
  },
  {
    _id: "2",
    title: "ISO Certification 2",
    description: "Certified ISO 14001 for environmental management.",
    image: "/images/CertificateAward/ISO2.jpg",
  },
  {
    _id: "3",
    title: "ZED Certification",
    description: "Zero Defect Zero Effect (ZED) recognition for excellence.",
    image: "/images/CertificateAward/zed.jpg",
  },
];

export default function CertificatesAwardsSection() {
  const [items, setItems] = useState<CertificateAward[]>([]);

  useEffect(() => {
    setItems(MOCK_DATA);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">
          HONORS OF EXCELLENCE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 p-6 flex flex-col items-center"
            >
              {item.image && (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
