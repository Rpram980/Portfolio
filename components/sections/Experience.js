'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Experience"
          title="A cinematic timeline of impact."
          subtitle="Shipping production data systems and intelligent backends across the stack."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-300/60 via-amber-500/40 to-orange-600/30 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-12">
            {experience.map((job, i) => {
              const right = i % 2 === 1;
              return (
                <li key={job.company} className="relative md:grid md:grid-cols-2 md:gap-8">
                  {/* Marker */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="block h-4 w-4 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-neon ring-4 ring-[#0a1024]" />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className={`glass lift relative ml-10 rounded-2xl p-6 md:ml-0 ${
                      right ? 'md:col-start-2' : 'md:col-start-1'
                    }`}
                    data-hover
                  >
                    <div
                      aria-hidden
                      className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${job.accent} opacity-70`}
                    />
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                          {job.period}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-amber-300">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase size={11} />
                          Role
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80">
                      {job.points.map((p, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex gap-2.5"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-amber-300 to-orange-500" />
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
