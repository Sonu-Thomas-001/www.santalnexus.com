'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Verifying Farm Sourcing Networks...');

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

      if (easedProgress < 40) {
        setStatusText('Verifying Farm Sourcing Networks...');
      } else if (easedProgress < 75) {
        setStatusText('Calibrating VOC Port Cold-Chain Reefers...');
      } else {
        setStatusText('Santal Nexus • Trade Ready');
      }

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
                width={240}
                height={66}
                priority-loading="true"
              />
            </picture>
            <div className="logo-gold-shimmer"></div>
          </div>
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="preloader-progress-console">
          <div className="preloader-status-row">
            <span className="preloader-status-msg">
              <span className="preloader-live-pulse"></span>
              {statusText}
            </span>
            <span className="preloader-percentage">{progress}%</span>
          </div>

          <div className="preloader-track-bar">
            <div
              className="preloader-fill-gauge"
              style={{ width: `${progress}%` }}
            >
              <span className="fill-gauge-spark"></span>
            </div>
          </div>
        </div>

        {/* Global Trade Trust Signals */}
        <div className="preloader-trust-badges">
          <span className="preloader-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            APEDA Registered
          </span>
          <span className="preloader-badge-sep">&bull;</span>
          <span className="preloader-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            VOC Port Tuticorin
          </span>
          <span className="preloader-badge-sep">&bull;</span>
          <span className="preloader-badge">FSSAI Central Standard</span>
        </div>
      </div>
    </div>
  );
}
