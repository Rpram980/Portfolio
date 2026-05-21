'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, align = 'left' }) {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="section-tag"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f5b340]" />
        {tag}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
