'use client';

import React from 'react';
import Link from 'next/link';

interface Partner {
  id: string;
  name: string;
  category: string;
  location: string;
  badge: string;
  iconType: 'retail' | 'supermarket' | 'hub' | 'mart' | 'resort' | 'reefer' | 'shipping' | 'agro';
}

const PARTNERS: Partner[] = [
  {
    id: 'lulu',
    name: 'LuLu Hypermarket Group',
    category: 'Hypermarket & Retail Network',
    location: 'UAE · Saudi Arabia · Oman',
    badge: 'GCC Retail Consignee',
    iconType: 'retail',
  },
  {
    id: 'al-maya',
    name: 'Al Maya Group',
    category: 'Wholesale Supermarket Importer',
    location: 'Dubai & Abu Dhabi, UAE',
    badge: 'Supermarket Distributor',
    iconType: 'supermarket',
  },
  {
    id: 'pasir-panjang',
    name: 'Pasir Panjang Wholesale Hub',
    category: 'Perishable Produce Terminal',
    location: 'Singapore Central Port',
    badge: 'SE Asia Hub Buyer',
    iconType: 'hub',
  },
  {
    id: 'al-madina',
    name: 'Al Madina Mart & Wholesale',
    category: 'Fresh Produce Chain',
    location: 'Doha, Qatar · Muscat, Oman',
    badge: 'GCC Regional Importer',
    iconType: 'mart',
  },
  {
    id: 'maldives-resort',
    name: 'Maldives Island Cargo Supply',
    category: 'Hospitality & Luxury Resorts',
    location: 'Malé, Republic of Maldives',
    badge: 'Island Reefer Network',
    iconType: 'resort',
  },
  {
    id: 'maersk-reefer',
    name: 'Maersk Reefer Logistics',
    category: 'Controlled-Atmosphere Maritime',
    location: 'VOC Port Tuticorin Gateway',
    badge: 'Cold-Chain Shipping Partner',
    iconType: 'reefer',
  },
  {
    id: 'cma-cgm',
    name: 'CMA CGM Reefer Care',
    category: 'Perishable Sea Freight Line',
    location: 'Chennai Port & Colombo Hub',
    badge: 'Maritime Container Line',
    iconType: 'shipping',
  },
  {
    id: 'koyambedu',
    name: 'Koyambedu Agro Consortium',
    category: 'Terminal Wholesale Trading',
    location: 'Chennai, Tamil Nadu',
    badge: 'Domestic Wholesale Partner',
    iconType: 'agro',
  },
];

function PartnerIcon({ type }: { type: Partner['iconType'] }) {
  switch (type) {
    case 'retail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'supermarket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case 'hub':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'mart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case 'resort':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M12 2a5 5 0 0 0-5 5v14h10V7a5 5 0 0 0-5-5z" />
          <path d="M17 11h3a2 2 0 0 1 2 2v8h-5" />
          <path d="M7 11H4a2 2 0 0 0-2 2v8h5" />
        </svg>
      );
    case 'reefer':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
          <path d="M5 8h4" />
        </svg>
      );
    case 'shipping':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
          <path d="M4 18L2 12h20l-2 6" />
          <path d="M12 4v8" />
          <path d="M8 8h8" />
        </svg>
      );
    case 'agro':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
  }
}

export default function PartnerMarquee() {
  // Duplicate partner array for seamless continuous infinite marquee scrolling
  const marqueeList = [...PARTNERS, ...PARTNERS];

  return (
    <section className="partners-marquee-section" aria-label="Our Trusted Trade Partners and Customer Network">
      <div className="container">
        <div className="partners-header text-center reveal-on-scroll">
          <span className="partners-eyebrow">
            <span className="live-pulse-dot green"></span>
            GLOBAL TRADE NETWORK &amp; CLIENT PORTFOLIO
          </span>
          <h2 className="partners-heading">
            Trusted by Leading Importers, <span className="text-gold">Hypermarket Chains</span> &amp; Freight Liners
          </h2>
          <p className="partners-subheading">
            Consistently supplying international supermarket retailers, regional wholesale markets, and luxury hospitality chains across the Middle East, Southeast Asia, and Indian transit corridors.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Ticker Track */}
      <div className="marquee-wrapper" role="region" aria-label="Scrolling list of trusted partners and clients">
        <div className="marquee-fade-overlay left"></div>
        <div className="marquee-fade-overlay right"></div>

        <div className="marquee-track">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="partner-card"
              title={`${partner.name} - ${partner.category}`}
            >
              <div className="partner-card-inner">
                <div className="partner-logo-emblem">
                  <PartnerIcon type={partner.iconType} />
                </div>
                <div className="partner-info">
                  <div className="partner-badge-chip">{partner.badge}</div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <div className="partner-meta">
                    <span className="partner-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {partner.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Capability Metrics Underneath */}
      <div className="container">
        <div className="partner-trust-metrics reveal-on-scroll">
          <div className="trust-metric-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>APEDA &amp; FSSAI Export Certified</span>
          </div>
          <div className="trust-metric-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>24h Reefer Dispatch from VOC Port</span>
          </div>
          <div className="trust-metric-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            </svg>
            <span>Custom Export Sorting &amp; Packhouse Calibration</span>
          </div>
          <div className="trust-metric-pill">
            <Link href="/contact" className="metric-trade-link">
              <span>Become a Registered Trade Partner &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
