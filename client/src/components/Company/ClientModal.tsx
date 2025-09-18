"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; // IMPORTANT: Ensure react-icons is installed: npm install react-icons
import { useEffect } from "react";

// Defines the shape of the client data for the modal
export type ClientDetails = {
  name: string;
  logo: string; // Path to the client's logo image in /public folder
  url?: string;
  description?: string;
  caseStudy?: string;
};

type Props = {
  item: ClientDetails | null; // The client data to display, or null if no client is selected
  onClose: () => void; // Function to call when the modal needs to close
};

export default function ClientModal({ item, onClose }: Props) {
  // Effect to manage body scrolling when the modal is open/closed
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = "unset"; // Re-enable scroll when modal is closed
    }
    // Cleanup function to ensure scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]); // Re-run effect when 'item' changes

  // If no client item is provided, don't render the modal
  if (!item) {
    return null;
  }

  return (
    <motion.div
      // Framer Motion for entrance animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <motion.div
        // Framer Motion for modal content animation
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -50, scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside its content
      >
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Client details: logo, name, and URL */}
        <div className="flex flex-col items-center text-center">
          <img
            src={item.logo}
            alt={item.name}
            className="h-20 w-auto object-contain mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {item.name}
          </h2>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center space-x-2"
            >
              {/* Displays the domain name for the URL */}
              <span>{item.url.replace(/^https?:\/\/(www\.)?/i, "").split('/')[0]}</span>
              <FaExternalLinkAlt size={12} /> {/* External link icon */}
            </a>
          )}
        </div>

        {/* Client description and case study link */}
        <div className="mt-8 text-slate-700 space-y-4">
          <p>{item.description || "No description available for this client."}</p>
          {item.caseStudy && (
            <div className="mt-4">
              <a
                href={item.caseStudy}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors"
              >
                View Case Study
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}