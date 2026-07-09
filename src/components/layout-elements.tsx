import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 69, 0, 0.1)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering ? 'rgba(255, 69, 0, 0.8)' : 'rgba(255, 255, 255, 0.5)'
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      >
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        )}
      </motion.div>
    </>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(8, 8, 8, 0.8)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(255, 69, 0, 0)', '1px solid rgba(255, 69, 0, 0.2)']
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all"
    >
      <div className="flex items-center gap-2 cursor-pointer" data-hoverable>
        <div className="w-8 h-8 bg-primary clip-diagonal flex items-center justify-center">
          <span className="font-display font-bold text-black text-xl">A</span>
        </div>
        <span className="font-display text-2xl tracking-widest uppercase mt-1">Apex<span className="text-primary">Motors</span></span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {['Services', 'Workshop', 'Team', 'Testimonials'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </a>
        ))}
      </nav>

      <button className="hidden md:flex items-center justify-center px-6 py-2 bg-transparent border border-primary text-primary font-display tracking-widest uppercase hover:bg-primary hover:text-black transition-all clip-diagonal group">
        <span className="relative z-10">Ignition</span>
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
      </button>

      {/* Mobile menu toggle would go here */}
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-4 h-0.5 bg-primary self-end" />
      </button>
    </motion.header>
  );
}

export function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.2 + (Math.random() * 0.4),
            boxShadow: `0 0 ${p.size * 2}px rgba(255,69,0,0.8)`
          }}
          animate={{
            y: [`${p.y}%`, `-${p.y}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
