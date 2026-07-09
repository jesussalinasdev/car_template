// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";

export const ReplitBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Malla de puntos principal */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 69, 0, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 69, 0, 0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      />
      
      {/* Orbes de desenfoque naranjas */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "80%", top: "10%", width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(255, 69, 0, 0.13) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "10%", top: "60%", width: "440px", height: "440px",
          background: "radial-gradient(circle, rgba(255, 69, 0, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      
      {/* Línea horizontal brillante */}
      <div 
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 69, 0, 0.4) 20%, rgba(255, 69, 0, 0.7) 50%, rgba(255, 69, 0, 0.4) 80%, transparent 100%)",
          boxShadow: "rgba(255, 69, 0, 0.5) 0px 0px 12px",
          top: "1.3%",
          opacity: 0.2
        }}
      />

      {/* Partículas estáticas (replicando el estilo estático/desenfocado de Replit) */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-500 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            boxShadow: "rgba(255, 69, 0, 0.9) 0px 0px 5px"
          }}
        />
      ))}
      
      {/* Viñeta oscura global */}
      <div 
        className="absolute inset-0"
        style={{ background: "radial-gradient(transparent 40%, rgba(0, 0, 0, 0.55) 100%)" }}
      />
    </div>
  );
};
