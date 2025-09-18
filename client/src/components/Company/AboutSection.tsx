"use client";

import { motion } from "framer-motion";

type Block = {
  heading: string;
  text: string;
};

type Props = {
  blocks: Block[];
};

export default function AboutSection({ blocks }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {blocks.map((b, i) => (
          <motion.div
            key={b.heading + i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl p-6 md:p-7 bg-white/80 backdrop-blur shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-slate-900">{b.heading}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
