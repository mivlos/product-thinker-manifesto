"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    name: "Discovery",
    icon: "🔍",
    traditional: "2-3 weeks of market research",
    agentic: "AI scans 22 competitors daily. I review synthesised intelligence and make strategic calls.",
    tagline: "Hours, not weeks.",
  },
  {
    name: "Definition",
    icon: "📐",
    traditional: "PM writes a PRD over 1-2 weeks",
    agentic: "I articulate the problem. AI generates the PRD, success criteria, edge cases. I refine the strategic choices.",
    tagline: "Decisions, not documents.",
  },
  {
    name: "Design",
    icon: "🎨",
    traditional: "Designer creates 2-3 concepts over 1-2 weeks",
    agentic: "AI Design Council generates 5 strategic directions with 20 images overnight. I select and refine.",
    tagline: "Explorations, not iterations.",
  },
  {
    name: "Development",
    icon: "⚡",
    traditional: "Engineering team builds over 2-4 week sprints",
    agentic: "Working code deployed from natural language descriptions in hours.",
    tagline: "Streams, not sprints.",
  },
  {
    name: "Delivery",
    icon: "🚀",
    traditional: "Monthly or quarterly releases",
    agentic: "New capabilities shipped nightly. Creative Agent Council builds tools while I sleep.",
    tagline: "Continuous, not quarterly.",
  },
];

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      {/* Connector line */}
      {index < phases.length - 1 && (
        <div className="hidden sm:block absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-[#d4a053]/30 to-transparent" />
      )}

      <div className="bg-[#111111] border border-[#222] rounded-xl p-8 hover:border-[#d4a053]/30 transition-colors duration-500">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{phase.icon}</span>
          <h3
            className="text-2xl font-semibold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {phase.name}
          </h3>
        </div>

        {/* Traditional */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b6560] mb-2">Traditional</p>
          <p className="text-[#6b6560] line-through decoration-[#6b6560]/50">{phase.traditional}</p>
        </div>

        {/* Agentic */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4a053] mb-2">Agentic</p>
          <p className="text-[#f5f0e8]">{phase.agentic}</p>
        </div>

        {/* Tagline */}
        <p
          className="text-lg text-[#d4a053] font-medium italic mt-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {phase.tagline}
        </p>
      </div>
    </motion.div>
  );
}

export default function AgenticPDLC() {
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
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a053] mb-4">The Model</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Agentic PDLC
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-8">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.name} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
