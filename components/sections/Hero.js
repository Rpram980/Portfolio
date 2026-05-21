'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowRight, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

const techMarquee = [
  'Python',
  'PySpark',
  'AWS Glue',
  'Lambda',
  'Athena',
  'Snowflake',
  'Airflow',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'Power BI',
  'Tableau',
  'Pandas',
  'SQL',
  'Docker',
];

function TypingRoles({ roles }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx % roles.length];
    const speed = deleting ? 45 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, roles]);

  return (
    <span className="caret font-mono text-sm tracking-[0.2em] text-amber-300 sm:text-base">
      {text}
    </span>
  );
}

function PortraitCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotate: -2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Soft ambient glow behind card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-300/25 via-amber-500/30 to-orange-500/20 blur-3xl"
      />

      <div className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-glass lift">
        {/* Circular portrait with rotating neon ring */}
        <div className="relative mx-auto mt-2 aspect-square w-full max-w-[260px]">
          {/* Rotating conic gradient ring */}
          <div
            aria-hidden
            className="absolute -inset-2 animate-spin-slow rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(252,211,77,0.75), rgba(245,179,64,0.8), rgba(180,83,9,0.7), rgba(252,211,77,0.75))',
              WebkitMask:
                'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
            }}
          />
          {/* Soft outer glow */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-amber-300/30 via-amber-500/35 to-orange-600/25 blur-2xl"
          />

          {/* Circle frame */}
          <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/15 shadow-neon">
            {!imgError ? (
              <img
                src="/images/ram-prakash.png"
                alt={`${profile.name} — ${profile.roles[0]}`}
                onError={() => setImgError(true)}
                loading="eager"
                className="h-full w-full object-cover object-[center_62%] saturate-[0.92] contrast-[1.04] brightness-[0.97]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300/80 via-amber-500/80 to-orange-600/70 font-display text-5xl font-bold text-white">
                {profile.initials}
              </div>
            )}

            {/* Cool cinematic tint */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-700/20 via-transparent to-amber-300/15 mix-blend-overlay"
            />
            {/* Vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 70px 8px rgba(4,5,13,0.55)',
              }}
            />
            {/* Scan lines */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 3px)',
              }}
            />
          </div>

          {/* Floating "Open to roles" badge tangent to circle */}
          <div className="absolute -right-1 top-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/40 bg-black/70 px-2.5 py-1 backdrop-blur shadow-[0_0_20px_rgba(34,197,94,0.25)]">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-200">
              Open to roles
            </span>
          </div>
        </div>

        {/* Name + role below the circle */}
        <div className="mt-5 text-center">
          <p className="font-display text-xl font-semibold leading-tight text-white">
            {profile.name}
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/65">
            {profile.roles[0]} · {profile.roles[2]}
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { k: '9.56', l: 'MCA CGPA' },
            { k: '4+', l: 'Certs' },
            { k: '12+', l: 'Projects' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-black/30 px-2 py-2.5"
            >
              <p className="font-display text-base font-bold neon-text">
                {s.k}
              </p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* Info rows */}
        <div className="mt-4 space-y-2 px-1 text-[11px]">
          <Line label="LOCATION" value={profile.location} />
          <Line label="FOCUS" value="Data · AWS · AI/ML" />
        </div>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 px-1 pb-1">
          {['Python', 'AWS', 'PySpark', 'ML', 'NLP'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-28 sm:px-8"
    >
      {/* Center spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(245,179,64,0.16), transparent 55%)',
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-tag"
          >
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="block text-white"
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="block neon-text"
            >
              {profile.name}.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-2 block text-2xl font-semibold text-white/80 sm:text-3xl"
            >
              I build{' '}
              <span className="text-white">cloud-native data systems</span>{' '}
              and <span className="text-white">AI-powered analytics.</span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 flex items-center gap-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              role&nbsp;›
            </span>
            <TypingRoles roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 px-5 py-3 text-sm font-medium text-[#1a1207] shadow-neon transition hover:shadow-[0_0_40px_rgba(245,179,64,0.55)]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="neon-border inline-flex items-center gap-2 rounded-full bg-white/0 px-5 py-3 text-sm font-medium text-white/90 transition hover:text-white"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-5 text-xs text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={12} /> {profile.email}
            </span>
          </motion.div>
        </div>

        <PortraitCard />
      </div>

      {/* Marquee tech strip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/5 bg-black/30 backdrop-blur">
        <div className="marquee-track py-3">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40"
            >
              {t}
              <span className="ml-6 text-amber-400/50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Line({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      <span className="text-right text-xs text-white/80">{value}</span>
    </div>
  );
}
