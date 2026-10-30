'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console or error reporting service
    console.error('Unhandled runtime error in application:', error);
  }, [error]);

  return (
    <div className="error-page-wrapper">
      <div className="error-page-bg">
        <div className="error-glow-orb error-glow-red"></div>
      </div>

      <div className="container error-page-container">
        <div className="error-card error-card-500 reveal-on-scroll">
          <div className="error-status-badge error-badge-danger">
            <span className="error-pulse-dot red"></span>
            <span>Error 500 · System Anomaly</span>
          </div>

          <h1 className="error-title">
            Temporary <span className="gold-text">Processing Interruption</span>
          </h1>

          <p className="error-description">
            Our trade portal encountered an unexpected service interruption while loading this page. Our engineering team has been alerted. You can attempt to retry the request or contact our dispatch team.
          </p>

          {error?.digest && (
            <div className="error-digest-box">
              <span className="digest-label">Incident Reference Digest:</span>
              <code>{error.digest}</code>
            </div>
          )}

          <div className="error-quick-links">
            <button type="button" onClick={() => reset()} className="btn btn-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Retry Request</span>
            </button>

            <Link href="/" className="btn btn-outline-light">
              <span>Return to Homepage</span>
            </Link>

            <Link href="/contact" className="btn btn-outline-light">
              <span>Contact Support</span>
            </Link>
          </div>

          <div className="error-help-strip">
            <span className="help-text">Urgent commercial contract or vessel dispatch question?</span>
            <a
              href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20hit%20a%20500%20server%20error%20and%20need%20immediate%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="error-whatsapp-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/>
              </svg>
              <span>Emergency Commercial Line (+91 99946 40141)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
