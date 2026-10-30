import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '403 Forbidden | Access Restricted | Santal Nexus',
  description: 'Access to this commercial trade section is restricted to verified international importers and registered partners.',
  robots: { index: false, follow: false },
};

export default function Forbidden() {
  return (
    <div className="error-page-wrapper forbidden-page">
      <div className="container">
        <div className="error-card reveal-on-scroll">
          <div className="error-badge-pill" style={{ borderColor: 'rgba(215, 180, 90, 0.4)', color: '#D7B45A' }}>
            <span className="dot" style={{ background: '#D7B45A' }}></span>
            <span>HTTP 403 • Restricted Trade Zone</span>
          </div>

          <div className="error-code-display" style={{ color: '#D7B45A' }}>
            403
          </div>

          <div className="error-icon-box" style={{ background: 'rgba(215, 180, 90, 0.1)', color: '#D7B45A', border: '1px solid rgba(215, 180, 90, 0.25)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48" aria-hidden="true">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1 className="error-title">Access Clearance Required</h1>
          <p className="error-description">
            Access to this commercial portal endpoint is restricted to verified importers, freight forwarders, and registered supply contract partners. Your session does not possess the requisite clearance level.
          </p>

          <div className="error-troubleshoot-box">
            <span className="troubleshoot-label">Resolution Pathways</span>
            <ul className="troubleshoot-list">
              <li>
                <strong>Trade Partner Verification:</strong> If you are an active container contract holder, verify with your dedicated export coordinator.
              </li>
              <li>
                <strong>KYC &amp; Commercial Desk:</strong> New B2B buyers can submit company registration and import license for credential issuance.
              </li>
            </ul>
          </div>

          <div className="error-actions-group">
            <a
              href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20am%20requesting%20partner%20clearance%20for%20the%20commercial%20portal."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Request Partner Clearance</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <Link href="/products" className="btn btn-secondary">
              Browse Public Catalog
            </Link>

            <Link href="/" className="btn btn-outline">
              Return to Homepage
            </Link>
          </div>

          <div className="error-support-footer">
            <span>Direct Desk: </span>
            <a href="tel:+919994640141">+91 99946 40141</a>
            <span className="sep">•</span>
            <a href="mailto:santalnexus@gmail.com">santalnexus@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
