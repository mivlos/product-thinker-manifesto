"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#d4a053]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#b8862e]/8 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-[#d4a053] mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A Manifesto
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span className="text-[#f5f0e8]">
            The Product Thinker
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#d4a053] to-[#e8c48a] bg-clip-text text-transparent">
            Manifesto
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-[#9a9590] max-w-2xl mx-auto mb-12 leading-relaxed italic"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I don&apos;t manage products.{" "}
          <span className="text-[#d4a053]">I think about them.</span>
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#d4a053]/40 to-transparent" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b6560]">Scroll to read</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
