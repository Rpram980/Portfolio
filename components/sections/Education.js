'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Education"
          title="Foundation, with a gold finish."
          subtitle="Computer science across MCA and BCA, with a Gold Medal at the masters level."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass lift relative overflow-hidden rounded-2xl p-6"
              data-hover
            >
              <div
                aria-hidden
                className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${e.accent} opacity-80`}
              />
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${e.accent} opacity-25 blur-3xl`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${e.accent} text-white shadow-neon`}
                >
                  <GraduationCap size={20} />
                </div>
                {e.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">
                    <Award size={11} /> {e.highlight}
                  </span>
                )}
              </div>

              <h3 className="relative mt-4 font-display text-lg font-semibold text-white">
                {e.degree}
              </h3>
              <p className="text-sm text-amber-300/90">{e.school}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono uppercase tracking-[0.2em]">
                  {e.period}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono uppercase tracking-[0.2em]">
                  {e.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
