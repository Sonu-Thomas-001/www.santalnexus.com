'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user previously responded
    const consent = localStorage.getItem('santal_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('santal_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('santal_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="cookie-consent-banner"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-consent-inner">
        <div className="cookie-icon-col" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M7 13v.01" />
            <path d="M12 15v.01" />
            <path d="M11 10v.01" />
            <path d="M16 13v.01" />
          </svg>
        </div>

        <div className="cookie-text-col">
          <h4 className="cookie-banner-title">Privacy &amp; Cookie Preferences</h4>
          <p className="cookie-banner-desc">
            We use essential cookies to secure your trade session and anonymous analytical telemetry to calibrate agricultural catalog performance. Review our <Link href="/cookie-policy">Cookie Policy</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>

        <div className="cookie-actions-col">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="btn btn-gold btn-sm"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="btn btn-outline-light btn-sm"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
}
