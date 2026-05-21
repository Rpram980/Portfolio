'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import {
  profile,
  skillGroups,
  projects,
  experience,
  education,
  certifications,
  achievements,
} from '@/data/portfolio';

function buildKnowledge() {
  const allSkills = skillGroups.flatMap((g) => g.items).join(', ');
  return [
    {
      keys: ['hi', 'hello', 'hey', 'yo', 'start'],
      reply: `Hi! I'm Ram's AI assistant. Ask me about his experience, projects, skills, education, or how to reach him.`,
    },
    {
      keys: ['who', 'about', 'tell me', 'introduce', 'bio', 'background'],
      reply: profile.summary,
    },
    {
      keys: ['role', 'job', 'title', 'work as'],
      reply: `Ram works across ${profile.roles.join(' · ')}.`,
    },
    {
      keys: ['skill', 'tech', 'stack', 'know'],
      reply: `Core stack includes: ${allSkills}.`,
    },
    {
      keys: ['project', 'portfolio', 'built', 'work on'],
      reply: projects
        .map((p) => `• ${p.title} — ${p.tagline} [${p.tech.join(', ')}]`)
        .join('\n'),
    },
    {
      keys: ['experience', 'company', 'cyient', 'unified', 'intern'],
      reply: experience
        .map((e) => `• ${e.role} @ ${e.company} (${e.period})`)
        .join('\n'),
    },
    {
      keys: ['education', 'study', 'degree', 'mca', 'bca', 'college'],
      reply: education
        .map(
          (e) =>
            `• ${e.degree} — ${e.school} (${e.period}) · ${e.score}${
              e.highlight ? ` · ${e.highlight}` : ''
            }`
        )
        .join('\n'),
    },
    {
      keys: ['cert', 'aws', 'license'],
      reply: certifications.map((c) => `• ${c.name} — ${c.issuer}`).join('\n'),
    },
    {
      keys: ['award', 'achievement', 'medal', 'rank', 'hackerrank'],
      reply: achievements.map((a) => `• ${a.title} — ${a.detail}`).join('\n'),
    },
    {
      keys: ['contact', 'email', 'reach', 'hire', 'connect'],
      reply: `Email: ${profile.email} · Based in ${profile.location}.`,
    },
    {
      keys: ['resume', 'cv', 'download'],
      reply: `You can grab his resume from the hero section — the "Download Resume" button.`,
    },
    {
      keys: ['location', 'where', 'based'],
      reply: `${profile.location}.`,
    },
  ];
}

const KNOWLEDGE = buildKnowledge();

function answer(question) {
  const q = question.toLowerCase().trim();
  if (!q) return `Try asking about projects, skills, experience, or contact.`;
  const hit = KNOWLEDGE.find((k) => k.keys.some((key) => q.includes(key)));
  if (hit) return hit.reply;
  return `Good question — try asking about Ram's projects, skills, AWS work, AI/ML stack, education, or contact details.`;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `Hi! I'm Ram's AI portfolio assistant. Ask me anything about his work.`,
    },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { from: 'user', text: q }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: answer(q) }]);
    }, 400);
  };

  const suggestions = ['Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[75] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-orange-500 text-[#1a1207] shadow-neon"
        aria-label="Open AI assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="b"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-amber-500/40" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="glass-strong fixed bottom-24 right-4 z-[75] flex h-[min(78vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl shadow-glass"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-gradient-to-r from-amber-500/15 to-orange-500/15 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-[#1a1207]">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-display text-sm tracking-wider text-white">
                  Portfolio AI
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Online · ready
                </p>
              </div>
            </div>

            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto p-4 text-sm"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3 py-2 ${
                    m.from === 'bot'
                      ? 'mr-auto bg-white/8 text-white/90'
                      : 'ml-auto bg-gradient-to-br from-amber-300/30 to-orange-500/30 text-white'
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Ram…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-[#1a1207] transition hover:opacity-90"
                  aria-label="Send"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
