'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Camera,
  Cloud,
  TrendingUp,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

const ICONS = {
  cloud: Cloud,
  camera: Camera,
  trending: TrendingUp,
  chart: BarChart3,
};

function ProjectCard({ project, index }) {
  const Icon = ICONS[project.icon] ?? Cloud;
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    mx.set((x / r.width) * 100);
    my.set((y / r.height) * 100);
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="glass spotlight lift group relative overflow-hidden rounded-3xl p-6"
      data-hover
    >
      <div
        aria-hidden
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.accent} opacity-25 blur-3xl transition group-hover:opacity-60`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-neon`}
        >
          <Icon size={20} />
        </div>
        <a
          href={project.href}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-amber-400/60 hover:bg-white/10 hover:text-white"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold leading-tight text-white">
        {project.title}
      </h3>
      <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-amber-300/85">
        {project.tagline}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <ul className="relative mt-4 grid grid-cols-2 gap-1.5">
        {project.features.map((f) => (
          <li
            key={f}
            className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1 text-[11px] text-white/70"
          >
            • {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`rounded-full border border-white/10 bg-gradient-to-r ${project.accent} bg-clip-text px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-transparent`}
            style={{ WebkitTextFillColor: 'transparent' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Selected Work"
          title="Projects that ship pipelines, models and dashboards."
          subtitle="A cinematic showcase of cloud-native ETL, computer vision, ML and analytics work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
