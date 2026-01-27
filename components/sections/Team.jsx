'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Team({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      data-section="team"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
      aria-label="Team"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.team.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            {t.team.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {t.team.members.map((member, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 md:p-8 text-center card-glow group relative overflow-hidden transition-all duration-500"
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-18 h-18 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-accent/20 to-cyan/10 border border-white/[0.08] group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300" style={{ width: '4.5rem', height: '4.5rem' }}>
                  <span className="text-xl font-bold text-heading/60 group-hover:text-heading transition-colors duration-300 grayscale group-hover:grayscale-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-heading font-semibold text-base mb-2 tracking-[-0.01em]">
                  {member.name}
                </h3>
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  {member.role}
                </span>
                <p className="text-body text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
