'use client';

import { useEffect, useState, useRef } from 'react';

const terminalLines = [
  { text: '$ degen init --project "Smart Factory Dashboard"', type: 'command', delay: 0 },
  { text: 'Initializing project scaffold...', type: 'output', delay: 800 },
  { text: '  + Creating Next.js app with TypeScript', type: 'output', delay: 1200 },
  { text: '  + Setting up PostgreSQL with Prisma ORM', type: 'output', delay: 1600 },
  { text: '  + Configuring real-time WebSocket layer', type: 'output', delay: 2000 },
  { text: '  + Adding monitoring & alerting pipeline', type: 'output', delay: 2400 },
  { text: '', type: 'blank', delay: 2800 },
  { text: '$ degen deploy --env production', type: 'command', delay: 3200 },
  { text: 'Building optimized production bundle...', type: 'output', delay: 3800 },
  { text: '  Route (app)              Size   First Load', type: 'output', delay: 4200 },
  { text: '  /                        5.2 kB      89 kB', type: 'output', delay: 4400 },
  { text: '  /dashboard               12 kB       96 kB', type: 'output', delay: 4600 },
  { text: '  /api/metrics             1.8 kB      84 kB', type: 'output', delay: 4800 },
  { text: '', type: 'blank', delay: 5000 },
  { text: '✓ Deployed to production in 47s', type: 'success', delay: 5400 },
  { text: '  https://factory.client.io', type: 'link', delay: 5800 },
  { text: '  Lighthouse: 98 | LCP: 1.2s | CLS: 0', type: 'success', delay: 6200 },
];

export default function LiveTerminal({ visible }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
      }, line.delay);
    });
  }, [visible]);

  return (
    <section
      data-section="terminal"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10 bg-card/50"
      aria-label="Live terminal demo"
    >
      <div className={`max-w-[800px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            Developer Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-[-0.02em]">
            Ship Fast. Ship Right.
          </h2>
        </div>

        {/* Terminal window */}
        <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0D0D12] border-b border-white/[0.04]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
            </div>
            <span className="text-[11px] font-mono text-body/30 ml-3">
              degentech-cli — bash
            </span>
          </div>

          {/* Terminal content */}
          <div className="bg-[#08080E] p-5 min-h-[320px] font-mono text-sm leading-relaxed overflow-hidden">
            {terminalLines.slice(0, visibleLines).map((line, i) => {
              if (line.type === 'blank') return <div key={i} className="h-4" />;
              if (line.type === 'command')
                return (
                  <div key={i} className="text-heading/90">
                    {line.text}
                  </div>
                );
              if (line.type === 'success')
                return (
                  <div key={i} className="text-emerald-400/80">
                    {line.text}
                  </div>
                );
              if (line.type === 'link')
                return (
                  <div key={i} className="text-cyan/70 underline underline-offset-2">
                    {line.text}
                  </div>
                );
              return (
                <div key={i} className="text-body/50">
                  {line.text}
                </div>
              );
            })}
            {/* Blinking cursor */}
            {visibleLines < terminalLines.length && (
              <span className="terminal-cursor text-heading/80">▋</span>
            )}
            {visibleLines >= terminalLines.length && (
              <div className="mt-2 text-body/30">
                $ <span className="terminal-cursor text-heading/80">▋</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
