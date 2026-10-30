'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="siteFooter">
      {/* 1. Sleek Harvest Assurance Strip */}
      <div className="footer-assurance-strip">
        <div className="container">
          <div className="assurance-strip-grid">
            <div className="assurance-strip-card">
              <div className="assurance-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <span className="assurance-badge-title">Direct Farm-Gate Sourcing</span>
            </div>

            <div className="assurance-strip-card">
              <div className="assurance-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <span className="assurance-badge-title">Cold-Chain Reefer Logistics</span>
            </div>

            <div className="assurance-strip-card">
              <div className="assurance-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <span className="assurance-badge-title">APEDA &amp; Phyto Certified</span>
            </div>

            <div className="assurance-strip-card">
              <div className="assurance-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <span className="assurance-badge-title">Incoterms FOB &amp; CIF</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Streamlined 4-Column Footer Body */}
      <div className="footer-main-body">
        <div className="container">
          <div className="footer-main-grid">
            {/* Col 1: Brand & Certification Seals */}
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
                Connecting quality Indian farm-gate produce with wholesale and global trade partners.
              </p>
              <div className="footer-cert-badges">
                <span className="cert-micro-chip">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  APEDA Regd.
                </span>
                <span className="cert-micro-chip">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  FSSAI Licensed
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links-list">
                <li><Link href="/" className="footer-link-item"><span>Home</span></Link></li>
                <li><Link href="/about" className="footer-link-item"><span>About Us</span></Link></li>
                <li><Link href="/products" className="footer-link-item"><span>Produce Catalog</span></Link></li>
                <li><Link href="/export-services" className="footer-link-item"><span>Export Services</span></Link></li>
                <li><Link href="/team" className="footer-link-item"><span>Our Team</span></Link></li>
                <li><Link href="/contact" className="footer-link-item highlight-gold"><span>Contact Desk</span></Link></li>
              </ul>
            </div>

            {/* Col 3: Compliance & Legal */}
            <div className="footer-col">
              <h4 className="footer-col-title">Legal &amp; Policy</h4>
              <ul className="footer-links-list">
                <li><Link href="/privacy-policy" className="footer-link-item"><span>Privacy Policy</span></Link></li>
                <li><Link href="/terms-of-service" className="footer-link-item"><span>Terms of Service</span></Link></li>
                <li><Link href="/cookie-policy" className="footer-link-item"><span>Cookie Policy</span></Link></li>
                <li><Link href="/support" className="footer-link-item"><span>Help &amp; Support</span></Link></li>
                <li><Link href="/maintenance" className="footer-link-item"><span>Port Dispatch Status</span></Link></li>
              </ul>
            </div>

            {/* Col 4: Madurai Trade Desk */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">Trade Desk</h4>
              <div className="footer-contact-compact">
                <a href="tel:+919994640141" className="compact-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 99946 40141</span>
                </a>

                <a href="mailto:santalnexus@gmail.com" className="compact-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>santalnexus@gmail.com</span>
                </a>

                <div className="compact-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>T. Vadiapatti, Madurai – 625218, India</span>
                </div>

                <a
                  href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20enquire%20about%20fresh%20produce%20export."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp-cta"
                  aria-label="Connect on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/></svg>
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copy">&copy; {currentYear} Santal Nexus. All rights reserved.</p>

          <div className="footer-port-status-pill">
            <span>Website designed and All rights reserved by MidCell Studios</span>
          </div>

          <button
            type="button"
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
