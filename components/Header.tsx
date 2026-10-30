'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [produceDropdownOpen, setProduceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setProduceDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProduceDropdownOpen(false);
  }, [pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProduceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProduceActive = pathname.startsWith('/products');

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      {/* Top Utility Trade Strip */}
      <div className="header-top-bar">
        <div className="container header-top-container">
          <div className="header-top-left">
            <div className="top-stat-item">
              <span className="top-stat-dot"></span>
              <span className="top-stat-label">Farm Sourcing:</span>
              <span className="top-stat-val">Madurai · Dindigul · Theni</span>
            </div>
            <span className="top-stat-divider" aria-hidden="true">|</span>
            <div className="top-stat-item">
              <span className="top-stat-label">Export Gateways:</span>
              <span className="top-stat-val">VOC Tuticorin Port · Chennai Port</span>
            </div>
            <span className="top-stat-divider" aria-hidden="true">|</span>
            <div className="top-stat-item apeda-badge-micro">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <span>APEDA &amp; FSSAI Regd.</span>
            </div>
          </div>

          <div className="header-top-right">
            <a href="tel:+919994640141" className="top-link" aria-label="Trade Hotline">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 99946 40141</span>
            </a>
            <span className="top-stat-divider" aria-hidden="true">|</span>
            <a
              href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20enquire%20about%20fresh%20produce%20export%20trade."
              target="_blank"
              rel="noopener noreferrer"
              className="top-link top-whatsapp"
              aria-label="Connect on WhatsApp Live Trade Desk"
            >
              <span className="live-pulse"></span>
              <span>Live Trade Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Architectural Navigation Bar */}
      <div className="header-main-bar">
        <div className="container header-container">
          {/* Brand Logo */}
          <Link href="/" className="brand-link" aria-label="Santal Nexus - Return to homepage">
            <picture>
              <source srcSet="/assets/logos/santal-nexus-dark.webp" type="image/webp" />
              <img
                src="/assets/logos/santal-nexus-dark.png"
                alt="Santal Nexus - Expanding Beyond Borders"
                className="brand-logo-img"
                width={240}
                height={66}
                loading="eager"
              />
            </picture>
          </Link>

          {/* Desktop & Mobile Navigation */}
          <nav
            className={`main-nav ${mobileMenuOpen ? 'menu-open' : ''}`}
            id="mainNav"
            aria-label="Primary site navigation"
          >
            <ul className="nav-links">
              <li>
                <Link
                  href="/"
                  className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About Us</span>
                </Link>
              </li>

              {/* Interactive Produce Mega-Dropdown */}
              <li
                ref={dropdownRef}
                className={`nav-item-dropdown ${produceDropdownOpen ? 'dropdown-open' : ''} ${isProduceActive ? 'active-parent' : ''}`}
                onMouseEnter={() => setProduceDropdownOpen(true)}
                onMouseLeave={() => setProduceDropdownOpen(false)}
              >
                <div className="dropdown-trigger-wrap">
                  <Link
                    href="/products"
                    className={`nav-link ${isProduceActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Produce Catalog</span>
                  </Link>
                  <button
                    type="button"
                    className="dropdown-chevron-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setProduceDropdownOpen(!produceDropdownOpen);
                    }}
                    aria-expanded={produceDropdownOpen}
                    aria-label="Toggle Produce Catalog menu"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>

                {/* Mega-Dropdown Menu Window */}
                <div className="agri-catalog-menu" role="region" aria-label="Produce Catalog Overview">
                  <div className="agri-catalog-grid">
                    {/* Column 1: Fresh Vegetables */}
                    <div className="agri-catalog-col">
                      <span className="catalog-col-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                        </svg>
                        Farm Vegetables
                      </span>
                      <ul className="catalog-links">
                        <li>
                          <Link href="/products?q=shallot" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Small Red Onions / Shallots</strong>
                            <span>Madurai &amp; Dindigul Farm Gate</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=moringa" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Moringa Drumsticks</strong>
                            <span>Uniform export grade, 45-60cm</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=chilli" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>G4 Fresh Green Chillies</strong>
                            <span>Pungent, high shelf-life</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=gherkin" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Fresh Pickling Gherkins</strong>
                            <span>Graded &amp; brine calibrated</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Tropical Orchard Fruits */}
                    <div className="agri-catalog-col">
                      <span className="catalog-col-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                        </svg>
                        Tropical Orchard Fruits
                      </span>
                      <ul className="catalog-links">
                        <li>
                          <Link href="/products?q=banana" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Cavendish G9 Bananas</strong>
                            <span>Cluster packed, +13.5°C reefer ready</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=mango" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Alphonso &amp; Banganapalli Mangoes</strong>
                            <span>Hot water treated, export cartons</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=pomegranate" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Bhagwa Red Pomegranates</strong>
                            <span>Deep red arils, premium brix</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=guava" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Taiwan White &amp; Pink Guavas</strong>
                            <span>Foam net cushioned, crisp</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Herbs & Sourcing Matrix */}
                    <div className="agri-catalog-col">
                      <span className="catalog-col-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        Herbs &amp; Custom Sourcing
                      </span>
                      <ul className="catalog-links">
                        <li>
                          <Link href="/products?q=curry" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Fresh Aroma Curry Leaves</strong>
                            <span>Air-freight bunches, high essential oil</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?q=coriander" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Fresh Coriander &amp; Mint Leaves</strong>
                            <span>Hydro-cooled export packaging</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}>
                            <strong>Contract Farming &amp; Bulk Procurement</strong>
                            <span>FCL/LCL Reefer Container Loads</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="catalog-explore-btn-wrap">
                        <Link
                          href="/products"
                          className="catalog-all-link"
                          onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}
                        >
                          <span>Explore Full Sourcing Matrix</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Column 4: Packhouse Calibration Feature Box */}
                    <div className="agri-catalog-highlight">
                      <div className="packhouse-card">
                        <span className="packhouse-pill">APEDA &amp; Codex Compliant</span>
                        <h4>Post-Harvest Packhouse Calibration</h4>
                        <p>Pre-cooling, mechanical sorting, optical sizing, and ventilated CFB master cartons direct to maritime reefer containers.</p>
                        <div className="packhouse-metrics">
                          <div className="p-metric">
                            <span className="p-num">+13.5°C</span>
                            <span className="p-lbl">Banana Reefers</span>
                          </div>
                          <div className="p-metric">
                            <span className="p-num">24h</span>
                            <span className="p-lbl">VOC Tuticorin Port Gate</span>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="btn-dropdown-quote"
                          onClick={() => { setProduceDropdownOpen(false); setMobileMenuOpen(false); }}
                        >
                          <span>Request Trade Quote</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/export-services"
                  className={`nav-link ${pathname === '/export-services' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Export Services</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className={`nav-link ${pathname === '/team' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Our Team</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            {/* Mobile Drawer Credentials & Fast Actions */}
            <div className="mobile-nav-footer">
              <div className="mobile-credentials-card">
                <div className="micro-cred-item">
                  <span className="dot-green"></span>
                  <span>APEDA Registered Merchant Exporter</span>
                </div>
                <div className="micro-cred-item">
                  <span className="dot-green"></span>
                  <span>Port Gateways: VOC Tuticorin &amp; Chennai</span>
                </div>
              </div>

              <div className="mobile-contact-quick">
                <a href="tel:+919994640141" className="mobile-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 99946 40141</span>
                </a>
                <a
                  href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20enquire%20about%20fresh%20produce%20sourcing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-quick-btn whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/>
                  </svg>
                  <span>WhatsApp Direct</span>
                </a>
              </div>
              <p className="mobile-nav-location">Madurai, Tamil Nadu, India · Expanding Beyond Borders</p>
            </div>
          </nav>

          {/* Header Action Elements (Right) */}
          <div className="header-right-actions">
            <a href="tel:+919994640141" className="header-phone-pill" aria-label="Direct Trade Call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="phone-number">+91 99946 40141</span>
            </a>

            <Link href="/contact" className="btn btn-gold btn-trade-quote">
              <span>Trade Quote</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              id="mobileMenuToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mainNav"
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-box">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
