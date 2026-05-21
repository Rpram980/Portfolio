'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function useCounter(target, decimals = 0) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return { ref, value: decimals ? value.toFixed(decimals) : Math.floor(value) };
}

export default function StatsCounter({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} stat={s} />
      ))}
    </div>
  );
}

function Stat({ stat }) {
  const { ref, value } = useCounter(stat.value, stat.decimals ?? 0);
  return (
    <div
      ref={ref}
      className="glass lift relative overflow-hidden rounded-2xl p-4 text-center"
    >
      <div className="font-display text-2xl font-bold sm:text-3xl">
        <span className="neon-text">{value}</span>
        <span className="ml-1 text-white/60">{stat.suffix}</span>
      </div>
      <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
        {stat.label}
      </p>
    </div>
  );
}
