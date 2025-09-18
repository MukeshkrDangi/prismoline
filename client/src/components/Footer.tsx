"use client";

import { useEffect, useState } from "react";
// Import social media icons from react-icons/fa6
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaXTwitter, // "X" (formerly Twitter) icon
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TypeScript error fix: `e` parameter explicitly has `React.FormEvent` type
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <footer
      className={`mt-32 transition-all duration-700 ${isBottom
          ? "bg-gradient-to-r from-gray-900 to-black text-gray-100 shadow-2xl"
          : "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 shadow-xl"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-[188px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center md:text-left">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wider uppercase mb-12 text-amber-400">
              Contact Us
            </h3>
            <p className="mb-6 text-lg">
              <span className="font-medium">Call 24/7:</span>{" "}
              <a href="tel:+917033275747" className="hover:text-amber-300 transition-colors">
                +91-7033275747
              </a>
            </p>
            <p className="mb-6 text-lg">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@prismoline.com" className="hover:text-amber-300 transition-colors">
                info@prismoline.com
              </a>
            </p>
          </div>

          {/* Corporate Office */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wider uppercase mb-12 text-amber-400">
              Corporate Office
            </h3>
            <address className="not-italic text-lg leading-relaxed space-y-4">
              <p>195/B Mandeliya Nagar, Bariatu</p>
              <p>Ranchi - 834009, Jharkhand, INDIA</p>
            </address>
          </div>

          {/* Manufacturing Unit */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wider uppercase mb-12 text-amber-400">
              Manufacturing Unit
            </h3>
            <address className="not-italic text-lg leading-relaxed space-y-4">
              <p>36 (P), Phase II, Industrial Area</p>
              <p>Tatisilwai, Ranchi, Jharkhand, INDIA</p>
            </address>
            <h3 className="text-lg font-semibold mt-14 mb-6 text-amber-400 uppercase">
              Also at
            </h3>
            <ul className="space-y-3 text-lg">
              <li>Patna, Sasaram (Bihar)</li>
              <li>Asansol, Siliguri (WB)</li>
              <li>Guwahati (Assam)</li>
              <li>Bhubaneshwar (Odisha)</li>
            </ul>
          </div>

          {/* Newsletter & Social Links */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wider uppercase mb-12 text-amber-400">
              Newsletter
            </h3>
            <p className="text-lg mb-6">Subscribe for latest updates & news.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-semibold rounded-lg shadow hover:from-amber-600 hover:to-yellow-600 transition"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
            {/* Social Media Links Section */}
            <div className="mt-14">
              <h3 className="text-2xl font-semibold tracking-wider uppercase mb-6 text-amber-400">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" aria-label="Facebook" className="hover:text-amber-300 transition-colors">
                  <FaFacebookF size={30} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-amber-300 transition-colors">
                  <FaInstagram size={30} />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-amber-300 transition-colors">
                  <FaYoutube size={30} />
                </a>
                <a href="#" aria-label="X (Twitter)" className="hover:text-amber-300 transition-colors">
                  <FaXTwitter size={30} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-amber-300 transition-colors">
                  <FaLinkedinIn size={30} />
                </a>
                <a href="#" aria-label="Pinterest" className="hover:text-amber-300 transition-colors">
                  <FaPinterestP size={30} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-28 pt-14 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-200">Prismoline</span> | All Rights Reserved
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Designed by <span className="text-amber-400">Prismoline</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;