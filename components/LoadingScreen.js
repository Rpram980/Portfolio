'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ done }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (done) {
      setProgress(100);
      return;
    }
    let raf;
    const start = performance.now();
    const duration = 2200;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(96, eased * 96));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1024]"
          aria-hidden
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-80" />

          <div className="relative flex w-[min(90vw,520px)] flex-col items-center gap-7">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative flex h-28 w-28 items-center justify-center"
            >
              <span className="absolute inset-0 animate-spin-slow rounded-full border border-white/10" />
              <span className="absolute inset-2 animate-spin-slow rounded-full border border-amber-400/50 [animation-direction:reverse]" />
              <span className="absolute inset-5 rounded-full border border-orange-500/40" />
              <span className="font-display text-2xl tracking-[0.3em] neon-text">
                RPS
              </span>
            </motion.div>

            <div className="w-full">
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                <span>Initializing portfolio</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="loader-bar h-full rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-white/40"
              >
                Booting cinematic engine…
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
