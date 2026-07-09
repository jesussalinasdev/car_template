"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const VibratingCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-80 rounded-sm bg-neutral-950 border border-neutral-800/50 p-8 flex flex-col items-center justify-center text-center overflow-hidden cursor-none group"
    >
      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Elementos flotantes */}
      <div 
        style={{ transform: "translateZ(60px)" }}
        className="text-6xl mb-6 text-yellow-500"
      >
        {icon}
      </div>
      <h3 
        style={{ transform: "translateZ(40px)" }}
        className="text-2xl font-black text-neutral-200 mb-2 uppercase tracking-wide"
      >
        {title}
      </h3>
      <p 
        style={{ transform: "translateZ(20px)" }}
        className="text-neutral-400 font-light"
      >
        {description}
      </p>
    </motion.div>
  );
};
