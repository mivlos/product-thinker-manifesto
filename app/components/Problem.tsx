"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    number: "01",
    text: "Product management has become product administration. The strategic thinking that should define the role has been buried under process, politics, and PowerPoint.",
  },
  {
    number: "02",
    text: "We've built organisations optimised for predictability in a world that rewards speed. The roadmap is a comfort blanket, not a strategy.",
  },
  {
    number: "03",
    text: "The best product leaders I know spend 80% of their time thinking and 20% doing. Most product organisations have that ratio inverted.",
  },
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="border-l-2 border-[#d4a053]/30 pl-8 py-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <span className="text-[#d4a053] text-sm font-mono mb-3 block">{problem.number}</span>
      <p className="text-xl sm:text-2xl text-[#f5f0e8] leading-relaxed font-light">
        &ldquo;{problem.text}&rdquo;
      </p>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          ref={ref}
          className="text-lg sm:text-xl text-[#9a9590] leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          For 30 years I&apos;ve watched product organisations mistake activity for progress. More PMs. More sprints. More roadmaps. More meetings about meetings. The output grows. The outcomes don&apos;t. Something is fundamentally broken — not in the people, but in the model.
        </motion.p>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.number} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
