'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-4 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Certifications"
          title="Verified by cloud and data certifications."
          subtitle="Continuous learning across AWS, data analysis and modern data stack."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.06 }}
              className="glass lift relative overflow-hidden rounded-2xl p-5"
              data-hover
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-[#1a1207] shadow-neon">
                  <BadgeCheck size={18} />
                </div>
                <div>
                  <p className="font-display text-sm leading-tight text-white">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                    {c.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
