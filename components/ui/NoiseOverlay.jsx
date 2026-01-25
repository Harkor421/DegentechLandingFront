'use client';

export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ opacity: 0.03 }}
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
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
