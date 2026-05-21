'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Tech Arsenal"
          title="Skills that ship pipelines, dashboards and models."
          subtitle="Languages, cloud services, AI/ML frameworks and analytics tools I reach for daily."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="glass lift group relative overflow-hidden rounded-2xl p-5"
              data-hover
            >
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.accent} opacity-30 blur-3xl transition group-hover:opacity-60`}
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-sm uppercase tracking-[0.25em] text-white/85">
                    {group.title}
                  </h3>
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${group.accent} shadow-neon`}
                  />
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.02, duration: 0.35 }}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/80 transition hover:border-amber-400/50 hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
