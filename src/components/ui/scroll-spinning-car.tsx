// @ts-nocheck
"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollSpinningCar = () => {
  const { scrollYProgress } = useScroll();
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-center bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: "url('/car.png')", 
          rotate: rotate1, 
          y: y1, 
          x: x1,
          filter: "drop-shadow(0 0 50px rgba(234,179,8,0.5))"
        }}
      />
      <motion.div
        className="absolute right-0 top-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-center bg-no-repeat bg-contain opacity-60"
        style={{ 
          backgroundImage: "url('/car.png')", 
          rotate: rotate2, 
          y: y2, 
          x: x2,
          filter: "sepia(1) hue-rotate(-15deg) saturate(3) drop-shadow(0 0 50px rgba(255,100,0,0.5))"
        }}
      />
    </div>
  );
};
