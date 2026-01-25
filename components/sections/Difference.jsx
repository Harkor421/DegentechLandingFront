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
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em]">
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
                className="grid grid-cols-2 gap-4 glass-card rounded-xl p-4 md:p-5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm text-body/50 line-through decoration-white/20">
                    {item.others}
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
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
