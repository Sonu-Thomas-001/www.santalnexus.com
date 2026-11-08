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

    const startObserver = () => {
      if (isCleanedUp) return;

      document.documentElement.classList.add('js-animations-active');

      // Comprehensive selectors covering every page, section, card, and interactive element
      const targetSelectors = [
        '.reveal-on-scroll',
        '[data-reveal]',
        '.section-intro-center',
        '.section-intro-left',
        '.hero-content-inner',
        '.page-hero-content',
        '.products-grid > article',
        '.products-grid > div',
        '.services-grid > article',
        '.services-grid > div',
        '.values-grid > div',
        '.team-grid > article',
        '.team-grid > div',
        '.why-us-grid > div',
        '.dept-cards-grid > div',
        '.corridors-cards-grid > div',
        '.export-steps-grid > div',
        '.capability-grid > div',
        '.contact-layout-grid > div',
        '.desks-cards-grid > div',
        '.about-story-grid > div',
        '.about-why-grid > div',
        '.about-founder-callout',
        '.founder-quote-box',
        '.about-cta-box',
        '.contact-cta-box',
        '.careers-banner-box',
        '.product-assurance-strip',
        '.product-assurance-item',
        '.quality-trust-box',
        '.tomorrow-card',
        '.export-rfq-box',
        '.faq-item'
      ].join(', ');

      const rawElements = document.querySelectorAll(targetSelectors);
      if (!rawElements.length) return;

      // Deduplicate elements into an array
      const elements: HTMLElement[] = Array.from(new Set(Array.from(rawElements))) as HTMLElement[];

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Group sibling cards in grid containers to calculate cascading stagger delays
      const parentGroups = new Map<Element, HTMLElement[]>();
      elements.forEach((el) => {
        el.classList.add('reveal-on-scroll');
        const parent = el.parentElement;
        if (
          parent &&
          (parent.classList.contains('products-grid') ||
            parent.classList.contains('services-grid') ||
            parent.classList.contains('values-grid') ||
            parent.classList.contains('team-grid') ||
            parent.classList.contains('why-us-grid') ||
            parent.classList.contains('dept-cards-grid') ||
            parent.classList.contains('capability-grid') ||
            parent.classList.contains('corridors-cards-grid') ||
            parent.classList.contains('export-steps-grid') ||
            parent.classList.contains('desks-cards-grid') ||
            parent.classList.contains('product-assurance-strip') ||
            parent.classList.contains('about-story-grid') ||
            parent.classList.contains('about-why-grid') ||
            parent.classList.contains('about-pillars-grid'))
        ) {
          if (!parentGroups.has(parent)) {
            parentGroups.set(parent, []);
          }
          parentGroups.get(parent)!.push(el);
        }
      });

      // Assign organic staggered delays (max 360ms) to sibling cards in grids
      parentGroups.forEach((siblings) => {
        siblings.forEach((child, idx) => {
          const delay = Math.min(idx * 0.08, 0.36);
          child.style.setProperty('--reveal-delay', `${delay}s`);
        });
      });

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
          threshold: 0.08,
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport on page load (e.g. top hero banner), reveal immediately
        if (rect.top < windowHeight * 0.88 && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer?.observe(el);
        }
      });
    };

    // Initialize with a minimal delay to ensure hydration and DOM layout have fully mounted
    const frameId = requestAnimationFrame(() => {
      startObserver();
    });

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(frameId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
