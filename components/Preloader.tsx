'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-preloader ${fading ? 'fade-out' : ''}`}
      id="sitePreloader"
      aria-hidden="true"
      style={fading ? { opacity: 0, pointerEvents: 'none', transition: 'opacity 0.4s ease' } : {}}
    >
      <div className="preloader-inner">
        <div className="preloader-brand">
          <picture>
            <source srcSet="/assets/logos/santal-nexus-dark.webp" type="image/webp" />
            <img
              src="/assets/logos/santal-nexus-dark.png"
              alt="Santal Nexus"
              className="preloader-logo"
              width={180}
              height={50}
            />
          </picture>
        </div>
        <div className="preloader-spinner-wrap">
          <div className="preloader-spinner"></div>
        </div>
        <div className="preloader-tagline">
          <span className="preloader-dot"></span>
          <span>Expanding Beyond Borders</span>
        </div>
      </div>
    </div>
  );
}
