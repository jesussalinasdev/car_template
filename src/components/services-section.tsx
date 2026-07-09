import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: 'Engine Tuning',
    desc: 'Unlocking hidden horsepower. Precision remaps, forced induction upgrades, and dyno-proven calibration for hypercars.',
    icon: '01',
    stats: '+15% Output',
  },
  {
    title: 'Track Prep',
    desc: 'Surgical suspension tuning, corner balancing, and aero adjustments. Turn your weekend car into a circuit weapon.',
    icon: '02',
    stats: '1.2g Lateral',
  },
  {
    title: 'Bespoke Bodywork',
    desc: 'Carbon fiber integration, widebody fabrication, and flawless paint correction. Aggressive, seamless, engineered.',
    icon: '03',
    stats: 'Zero Tolerance',
  },
  {
    title: 'Diagnostics',
    desc: 'Telemetry analysis and deep ECU interrogation. We don\'t guess, we measure. Total system awareness.',
    icon: '04',
    stats: '100% Precision',
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className="relative w-full aspect-[4/5] perspective-1000 group cursor-none"
    >
      <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 clip-diagonal-reverse overflow-hidden transition-colors duration-500 group-hover:border-primary/50">
        
        {/* Background gradient effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Number watermark */}
        <div className="absolute -bottom-10 -right-10 text-[200px] font-display font-bold text-neutral-800/30 leading-none group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
          {service.icon}
        </div>

        <div className="relative h-full p-8 flex flex-col z-10" style={{ transform: 'translateZ(50px)' }}>
          <div className="flex justify-between items-start mb-auto">
            <span className="text-primary font-mono text-sm border border-primary/30 px-2 py-1 bg-primary/5 clip-diagonal">
              SYS.{service.icon}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-display uppercase mb-4 text-white group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-6">
              {service.desc}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span className="w-8 h-[1px] bg-neutral-700 group-hover:bg-primary transition-colors" />
              {service.stats}
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
          style={{
            background: 'linear-gradient(105deg, transparent 20%, white 25%, transparent 30%)',
            backgroundSize: '200% 200%',
            animation: 'shine 3s infinite linear'
          }}
        />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <section id="services" ref={containerRef} className="py-32 bg-transparent relative z-10">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y: titleY }}
          className="mb-24 md:flex items-end justify-between"
        >
          <div>
            <h2 className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4">Precision Engineering</h2>
            <h3 className="text-6xl md:text-8xl font-display uppercase leading-[0.85]">
              System<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Upgrades</span>
            </h3>
          </div>
          <p className="max-w-sm text-neutral-400 font-sans text-sm mt-8 md:mt-0 border-l border-primary/50 pl-4">
            We don't do oil changes. We extract every ounce of performance your machine was designed to deliver, and then push it further.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
