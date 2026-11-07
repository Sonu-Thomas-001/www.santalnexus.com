'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    // Smooth progress counter simulation
    const startTime = performance.now();
    const duration = 750; // 750ms fast & sleek loading experience

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Ease-out cubic calculation
      const easedProgress = Math.floor((1 - Math.pow(1 - rawProgress, 3)) * 100);

      setProgress(easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setVisible(false);
          }, 800);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`luxury-preloader-curtain ${fading ? 'curtain-exit' : ''}`}
      id="sitePreloader"
      aria-hidden="true"
    >
      <div className="preloader-backdrop-glow"></div>

      <div className="preloader-content-core">
        {/* Emblem Crest & Logo */}
        <div className="preloader-crest-wrapper">
          <div className="preloader-ambient-ring"></div>
          <div className="preloader-ambient-ring-inner"></div>
          <div className="preloader-brand-logo">
            <picture>
              <source srcSet="/assets/logos/santal-nexus-dark.webp" type="image/webp" />
              <img
                src="/assets/logos/santal-nexus-dark.png"
                alt="Santal Nexus"
                className="preloader-logo-img"
                width={260}
                height={72}
                priority-loading="true"
              />
            </picture>
            <div className="logo-gold-shimmer"></div>
          </div>
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="preloader-progress-console">
          <div className="preloader-track-bar">
            <div
              className="preloader-fill-gauge"
              style={{ width: `${progress}%` }}
            >
              <span className="fill-gauge-spark"></span>
            </div>
          </div>
          <div className="preloader-percentage-wrap">
            <span className="preloader-percentage">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
