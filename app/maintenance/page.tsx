import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scheduled Maintenance | Santal Nexus Trade Portal',
  description: 'Our trade platform is currently undergoing scheduled infrastructure upgrades. Direct cold storage and export logistics remain fully operational.',
};

export default function MaintenancePage() {
  return (
    <div className="maintenance-page-wrapper">
      <div className="maintenance-bg-grid"></div>

      <div className="container maintenance-container">
        <div className="maintenance-card reveal-on-scroll">
          <div className="maintenance-status-badge">
            <span className="maintenance-dot"></span>
            <span>Scheduled System Maintenance</span>
          </div>

          <h1 className="maintenance-title">
            Upgrading Our <span className="gold-text">Agricultural Trade Infrastructure</span>
          </h1>

          <p className="maintenance-desc">
            We are performing scheduled enhancements to our logistics tracking and B2B quotation gateway. During this brief window, digital self-service features may be paused.
          </p>

          <div className="maintenance-highlight-box">
            <div className="highlight-item">
              <span className="hl-label">Packhouse &amp; Port Dispatch</span>
              <span className="hl-status active">100% Operational</span>
            </div>
            <div className="highlight-item">
              <span className="hl-label">Cold Storage Monitoring</span>
              <span className="hl-status active">Active &amp; Calibrated</span>
            </div>
            <div className="highlight-item">
              <span className="hl-label">Commercial Trade Desk</span>
              <span className="hl-status active">Available via Phone &amp; WhatsApp</span>
            </div>
          </div>

          <div className="maintenance-contacts">
            <h3 className="contacts-heading">Direct Commercial Lines for Active Orders</h3>
            <div className="maintenance-actions-grid">
              <a
                href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20am%20checking%20on%20an%20urgent%20shipment%20during%20maintenance."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/>
                </svg>
                <span>WhatsApp Dispatch Desk</span>
              </a>

              <a href="tel:+919994640141" className="btn btn-outline-light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call +91 99946 40141</span>
              </a>

              <a href="mailto:santalnexus@gmail.com" className="btn btn-outline-light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Email Official Desk</span>
              </a>
            </div>
          </div>

          <div className="maintenance-footer-note">
            <span>Santal Nexus · Madurai, Tamil Nadu, India · Expanding Beyond Borders</span>
          </div>
        </div>
      </div>
    </div>
  );
}
