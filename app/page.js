'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import ParticleField from '@/components/ParticleField';
import CursorGlow from '@/components/CursorGlow';
import FloatingTechIcons from '@/components/FloatingTechIcons';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ScrollProgress from '@/components/ScrollProgress';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />

      {/* Cinematic ambient layers */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-hero-gradient" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-grid opacity-60" />
      <ParticleField />
      <CursorGlow />
      <FloatingTechIcons />

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}
