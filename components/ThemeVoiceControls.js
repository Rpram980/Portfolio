'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function ThemeVoiceControls() {
  const [theme, setTheme] = useState('dark');
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.add('theme-light');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('theme-light', next === 'light');
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  const toggleVoice = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = `Hi, I'm ${profile.name}. ${profile.summary}`;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.pitch = 1;
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleVoice}
        className="glass flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:text-white"
        aria-label="Toggle voice narration"
        title="Voice narration"
      >
        {speaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        className="glass flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:text-white"
        aria-label="Toggle color theme"
        title="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
}
