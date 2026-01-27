'use client';

import { clientLogos } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';

function LogoPlaceholder({ name }) {
  return (
    <div className="flex items-center gap-2.5 px-8 text-body/25 select-none whitespace-nowrap hover:text-body/50 transition-colors duration-300 group">
      <div className="w-7 h-7 rounded-md border border-white/[0.08] flex items-center justify-center text-[10px] font-mono font-semibold group-hover:border-accent/20 group-hover:bg-accent/5 transition-all duration-300">
        {name.charAt(0)}
      </div>
      <span className="text-sm font-medium tracking-tight">{name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  const { t } = useTranslation();
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-14 border-y border-white/[0.04] overflow-hidden relative z-10" aria-label="Trusted clients">
      <p className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-body/30 mb-10">
        {t.marquee.label}
      </p>
      <div className="marquee-container">
        <div className="marquee-track">
          {logos.map((name, i) => (
            <LogoPlaceholder key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
