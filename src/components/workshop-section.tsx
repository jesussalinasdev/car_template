import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



export function WorkshopSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yEngine = useTransform(scrollYProgress, [0, 1], ['5%', '-10%']);

  return (
    <section
      id="workshop"
      ref={containerRef}
      className="relative h-[140vh] w-full bg-black overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <img
          src="/assets/workshop-bg.jpg"
          alt="Workshop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.38 }}
        />
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </motion.div>

      {/* Content — sticky on md+, natural flow on mobile */}
      <div className="md:sticky top-0 md:h-screen w-full flex items-center z-10 py-24 md:py-0">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — text block */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] text-primary uppercase tracking-[0.35em] mb-5"
            >
              // The Workshop
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-6xl md:text-8xl uppercase leading-none tracking-tighter text-white mb-7"
            >
              Where Metal<br />Meets<br /><span className="text-primary">Myth.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-neutral-400 font-sans text-sm leading-relaxed max-w-md"
            >
              A climate-controlled sanctuary equipped with surgical-grade diagnostics
              and bespoke fabrication tools. No dust. No shortcuts. We build what
              factories couldn't imagine.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex gap-10 mt-10 pt-8 border-t border-white/10"
            >
              {[
                ['8,000', 'sq/ft Facility'],
                ['3', 'Active Lifts'],
                ['24 hr', 'Climate Control'],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl text-primary leading-none">{val}</div>
                  <div className="font-mono text-[9px] text-white/35 uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — engine image panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            style={{ y: yEngine }}
            className="relative w-full aspect-[4/5] overflow-hidden"
          >
            {/* Clip border effect */}
            <div className="absolute inset-0 ring-1 ring-primary/25 z-20" />

            {/* HUD label */}
            <div className="absolute top-4 left-4 z-30 font-mono text-[10px] text-primary/70 uppercase tracking-widest">
              // ENGINE CORE
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-30" />

            {/* Gradient fades to blend with bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 z-10" />

            <img
              src="/assets/engine-detail.jpg"
              alt="Engine detail"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
