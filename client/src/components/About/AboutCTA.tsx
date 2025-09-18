"use client";

export default function AboutCTA() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Partner With Us
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join hands with us to create safer, smarter, and more innovative road infrastructure solutions.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
}
