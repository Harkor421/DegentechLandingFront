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
      className="py-[100px] md:py-[140px] px-6 md:px-8 relative z-10 overflow-hidden"
      aria-label="Capabilities"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="ambient-dot w-3 h-3 bg-accent top-[20%] left-[8%]" style={{ animationDelay: '0s' }} />
        <div className="ambient-dot w-2 h-2 bg-cyan top-[60%] right-[12%]" style={{ animationDelay: '3s' }} />
        <div className="ambient-dot w-4 h-4 bg-violet top-[80%] left-[25%]" style={{ animationDelay: '7s' }} />
        <div className="ambient-dot w-2 h-2 bg-accent bottom-[15%] right-[30%]" style={{ animationDelay: '10s' }} />
      </div>
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
              className="glass-card rounded-xl p-7 md:p-8 card-glow group cursor-default transition-all duration-500"
              style={{
                transitionDelay: visible ? `${i * 100}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-cyan/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:from-accent/30 group-hover:to-cyan/20 group-hover:border-accent/25 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                <div className="text-accent group-hover:text-cyan transition-colors duration-300">
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
