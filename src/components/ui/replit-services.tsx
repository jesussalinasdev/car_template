// @ts-nocheck
"use client";
import React from "react";

export const ReplitServices = () => {
  const services = [
    { num: "01", sys: "SYS.01", title: "Engine Tuning", desc: "Unlocking hidden horsepower. Precision remaps, forced induction upgrades, and dyno-proven calibration for hypercars.", spec: "+15% Output" },
    { num: "02", sys: "SYS.02", title: "Track Prep", desc: "Surgical suspension tuning, corner balancing, and aero adjustments. Turn your weekend car into a circuit weapon.", spec: "1.2g Lateral" },
    { num: "03", sys: "SYS.03", title: "Bespoke Bodywork", desc: "Carbon fiber integration, widebody fabrication, and flawless paint correction. Aggressive, seamless, engineered.", spec: "Zero Tolerance" },
    { num: "04", sys: "SYS.04", title: "Diagnostics", desc: "Telemetry analysis and deep ECU interrogation. We don't guess, we measure. Total system awareness.", spec: "100% Precision" }
  ];

  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden z-20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:flex items-end justify-between">
          <div>
            <h2 className="text-sm font-sans tracking-[0.3em] text-orange-500 uppercase mb-4">Precision Engineering</h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] text-white">
              System<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Upgrades</span>
            </h3>
          </div>
          <p className="max-w-sm text-neutral-400 font-sans text-sm mt-8 md:mt-0 border-l border-orange-500/50 pl-4">
            We don't do oil changes. We extract every ounce of performance your machine was designed to deliver, and then push it further.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="relative w-full aspect-[4/5] [perspective:1000px] group cursor-none">
              <div className="absolute inset-0 bg-neutral-950 border border-neutral-800 overflow-hidden transition-colors duration-500 group-hover:border-orange-500/50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-neutral-800/30 leading-none group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none">
                  {svc.num}
                </div>
                
                <div className="relative h-full p-8 flex flex-col z-10">
                  <div className="flex justify-between items-start mb-auto">
                    <span className="text-orange-500 font-mono text-sm border border-orange-500/30 px-2 py-1 bg-orange-500/5" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)" }}>
                      {svc.sys}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black uppercase mb-4 text-white group-hover:text-orange-500 transition-colors">{svc.title}</h3>
                    <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-6">{svc.desc}</p>
                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
                      <span className="w-8 h-[1px] bg-neutral-700 group-hover:bg-orange-500 transition-colors" />
                      {svc.spec}
                    </div>
                  </div>
                </div>
                
                {/* Shine animation overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                  style={{
                    background: "linear-gradient(105deg, transparent 20%, white 25%, transparent 30%) 0% 0% / 200% 200%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
