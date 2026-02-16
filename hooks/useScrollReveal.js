'use client';

import { useState, useEffect } from 'react';

export function useScrollReveal() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    let observer;

    // Small delay ensures DOM is painted after hydration (fixes iOS Safari)
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-section]');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target.dataset.section;
              setVisibleSections((prev) => ({ ...prev, [section]: true }));
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  return visibleSections;
}
