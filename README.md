# Ram Prakash Sharma — Cinematic AI Portfolio

A futuristic, cinematic, AI-powered personal portfolio for **Ram Prakash Sharma** —
Data Engineer · Python Developer · AI / ML Enthusiast.

Built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, **Framer
Motion**, **GSAP**, **Three.js** (`@react-three/fiber` + `drei`) and a
ShadCN-style glassmorphism design language.

---

## Highlights

- Cinematic dark theme with neon gradients, glassmorphism, and motion blur reveals
- Three.js animated star/particle field as global ambient background
- Mouse-follow cursor glow + spotlight project cards with 3D tilt
- Framer Motion section reveals, word-by-word AI-style typewriter, marquee strip
- Floating tech icons drifting in the background
- AI loading screen with progress shimmer
- On-page AI chatbot assistant grounded in your structured resume data
- Animated scroll progress bar, sticky glass navbar with active section pill
- Voice narration toggle (`speechSynthesis` API) + light/dark theme switcher
- Animated statistics counters (years, projects, certs, MCA CGPA)
- Cinematic experience timeline, 3D project cards, education/cert/achievement cards
- Mobile responsive, SEO-ready (`metadata`, `sitemap.xml`, `robots.txt`)
- Optional FastAPI backend stub for contact + chat

---

## Tech Stack

**Frontend**
- Next.js 14 (App Router, React Server Components where possible)
- React 18
- Tailwind CSS 3
- Framer Motion 11
- GSAP 3 (available; integrate via `useEffect` in components as needed)
- Three.js via `@react-three/fiber` + `@react-three/drei`
- ShadCN-style design tokens (glass, neon, gradients)
- `lucide-react` + `react-icons` icon sets

**Backend (optional)**
- Next.js Route Handler at `app/api/contact/route.js`
- Or run the FastAPI stub at `backend/fastapi/main.py`

**Deployment**
- Vercel (recommended) or AWS Amplify / S3 + CloudFront

---

## Quick start

```bash
# 1. Install dependencies
npm install
# or: pnpm install / yarn install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

> **Node version:** 18.17+ (Next.js 14 requirement).

Drop your resume PDF into `public/resume/Ram_Prakash_Sharma_Resume.pdf` so the
"Download Resume" button works.

---

## Folder Architecture

```
C:\Portfolio
├── app/
│   ├── api/
│   │   └── contact/route.js      # Next.js contact endpoint (stub)
│   ├── globals.css                # Tailwind + cinematic utility CSS
│   ├── layout.js                  # Root layout, fonts, SEO metadata
│   ├── page.js                    # Composes all sections
│   └── sitemap.js                 # SEO sitemap
│
├── components/
│   ├── ChatBot.js                 # AI portfolio assistant (in-page)
│   ├── CursorGlow.js              # Spring-animated cursor glow
│   ├── FloatingTechIcons.js       # Drifting background tech logos
│   ├── Footer.js
│   ├── LoadingScreen.js           # AI-style loader with progress shimmer
│   ├── Navbar.js                  # Glass navbar + active-section pill
│   ├── ParticleField.js           # Three.js star/particle field
│   ├── ScrollProgress.js          # Top neon scroll progress bar
│   ├── SectionHeading.js          # Shared section heading w/ reveal
│   ├── StatsCounter.js            # Animated counter on scroll
│   ├── ThemeVoiceControls.js      # Theme switcher + voice narration
│   └── sections/
│       ├── About.js
│       ├── Achievements.js
│       ├── Certifications.js
│       ├── Contact.js
│       ├── Education.js
│       ├── Experience.js
│       ├── Hero.js
│       ├── Projects.js
│       └── Skills.js
│
├── data/
│   └── portfolio.js               # All resume content (single source of truth)
│
├── lib/
│   └── utils.js                   # cn() helper, easing utilities
│
├── backend/
│   └── fastapi/main.py            # Optional FastAPI service
│
├── public/
│   ├── resume/                    # Place your PDF here
│   └── robots.txt
│
├── jsconfig.json                  # @/* import alias
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## Editing your content

All resume content lives in **`data/portfolio.js`**. Update the exports:

- `profile` — name, roles, email, intro, summary, socials
- `stats` — animated hero stats
- `skillGroups` — categorized tech skills
- `experience` — timeline entries
- `projects` — project cards
- `education`, `certifications`, `achievements`
- `navLinks` — top navigation

The AI chatbot (`components/ChatBot.js`) also reads from this file, so updates
flow everywhere automatically.

---

## Animation system

| Feature                  | Implementation                                          |
| ------------------------ | ------------------------------------------------------- |
| Section reveals          | Framer Motion `whileInView` + viewport once             |
| AI typewriter            | Local state in `Hero.js` — typing roles                 |
| Word-by-word About text  | Framer Motion mapped over split words                   |
| 3D project tilt          | `useMotionValue` + `useSpring` + `transform`            |
| Cursor glow              | `useMotionValue` + spring smoothing                     |
| Loading screen           | AnimatePresence + animated progress bar                 |
| Particle background      | `@react-three/fiber` rotating point cloud               |
| Active nav pill          | `motion.span layoutId="nav-pill"` shared layout         |
| Floating icons           | Looping y/rotate transitions                            |
| Scroll progress          | `useScroll` + `useSpring`                               |

GSAP is included in dependencies — wire it up inside any section by:

```js
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.your-target', {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: '.your-target', start: 'top 80%' },
    });
  });
  return () => ctx.revert();
}, []);
```

---

## SEO & performance

- Open Graph + Twitter card metadata in `app/layout.js`
- `app/sitemap.js` generates `/sitemap.xml`
- `public/robots.txt` allows all crawlers
- Next.js automatic font optimization (Inter, Orbitron, JetBrains Mono)
- `experimental.optimizePackageImports` enabled for `framer-motion`,
  `lucide-react`, `react-icons`
- Images: configure `next/image` formats AVIF + WebP
- Reduced-motion users get static fallbacks via `prefers-reduced-motion`
- Lazy hydration: all non-critical effects are client components only

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel              # first deploy, follow prompts
vercel --prod       # promote to production
```

1. Push the repo to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js**. No env vars needed for the static
   build. Deploy.

### AWS Amplify

1. Connect the GitHub repo in the Amplify console.
2. Build settings (Amplify will auto-detect):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```
3. Add the custom domain in the Amplify console.

### Static export (S3 + CloudFront)

If you want pure-static hosting, add to `next.config.js`:

```js
output: 'export'
```

then `npm run build` produces an `out/` directory you can sync to S3:

```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

---

## Optional FastAPI backend

```bash
cd backend/fastapi
python -m venv .venv && source .venv/bin/activate
pip install fastapi "uvicorn[standard]" pydantic email-validator
uvicorn main:app --reload --port 8000
```

Point the Contact form's `fetch` at `http://localhost:8000/contact` from
`components/sections/Contact.js` to wire it in.

---

## License

MIT — use it, fork it, and ship your own cinematic portfolio.
