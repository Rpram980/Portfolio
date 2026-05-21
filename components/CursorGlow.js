'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.3 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const enter = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, [data-hover]')) setHover(true);
    };
    const leave = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, [data-hover]')) setHover(false);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', enter);
    window.addEventListener('mouseout', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', enter);
      window.removeEventListener('mouseout', leave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full mix-blend-screen md:block"
        style={{
          translateX: sx,
          translateY: sy,
          x: '-50%',
          y: '-50%',
          background:
            'radial-gradient(circle at center, rgba(245,179,64,0.75), rgba(252,211,77,0.4) 50%, transparent 70%)',
          scale: hover ? 2.2 : 1,
          transition: 'scale 0.3s ease',
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-white mix-blend-difference md:block"
        style={{ translateX: x, translateY: y, x: '-50%', y: '-50%' }}
      />
    </>
  );
}
