"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ReplitHero = () => {
  const { scrollYProgress } = useScroll();
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yBack = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative w-full bg-black h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1000px]">
        
        {/* Radar SVG Spin */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] animate-[spin_120s_linear_infinite]">
            <circle cx="500" cy="500" r="400" fill="none" stroke="#FF4500" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="500" cy="500" r="350" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="500" cy="500" r="450" fill="none" stroke="#FF4500" strokeWidth="0.5" />
            <line x1="100" y1="500" x2="900" y2="500" stroke="#FF4500" strokeWidth="1" />
            <line x1="500" y1="100" x2="500" y2="900" stroke="#FF4500" strokeWidth="1" />
          </svg>
        </div>

        {/* HUD Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="absolute top-[35%] right-[20%] w-[15vw] border-b border-orange-500/40 hidden lg:block">
            <div className="absolute -top-5 right-0 text-orange-500 font-mono text-[10px] tracking-widest uppercase">V12 Biturbo // 720 HP</div>
            <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 border border-orange-500 rounded-full bg-black flex items-center justify-center">
              <div className="w-1 h-1 bg-orange-500 rounded-full" />
            </div>
          </div>
          <div className="absolute bottom-[35%] right-[55%] w-[12vw] border-b border-orange-500/40 hidden lg:block origin-left -rotate-12">
            <div className="absolute -top-5 left-0 text-orange-500 font-mono text-[10px] tracking-widest uppercase">Aero Force // 1200kg</div>
          </div>
          
          <div className="absolute bottom-[25%] right-[10%] text-right font-mono text-orange-500/90">
            <div className="text-5xl lg:text-7xl font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]">
              0 <span className="text-xl text-orange-500/50 tracking-normal">MPH</span>
            </div>
            <div className="text-2xl lg:text-3xl mt-1 font-light opacity-80">
              1000 <span className="text-sm text-orange-500/50">RPM</span>
            </div>
          </div>
        </div>

        {/* Title Group */}
        <div className="absolute inset-0 z-40 flex items-center pointer-events-none">
          <div className="container mx-auto px-6 lg:px-12 w-full flex">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left pt-20 pointer-events-auto">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="h-[2px] w-12 bg-orange-500 drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
                <span className="text-orange-500 font-sans font-bold tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_0_8px_rgba(255,69,0,0.5)]">
                  Apex Motors / Elite Performance
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}
                className="text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8"
              >
                Built To<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 drop-shadow-[0_0_15px_rgba(255,69,0,0.8)] block my-2">
                  Dominate
                </span>
                The Track
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
                className="text-white/60 font-sans text-lg md:text-xl max-w-md mb-12 leading-relaxed border-l-2 border-orange-500/50 pl-6"
              >
                Every bolt torqued. Every system optimized. Every car transformed into a weapon.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Car Images Parallax */}
        <div className="absolute inset-0 flex items-center justify-end pr-[5vw] lg:pr-[10vw] z-10 pointer-events-none">
          <div className="relative w-[85vw] md:w-[75vw] lg:w-[65vw] max-w-[1200px] aspect-[16/9]">
            <motion.img 
              style={{ y: yFront }}
              alt="Car Front" 
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,69,0,0.15)] z-20" 
              src="/assets/hero-car-front-34.png" 
            />
            
            {/* Sombras debajo del carro */}
            <div className="absolute -bottom-[5%] left-[20%] right-[20%] h-[15%] bg-black blur-2xl rounded-[100%]" />
            <div className="absolute -bottom-[5%] left-[25%] right-[25%] h-[10%] bg-orange-500/20 blur-3xl rounded-[100%]" />
            
            {/* Reflejo estilo piso mojado */}
            <div className="absolute top-[85%] left-0 w-full h-[60%] scale-y-[-1] opacity-40 pointer-events-none" style={{ maskImage: "linear-gradient(rgb(0, 0, 0) 0%, transparent 60%)" }}>
              <motion.img style={{ y: yFront }} className="absolute inset-0 w-full h-full object-contain" src="/assets/hero-car-front-34.png" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
