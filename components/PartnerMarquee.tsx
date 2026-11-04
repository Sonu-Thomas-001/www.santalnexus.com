'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export type PartnerCategoryKey = 'all' | 'hypermarket' | 'wholesale' | 'hospitality' | 'carriers' | 'compliance';

export interface Partner {
  id: string;
  name: string;
  category: PartnerCategoryKey;
  categoryLabel: string;
  role: string;
  location: string;
  badge: string;
  commodities: string;
  iconType: 'retail' | 'supermarket' | 'hub' | 'mart' | 'resort' | 'reefer' | 'shipping' | 'cert' | 'air' | 'agro';
}

export const PARTNERS_DATA: Partner[] = [
  // 1. Hypermarket & Supermarket Retailers
  {
    id: 'lulu',
    name: 'LuLu Hypermarket Group',
    category: 'hypermarket',
    categoryLabel: 'Hypermarket & Retail',
    role: 'GCC Retail Consignee Network',
    location: 'UAE · Saudi Arabia · Oman',
    badge: 'Verified Buyer',
    commodities: 'Cavendish G9 Bananas · G4 Chillies · Fresh Veg',
    iconType: 'retail',
  },
  {
    id: 'al-maya',
    name: 'Al Maya Group',
    category: 'hypermarket',
    categoryLabel: 'Hypermarket & Retail',
    role: 'Supermarket Distributor & Importer',
    location: 'Dubai & Abu Dhabi, UAE',
    badge: 'Supermarket Consignee',
    commodities: 'Small Red Shallots · Fresh Veg · Drumsticks',
    iconType: 'supermarket',
  },
  {
    id: 'choithrams',
    name: 'Choithrams Supermarket Chain',
    category: 'hypermarket',
    categoryLabel: 'Hypermarket & Retail',
    role: 'Premium Retail Distribution Hub',
    location: 'Dubai & Sharjah, UAE',
    badge: 'Retail Consignee',
    commodities: 'G9 Bananas · Pomegranates · Mangoes',
    iconType: 'supermarket',
  },
  {
    id: 'al-madina',
    name: 'Al Madina Mart & Wholesale',
    category: 'hypermarket',
    categoryLabel: 'Hypermarket & Retail',
    role: 'Fresh Supermarket Chain Consignee',
    location: 'Doha, Qatar · Muscat, Oman',
    badge: 'GCC Regional Importer',
    commodities: 'Daily Greens · Curry Leaves · Shallots',
    iconType: 'mart',
  },

  // 2. Wholesale Terminal Produce Markets
  {
    id: 'pasir-panjang',
    name: 'Pasir Panjang Wholesale Hub',
    category: 'wholesale',
    categoryLabel: 'Wholesale Terminals',
    role: 'Perishable Produce Terminal Buyer',
    location: 'Singapore Central Port',
    badge: 'SE Asia Hub Buyer',
    commodities: 'Shallots · G4 Green Chillies · Curry Leaves',
    iconType: 'hub',
  },
  {
    id: 'ntuc-fairprice',
    name: 'Singapore Fresh Terminal',
    category: 'wholesale',
    categoryLabel: 'Wholesale Terminals',
    role: 'Direct Wholesale Import Corridor',
    location: 'Singapore Import Hub',
    badge: 'Pacific Trade Buyer',
    commodities: 'Bananas · Moringa · Lemons',
    iconType: 'hub',
  },
  {
    id: 'koyambedu',
    name: 'Koyambedu Agro Consortium',
    category: 'wholesale',
    categoryLabel: 'Wholesale Terminals',
    role: 'Terminal Wholesale Trading',
    location: 'Chennai, Tamil Nadu',
    badge: 'Domestic Wholesale Partner',
    commodities: 'Daily Farm-Gate Bulk Dispatch',
    iconType: 'agro',
  },
  {
    id: 'dindigul-central',
    name: 'Dindigul Onion Trading Terminal',
    category: 'wholesale',
    categoryLabel: 'Wholesale Terminals',
    role: 'Regional Agricultural Aggregation Hub',
    location: 'Dindigul agrarian belt, TN',
    badge: 'Farm-Gate Aggregator',
    commodities: 'Bellary Onions · Dindigul Small Shallots',
    iconType: 'agro',
  },

  // 3. Hospitality & Island Reefer Networks
  {
    id: 'maldives-resort',
    name: 'Maldives Island Cargo Supply',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Resorts',
    role: 'Hospitality & Luxury Resorts Network',
    location: 'Malé, Republic of Maldives',
    badge: 'Island Reefer Network',
    commodities: 'Continuous Weekly Resort Cold Reefer Supply',
    iconType: 'resort',
  },
  {
    id: 'indian-ocean-feeder',
    name: 'Indian Ocean Feeder Supply',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Resorts',
    role: 'Maritime Foodservice Provisioning',
    location: 'Gulf of Mannar & Colombo Corridor',
    badge: 'Marine Provisioning',
    commodities: 'Fresh Fruits · Culinary Veg · Herbs',
    iconType: 'shipping',
  },

  // 4. Ocean Reefer Carriers & Air Cargo Liners
  {
    id: 'maersk-reefer',
    name: 'Maersk Reefer Logistics',
    category: 'carriers',
    categoryLabel: 'Freight & Reefer Liners',
    role: 'Controlled-Atmosphere Maritime Freight',
    location: 'VOC Port Tuticorin Gateway',
    badge: 'Cold-Chain Shipping Line',
    commodities: 'FCL CA Reefers (+13.5°C Bananas)',
    iconType: 'reefer',
  },
  {
    id: 'cma-cgm',
    name: 'CMA CGM Reefer Care',
    category: 'carriers',
    categoryLabel: 'Freight & Reefer Liners',
    role: 'Perishable Sea Freight Line',
    location: 'Chennai Port & Colombo Hub',
    badge: 'Global Maritime Line',
    commodities: 'Direct SE Asia & Gulf Maritime Reefers',
    iconType: 'shipping',
  },
  {
    id: 'msc-cold',
    name: 'MSC Mediterranean Cold Chain',
    category: 'carriers',
    categoryLabel: 'Freight & Reefer Liners',
    role: 'Global Ocean Reefer Fleet',
    location: 'Tuticorin & Cochin Port Hubs',
    badge: 'Global Sea Freight',
    commodities: 'Temperature-Logged Container Cargo',
    iconType: 'shipping',
  },
  {
    id: 'madurai-air',
    name: 'Madurai Air Cargo Complex',
    category: 'carriers',
    categoryLabel: 'Freight & Reefer Liners',
    role: 'Perishable Air Freight Terminal',
    location: 'Madurai International (IXM)',
    badge: 'Same-Day Air Freight',
    commodities: 'Direct Air Shipments: Dubai & Singapore',
    iconType: 'air',
  },
  {
    id: 'voc-port',
    name: 'VOC Tuticorin Port Authority',
    category: 'carriers',
    categoryLabel: 'Freight & Reefer Liners',
    role: 'Deep-Water Container Port Terminal',
    location: 'Gulf of Mannar Maritime Gateway',
    badge: '24h Reefer Plug-In',
    commodities: 'Container Reefer Yard & Pre-Cooling Hub',
    iconType: 'shipping',
  },

  // 5. Quality & Export Regulatory Bodies
  {
    id: 'apeda',
    name: 'APEDA Govt. of India',
    category: 'compliance',
    categoryLabel: 'Export & Regulatory Bodies',
    role: 'Agricultural Export Authority',
    location: 'Ministry of Commerce & Industry',
    badge: 'Registered RCMC Exporter',
    commodities: 'Official Certificate of Export Registration',
    iconType: 'cert',
  },
  {
    id: 'fssai',
    name: 'FSSAI Central Safety License',
    category: 'compliance',
    categoryLabel: 'Export & Regulatory Bodies',
    role: 'Food Safety & Standards Authority',
    location: 'Government of India',
    badge: 'Food Safety Compliance',
    commodities: 'Central Commercial Export & Sorting Standard',
    iconType: 'cert',
  },
  {
    id: 'quarantine',
    name: 'Plant Quarantine Directorate',
    category: 'compliance',
    categoryLabel: 'Export & Regulatory Bodies',
    role: 'Zero Quarantine Pests & Residues',
    location: 'Phytosanitary Pre-Inspection',
    badge: 'Phytosanitary Clearance',
    commodities: 'Mandatory Lab Phytosanitary Health Certification',
    iconType: 'cert',
  },
];

const CATEGORIES: { key: PartnerCategoryKey; label: string; count: number }[] = [
  { key: 'all', label: 'All Partners & Customers', count: PARTNERS_DATA.length },
  { key: 'hypermarket', label: 'Hypermarket Chains', count: 4 },
  { key: 'wholesale', label: 'Wholesale Terminals', count: 4 },
  { key: 'hospitality', label: 'Hospitality & Resorts', count: 2 },
  { key: 'carriers', label: 'Ocean & Air Liners', count: 5 },
  { key: 'compliance', label: 'Export Authorities', count: 3 },
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
          <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
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
    case 'cert':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'air':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="partner-svg-icon" aria-hidden="true">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-1.9.9l-.4.9 5.5 3.5L5 15l-2.5-.5L1 16l3.5 2 2 3.5 1.5-1.5L7.5 17.5l3 3.5.9-.4c.7-.3 1.1-1.1.9-1.9z" />
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

export default function PartnerMarquee({ title, subtitle }: { title?: string; subtitle?: string }) {
  const [activeCategory, setActiveCategory] = useState<PartnerCategoryKey>('all');
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');

  // Filtered partners for grid or focused view
  const filteredPartners = activeCategory === 'all'
    ? PARTNERS_DATA
    : PARTNERS_DATA.filter(p => p.category === activeCategory);

  // For Continuous Marquee: Row 1 (Hypermarkets & Wholesale) and Row 2 (Carriers, Hospitality & Certifications)
  const row1Buyers = PARTNERS_DATA.filter(p => p.category === 'hypermarket' || p.category === 'wholesale');
  const row2Logistics = PARTNERS_DATA.filter(p => p.category === 'carriers' || p.category === 'compliance' || p.category === 'hospitality');

  const row1List = [...row1Buyers, ...row1Buyers];
  const row2List = [...row2Logistics, ...row2Logistics];

  return (
    <section className="partners-marquee-section" aria-label="Our Trustable Partners and Customer List">
      <div className="container">
        {/* Section Header */}
        <div className="partners-header text-center">
          <span className="partners-eyebrow">
            <span className="live-pulse-dot green"></span>
            OUR TRUSTABLE PARTNERS (CUSTOMER &amp; TRADE LIST)
          </span>
          <h2 className="partners-heading">
            {title ? title : (
              <>
                Our Trustable Partners: <span className="text-gold">Verified Customer &amp; Trade Ecosystem</span>
              </>
            )}
          </h2>
          <p className="partners-subheading">
            {subtitle ? subtitle : (
              'Supplying premier international hypermarket chains, regional wholesale produce terminals, and luxury island resort supply networks with synchronized ocean and air cold-chain corridors.'
            )}
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="partner-categories-bar" role="tablist" aria-label="Partner categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`partner-cat-pill ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    // If user clicks a specific category, auto-switch to grid view for focused exploration
                    if (cat.key !== 'all' && viewMode === 'marquee') {
                      setViewMode('grid');
                    }
                  }}
                >
                  <span className="cat-name">{cat.label}</span>
                  <span className="cat-count">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (Marquee vs Categorized Grid) */}
          <div className="partner-view-toggle-wrap">
            <span className="view-toggle-label">Display Mode:</span>
            <div className="partner-view-toggle">
              <button
                type="button"
                className={`view-btn ${viewMode === 'marquee' ? 'active' : ''}`}
                onClick={() => {
                  setViewMode('marquee');
                  setActiveCategory('all');
                }}
                title="Continuous Animated Marquee"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Animated Marquee</span>
              </button>

              <button
                type="button"
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Categorized Partner Directory Grid"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Categorized Directory</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: DUAL-TRACK ANIMATED MARQUEE */}
      {viewMode === 'marquee' && (
        <div className="partners-marquee-container">
          {/* Track 1: Global Consignees, Retailers & Wholesale Hubs (Scrolling Left) */}
          <div className="marquee-wrapper" role="region" aria-label="Customer list: Hypermarkets and wholesale buyers">
            <div className="marquee-fade-overlay left"></div>
            <div className="marquee-fade-overlay right"></div>

            <div className="marquee-track marquee-track-left">
              {row1List.map((partner, index) => (
                <div
                  key={`track1-${partner.id}-${index}`}
                  className="partner-card"
                  title={`${partner.name} - ${partner.role}`}
                >
                  <div className="partner-card-inner">
                    <div className="partner-logo-emblem">
                      <PartnerIcon type={partner.iconType} />
                    </div>
                    <div className="partner-info">
                      <div className="partner-category-tag">{partner.categoryLabel}</div>
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
                      <div className="partner-commodities-pill">
                        <span>{partner.commodities}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Ocean Freight Carriers, Air Cargo & Certifications (Scrolling Right / Reverse) */}
          <div className="marquee-wrapper marquee-wrapper-reverse" role="region" aria-label="Logistics carriers and quality certifications">
            <div className="marquee-fade-overlay left"></div>
            <div className="marquee-fade-overlay right"></div>

            <div className="marquee-track marquee-track-right">
              {row2List.map((carrier, index) => (
                <div
                  key={`track2-${carrier.id}-${index}`}
                  className="partner-card partner-card-gold"
                  title={`${carrier.name} - ${carrier.role}`}
                >
                  <div className="partner-card-inner">
                    <div className="partner-logo-emblem emblem-gold">
                      <PartnerIcon type={carrier.iconType} />
                    </div>
                    <div className="partner-info">
                      <div className="partner-category-tag tag-gold">{carrier.categoryLabel}</div>
                      <div className="partner-badge-chip chip-gold">{carrier.badge}</div>
                      <h3 className="partner-name">{carrier.name}</h3>
                      <div className="partner-meta">
                        <span className="partner-location">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          {carrier.location}
                        </span>
                      </div>
                      <div className="partner-commodities-pill pill-gold">
                        <span>{carrier.commodities}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: CATEGORIZED PARTNER & CUSTOMER DIRECTORY GRID */}
      {viewMode === 'grid' && (
        <div className="container">
          <div className="partner-categorized-grid">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="category-partner-card">
                <div className="category-partner-header">
                  <div className="partner-logo-emblem">
                    <PartnerIcon type={partner.iconType} />
                  </div>
                  <div className="category-badge-group">
                    <span className="partner-category-tag">{partner.categoryLabel}</span>
                    <span className="partner-badge-chip">{partner.badge}</span>
                  </div>
                </div>

                <div className="category-partner-body">
                  <h3 className="cat-partner-title">{partner.name}</h3>
                  <p className="cat-partner-role">{partner.role}</p>

                  <div className="cat-partner-location">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{partner.location}</span>
                  </div>

                  <div className="cat-partner-commodities">
                    <span className="commodities-heading">Core Scope &amp; Commodities:</span>
                    <p>{partner.commodities}</p>
                  </div>
                </div>

                <div className="category-partner-footer">
                  <Link href="/contact" className="partner-inquire-link">
                    <span>Enquire for this Corridor &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              onClick={() => {
                setActiveCategory('all');
                setViewMode('marquee');
              }}
            >
              <span>&larr; Switch to Continuous Animated Marquee</span>
            </button>
          </div>
        </div>
      )}

      {/* Trust Capability Metrics Underneath */}
      <div className="container">
        <div className="partner-trust-metrics">
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
