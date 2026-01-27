'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Navbar() {
  const { t, lang, toggleLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/30'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight transition-opacity hover:opacity-90 group"
        >
          <span className="gradient-text">degen</span><span className="text-heading">tech</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {/* Activity indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-body">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono">{t.nav.activity}</span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-8">
            {[
              { href: '#capabilities', label: t.nav.services },
              { href: '#work', label: t.nav.work },
              { href: '#process', label: t.nav.process },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body/70 text-sm hover:text-heading transition-all duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-accent to-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-mono text-body/60 hover:text-heading border border-white/[0.08] hover:border-white/[0.15] px-2.5 py-1.5 rounded-md transition-all"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          {/* Contact button */}
          <a
            href="#contact"
            className="hidden sm:inline-block text-sm font-medium btn-primary px-4 py-2 rounded-lg"
          >
            {t.nav.contact}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden text-heading p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-primary/98 backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-4">
          <a href="#capabilities" onClick={() => setMobileOpen(false)} className="text-body text-sm hover:text-heading transition-colors">
            {t.nav.services}
          </a>
          <a href="#work" onClick={() => setMobileOpen(false)} className="text-body text-sm hover:text-heading transition-colors">
            {t.nav.work}
          </a>
          <a href="#process" onClick={() => setMobileOpen(false)} className="text-body text-sm hover:text-heading transition-colors">
            {t.nav.process}
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-sm font-medium px-4 py-2.5 rounded-lg text-center mt-2">
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
