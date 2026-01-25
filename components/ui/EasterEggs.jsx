'use client';

import { useEffect, useRef } from 'react';

const ASCII_ART = `
%c╔══════════════════════════════════════╗
║                                      ║
║   ██████╗ ████████╗                  ║
║   ██╔══██╗╚══██╔══╝                  ║
║   ██║  ██║   ██║                     ║
║   ██║  ██║   ██║     DegenTech       ║
║   ██████╔╝   ██║     degentech.co    ║
║   ╚═════╝    ╚═╝                     ║
║                                      ║
║   Building the autonomous economy    ║
║   ─────────────────────────────────  ║
║   We're hiring! admin@degentech.co   ║
║                                      ║
╚══════════════════════════════════════╝
`;

export default function EasterEggs() {
  const originalTitle = useRef('');

  useEffect(() => {
    // Console ASCII art
    console.log(ASCII_ART, 'color: #4F46E5; font-family: monospace; font-size: 11px;');
    console.log(
      '%cLooking for the source? We build in the open: github.com/degentech',
      'color: #06B6D4; font-size: 12px;'
    );

    // Tab title change on blur
    originalTitle.current = document.title;

    function onVisibilityChange() {
      if (document.hidden) {
        document.title = 'Come back! We miss you...';
      } else {
        document.title = originalTitle.current;
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange);

    // Konami code
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA',
    ];
    let konamiIndex = 0;

    function onKeyDown(e) {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          document.body.style.transition = 'filter 0.5s';
          document.body.style.filter = 'hue-rotate(180deg)';
          setTimeout(() => {
            document.body.style.filter = '';
          }, 3000);
        }
      } else {
        konamiIndex = 0;
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('keydown', onKeyDown);
      document.title = originalTitle.current;
    };
  }, []);

  return null;
}
