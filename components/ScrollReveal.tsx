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

    // Defer observer setup until after React 19 hydration has fully settled (macro-task)
    // 150ms delay guarantees that SSR DOM reconciliation is complete and no attribute mismatches occur
    const timerId = setTimeout(() => {
      if (isCleanedUp) return;

      // Enable animations class on html tag safely after hydration
      document.documentElement.classList.add('js-animations-active');

      // Only query elements authored with reveal classes/attributes - do NOT mutate arbitrary DOM elements
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('.reveal-on-scroll, [data-reveal]')
      );
      if (!elements.length) return;

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

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
          threshold: 0.05,
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or above viewport on page load/navigation, reveal immediately
        if (rect.bottom < 0 || (rect.top < windowHeight * 0.92 && rect.bottom > 0)) {
          el.classList.add('is-revealed');
        } else {
          observer?.observe(el);
        }
      });
    }, 150);

    return () => {
      isCleanedUp = true;
      clearTimeout(timerId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
