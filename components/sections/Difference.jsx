'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { X, Check } from 'lucide-react';

export default function Difference({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      data-section="difference"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
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
          <div className="grid grid-cols-2 gap-4 mb-6 px-4">
            <div className="text-xs font-mono uppercase tracking-widest text-body/40">
              {t.difference.othersHeader}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent">
              {t.difference.usHeader}
            </div>
          </div>

          {/* Comparison rows */}
          <div className="flex flex-col gap-3">
            {t.difference.items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 glass-card rounded-xl p-4 md:p-5 group hover:border-accent/15 transition-all duration-300"
                style={{
                  transitionDelay: visible ? `${i * 80}ms` : '0ms',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-10px)',
                }}
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <X className="w-3 h-3 text-red-400/70" />
                  </div>
                  <span className="text-xs sm:text-sm text-body/40 line-through decoration-white/10">
                    {item.others}
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 transition-colors">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-heading font-medium">
                    {item.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
