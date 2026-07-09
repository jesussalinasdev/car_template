import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/** Slow drifting glow orb */
function GlowOrb({
  x,
  y,
  size,
  delay,
  duration,
  opacity,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(255,69,0,${opacity}) 0%, transparent 70%)`,
        filter: 'blur(60px)',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        x: [0, 30, -20, 15, 0],
        y: [0, -25, 20, -10, 0],
        scale: [1, 1.15, 0.9, 1.08, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/** Horizontal scan line that sweeps the full page every N seconds */
function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 w-full pointer-events-none"
      style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,69,0,0.4) 20%, rgba(255,69,0,0.7) 50%, rgba(255,69,0,0.4) 80%, transparent 100%)',
        boxShadow: '0 0 12px rgba(255,69,0,0.5)',
        top: 0,
      }}
      animate={{ top: ['0%', '100%'], opacity: [0, 0.8, 0.8, 0] }}
      transition={{
        duration: 5,
        times: [0, 0.05, 0.95, 1],
        repeat: Infinity,
        repeatDelay: 9,
        ease: 'linear',
      }}
    />
  );
}

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  travel: number; // px to rise — pre-computed so animate never calls Math.random()
};

/** Floating spark particles — all random values pre-computed once in useEffect */
function Sparks() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 8,
        duration: Math.random() * 12 + 6,
        travel: 60 + Math.random() * 80,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px rgba(255,69,0,0.9)`,
          }}
          animate={{
            y: ['0px', `-${p.travel}px`],
            opacity: [0, 0.7, 0.9, 0],
            scale: [0.8, 1.2, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}

/**
 * Full-page animated background: subtle grid + drifting orange glow orbs +
 * periodic scan line + spark particles. Fixed behind all content.
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,69,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.06) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Ambient glow orbs */}
      <GlowOrb x="80%"  y="10%"   size={520} delay={0}  duration={18} opacity={0.13} />
      <GlowOrb x="10%"  y="60%"   size={440} delay={4}  duration={22} opacity={0.10} />
      <GlowOrb x="55%"  y="85%"   size={380} delay={8}  duration={16} opacity={0.09} />
      <GlowOrb x="25%"  y="20%"   size={300} delay={2}  duration={20} opacity={0.07} />

      {/* Scan line */}
      <ScanLine />

      {/* Sparks */}
      <Sparks />

      {/* Edge vignette so content areas don't fight the bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
