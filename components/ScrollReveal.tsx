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

    // Delay attaching the observer safely until React hydration is 100% settled.
    // We only observe elements that ALREADY have .reveal-on-scroll or [data-reveal] in JSX.
    // We NEVER modify DOM styles or add unrendered classes, ensuring ZERO hydration mismatch.
    const timerId = setTimeout(() => {
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
    }, 250);

    return () => {
      clearTimeout(timerId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
