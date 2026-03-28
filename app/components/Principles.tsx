"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "I",
    title: "Think, Don't Manage",
    description: "Strategic judgment is the scarce resource. Protect it. Everything that doesn't require human judgment should be delegated to AI.",
  },
  {
    number: "II",
    title: "Demos Not Memos",
    description: "Ship working prototypes, not documents about prototypes. A live URL beats a slide deck every time.",
  },
  {
    number: "III",
    title: "Amplify, Don't Replace",
    description: "AI makes humans more effective, not obsolete. The creator's taste, judgment, and vision are amplified — never substituted.",
  },
  {
    number: "IV",
    title: "Compound Daily",
    description: "Every night the system learns, builds, and improves. Small daily gains create exponential advantage over time.",
  },
];

function PrincipleCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 sm:gap-8"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <span
        className="text-3xl sm:text-4xl font-bold text-[#d4a053]/30 shrink-0 w-12"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {principle.number}
      </span>
      <div>
        <h3
          className="text-xl sm:text-2xl font-semibold text-[#f5f0e8] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {principle.title}
        </h3>
        <p className="text-[#9a9590] leading-relaxed">{principle.description}</p>
      </div>
    </motion.div>
  );
}

export default function Principles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a053] mb-4">The Principles</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Four Rules
          </h2>
        </motion.div>

        <div className="space-y-12">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
