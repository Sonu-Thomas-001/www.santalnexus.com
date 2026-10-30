import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Santal Nexus',
  description: 'The requested page could not be located. Explore our fresh produce catalog or connect with our trade desk.',
};

export default function NotFound() {
  return (
    <div className="error-page-wrapper">
      <div className="error-page-bg">
        <div className="error-glow-orb"></div>
      </div>

      <div className="container error-page-container">
        <div className="error-card reveal-on-scroll">
          <div className="error-status-badge">
            <span className="error-pulse-dot"></span>
            <span>Error 404 · Route Not Found</span>
          </div>

          <h1 className="error-title">
            This Trade Route is <span className="gold-text">Off the Map</span>
          </h1>

          <p className="error-description">
            The page or produce specification you are looking for may have been relocated, updated, or does not exist. Explore our active agricultural catalog or connect with our Madurai trade desk directly.
          </p>

          <div className="error-quick-links">
            <Link href="/" className="btn btn-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Return to Homepage</span>
            </Link>

            <Link href="/products" className="btn btn-outline-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span>Browse Produce Catalog</span>
            </Link>

            <Link href="/contact" className="btn btn-outline-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Contact Trade Desk</span>
            </Link>
          </div>

          <div className="error-help-strip">
            <span className="help-text">Need urgent assistance with an active container shipment?</span>
            <a
              href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20encountered%20a%20404%20error%20and%20need%20urgent%20trade%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="error-whatsapp-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/>
              </svg>
              <span>Instant WhatsApp Escalation (+91 99946 40141)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
