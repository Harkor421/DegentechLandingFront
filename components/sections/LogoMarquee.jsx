'use client';

import { clientLogos } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';

function LogoPlaceholder({ name }) {
  return (
    <div className="flex items-center gap-2 px-6 text-body/30 select-none whitespace-nowrap">
      <div className="w-6 h-6 rounded border border-white/[0.08] flex items-center justify-center text-[10px] font-mono">
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
    <section className="py-12 border-y border-white/[0.04] overflow-hidden relative z-10" aria-label="Trusted clients">
      <p className="text-center text-xs font-mono uppercase tracking-widest text-body/40 mb-8">
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
