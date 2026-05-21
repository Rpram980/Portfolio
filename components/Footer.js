'use client';

import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-white">
            {profile.name.toUpperCase()}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
            © {new Date().getFullYear()} · Crafted with cinematic intent.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.hackerrank.com/"
            aria-label="HackerRank"
            target="_blank"
            rel="noreferrer"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            <Terminal size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
