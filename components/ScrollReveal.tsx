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

    // Delay attaching the observer until after React hydration is 100% complete
    const timerId = setTimeout(() => {
      document.documentElement.classList.add('js-animations-active');

      // Auto-tag key structural and grid items with stagger delays for buttery smooth cascading entrance
      const staggerContainers = document.querySelectorAll(
        '.capability-grid, .products-grid, .services-grid, .export-grid, .team-grid, .features-grid, .stats-grid, .about-grid, .contact-details-grid, .support-cards-grid, .why-grid'
      );

      staggerContainers.forEach((container) => {
        const children = container.children;
        Array.from(children).forEach((child, idx) => {
          const el = child as HTMLElement;
          if (!el.classList.contains('reveal-on-scroll')) {
            el.classList.add('reveal-on-scroll');
          }
          // Cap stagger delay at 0.45s so slow grids still reveal promptly
          const delay = Math.min(idx * 0.09, 0.45);
          el.style.setProperty('--reveal-delay', `${delay}s`);
        });
      });

      // Also ensure major section headings and cards are observed
      const targetSelectors = [
        '.reveal-on-scroll',
        '[data-reveal]',
        '.section-heading',
        '.section-eyebrow',
        '.product-card',
        '.service-card',
        '.team-card',
        '.export-card',
        '.partner-card',
        '.about-mission-box',
        '.about-image-card',
        '.contact-form-card',
        '.capability-item',
        '.why-card',
        '.partnership-callout',
      ];

      const elements = document.querySelectorAll(targetSelectors.join(', '));
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
          threshold: 0.12,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll');
        }
        observer?.observe(el);
      });
    }, 120);

    return () => {
      clearTimeout(timerId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
