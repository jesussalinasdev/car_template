import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Each letter gets its own overflow-hidden wrapper so Framer transforms are clipped correctly */
function ClipLetter({
  letter,
  delay,
  from,
  color,
}: {
  letter: string;
  delay: number;
  from: 'top' | 'bottom';
  color: string;
}) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 1, display: 'inline-block' }}>
      <motion.span
        initial={{ y: from === 'top' ? '-110%' : '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold leading-none uppercase inline-block"
        style={{ fontSize: 'clamp(3.5rem, 13vw, 9rem)', color }}
      >
        {letter}
      </motion.span>
    </div>
  );
}

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Corner brackets */}
          <motion.div
            className="absolute inset-6 md:inset-14 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.08 }}
          >
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary" />
          </motion.div>

          {/* Entry scan line — sweeps top to bottom */}
          <motion.div
            className="absolute left-0 w-full h-[1px] bg-primary pointer-events-none"
            style={{ boxShadow: '0 0 18px rgba(255,69,0,0.9)', top: 0 }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'linear' }}
          />

          {/* Logo */}
          <div className="text-center select-none">
            {/* APEX — letters drop from above */}
            <div className="flex justify-center gap-0">
              {['A', 'P', 'E', 'X'].map((l, i) => (
                <ClipLetter
                  key={l + i}
                  letter={l}
                  delay={0.18 + i * 0.06}
                  from="top"
                  color="#ffffff"
                />
              ))}
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.42, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-primary origin-center my-1"
              style={{ boxShadow: '0 0 16px rgba(255,69,0,0.9)' }}
            />

            {/* MOTORS — letters rise from below */}
            <div className="flex justify-center gap-0">
              {['M', 'O', 'T', 'O', 'R', 'S'].map((l, i) => (
                <ClipLetter
                  key={l + i}
                  letter={l}
                  delay={0.62 + i * 0.05}
                  from="bottom"
                  color="#FF4500"
                />
              ))}
            </div>
          </div>

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.08 }}
            className="font-mono text-xs md:text-sm tracking-[0.55em] text-primary/50 uppercase mt-8 text-center"
          >
            Elite Performance Engineering
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.18 }}
            className="mt-8 w-52 md:w-80"
          >
            <div className="h-[1px] bg-neutral-800 w-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1.18, ease: 'easeInOut' }}
                style={{ boxShadow: '0 0 10px rgba(255,69,0,1)' }}
              />
            </div>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.85, repeat: Infinity, delay: 1.18 }}
              className="font-mono text-[10px] md:text-xs tracking-[0.55em] text-primary/40 uppercase mt-3 text-center"
            >
              SYSTEMS ONLINE
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
