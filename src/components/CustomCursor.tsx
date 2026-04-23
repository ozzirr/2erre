'use client';

import {useEffect, useRef} from 'react';

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'label',
  'summary'
].join(', ');

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!media.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add('custom-cursor-enabled');

    let raf = 0;
    let x = 0;
    let y = 0;
    let activeCard: HTMLElement | null = null;

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = 0;
    };

    const queueRender = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = 'true';

      const target = event.target as Element | null;
      const nextCard = target?.closest('.card') as HTMLElement | null;

      if (activeCard !== nextCard) {
        if (activeCard) activeCard.dataset.spotlight = 'false';
        activeCard = nextCard;
        if (activeCard) activeCard.dataset.spotlight = 'true';
      }

      if (activeCard) {
        const rect = activeCard.getBoundingClientRect();
        activeCard.style.setProperty('--card-glow-x', `${event.clientX - rect.left}px`);
        activeCard.style.setProperty('--card-glow-y', `${event.clientY - rect.top}px`);
      }

      queueRender();
    };

    const onLeave = () => {
      cursor.dataset.visible = 'false';
      cursor.dataset.active = 'false';
      if (activeCard) {
        activeCard.dataset.spotlight = 'false';
        activeCard = null;
      }
    };

    const onPointerOver = (event: Event) => {
      const target = event.target as Element | null;
      cursor.dataset.active = target?.closest(INTERACTIVE_SELECTOR) ? 'true' : 'false';
    };

    const onPointerDown = () => {
      cursor.dataset.pressed = 'true';
    };

    const onPointerUp = () => {
      cursor.dataset.pressed = 'false';
    };

    window.addEventListener('mousemove', onMove, {passive: true});
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('mouseover', onPointerOver);
    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      if (activeCard) activeCard.dataset.spotlight = 'false';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('mouseover', onPointerOver);
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mouseup', onPointerUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden />;
}
