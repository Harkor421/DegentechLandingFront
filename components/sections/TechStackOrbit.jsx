'use client';

import { useTranslation } from '@/hooks/useTranslation';

const techItems = [
  { name: 'React', ring: 1 },
  { name: 'Next.js', ring: 1 },
  { name: 'Node.js', ring: 1 },
  { name: 'Python', ring: 1 },
  { name: 'TypeScript', ring: 2 },
  { name: 'PostgreSQL', ring: 2 },
  { name: 'Redis', ring: 2 },
  { name: 'Docker', ring: 2 },
  { name: 'AWS', ring: 3 },
  { name: 'Kubernetes', ring: 3 },
  { name: 'TensorFlow', ring: 3 },
  { name: 'GraphQL', ring: 3 },
];

function OrbitRing({ radius, duration, items, reverse = false }) {
  const angleStep = 360 / items.length;

  return (
    <div className="absolute inset-0">
      {/* Ring circle */}
      <div
        className="absolute rounded-full border border-white/[0.05]"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: `calc(50% - ${radius}px)`,
          left: `calc(50% - ${radius}px)`,
          boxShadow: 'inset 0 0 30px rgba(123, 143, 163, 0.02)',
        }}
      />
      {/* Orbit items */}
      {items.map((item, i) => (
        <div
          key={item.name}
          className={reverse ? 'orbit-item-reverse' : 'orbit-item'}
          style={{
            '--orbit-radius': `${radius}px`,
            '--orbit-duration': `${duration}s`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-16px',
            marginLeft: '-16px',
            animationDelay: `${-(duration / items.length) * i}s`,
          }}
        >
          <div className="w-9 h-9 rounded-lg bg-card border border-white/[0.08] flex items-center justify-center text-[8px] font-mono text-body/60 hover:text-heading hover:border-accent/30 hover:bg-accent/10 hover:shadow-md hover:shadow-accent/15 transition-all duration-300 whitespace-nowrap group relative">
            <span className="text-[8px] leading-none font-semibold">{item.name.slice(0, 2).toUpperCase()}</span>
            {/* Tooltip */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-[9px] font-mono text-heading bg-elevated px-2 py-0.5 rounded-md border border-white/10 whitespace-nowrap pointer-events-none shadow-lg">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TechStackOrbit({ visible }) {
  return (
    <section
      data-section="techstack"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10 overflow-hidden"
      aria-label="Technology stack"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-16 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            Our Tech Stack
          </h2>
        </div>

        <div className="relative mx-auto" style={{ width: '100%', maxWidth: 500, height: 500 }}>
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/25 to-cyan/15 border border-white/[0.12] flex items-center justify-center shadow-lg shadow-accent/10 relative">
              <span className="text-xl font-bold gradient-text">DT</span>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border border-accent/20 animate-ping opacity-20" />
            </div>
          </div>

          {/* Orbit rings */}
          <OrbitRing
            radius={100}
            duration={30}
            items={techItems.filter((t) => t.ring === 1)}
          />
          <OrbitRing
            radius={170}
            duration={45}
            items={techItems.filter((t) => t.ring === 2)}
            reverse
          />
          <OrbitRing
            radius={230}
            duration={60}
            items={techItems.filter((t) => t.ring === 3)}
          />
        </div>
      </div>
    </section>
  );
}
