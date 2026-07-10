import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '@/components/i18n-provider';
import { Zap, Crosshair, Hexagon, Activity } from 'lucide-react';

const getServiceIcon = (index: number) => {
  switch (index) {
    case 0: return (
      <motion.div animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <Zap size={24} />
      </motion.div>
    );
    case 1: return (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
        <Crosshair size={24} />
      </motion.div>
    );
    case 2: return (
      <motion.div animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }} transition={{ duration: 3, repeat: Infinity }}>
        <Hexagon size={24} />
      </motion.div>
    );
    case 3: return (
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <Activity size={24} />
      </motion.div>
    );
    default: return <Zap size={24} />;
  }
};

function ServiceCard({ service, index }: { service: any, index: number }) {
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
      className="relative w-full h-auto md:aspect-[4/5] perspective-1000 group cursor-none"
    >
      <div className="relative w-full h-full bg-neutral-900 border border-neutral-800 clip-diagonal-reverse overflow-hidden transition-colors duration-500 group-hover:border-primary/50">
        
        {/* Background gradient effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Number watermark */}
        <div className="absolute -bottom-10 -right-10 text-[200px] font-display font-bold text-neutral-800/30 leading-none group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
          {service.icon}
        </div>

        <div className="relative h-full p-8 flex flex-col z-10" style={{ transform: 'translateZ(50px)' }}>
          <div className="flex justify-end items-start mb-6 md:mb-auto">
            <div className="text-primary border border-primary/30 p-2 bg-primary/5 clip-diagonal flex items-center justify-center">
              {getServiceIcon(index)}
            </div>
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
  const { dict } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const services = dict.services.items.map((item: any, i: number) => ({
    ...item,
    icon: `0${i + 1}`
  }));

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
            <h2 className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4">{dict.services.tagline}</h2>
            <h3 className="text-6xl md:text-8xl font-display uppercase leading-[0.85]">
              {dict.services.titleLine1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">{dict.services.titleLine2}</span>
            </h3>
          </div>
          <p className="max-w-sm text-neutral-400 font-sans text-sm mt-8 md:mt-0 border-l border-primary/50 pl-4">
            {dict.services.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: any, i: number) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
