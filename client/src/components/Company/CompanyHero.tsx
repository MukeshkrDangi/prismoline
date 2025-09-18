"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  bgImageUrl?: string; // optional custom bg
};

export default function CompanyHero({ title, subtitle, bgImageUrl }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          bgImageUrl
            ? `url(${bgImageUrl}) center/cover no-repeat`
            : "linear-gradient(135deg,#0f3aa9 0%,#0b2d84 40%,#091f5a 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),rgba(255,255,255,0)_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
