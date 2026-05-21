'use client';

import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

// Resolve each icon safely; if a name was renamed/removed in react-icons,
// fall back to a sibling or skip the entry entirely.
const ICONS = [
  { Icon: Si.SiPython, color: '#3776AB', top: '12%', left: '6%', delay: 0 },
  {
    Icon: Si.SiAmazonwebservices || Si.SiAmazonaws || FaAws,
    color: '#FF9900',
    top: '22%',
    left: '92%',
    delay: 0.4,
  },
  { Icon: Si.SiTensorflow, color: '#FF6F00', top: '70%', left: '4%', delay: 0.8 },
  {
    Icon: Si.SiApachespark,
    color: '#E25A1C',
    top: '78%',
    left: '88%',
    delay: 0.2,
  },
  { Icon: Si.SiSnowflake, color: '#29B5E8', top: '40%', left: '2%', delay: 1.0 },
  { Icon: Si.SiDocker, color: '#2496ED', top: '55%', left: '95%', delay: 0.6 },
  { Icon: Si.SiPandas, color: '#150458', top: '88%', left: '50%', delay: 0.3 },
  { Icon: Si.SiOpencv, color: '#5C3EE8', top: '6%', left: '50%', delay: 1.2 },
  { Icon: Si.SiPytorch, color: '#EE4C2C', top: '34%', left: '78%', delay: 0.9 },
].filter((entry) => typeof entry.Icon === 'function');

export default function FloatingTechIcons() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[1] hidden overflow-hidden md:block"
      aria-hidden
    >
      {ICONS.map(({ Icon, color, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left, color }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 0.18,
            scale: 1,
            y: ['-12px', '12px', '-12px'],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay },
            y: {
              duration: 8 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            },
            rotate: {
              duration: 10 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            },
          }}
        >
          <Icon size={i % 2 === 0 ? 44 : 32} />
        </motion.div>
      ))}
    </div>
  );
}
