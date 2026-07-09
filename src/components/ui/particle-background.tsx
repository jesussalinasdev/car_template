"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; duration: number }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      // 100 partículas, tamaño de 2px a 8px
      const newParticles = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100, 
        y: Math.random() * 100, 
        duration: Math.random() * 15 + 10,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,1)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: ["0%", "-100vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};
