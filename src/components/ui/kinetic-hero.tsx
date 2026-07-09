"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "./particle-background";
import { SweepButton } from "./sweep-button";

export const KineticHero = ({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Físicas de Scroll (Desvanecimiento inmersivo)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] // Cuando empieza a bajar hasta que desaparece de pantalla
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  
  // Capas de paralaje profundo (Z-Axis mapping)
  const textX = mousePosition.x * 30;
  const textY = mousePosition.y * 30;

  const carX = mousePosition.x * -60;
  const carY = mousePosition.y * -60;
  
  const rotateX = mousePosition.y * 10;
  const rotateY = mousePosition.x * -10;

  return (
    <motion.div 
      ref={containerRef} 
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      className="relative h-[100svh] w-full overflow-hidden bg-black flex items-center justify-center [perspective:1200px]"
    >
      <ParticleBackground />

      {/* CAPA 2: TIPOGRAFÍA MASIVA (Medio) - Ahora con Clamp Fluido */}
      <motion.div
        animate={{ x: textX, y: textY, rotateX, rotateY }}
        transition={{ type: "spring", ...springConfig }}
        className="absolute z-10 flex flex-col items-center justify-center w-full pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase text-neutral-800 tracking-tighter leading-[0.85] opacity-50 blur-[1px] break-words text-center w-full px-4">
          PERFORMANCE
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase text-yellow-500 tracking-tighter leading-[0.9] shadow-2xl drop-shadow-[0_0_20px_rgba(234,179,8,0.6)] break-words text-center w-full px-4 mt-2">
          {title}
        </h1>
        <p className="mt-6 md:mt-10 text-lg md:text-3xl text-neutral-300 font-light max-w-4xl text-center px-6 drop-shadow-md">
          {subtitle}
        </p>
      </motion.div>

      {/* CAPA 3: VEHÍCULO EN PRIMER PLANO (Cerca) - CORREGIDO PARA VISIBILIDAD */}
      <motion.div
        animate={{ x: carX, y: carY }}
        transition={{ type: "spring", ...springConfig }}
        className="absolute bottom-[-5%] z-20 w-full max-w-[1200px] h-[50vh] md:h-[80vh] pointer-events-none"
      >
        <div 
          className="w-full h-full bg-contain bg-bottom bg-no-repeat"
          style={{ 
            backgroundImage: "url('/car.png')",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            // Se elimina mix-blend-mode para evitar que desaparezca en fondos oscuros absolutos
          }}
        />
      </motion.div>

      {/* CAPA 4: INTERACCIÓN (Frente Absoluto) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 md:bottom-20 z-30"
      >
         <SweepButton>
          {cta}
        </SweepButton>
      </motion.div>

    </motion.div>
  );
};
