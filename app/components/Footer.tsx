"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-16 sm:py-24 px-6 border-t border-[#222]">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-2xl sm:text-3xl font-semibold text-[#f5f0e8] mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Oli Mival
          </p>
          <p className="text-[#d4a053] text-sm uppercase tracking-[0.2em] mb-1">
            Product Thinker
          </p>
          <p className="text-[#6b6560] text-sm">
            VP Product Strategy, Innovation & Experience
          </p>
          <p className="text-[#6b6560] text-sm">Picsart</p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/olimival/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6560] hover:text-[#d4a053] transition-colors text-sm"
          >
            LinkedIn
          </a>
          <span className="text-[#333]">·</span>
          <a
            href="https://oli-brand.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6560] hover:text-[#d4a053] transition-colors text-sm"
          >
            About
          </a>
          <span className="text-[#333]">·</span>
          <a
            href="https://picsart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6560] hover:text-[#d4a053] transition-colors text-sm"
          >
            Picsart
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-xs text-[#333]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Built with AI. Directed by a human. © {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}
