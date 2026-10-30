'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SessionExpiredPage() {
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [autoRedirect, setAutoRedirect] = useState(false);

  useEffect(() => {
    if (!autoRedirect) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [autoRedirect]);

  const handleRefresh = () => {
    window.location.href = '/';
  };

  return (
    <div className="error-page-wrapper session-expired-page">
      <div className="container">
        <div className="error-card reveal-on-scroll">
          <div className="error-badge-pill" style={{ borderColor: 'rgba(230, 162, 60, 0.4)', color: '#E6A23C' }}>
            <span className="dot" style={{ background: '#E6A23C' }}></span>
            <span>Security Timeout • Inactivity Safeguard</span>
          </div>

          <div className="error-icon-box" style={{ background: 'rgba(230, 162, 60, 0.1)', color: '#E6A23C', border: '1px solid rgba(230, 162, 60, 0.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <h1 className="error-title">Commercial Session Expired</h1>
          <p className="error-description">
            To safeguard international trade communications, wholesale rate locks, and commercial quotation integrity, inactive user sessions are automatically closed after a period of dormancy.
          </p>

          <div className="error-troubleshoot-box">
            <span className="troubleshoot-label">Session Protection Highlights</span>
            <ul className="troubleshoot-list">
              <li>
                <strong>Spot Price Protection:</strong> Daily FOB/CIF rates fluctuate with mandis and port freight indices; expired sessions prevent stale bookings.
              </li>
              <li>
                <strong>Trade Inquiry Safety:</strong> Prevents unauthorized submission of contract RFQs from shared office terminals.
              </li>
            </ul>
          </div>

          <div className="error-actions-group">
            <button onClick={handleRefresh} className="btn btn-primary">
              <span>Start New Session</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </button>

            <Link href="/products" className="btn btn-secondary">
              Browse Export Produce
            </Link>

            <Link href="/contact" className="btn btn-outline">
              Commercial Desk
            </Link>
          </div>

          <div className="session-redirect-hint">
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: '#8A9E93' }}>
              <input
                type="checkbox"
                checked={autoRedirect}
                onChange={(e) => setAutoRedirect(e.target.checked)}
                style={{ accentColor: '#D7B45A' }}
              />
              Auto-return to homepage in {secondsLeft}s
            </label>
          </div>

          <div className="error-support-footer">
            <span>Need active contract help? WhatsApp Dispatch: </span>
            <a href="https://wa.me/919994640141" target="_blank" rel="noopener noreferrer">
              +91 99946 40141
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
