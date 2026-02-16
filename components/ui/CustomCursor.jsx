'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setHidden(true);
      return;
    }

    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    function onMouseMove(e) {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;

      if (!visible.current) {
        visible.current = true;
        dot.style.opacity = '1';
        circle.style.opacity = '1';
      }
    }

    function onMouseEnterInteractive() {
      hovering.current = true;
      circle.style.width = '56px';
      circle.style.height = '56px';
      circle.style.borderColor = 'rgba(79, 70, 229, 0.5)';
    }

    function onMouseLeaveInteractive() {
      hovering.current = false;
      circle.style.width = '40px';
      circle.style.height = '40px';
      circle.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }

    function onMouseLeave() {
      visible.current = false;
      dot.style.opacity = '0';
      circle.style.opacity = '0';
    }

    let rafId;
    function animate() {
      circlePos.current.x += (pos.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (pos.current.y - circlePos.current.y) * 0.15;

      const cw = hovering.current ? 28 : 20;
      circle.style.transform = `translate(${circlePos.current.x - cw}px, ${circlePos.current.y - cw}px)`;

      rafId = requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-heading rounded-full pointer-events-none z-[9999] opacity-0 mix-blend-difference"
        style={{ transition: 'opacity 0.3s' }}
      />
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[9998] opacity-0"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.15)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s',
        }}
      />
    </>
  );
}
