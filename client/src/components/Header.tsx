// File: /Users/apple/Desktop/Prismoline Web/prismoline/client/src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: "projects" | "company") => {
    if (dropdown === "projects") {
      setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
      setIsCompanyDropdownOpen(false);
    } else {
      setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
      setIsProjectsDropdownOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProjectsDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];

  const projectsLinks = [
    { name: "On Going", href: "/projects/on-going" },
    { name: "Completed", href: "/projects/completed" },
  ];

  const companyLinks = [
    { name: "About", href: "/company/about" },
    { name: "Clientele", href: "/company/clientele" },
    { name: "Investors", href: "/company/investors" },
    { name: "Team", href: "/company/team" },
  ];

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-md shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 lg:px-9">
        {/* Logo (replace text with image) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" 
            alt="Prismoline Logo"
            width={190}
            height={65}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-lg font-medium text-gray-100 transition-colors"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Projects Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("projects")}
              className="group relative flex items-center text-lg font-medium text-gray-100 transition-colors focus:outline-none"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isProjectsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isProjectsDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50"
                >
                  {projectsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-orange-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="group relative flex items-center text-lg font-medium text-gray-100 transition-colors focus:outline-none"
            >
              Company
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isCompanyDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isCompanyDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50"
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-orange-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-5 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition-colors duration-200 text-lg font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-white"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 px-4 py-4 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Projects Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("projects")}
                className="flex justify-between w-full px-3 py-2 text-gray-200 hover:bg-gray-700 rounded-md text-base font-medium focus:outline-none"
              >
                Projects
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isProjectsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 pt-2 pb-1 space-y-1 bg-gray-800 rounded-md mt-1 overflow-hidden"
                  >
                    {projectsLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-600 rounded-md transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("company")}
                className="flex justify-between w-full px-3 py-2 text-gray-200 hover:bg-gray-700 rounded-md text-base font-medium focus:outline-none"
              >
                Company
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isCompanyDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {isCompanyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 pt-2 pb-1 space-y-1 bg-gray-800 rounded-md mt-1 overflow-hidden"
                  >
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-600 rounded-md transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block px-3 py-2 bg-orange-500 text-white rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
