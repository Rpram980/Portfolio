'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const update = (k) => (e) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const subject = encodeURIComponent(
        `Portfolio inquiry from ${form.name}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Contact"
          title="Let's build something cinematic."
          subtitle="Hiring, collaborating, or just curious about the stack? The inbox is open."
        />

        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
                  Direct
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline mt-2 inline-flex items-center gap-2 font-display text-lg text-white"
                >
                  <Mail size={16} className="text-amber-300" />
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
                  Based In
                </p>
                <p className="mt-2 inline-flex items-center gap-2 font-display text-lg text-white">
                  <MapPin size={16} className="text-orange-300" />
                  {profile.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
                  Currently
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Open to{' '}
                  <span className="text-white">Data Engineer</span>,{' '}
                  <span className="text-white">Python Developer</span>, and{' '}
                  <span className="text-white">AI/ML</span> roles — remote or on-site.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-[12px] leading-relaxed text-white/75"
              >
                <span className="text-amber-300">$</span> contact --send{'\n'}
                <span className="text-white/40">// response within 24h</span>
              </motion.div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <Field label="Your name">
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-amber-400/60 focus:outline-none"
                  placeholder="Jane Smith"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-amber-400/60 focus:outline-none"
                  placeholder="jane@company.com"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-amber-400/60 focus:outline-none"
                  placeholder="Tell me about the role or project…"
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 px-6 py-3 text-sm font-medium text-[#1a1207] shadow-neon transition hover:opacity-90 disabled:opacity-60"
              >
                {status === 'sending' ? 'Opening mail…' : 'Send Message'}
                <Send size={14} />
              </button>
              {status === 'sent' && (
                <p className="text-xs text-emerald-300">
                  Your mail client should be open — finalize and hit send.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}
