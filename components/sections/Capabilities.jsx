'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Zap, Box, Link2, BarChart3 } from 'lucide-react';

const icons = {
  bolt: <Zap className="w-5 h-5" />,
  cube: <Box className="w-5 h-5" />,
  link: <Link2 className="w-5 h-5" />,
  chart: <BarChart3 className="w-5 h-5" />,
};

export default function Capabilities({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="capabilities"
      data-section="capabilities"
      className="py-[100px] md:py-[140px] px-6 md:px-8 relative z-10"
      aria-label="Capabilities"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.capabilities.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            {t.capabilities.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {t.capabilities.items.map((cap, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-7 md:p-8 border border-white/[0.06] group cursor-default transition-all duration-300 hover:border-white/[0.10]"
              style={{
                transitionDelay: visible ? `${i * 100}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-elevated border border-white/[0.06] flex items-center justify-center mb-5">
                <div className="text-accent">
                  {icons[cap.icon]}
                </div>
              </div>
              <h3 className="text-heading font-semibold text-base mb-2.5 tracking-[-0.01em]">
                {cap.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
