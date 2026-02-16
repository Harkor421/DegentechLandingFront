'use client';

export default function NoiseOverlay() {
  return (
    <div
      className="fixed pointer-events-none z-[100] film-grain"
      style={{ inset: '-10%', width: '120%', height: '120%' }}
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
