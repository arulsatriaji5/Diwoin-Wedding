import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Footer from './components/Footer';

// ============================================================
// QUOTE SECTION (inline, small component)
// ============================================================
function QuoteSection() {
  return (
    <section className="quote-section theme-transition" aria-label="Kutipan inspiratif">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 2px 8px rgba(212,184,130,0.4))',
          }}
          aria-hidden="true"
        >
          ✦
        </div>
        <blockquote className="quote-text">
          "Pernikahan bukan hanya tentang satu hari yang sempurna — ini tentang awal dari cerita cinta yang abadi."
        </blockquote>
        <cite className="quote-author" style={{ fontStyle: 'normal' }}>
          — Tim Diwoin Wedding
        </cite>
      </div>
    </section>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  // ---- Dark Mode State ----
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('lumiere-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark class to <html> root
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('lumiere-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  // ---- Scroll Animation (Intersection Observer) ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach((el) => observer.observe(el));

    return () => {
      fadeEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className="theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}
    >
      {/* Sticky Navbar */}
      <Navbar isDark={isDark} onToggle={toggleTheme} />

      {/* Main Content */}
      <main>
        {/* A. Hero Section */}
        <Hero />

        {/* B. Stats & Trust Section */}
        <Stats />

        {/* C. Smart Catalog / Packages */}
        <Packages />

        {/* D. Quote Break */}
        <QuoteSection />

        {/* E. Gallery / Portfolio */}
        <Gallery />
      </main>

      {/* F. Footer */}
      <Footer />
    </div>
  );
}
