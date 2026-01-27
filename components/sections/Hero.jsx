'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useTranslation } from '@/hooks/useTranslation';

function WordReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ');
  return (
    <span>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className={`inline-block animate-word-reveal ${className}`}
            style={{ animationDelay: `${delay + i * 60}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}

function StatItem({ stat, visible }) {
  const count = useCountUp(stat.target, 2000, visible);
  const displayValue = stat.text ? stat.text : `${count}${stat.suffix}`;

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-1">
        {displayValue}
      </div>
      <div className="text-xs text-body uppercase tracking-wider font-mono">
        {stat.label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const [statsVisible, setStatsVisible] = useState(false);
  const [loadTime, setLoadTime] = useState(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const perf = performance.getEntriesByType('navigation')[0];
    if (perf) {
      setLoadTime((perf.loadEventEnd - perf.startTime).toFixed(0));
    } else {
      setTimeout(() => {
        setLoadTime(((performance.now()) / 1000).toFixed(1));
      }, 100);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden pt-16" aria-label="Hero">
      {/* Ambient floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-accent/[0.04] blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-cyan/[0.03] blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute top-[60%] left-[50%] w-48 h-48 rounded-full bg-violet/[0.04] blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center relative z-10">
        {/* Performance badge */}
        {loadTime && (
          <div className="animate-hero mb-8 animate-float inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/20 bg-accent/[0.06] text-xs font-mono text-body backdrop-blur-sm shadow-lg shadow-accent/[0.05]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.badge} {loadTime > 100 ? `${(loadTime / 1000).toFixed(1)}s` : `${loadTime}ms`}
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading tracking-[-0.02em] leading-[1.1] mb-6">
          <WordReveal text={t.hero.titleLine1} delay={200} />
          <br />
          <WordReveal text={t.hero.titleLine2} delay={700} className="gradient-text" />
        </h1>

        <p className="animate-hero-delay text-body text-base md:text-lg max-w-[560px] mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="animate-hero-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="btn-primary btn-shine font-medium text-sm px-8 py-3.5 rounded-lg inline-flex items-center gap-2 group"
          >
            {t.hero.cta1}
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-secondary text-sm px-8 py-3.5 rounded-lg inline-flex items-center gap-2 group"
          >
            {t.hero.cta2}
            <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="animate-hero-delay-3 mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[800px] mx-auto border-t border-white/[0.06] pt-10"
        >
          {t.stats.map((stat, i) => (
            <StatItem key={i} stat={stat} visible={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
