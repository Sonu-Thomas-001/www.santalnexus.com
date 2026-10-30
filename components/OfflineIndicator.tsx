'use client';

import React, { useState, useEffect } from 'react';

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [reconnectedNotice, setReconnectedNotice] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setReconnectedNotice(true);
      const timer = setTimeout(() => setReconnectedNotice(false), 3500);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setReconnectedNotice(false);
    };

    // Check initial state
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      setIsOffline(true);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline && !reconnectedNotice) {
    return null;
  }

  return (
    <div
      className={`offline-banner ${isOffline ? 'is-offline' : 'is-reconnected'}`}
      role="status"
      aria-live="polite"
    >
      <div className="offline-banner-content">
        <div className="offline-icon-wrap" aria-hidden="true">
          {isOffline ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
              <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>

        <div className="offline-text">
          <strong>{isOffline ? 'You are currently offline' : 'Connection restored'}</strong>
          <span>
            {isOffline
              ? 'Cached produce specifications available. Sourcing requests will submit once connection resumes.'
              : 'Live real-time trade quotation desk is active.'}
          </span>
        </div>

        {isOffline && (
          <a
            href="tel:+919994640141"
            className="offline-call-btn"
            aria-label="Direct phone line"
          >
            Direct Call
          </a>
        )}
      </div>
    </div>
  );
}
