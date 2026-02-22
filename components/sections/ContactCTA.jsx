'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ContactCTA({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      data-section="contact"
      className="py-[120px] md:py-[160px] px-6 md:px-8 relative z-10"
      aria-label="Contact"
    >
      <div className={`max-w-[720px] mx-auto text-center reveal ${visible ? 'visible' : ''}`}>
        <span className="text-accent text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
          Get Started
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading tracking-[-0.03em] mb-6 leading-[1.1]">
          {t.contact.heading}
        </h2>
        <p className="text-body text-base md:text-lg mb-4 leading-relaxed max-w-lg mx-auto">
          {t.contact.subtitle}
        </p>
        <a
          href="mailto:admin@degentech.co"
          className="text-body/50 hover:text-heading transition-colors text-sm mb-10 block font-mono"
        >
          admin@degentech.co
        </a>
        <a
          href="mailto:admin@degentech.co"
          className="btn-primary text-heading font-medium text-base px-12 py-4 rounded-xl inline-flex items-center gap-2 group"
        >
          {t.contact.cta}
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
