/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a1024',
          soft: '#131a36',
          card: 'rgba(19, 26, 54, 0.55)',
        },
        neon: {
          amber: '#f5b340',
          champagne: '#d4a574',
          gold: '#fcd34d',
          deep: '#b45309',
          green: '#22c55e',
        },
        text: {
          DEFAULT: '#f1ead8',
          muted: '#b5a98a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-cormorant)', 'Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(245,179,64,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(212,165,116,0.16), transparent 40%), radial-gradient(circle at 50% 90%, rgba(180,83,9,0.18), transparent 50%)',
        'glass-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 100%)',
      },
      boxShadow: {
        neon: '0 0 30px rgba(245,179,64,0.35), 0 0 60px rgba(212,165,116,0.25)',
        'neon-amber': '0 0 40px rgba(245,179,64,0.45)',
        'neon-gold': '0 0 40px rgba(252,211,77,0.4)',
        glass:
          'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 6px rgba(245,179,64,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 18px rgba(212,165,116,0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
