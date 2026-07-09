import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';






// Hook for mouse position relative to center, returned as -0.5 to 0.5
function useMouseParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth) - 0.5);
      y.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const smoothX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 });

  return { x: smoothX, y: smoothY };
}

function CarRotator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.img src="/assets/hero-car-front-34.png" alt="Car" className="absolute inset-0 w-full h-full object-contain pointer-events-none will-change-opacity" animate={{ opacity: activeIndex === 0 ? 1 : 0 }} transition={{ duration: activeIndex === 0 ? 0.8 : 1.5 }} />
      <motion.img src="/assets/hero-car-side.png" alt="Car" className="absolute inset-0 w-full h-full object-contain pointer-events-none will-change-opacity" animate={{ opacity: activeIndex === 1 ? 1 : 0 }} transition={{ duration: activeIndex === 1 ? 0.8 : 1.5 }} />
      <motion.img src="/assets/hero-car-rear-34.png" alt="Car" className="absolute inset-0 w-full h-full object-contain pointer-events-none will-change-opacity" animate={{ opacity: activeIndex === 2 ? 1 : 0 }} transition={{ duration: activeIndex === 2 ? 0.8 : 1.5 }} />
      <motion.img src="/assets/hero-car-front.png" alt="Car" className="absolute inset-0 w-full h-full object-contain pointer-events-none will-change-opacity" animate={{ opacity: activeIndex === 3 ? 1 : 0 }} transition={{ duration: activeIndex === 3 ? 0.8 : 1.5 }} />
    </>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  const { x: mouseX, y: mouseY } = useMouseParallax();

  // Depth Parallax multipliers
  const layerMinus3X = useTransform(mouseX, [-0.5, 0.5], ["2%", "-2%"]);
  const layerMinus3Y = useTransform(mouseY, [-0.5, 0.5], ["2%", "-2%"]);
  
  const layerMinus2X = useTransform(mouseX, [-0.5, 0.5], ["4%", "-4%"]);
  const layerMinus2Y = useTransform(mouseY, [-0.5, 0.5], ["4%", "-4%"]);

  const layerMinus1X = useTransform(mouseX, [-0.5, 0.5], ["8%", "-8%"]);
  const layerMinus1Y = useTransform(mouseY, [-0.5, 0.5], ["8%", "-8%"]);

  const layer0X = useTransform(mouseX, [-0.5, 0.5], ["3%", "-3%"]);
  const layer0Y = useTransform(mouseY, [-0.5, 0.5], ["3%", "-3%"]);

  const layer1X = useTransform(mouseX, [-0.5, 0.5], ["-8%", "8%"]);
  const layer1Y = useTransform(mouseY, [-0.5, 0.5], ["-8%", "8%"]);

  const layer2X = useTransform(mouseX, [-0.5, 0.5], ["-15%", "15%"]);
  const layer2Y = useTransform(mouseY, [-0.5, 0.5], ["-15%", "15%"]);

  // HUD text updates based on scroll
  const currentSpeed = useTransform(scrollYProgress, [0, 1], [0, 212]);
  const currentRPM = useTransform(scrollYProgress, [0, 1], [1000, 8500]);
  const speedText = useTransform(currentSpeed, (s) => Math.round(s).toString());
  const rpmText = useTransform(currentRPM, (r) => Math.round(r).toString());
  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-transparent md:h-[150vh]">
      <div className="relative md:sticky md:top-0 min-h-screen md:h-screen w-full overflow-hidden flex flex-col md:block md:items-center md:justify-center perspective-1000">
        
        {/* INITIAL SCAN LINE */}
        <motion.div 
          className="absolute left-0 w-full h-[2px] bg-primary z-50 shadow-[0_0_20px_#FF4500]"
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 1.5, ease: "linear", delay: 0.2 }}
        />

        {/* --- LAYER -3 (Background / Grid) --- */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none hidden md:block"
          style={{ x: layerMinus3X, y: layerMinus3Y }}
        >
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(255, 69, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 69, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-20%)',
              transformOrigin: 'top center'
            }}
          />
        </motion.div>

        {/* Spotlight */}
        <motion.div 
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(255,69,0,0.15) 0%, transparent 70%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* --- LAYER 0 (Main Car Subject - Bare Rotating Car Only) --- */}
        <motion.div 
          className="order-2 md:order-none relative md:absolute inset-0 flex items-center justify-center md:justify-end md:pr-[5vw] lg:pr-[10vw] z-10 pointer-events-none pb-12 pt-8 md:pb-0 md:pt-0 w-full"
          style={{ x: layer0X, y: layer0Y }}
        >
          <motion.div 
            className="relative w-[100vw] md:w-[75vw] lg:w-[65vw] max-w-[1200px] aspect-[16/9]"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Isolated Car Rotator */}
            <CarRotator />

            {/* Test: Waveform fake isolated */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute bottom-[5%] right-[5%] flex items-end justify-end gap-1 h-4 md:h-8">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 md:w-1.5 bg-primary/70"
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{ duration: 0.5 + ((i * 7) % 10) / 10, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- MAIN TEXT CONTENT (Left Aligned) --- */}
        <div className="order-1 md:order-none relative md:absolute inset-0 z-40 flex md:items-center items-start pt-[12vh] md:pt-0 pointer-events-none w-full shrink-0">
          <div className="container mx-auto px-6 lg:px-12 w-full flex">
            <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pointer-events-auto">
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                className="mb-8 flex flex-col md:flex-row items-center justify-center md:justify-start w-full gap-4"
              >
                <div className="h-[2px] w-12 bg-primary drop-shadow-[0_0_8px_rgba(255,69,0,0.8)] hidden md:block"></div>
                <span className="text-primary font-sans font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_0_8px_rgba(255,69,0,0.5)] text-center md:text-left">
                  Apex Motors / Elite Performance
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
                className="text-7xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tight mb-8"
              >
                Built To<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary block my-2">
                  Dominate
                </span>
                The Track
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
                className="text-white/60 font-sans text-sm md:text-xl max-w-md mb-8 md:mb-12 leading-relaxed border-l-0 md:border-l-2 md:border-primary/50 md:pl-6"
              >
                Every bolt torqued. Every system optimized. Every car transformed into a weapon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
              >
                <button className="group relative px-12 py-5 bg-transparent border border-primary/50 text-white font-display text-2xl uppercase tracking-widest clip-diagonal overflow-hidden transition-all hover:border-primary">
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors">
                    Ignition
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </motion.div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM CENTER SPEC BAR --- */}
        <motion.div 
          className="order-3 md:order-none relative md:absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-primary/20 overflow-hidden z-50 h-16 flex items-center mt-auto md:mt-0"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
        >
          <motion.div 
            className="flex whitespace-nowrap text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase text-white/50 pointer-events-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]">·</span> ENGINE TUNING
                <span className="mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]">·</span> TRACK PREP
                <span className="mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]">·</span> SUSPENSION
                <span className="mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]">·</span> DIAGNOSTICS
                <span className="mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]">·</span> DETAILING
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
