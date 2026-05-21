import './globals.css';
import {
  Inter,
  Orbitron,
  JetBrains_Mono,
  Cormorant_Garamond,
} from 'next/font/google';
import { profile } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata = {
  title: `${profile.name} — Data Engineer · AI Developer`,
  description: profile.intro,
  keywords: [
    'Ram Prakash Sharma',
    'Data Engineer',
    'Data Analyst',
    'Python Developer',
    'AI ML Engineer',
    'AWS',
    'PySpark',
    'Power BI',
    'Portfolio',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL('https://ramprakash.dev'),
  openGraph: {
    title: `${profile.name} — Data Engineer · AI Developer`,
    description: profile.intro,
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Data Engineer · AI Developer`,
    description: profile.intro,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0a1024',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${jetbrains.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-amber-400/40">
        {children}
      </body>
    </html>
  );
}
