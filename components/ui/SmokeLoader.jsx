'use client';

import { useState, useEffect } from 'react';

export default function SmokeLoader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 200);
    const hideTimer = setTimeout(() => setHidden(true), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[300] bg-[#0A0A0E] transition-opacity duration-[1600ms] ease-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-hidden="true"
    />
  );
}
