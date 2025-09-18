"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Helper: send contact form to backend
async function sendContactForm(data: any) {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    return await res.json();
  } catch (err) {
    console.error("❌ Error sending contact form:", err);
    return { success: false, error: err };
  }
}

// Motion Variants for scroll-in animations
const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const res = await sendContactForm(form);
    if (res?.success) {
      setStatusMessage("✅ Your message has been sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatusMessage("❌ Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  const contactInfo = [
    { icon: <Mail size={24} className="text-blue-500" />, label: "Email Us", value: "info@prismoline.com", link: "mailto:info@prismoline.com" },
    { icon: <Phone size={24} className="text-blue-500" />, label: "Call Us", value: "+91 12345 67890", link: "tel:+911234567890" },
    { icon: <MapPin size={24} className="text-blue-500" />, label: "Corporate Office", value: "123 Corporate Park, Mumbai, India", link: "https://maps.google.com/?q=Corporate+Office+Mumbai" },
  ];

  const officeLocations = [
    { name: "Corporate Office", img: "/images/who1.jpg", address: "123 Corporate Park, Mumbai, India", map: "https://maps.google.com/?q=Corporate+Office+Mumbai" },
    { name: "Registered Office", img: "/images/who2.jpg", address: "456 Registered Street, Delhi, India", map: "https://maps.google.com/?q=Registered+Office+Delhi" },
    { name: "Branch Office - Pune", img: "/images/who3.jpg", address: "789 Tech Hub, Pune, India", map: "https://maps.google.com/?q=Pune+Office" },
    { name: "Branch Office - Bangalore", img: "/images/who4.jpg", address: "321 IT Park, Bangalore, India", map: "https://maps.google.com/?q=Bangalore+Office" },
    { name: "Branch Office - Hyderabad", img: "/images/who5.jpg", address: "654 Hitech City, Hyderabad, India", map: "https://maps.google.com/?q=Hyderabad+Office" },
    { name: "Branch Office - Chennai", img: "/images/who6.jpg", address: "987 Industrial Estate, Chennai, India", map: "https://maps.google.com/?q=Chennai+Office" },
  ];

  return (
    <main className="bg-gray-100 min-h-screen pt-24 pb-20 font-inter text-gray-900">
      
      {/* Hero Section: Updated with a video background and a clean breadcrumb */}
      <section className="relative w-full h-80 md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        <video 
          src="https://prismo.ae/wp-content/uploads/2023/02/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Get In Touch
          </h1>
          <p className="mt1 max-wxl text-lg md:text-xl text-blue-100 drop-shadow">
            We are here to help you. Reach out to us for any queries or partnerships.
          </p>
        </motion.div>
      </section>

      {/* Main Content Card with Form and Contact Details */}
      <section className="px-6 md:px-16 mt-[-100px] md:mt-[-150px] relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Drop a Line</h2>
            <p className="text-sm text-gray-500 mb-6">
                Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 outline-none transition-colors"
                />
                 {/* Empty div to maintain the two-column grid layout */}
                 <div></div>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 outline-none transition-colors"
              />

              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm mt-4 p-3 rounded-lg ${
                    statusMessage.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {statusMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Let's Start a Project Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8 bg-blue-900 text-white p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Start a Project</h2>
            <p className="text-blue-100 mb-8">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-800 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:underline transition"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="mt-20 md:mt-28 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Branches</h2>
          <p className="mt-2 text-gray-600">
            Find us at our various locations across India.
          </p>
        </motion.div>
        
        {/* Responsive grid for branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          <AnimatePresence>
            {officeLocations.map((office, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={office.img}
                    alt={office.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {office.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{office.address}</p>
                  <a
                    href={office.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-600 hover:underline"
                  >
                    📍 View on Map
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Functional Google Map Section: Replaced the static image with a working iframe */}
      <section className="container mx-auto px-6 md:px-16 mt-20 relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1645300589883!2d77.22013141508216!3d28.62584208242095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3d63e9f4a1%3A0x6b5b5b5b5b5b5b5b!2sPrismoline%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Prismoline Office Location"
      ></iframe>
      </section>
    </main>
  );
}