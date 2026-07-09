// @ts-nocheck
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SweepButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SweepButton = ({ className, children, ...props }: SweepButtonProps) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden bg-yellow-500 px-10 py-5 font-black uppercase tracking-widest text-black transition-all",
        "hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.3)]",
        className
      )}
      {...props}
    >
      {/* Elemento de barrido que sube desde abajo */}
      <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
      
      {/* Contenedor del texto para que quede siempre encima */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </button>
  );
};
