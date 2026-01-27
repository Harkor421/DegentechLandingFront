'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function UptimeStrip() {
  const { t } = useTranslation();

  return (
    <section className="py-4 border-b border-white/[0.04] relative z-10 bg-card/30" aria-label="System status">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-body/40">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {t.uptime.uptime}
        </span>
        <span className="hidden sm:inline text-white/[0.06]">|</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
          {t.uptime.api}
        </span>
        <span className="hidden sm:inline text-white/[0.06]">|</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
          {t.uptime.soc}
        </span>
        <span className="hidden sm:inline text-white/[0.06]">|</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          {t.uptime.encrypted}
        </span>
      </div>
    </section>
  );
}
