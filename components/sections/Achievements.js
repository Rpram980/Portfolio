'use client';

import { motion } from 'framer-motion';
import { Flag, Medal, Star, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { achievements } from '@/data/portfolio';

const ICONS = { medal: Medal, star: Star, users: Users, flag: Flag };

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Achievements"
          title="Trophies on the way."
          subtitle="A few highlights from school, community and the open developer ecosystem."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] ?? Medal;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="glass lift group relative overflow-hidden rounded-2xl p-5"
                data-hover
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-300/35 via-orange-400/25 to-amber-600/30 opacity-60 blur-3xl transition group-hover:opacity-100"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-orange-500 text-[#1a1207] shadow-neon">
                  <Icon size={20} />
                </div>
                <p className="relative mt-4 font-display text-sm uppercase tracking-[0.2em] text-white">
                  {a.title}
                </p>
                <p className="relative mt-1 text-xs leading-relaxed text-text-muted">
                  {a.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
