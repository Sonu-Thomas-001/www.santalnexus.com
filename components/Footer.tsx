'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="siteFooter">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-brand-link" aria-label="Santal Nexus home">
              <picture>
                <source srcSet="/assets/logos/santal-nexus-dark.webp" type="image/webp" />
                <img
                  src="/assets/logos/santal-nexus-dark.png"
                  alt="Santal Nexus Logo"
                  className="brand-logo-img"
                  width={190}
                  height={52}
                  loading="lazy"
                />
              </picture>
            </Link>
            <p className="footer-brand-text">
              Santal Nexus is an India-based fresh fruits and vegetables trading business connecting quality farm sourcing with wholesale and international trade opportunities.
            </p>
            <div className="footer-slogan-pill">
              <span className="slogan-pulse-dot"></span>
              <span className="slogan-text">Expanding Beyond Borders</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href="/" className="footer-link-item"><span>Home</span></Link></li>
              <li><Link href="/about" className="footer-link-item"><span>About Us</span></Link></li>
              <li><Link href="/products" className="footer-link-item"><span>Products</span></Link></li>
              <li><Link href="/export-services" className="footer-link-item"><span>Export Services</span></Link></li>
              <li><Link href="/team" className="footer-link-item"><span>Our Team</span></Link></li>
              <li><Link href="/contact" className="footer-link-item"><span>Contact</span></Link></li>
            </ul>
          </div>

          {/* Col 3: Trade Inquiries & Connect */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Trade Inquiries</h4>
            <div className="footer-contact-cards">
              <a href="tel:+919994640141" className="footer-contact-card" aria-label="Call +91 99946 40141">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="card-label">Direct Trade Call</span>
                  <span className="card-value">+91 99946 40141</span>
                </div>
              </a>

              <a href="mailto:santalnexus@gmail.com" className="footer-contact-card" aria-label="Email santalnexus@gmail.com">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="card-label">Commercial Inquiries</span>
                  <span className="card-value">santalnexus@gmail.com</span>
                </div>
              </a>

              <div className="footer-contact-card address-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="card-label">Office &amp; Sourcing Hub</span>
                  <span className="card-value">Building No. 391/3, Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti, Madurai – 625218, India</span>
                </div>
              </div>
            </div>

            {/* Social Links & Motto Bar */}
            <div className="footer-social-strip">
              <div className="social-icons-group">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.33a1.62 1.62 0 0 0-1.62 1.62c0 .9.72 1.63 1.62 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.62-1.63-1.62Z"/></svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://wa.me/919994640141" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/></svg>
                </a>
              </div>

              <div className="footer-motto-badge">
                <span className="motto-script">Fresh Produce<br />Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">&copy; {currentYear} Santal Nexus. All rights reserved.</p>
          <div className="footer-location-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Fresh Produce Trading · Madurai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
