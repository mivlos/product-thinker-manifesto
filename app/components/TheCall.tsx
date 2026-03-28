"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheCall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-40 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a053]/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center" ref={ref}>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-[#d4a053]/40 mx-auto mb-8" />
        </motion.div>

        <motion.blockquote
          className="text-2xl sm:text-3xl md:text-4xl leading-snug font-light mb-12"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The product manager&apos;s job isn&apos;t to manage products anymore. It&apos;s to{" "}
          <span className="text-[#d4a053] italic">think</span> about them.
        </motion.blockquote>

        <motion.p
          className="text-lg sm:text-xl text-[#9a9590] leading-relaxed max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The question isn&apos;t whether this model works — I&apos;ve proven it does. The question is whether you&apos;ll adopt it before your competitors do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-12 h-px bg-[#d4a053]/40 mx-auto mb-8" />
        </motion.div>
      </div>
    </section>
  );
}
