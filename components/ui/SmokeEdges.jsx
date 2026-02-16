'use client';

function SmokeSVG({ id, seed, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      preserveAspectRatio="none"
      style={{ width: '300%', height: '100%' }}
    >
      <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.006"
            numOctaves="4"
            seed={seed}
            result="turbulence"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="turbulence"
            result="gray"
          />
          <feComponentTransfer in="gray" result="smoke">
            <feFuncR type="linear" slope="3" intercept="0" />
            <feFuncG type="linear" slope="3" intercept="0" />
            <feFuncB type="linear" slope="3" intercept="0" />
            <feFuncA type="table" tableValues="0 0 0.04 0.12 0.08 0.03 0" />
          </feComponentTransfer>
          <feGaussianBlur in="smoke" stdDeviation="12" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}

const bottomFade = 'linear-gradient(to bottom, white 0%, white 60%, transparent 100%)';

export default function SmokeEdges() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Left smoke */}
      <div
        className="absolute left-0 top-0 w-[220px] h-full overflow-hidden"
        style={{
          maskImage: `linear-gradient(to right, white 0%, transparent 100%), ${bottomFade}`,
          WebkitMaskImage: `linear-gradient(to right, white 0%, transparent 100%), ${bottomFade}`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
        }}
      >
        <SmokeSVG id="sml1" seed={1} className="smoke-drift-left-1" />
      </div>
      <div
        className="absolute left-0 top-0 w-[160px] h-full overflow-hidden"
        style={{
          maskImage: `linear-gradient(to right, white 0%, transparent 80%), ${bottomFade}`,
          WebkitMaskImage: `linear-gradient(to right, white 0%, transparent 80%), ${bottomFade}`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
        }}
      >
        <SmokeSVG id="sml2" seed={5} className="smoke-drift-left-2" />
      </div>

      {/* Right smoke */}
      <div
        className="absolute right-0 top-0 w-[220px] h-full overflow-hidden"
        style={{
          maskImage: `linear-gradient(to left, white 0%, transparent 100%), ${bottomFade}`,
          WebkitMaskImage: `linear-gradient(to left, white 0%, transparent 100%), ${bottomFade}`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
        }}
      >
        <SmokeSVG id="smr1" seed={2} className="smoke-drift-right-1" />
      </div>
      <div
        className="absolute right-0 top-0 w-[160px] h-full overflow-hidden"
        style={{
          maskImage: `linear-gradient(to left, white 0%, transparent 80%), ${bottomFade}`,
          WebkitMaskImage: `linear-gradient(to left, white 0%, transparent 80%), ${bottomFade}`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
        }}
      >
        <SmokeSVG id="smr2" seed={8} className="smoke-drift-right-2" />
      </div>
    </div>
  );
}
