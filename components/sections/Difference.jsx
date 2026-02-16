'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Difference({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      data-section="difference"
      className="py-16 md:py-[120px] px-6 md:px-8 relative z-10"
      aria-label="Why choose us"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.difference.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            {t.difference.heading}
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-2">
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-body/40">
              {t.difference.othersHeader}
            </div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-accent">
              {t.difference.usHeader}
            </div>
          </div>

          {/* Comparison rows */}
          <div className="border-t border-white/[0.06]">
            {t.difference.items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-5 border-b border-white/[0.06]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(10px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.5s',
                  transitionTimingFunction: 'ease',
                  transitionDelay: visible ? `${i * 80}ms` : '0ms',
                }}
              >
                <span className="text-xs sm:text-sm text-body/50">{item.others}</span>
                <span className="text-xs sm:text-sm text-heading">{item.us}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
