import { useTranslation } from '../hooks/useTranslation';

export default function ContactCTA({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      data-section="contact"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
    >
      <div className={`max-w-[720px] mx-auto text-center reveal ${visible ? 'visible' : ''}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tracking-[-0.02em] mb-6">
          {t.contact.heading}
        </h2>
        <p className="text-body text-base md:text-lg mb-4 leading-relaxed">
          {t.contact.subtitle}
        </p>
        <a
          href="mailto:admin@degentech.co"
          className="text-body hover:text-heading transition-colors text-sm mb-10 block font-mono"
        >
          admin@degentech.co
        </a>
        <a
          href="mailto:admin@degentech.co"
          className="btn-primary text-heading font-medium text-base px-10 py-4 rounded-lg inline-block"
        >
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
}
