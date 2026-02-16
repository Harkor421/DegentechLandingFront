'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { clientLogos } from '@/data/content';

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

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" aria-hidden="true" />
      {/* Bottom fade into site background — tall subtle darkening + short solid blend */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%]" style={{ background: 'linear-gradient(to top, #0A0A0E 0%, #0A0A0Ecc 8%, #0A0A0E66 25%, transparent 100%)' }} aria-hidden="true" />

      {/* Main content — left aligned */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1600px] w-full mx-auto px-6 md:px-10 lg:px-14 pt-24 pb-48">
        <div className="max-w-[700px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.02em] leading-[1.1] mb-3 animate-hero">
            <WordReveal text={t.hero.titleLine1} delay={200} />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/60 tracking-[-0.01em] leading-[1.2] mb-8">
            <WordReveal text={t.hero.titleLine2} delay={700} />
          </h2>

          <p className="animate-hero-delay text-white/60 text-base md:text-lg max-w-[480px] leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <div className="animate-hero-delay-2 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-100"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#work"
              className="text-white/70 text-sm font-medium inline-flex items-center gap-2 hover:text-white transition-colors group"
            >
              {t.hero.cta2}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom logo strip */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="w-full px-8 md:px-14 lg:px-20 py-6 flex items-center gap-10 md:gap-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 whitespace-nowrap shrink-0">
            {t.marquee.label}
          </p>
          <div className="flex items-center gap-12 md:gap-20">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="text-xl md:text-2xl font-bold text-white/70 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
