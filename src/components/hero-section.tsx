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

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  const { x: mouseX, y: mouseY } = useMouseParallax();

  // Static image only (no rotation per user request)

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
  const [speed, setSpeed] = useState(0);
  const [rpm, setRpm] = useState(1000);

  useEffect(() => currentSpeed.on('change', v => setSpeed(Math.round(v))), [currentSpeed]);
  useEffect(() => currentRPM.on('change', v => setRpm(Math.round(v))), [currentRPM]);
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
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] rounded-full pointer-events-none mix-blend-screen z-0"
          style={{ background: 'radial-gradient(circle, rgba(255,69,0,0.15) 0%, transparent 70%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* --- LAYER -2 (Large Blueprint Rings) --- */}
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none hidden md:block"
          style={{ x: layerMinus2X, y: layerMinus2Y }}
        >
          <svg viewBox="0 0 1000 1000" className="w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] animate-[spin_120s_linear_infinite]">
            <circle cx="500" cy="500" r="400" fill="none" stroke="#FF4500" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="500" cy="500" r="350" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="500" cy="500" r="450" fill="none" stroke="#FF4500" strokeWidth="0.5" />
            <line x1="100" y1="500" x2="900" y2="500" stroke="#FF4500" strokeWidth="1" />
            <line x1="500" y1="100" x2="500" y2="900" stroke="#FF4500" strokeWidth="1" />
          </svg>
        </motion.div>



        {/* --- LAYER 0 (Main Car Subject) --- */}
        <motion.div 
          className="order-2 md:order-none relative md:absolute inset-0 flex items-center justify-center md:justify-end md:pr-[5vw] lg:pr-[10vw] z-10 pointer-events-none pb-12 pt-8 md:pb-0 md:pt-0 w-full"
          style={{ x: layer0X, y: layer0Y }}
        >
          <motion.div 
            className="relative w-[130vw] md:w-[75vw] lg:w-[65vw] max-w-[1200px] aspect-[16/9]"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Attached Background Mechanicals */}
            <div className="absolute inset-0 z-[-1] pointer-events-none opacity-40 md:opacity-100">
              <motion.svg className="absolute -top-[5%] right-[5%] md:top-[10%] md:right-[0%] w-20 h-20 md:w-32 md:h-32 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-7.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m13-10.2l-2.8-2.8M6.3 17.7l-2.8-2.8" />
                <circle cx="12" cy="12" r="4" />
              </motion.svg>
              <motion.svg className="absolute -bottom-[5%] left-[20%] md:bottom-[10%] md:left-[25%] w-32 h-32 md:w-48 md:h-48 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-7.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m13-10.2l-2.8-2.8M6.3 17.7l-2.8-2.8" />
                <circle cx="12" cy="12" r="6" />
              </motion.svg>
              <motion.svg className="absolute top-[20%] left-[10%] md:top-[30%] md:left-[10%] w-16 h-16 md:w-24 md:h-24 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </motion.svg>
            </div>

            {/* Main Car Subject (Static) */}
            <img src="/assets/hero-car-front-34.png" alt="Car" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
            
            {/* Attached HUD Readouts */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* HUD Line Right */}
              <div className="absolute top-[20%] right-[10%] md:top-[25%] md:-right-[10%] w-[25vw] md:w-[15vw] border-b border-primary/40 block">
                <div className="absolute -top-4 right-0 text-primary font-mono text-[8px] md:text-[10px] tracking-widest uppercase">
                  V12 Biturbo // 720 HP
                </div>
                <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 border border-primary rounded-full bg-black flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                </div>
              </div>

              {/* HUD Line Left */}
              <div className="absolute bottom-[25%] left-[5%] md:bottom-[25%] md:-left-[10%] w-[20vw] md:w-[12vw] border-b border-primary/40 block origin-left -rotate-12">
                <div className="absolute -top-4 left-0 text-primary font-mono text-[8px] md:text-[10px] tracking-widest uppercase">
                  Aero Force // 1200kg
                </div>
                <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3 border border-primary rounded-full bg-black flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                </div>
              </div>

              {/* Speed/RPM Readout */}
              <div className="absolute top-[5%] left-[5%] md:top-auto md:bottom-[15%] md:-right-[5%] md:left-auto text-left md:text-right font-mono text-primary/90 block">
                <div className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]">
                  {speed} <span className="text-xs md:text-xl text-primary/50 tracking-normal">MPH</span>
                </div>
                <div className="text-sm md:text-2xl lg:text-3xl mt-1 font-light opacity-80">
                  {rpm} <span className="text-[10px] md:text-sm text-primary/50">RPM</span>
                </div>
                
                {/* Waveform fake */}
                <div className="flex items-end justify-start md:justify-end gap-1 h-4 md:h-8 mt-2 md:mt-4">
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
            </div>

            {/* Soft shadow underneath car */}
            <div className="absolute -bottom-[5%] left-[20%] right-[20%] h-[15%] bg-black blur-2xl rounded-[100%] pointer-events-none" />
            <div className="absolute -bottom-[5%] left-[25%] right-[25%] h-[10%] bg-primary/20 blur-3xl rounded-[100%] pointer-events-none" />
          </motion.div>
        </motion.div>




        {/* --- LAYER +2 (Closest Particles) --- */}
        <motion.div 
          className="absolute inset-0 z-30 pointer-events-none opacity-50 md:opacity-100"
          style={{ x: layer2X, y: layer2Y }}
        >
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full blur-[1px]"
              style={{
                left: `${(i * 13.7) % 100}%`,
                top: `${(i * 23.4) % 100}%`,
                opacity: ((i * 7) % 50) / 100 + 0.2
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (i % 2 === 0 ? 7.5 : -7.5), 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + ((i * 13) % 30) / 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary text-shadow-glow block my-2">
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
