"use client";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917033275747" // 👈 apna WhatsApp number (country code ke saath)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110"
    >
      <img
        src="/images/icons/whatsapp.png" // 👈 isko apne /public/images/icons me rakho
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default FloatingWhatsApp;
