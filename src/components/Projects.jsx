import { useTranslation } from '../hooks/useTranslation';

/* ─── Mock Browser UI Previews ─── */

function BrowserChrome({ url, children }) {
  return (
    <div className="rounded-t-lg overflow-hidden bg-[#080810] border-b border-white/[0.04]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-white/[0.08]" />
          <span className="w-[9px] h-[9px] rounded-full bg-white/[0.08]" />
          <span className="w-[9px] h-[9px] rounded-full bg-white/[0.08]" />
        </div>
        <div className="ml-2 flex-1 max-w-[180px] h-[22px] rounded-md bg-white/[0.03] border border-white/[0.04] flex items-center px-2.5">
          <span className="text-[9px] font-mono text-white/20 truncate">{url}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="p-3 bg-[#06060C]">
        {children}
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <BrowserChrome url="app.factory.io/dashboard">
      <div className="flex gap-2 h-[140px]">
        {/* Sidebar */}
        <div className="w-8 shrink-0 flex flex-col gap-1.5 pt-1">
          <div className="w-5 h-5 rounded bg-accent/20 mx-auto" />
          <div className="w-5 h-1.5 rounded bg-white/[0.04] mx-auto mt-2" />
          <div className="w-5 h-1.5 rounded bg-white/[0.06] mx-auto" />
          <div className="w-5 h-1.5 rounded bg-white/[0.04] mx-auto" />
          <div className="w-5 h-1.5 rounded bg-white/[0.04] mx-auto" />
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Metric cards row */}
          <div className="flex gap-1.5">
            <div className="flex-1 h-10 rounded-md bg-accent/[0.08] border border-accent/[0.12] p-1.5">
              <div className="w-6 h-1 rounded bg-accent/30 mb-1" />
              <div className="text-[10px] font-mono text-accent/60 leading-none">94.2%</div>
            </div>
            <div className="flex-1 h-10 rounded-md bg-cyan/[0.08] border border-cyan/[0.12] p-1.5">
              <div className="w-6 h-1 rounded bg-cyan/30 mb-1" />
              <div className="text-[10px] font-mono text-cyan/60 leading-none">127</div>
            </div>
            <div className="flex-1 h-10 rounded-md bg-emerald-500/[0.08] border border-emerald-500/[0.12] p-1.5">
              <div className="w-6 h-1 rounded bg-emerald-500/30 mb-1" />
              <div className="text-[10px] font-mono text-emerald-500/60 leading-none">99.9%</div>
            </div>
          </div>
          {/* Chart area */}
          <div className="flex-1 rounded-md bg-white/[0.02] border border-white/[0.04] overflow-hidden p-2">
            <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(79,70,229,0.3)" />
                  <stop offset="100%" stopColor="rgba(79,70,229,0)" />
                </linearGradient>
              </defs>
              <path d="M0,40 Q20,38 40,32 T80,25 T120,18 T160,22 T200,12 V50 H0 Z" fill="url(#chartFill)" />
              <path d="M0,40 Q20,38 40,32 T80,25 T120,18 T160,22 T200,12" fill="none" stroke="rgba(79,70,229,0.6)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function CADPreview() {
  return (
    <BrowserChrome url="cad.degentech.io/model">
      <div className="flex gap-2 h-[140px]">
        {/* 3D Viewport */}
        <div className="flex-1 rounded-md bg-white/[0.01] border border-white/[0.04] flex items-center justify-center relative overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
          {/* Wireframe object */}
          <svg viewBox="0 0 80 60" className="w-20 h-16 relative z-10">
            <rect x="15" y="10" width="50" height="35" rx="3" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
            <rect x="20" y="15" width="50" height="35" rx="3" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
            <line x1="15" y1="10" x2="20" y2="15" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />
            <line x1="65" y1="10" x2="70" y2="15" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />
            <line x1="65" y1="45" x2="70" y2="50" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />
            <line x1="15" y1="45" x2="20" y2="50" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />
          </svg>
          {/* Axis indicator */}
          <div className="absolute bottom-2 left-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <line x1="4" y1="20" x2="20" y2="20" stroke="rgba(239,68,68,0.5)" strokeWidth="1" />
              <line x1="4" y1="20" x2="4" y2="4" stroke="rgba(74,222,128,0.5)" strokeWidth="1" />
              <line x1="4" y1="20" x2="14" y2="14" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
            </svg>
          </div>
        </div>
        {/* Properties panel */}
        <div className="w-24 shrink-0 flex flex-col gap-1.5 text-[8px] font-mono">
          <div className="text-white/30 uppercase tracking-wider mb-0.5">Properties</div>
          <div className="flex justify-between">
            <span className="text-white/20">Material</span>
            <span className="text-cyan/60">ABS-CF10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/20">Infill</span>
            <span className="text-cyan/60">95%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/20">Layer</span>
            <span className="text-cyan/60">0.2mm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/20">Weight</span>
            <span className="text-cyan/60">342g</span>
          </div>
          <div className="h-px bg-white/[0.04] my-1" />
          <div className="flex justify-between">
            <span className="text-white/20">Status</span>
            <span className="text-emerald-400/70">Ready</span>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function TradingPreview() {
  return (
    <BrowserChrome url="trade.meridian.io">
      <div className="flex gap-2 h-[140px]">
        {/* Chart area */}
        <div className="flex-1 flex flex-col">
          {/* Ticker */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] font-mono text-heading/80">BTC/USD</span>
            <span className="text-[9px] font-mono text-emerald-400/70">67,431.20</span>
            <span className="text-[8px] font-mono text-emerald-400/50">+2.4%</span>
          </div>
          {/* Candlestick-like chart */}
          <div className="flex-1 rounded-md bg-white/[0.01] border border-white/[0.04] overflow-hidden flex items-end justify-around px-2 pb-1.5 pt-2 gap-[3px]">
            {[35, 42, 38, 52, 48, 55, 45, 60, 58, 65, 50, 68, 62, 72, 70, 75, 68, 78].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-sm ${i > 13 ? 'bg-emerald-400/40' : i > 10 ? 'bg-emerald-400/25' : 'bg-white/[0.08]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        {/* Order book */}
        <div className="w-20 shrink-0 flex flex-col text-[7px] font-mono">
          <div className="text-white/25 uppercase tracking-wider mb-1 text-[8px]">Book</div>
          <div className="flex flex-col gap-[2px]">
            {['67,445', '67,442', '67,440', '67,438'].map((p, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-red-400/50">{p}</span>
                <span className="text-white/15">{(Math.random() * 2 + 0.1).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-accent/20 my-1" />
          <div className="flex flex-col gap-[2px]">
            {['67,430', '67,428', '67,425', '67,422'].map((p, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-emerald-400/50">{p}</span>
                <span className="text-white/15">{(Math.random() * 2 + 0.1).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

const previews = [DashboardPreview, CADPreview, TradingPreview];

export default function Projects({ visible }) {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      data-section="work"
      className="py-[100px] md:py-[120px] px-6 md:px-8 relative z-10"
    >
      <div className={`max-w-[1200px] mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12">
          <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
            {t.projects.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em]">
            {t.projects.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((project, i) => {
            const Preview = previews[i];
            return (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden card-glow group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Browser preview */}
                <Preview />

                {/* Card content */}
                <div className="p-5 md:p-6">
                  {/* Tag pill */}
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mb-3">
                    {project.tag}
                  </span>

                  <h3 className="text-heading font-semibold text-base mb-2 tracking-[-0.01em]">
                    {project.title}
                  </h3>

                  <p className="text-body text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Result metric */}
                  <div className="flex items-center gap-2 mb-4 py-2 px-3 rounded-lg bg-accent/[0.04] border border-accent/[0.08]">
                    <svg className="w-3.5 h-3.5 text-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className="text-[11px] font-mono text-cyan">
                      {project.result}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-mono text-body/60 bg-elevated px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case study link */}
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-cyan transition-colors group/link"
                  >
                    {t.projects.caseStudy}
                    <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
