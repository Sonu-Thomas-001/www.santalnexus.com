'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;
    let isCleanedUp = false;

    // To prevent ANY hydration mismatch in React 19 / Next.js:
    // We MUST NOT mutate element classList before React hydration has completely settled.
    // We attach on the first user scroll/interaction, OR after window is fully loaded & idle.
    const startObserver = () => {
      if (isCleanedUp || observer) return;

      document.documentElement.classList.add('js-animations-active');

      const elements = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1,
        }
      );

      elements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // Activate on first user interaction (scroll, touch, click, keydown)
    const onUserInteraction = () => {
      startObserver();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('pointerdown', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
    };

    window.addEventListener('scroll', onUserInteraction, { passive: true });
    window.addEventListener('pointerdown', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('keydown', onUserInteraction, { passive: true });

    // Fallback timer: wait until the preloader curtain has completely exited and React hydration has 100% finished
    const timerId = setTimeout(() => {
      startObserver();
      cleanupListeners();
    }, 1200);

    return () => {
      isCleanedUp = true;
      clearTimeout(timerId);
      cleanupListeners();
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
