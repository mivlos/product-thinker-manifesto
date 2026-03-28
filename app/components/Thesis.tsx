"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Thesis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a053]/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a053] mb-6">The Thesis</p>
          <div className="w-12 h-px bg-[#d4a053]/40 mx-auto" />
        </motion.div>

        <motion.blockquote
          className="text-2xl sm:text-3xl md:text-4xl leading-snug font-light text-center mb-12"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A Product Thinker is a new kind of product leader who orchestrates{" "}
          <span className="text-[#d4a053]">human creativity</span> and{" "}
          <span className="text-[#d4a053]">AI execution</span> across the entire product development lifecycle.
        </motion.blockquote>

        <motion.p
          className="text-lg sm:text-xl text-[#9a9590] leading-relaxed text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          This is not about replacing people with AI. It&apos;s about freeing people to do what only humans can: make strategic judgments, exercise taste, build relationships, and see around corners. Everything else — the research, the prototyping, the competitive analysis, the first drafts, the deployment — can be orchestrated.
        </motion.p>
      </div>
    </section>
  );
}
