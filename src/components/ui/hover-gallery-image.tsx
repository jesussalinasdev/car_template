"use client";
import React from "react";
import { motion } from "framer-motion";

export const HoverGalleryImage = ({ image, title }: { image: string, title: string }) => {
  return (
    <div className="relative group w-full h-full min-h-[300px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-none">
      <motion.div 
        whileHover={{ scale: 1.15, rotate: 2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay oscuro y viñeta */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Texto emergente */}
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <h3 className="text-3xl font-black text-yellow-500 uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </h3>
      </div>
      
      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
    </div>
  );
};
