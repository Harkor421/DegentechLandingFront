'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Process({ visible }) {
  const { t } = useTranslation();
  const lineRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const el = lineRef.current;
    if (!el) return;

    function onScroll() {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setLineProgress(progress);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  return (
    <section
      id="process"
      data-section="process"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10 bg-card/50"
      aria-label="Our process"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-16 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.process.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            {t.process.heading}
          </h2>
        </div>

        <div ref={lineRef} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-px bg-white/[0.06]">
            <div
              className="h-full bg-gradient-to-r from-accent to-cyan transition-all duration-300 ease-out"
              style={{ width: `${lineProgress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {t.process.steps.map((step, i) => {
              const stepVisible = visible && lineProgress > i * 0.25;
              return (
                <div
                  key={i}
                  className={`text-center lg:text-left transition-all duration-500 group cursor-default ${
                    stepVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Numbered circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-cyan/10 border border-accent/20 flex items-center justify-center mx-auto lg:mx-0 mb-5 group-hover:from-accent/30 group-hover:to-cyan/20 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                    <span className="text-lg font-bold gradient-text">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-heading font-semibold text-lg mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed group-hover:text-body transition-colors">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
