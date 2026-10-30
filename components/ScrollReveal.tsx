'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;

    // Delay attaching the observer until after React hydration is 100% complete.
    // This prevents any DOM class mutations from occurring before React finishes
    // hydrating streamed or suspended Server Components (e.g. app/page.tsx).
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

      elements.forEach((el) => observer?.observe(el));
    }, 200);

    return () => {
      clearTimeout(timerId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
