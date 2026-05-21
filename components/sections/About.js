'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, Database, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatsCounter from '@/components/StatsCounter';
import { profile, stats } from '@/data/portfolio';

const traits = [
  {
    icon: Database,
    label: 'Data Engineering',
    text: 'AWS-native ETL pipelines, PySpark, Snowflake & Airflow orchestration.',
    accent: 'from-amber-300 to-yellow-500',
  },
  {
    icon: Brain,
    label: 'AI / ML',
    text: 'TensorFlow, PyTorch, NLP, OpenCV — applied ML for real-world problems.',
    accent: 'from-orange-500 to-amber-400',
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    text: 'AWS Lambda, Glue, Athena, S3, EC2 — serverless & event-driven systems.',
    accent: 'from-amber-300 to-orange-500',
  },
  {
    icon: Sparkles,
    label: 'Analytics & BI',
    text: 'Power BI, Tableau, Plotly — turning raw data into cinematic stories.',
    accent: 'from-yellow-300 to-amber-500',
  },
];

function splitWords(text) {
  return text.split(' ').map((w, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: i * 0.015, ease: 'easeOut' }}
      className="mr-[0.25em] inline-block"
    >
      {w}
    </motion.span>
  ));
}

export default function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="About"
          title="A data engineer who treats infrastructure like cinema."
          subtitle="Pipelines, dashboards and ML models should feel inevitable — quiet, fast, and just right."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* Decorative opening quote */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-8 select-none font-serif text-7xl leading-none text-amber-400/40 sm:-left-3 sm:-top-10 sm:text-8xl"
            >
              &ldquo;
            </span>

            <p className="font-serif text-xl italic leading-[1.7] text-[#f1ead8] sm:text-2xl">
              <span className="float-left mr-3 mt-1 font-display text-5xl not-italic leading-none text-amber-400 drop-shadow-[0_2px_18px_rgba(245,179,64,0.35)] sm:text-6xl">
                {profile.summary.charAt(0)}
              </span>
              {splitWords(profile.summary.slice(1).trim())}
            </p>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.4em] text-amber-300/70">
              — Ram Prakash Sharma
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glass lift relative overflow-hidden rounded-2xl p-5"
                data-hover
              >
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${t.accent} text-white shadow-neon`}
                >
                  <t.icon size={18} />
                </div>
                <p className="font-display text-sm tracking-wider text-white">
                  {t.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <StatsCounter stats={stats} />
        </div>
      </div>
    </section>
  );
}
