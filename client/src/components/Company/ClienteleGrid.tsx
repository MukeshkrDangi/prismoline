// File: /Users/apple/Desktop/Prismoline Web/prismoline/client/src/components/Company/ClienteleGrid.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// This relative import (./ClientModal) is correct ONLY if ClientModal.tsx is in the same directory
import ClientModal, { ClientDetails } from "./ClientModal"; 

// Defines the shape of a single client item in the grid
export type ClientItem = {
  name: string;
  logo: string; // Path to the client's logo image
  url?: string;
  description?: string;
  caseStudy?: string;
};

type Props = {
  items: ClientItem[]; // Array of client items to display
};

export default function ClienteleGrid({ items }: Props) {
  // State to hold the client item that is currently selected for the modal
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);

  // Handler for when a client button is clicked
  const handleClientClick = (client: ClientItem) => {
    setSelectedClient(client); // Set the clicked client as the selected one
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setSelectedClient(null); // Clear the selected client to hide the modal
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map((c, i) => (
            <motion.button // Use a button for accessibility, as it's interactive
              key={c.name + i}
              onClick={() => handleClientClick(c)} // Open modal on click
              // Framer Motion for individual client logo animations
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-5"
              aria-label={`View details for ${c.name}`} // Accessibility label
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-10 md:h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          ))}
        </div>
      </section>
      
      {/* The ClientModal component is rendered here conditionally with AnimatePresence */}
      <AnimatePresence>
        {selectedClient && (
          <ClientModal item={selectedClient} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
}