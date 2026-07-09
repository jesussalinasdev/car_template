import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/components/i18n-provider';

function Counter({ from, to, duration, suffix = '' }: { from: number, to: number, duration: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        // Ease out expo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(from + (to - from) * easeProgress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef} className="font-display font-bold">
      {count}{suffix}
    </span>
  );
}

const statsConfig = [
  { value: 1200, suffix: '+' },
  { value: 15000, suffix: 'HP' },
  { value: 0, suffix: '.01mm' },
  { value: 24, suffix: '/7' }
];

export function StatsSection() {
  const { dict } = useI18n();
  return (
    <section className="py-24 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden">
      {/* Mechanical grid background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {statsConfig.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col relative group items-center text-center"
            >
              {/* Accents */}
              <div className="absolute -left-0 top-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out opacity-50" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity delay-300" />

              <div className="text-5xl md:text-7xl text-white mb-2 tracking-widest flex items-end gap-1 font-display">
                <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <h4 className="text-primary font-mono text-sm uppercase tracking-widest mb-1">
                {dict.stats.items[i].label}
              </h4>
              <p className="text-neutral-500 font-sans text-xs uppercase tracking-wider">
                {dict.stats.items[i].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
