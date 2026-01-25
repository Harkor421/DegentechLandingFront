'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Zap, Box, Link2, BarChart3 } from 'lucide-react';

const icons = {
  bolt: <Zap className="w-6 h-6" />,
  cube: <Box className="w-6 h-6" />,
  link: <Link2 className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
};

export default function Capabilities({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="capabilities"
      data-section="capabilities"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
      aria-label="Capabilities"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.capabilities.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em]">
            {t.capabilities.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {t.capabilities.items.map((cap, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-7 md:p-8 card-glow group cursor-default"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-accent mb-4 group-hover:text-cyan transition-colors duration-300">
                {icons[cap.icon]}
              </div>
              <h3 className="text-heading font-semibold text-base mb-2 tracking-[-0.01em]">
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
