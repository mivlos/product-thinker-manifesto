"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    name: "Vibe Design Manifesto",
    description: "The methodology that started it all — emotion-first creation",
    url: "https://vibe-design-build.vercel.app",
  },
  {
    name: "Kit Visual Identity",
    description: "An AI exploring what it looks like — 5 rounds, 18 images",
    url: "https://kit-identity-portfolio.vercel.app",
  },
  {
    name: "Ad Intelligence Arena",
    description: "Multi-model creative & audience intelligence comparison",
    url: "https://ad-intel-arena.vercel.app",
  },
  {
    name: "Creative Agency",
    description: "AI Design Council that turns goals into strategic visual explorations",
    url: "https://creative-agency.vercel.app",
  },
  {
    name: "Recraft V4 Exploration",
    description: "One prompt, eight visual directions — Picsart × Recraft",
    url: "https://recraft-demo.vercel.app",
  },
  {
    name: "Sci-Fi Interfaces",
    description: "How Hollywood FUI foretells Picsart's product future",
    url: "https://scifi-interfaces.vercel.app",
  },
  {
    name: "Kit Brand",
    description: "An AI that builds things, including itself",
    url: "https://kit-brand.vercel.app",
  },
  {
    name: "GTM Growth Machine",
    description: "Feature factory to growth machine — Picsart GTM transformation",
    url: "https://gtm-growth-machine.vercel.app",
  },
  {
    name: "Ralph — Competitive Intelligence",
    description: "Automated daily scanning of 22 competitors",
    url: "https://oli-brand.vercel.app",
  },
  {
    name: "Product Thinker Portfolio",
    description: "The living proof — everything in one place",
    url: "https://product-thinker-portfolio.vercel.app",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#111111] border border-[#222] rounded-lg p-5 hover:border-[#d4a053]/40 hover:bg-[#151515] transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-[#f5f0e8] font-medium group-hover:text-[#d4a053] transition-colors">
            {project.name}
          </h4>
          <p className="text-sm text-[#6b6560] mt-1">{project.description}</p>
        </div>
        <span className="text-[#6b6560] group-hover:text-[#d4a053] transition-colors shrink-0 mt-1">
          ↗
        </span>
      </div>
    </motion.a>
  );
}

export default function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a053]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a053] mb-4">The Proof</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            4 Days. One Person. <span className="text-[#d4a053]">10 Projects.</span>
          </h2>
          <p className="text-lg text-[#9a9590] max-w-2xl mx-auto">
            From Tuesday evening to Saturday. That&apos;s a small product team&apos;s quarterly roadmap — shipped in four days. One person. One AI partner. Every project live and working.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: 10, suffix: "", label: "Projects shipped" },
            { value: 4, suffix: "", label: "Days elapsed" },
            { value: 1, suffix: "", label: "Person + AI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl sm:text-5xl font-bold text-[#d4a053]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-[#6b6560] mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
