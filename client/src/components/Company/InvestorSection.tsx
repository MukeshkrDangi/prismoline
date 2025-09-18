"use client";

import { motion } from "framer-motion";

type Stat = { label: string; value: string; note?: string };

type Props = {
  heading?: string;
  stats: Stat[];
  bullets?: string[];
};

export default function InvestorSection({ heading = "Investment Highlights", stats, bullets = [] }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900">{heading}</h3>
          <ul className="mt-5 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s, i) => (
            <div
              key={s.label + i}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-extrabold text-blue-700">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              {s.note && <div className="text-xs text-slate-400 mt-2">{s.note}</div>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
