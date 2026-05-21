'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, profile } from '@/data/portfolio';
import ThemeVoiceControls from './ThemeVoiceControls';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'glass-strong shadow-glass'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 font-display text-sm tracking-[0.3em]"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5">
            <span className="neon-text text-xs font-bold">{profile.initials}</span>
            <span className="absolute inset-0 animate-glow rounded-lg" />
          </span>
          <span className="hidden text-xs uppercase tracking-[0.4em] text-white/70 sm:inline">
            {profile.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.25em] transition ${
                  active === link.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-300/25 via-amber-500/35 to-orange-500/25 ring-1 ring-amber-400/40"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeVoiceControls />
          <a
            href={`mailto:${profile.email}`}
            className="shine hidden rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#1a1207] shadow-neon transition hover:opacity-90 md:inline-block"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-6xl px-4 md:hidden"
          >
            <ul className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm tracking-wider text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
