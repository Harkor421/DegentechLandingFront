import { useTranslation } from '../hooks/useTranslation';

export default function UptimeStrip() {
  const { t } = useTranslation();

  return (
    <section className="py-4 border-b border-white/[0.04] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-body/50">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          {t.uptime.uptime}
        </span>
        <span className="hidden sm:inline text-white/10">|</span>
        <span>{t.uptime.api}</span>
        <span className="hidden sm:inline text-white/10">|</span>
        <span>{t.uptime.soc}</span>
        <span className="hidden sm:inline text-white/10">|</span>
        <span>{t.uptime.encrypted}</span>
      </div>
    </section>
  );
}
