// @ts-nocheck
"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ReplitWorkshop = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="workshop" className="relative h-[140vh] w-full bg-black overflow-hidden z-20">
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <img alt="Workshop" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="/assets/workshop-bg.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/50" />
      </motion.div>
      
      <div className="md:sticky top-0 md:h-screen w-full flex items-center z-10 py-24 md:py-0">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] text-orange-500 uppercase tracking-[0.35em] mb-5">
              // The Workshop
            </p>
            <h2 className="font-black text-6xl md:text-8xl uppercase leading-none tracking-tighter text-white mb-7">
              Where Metal<br />Meets<br /><span className="text-orange-500">Myth.</span>
            </h2>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed max-w-md">
              A climate-controlled sanctuary equipped with surgical-grade diagnostics and bespoke fabrication tools. No dust. No shortcuts. We build what factories couldn't imagine.
            </p>
            
            <div className="flex gap-10 mt-10 pt-8 border-t border-white/10">
              <div>
                <div className="font-black text-3xl text-orange-500 leading-none">14</div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-2">Years</div>
              </div>
              <div>
                <div className="font-black text-3xl text-orange-500 leading-none">2.5k</div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-2">Builds</div>
              </div>
              <div>
                <div className="font-black text-3xl text-orange-500 leading-none">99%</div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-2">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
