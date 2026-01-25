import { useTranslation } from '../hooks/useTranslation';

export default function Testimonials({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      data-section="testimonials"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10 bg-card/50"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.testimonials.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em]">
            {t.testimonials.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-7 md:p-8 flex flex-col"
            >
              {/* Quote */}
              <div className="text-accent/30 text-4xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-body text-sm leading-relaxed mb-6 flex-1">
                {item.quote}
              </p>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-heading text-sm font-medium">{item.name}</div>
                <div className="text-body/60 text-xs font-mono mt-0.5">
                  {item.role}, {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
