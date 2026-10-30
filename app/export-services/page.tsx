import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ExportRfqForm from '@/components/ExportRfqForm';
import FaqAccordion from '@/components/FaqAccordion';
import { EXPORT_CORRIDORS, INCOTERMS, REEFER_SPECS } from '@/data/exportCorridors';
import { FAQ_ITEMS } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Export Services & Cold-Chain Logistics | APEDA Compliant',
  description:
    'Comprehensive cross-border agricultural logistics from Madurai & VOC Port Tuticorin to Malaysia, Singapore, Middle East & Europe. Reefer containers, phytosanitary clearance, Incoterms FOB/CIF, and commercial RFQs.',
};

export default function ExportServicesPage() {
  const exportFaqs = FAQ_ITEMS.filter((f) => f.category === 'export' || f.category === 'quality' || f.category === 'payments');

  return (
    <div className="page-export">
      {/* ====================================================================
           SECTION 1: HERO BANNER
           ==================================================================== */}
      <section className="page-hero-banner" aria-label="Export Services Hero Banner">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/assets/images/export-hero-bg.webp" type="image/webp" />
            <img
              src="/assets/images/export-hero-bg.jpg"
              alt="International container vessel carrying fresh produce cold-chain reefer cargo"
              className="page-hero-img"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-container">
          <div className="page-hero-content reveal-on-scroll">
            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Export Services</li>
              </ol>
            </nav>

            <h1 className="page-hero-title">Export Services</h1>
            <p className="page-hero-subtitle">Connecting South Indian Harvests with Global Markets</p>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: PROCESS & CAPABILITIES SHOWCASE
           ==================================================================== */}
      <section className="export-main-showcase-section" aria-label="Our Export Process and Capabilities">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">End-to-End Cold Chain</span>
            <h2 className="section-heading">From Farm Harvest to Foreign Discharge Port</h2>
            <p className="section-subtext">
              We manage the entire export journey: pre-cooling, packhouse grading, moisture-resistant packaging, customs clearance, and refrigerated maritime shipping.
            </p>
          </div>

          <div className="services-grid" style={{ marginTop: '2.5rem' }}>
            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>1. Pre-Cooling &amp; Packhouse</h3>
              <p>Hydro-cooling or forced-air cooling within 3 hours of picking eliminates field heat, locking in natural brix sweetness and cell firmness.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>2. Custom Carton Packaging</h3>
              <p>5-ply and 7-ply heavy-duty corrugated export boxes with custom ventilation holes, ethylene absorption pads, and pallet strapping.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3>3. Regulatory Documentation</h3>
              <p>Government Phytosanitary certificates, APEDA RCMC, Certificates of Origin, and SGS/third-party quality inspection reports.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3>4. Reefer Container Shipping</h3>
              <p>Direct weekly vessel departures via VOC Port Tuticorin &amp; Chennai with micro-processor temperature logging throughout ocean transit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: STRATEGIC EXPORT CORRIDORS & PORT CONNECTIVITY
           ==================================================================== */}
      <section className="export-corridors-section" id="export-corridors" aria-label="Strategic Export Corridors">
        <div className="container">
          <div className="corridors-layout-grid">
            <div className="corridors-info-wrap reveal-on-scroll">
              <span className="section-eyebrow">Strategic Shipping Routes</span>
              <h2 className="corridors-heading">Connecting South Indian Harvests with Major International Trade Ports</h2>
              <p className="corridors-description">
                Santal Nexus operates from Tamil Nadu’s agricultural heartland in Madurai, strategically positioned within rapid transit reach of South India’s major international container seaports and air freight terminals.
              </p>

              <div className="corridor-cards-grid">
                {EXPORT_CORRIDORS.map((corridor) => (
                  <div key={corridor.country} className="corridor-stat-card">
                    <span className="corridor-flag-badge" aria-hidden="true">{corridor.flag}</span>
                    <h4>{corridor.country}</h4>
                    <p><strong>{corridor.ports}:</strong> {corridor.description} ({corridor.transitTime})</p>
                  </div>
                ))}
              </div>

              <div className="port-proximity-strip" style={{ marginTop: '2rem' }}>
                <div className="port-strip-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="port-strip-text">
                  <h5>Rapid Port Gateway Advantage</h5>
                  <p>Our Madurai packhouse is just 140 km from VOC Port (Tuticorin), enabling fresh harvest-to-container stuffing in under 12 hours.</p>
                </div>
              </div>
            </div>

            <div className="corridors-visual-card reveal-on-scroll">
              <picture>
                <source srcSet="/assets/images/export-routes-map.webp" type="image/webp" />
                <img
                  src="/assets/images/export-routes-map.png"
                  alt="Santal Nexus International Export Routes Map connecting India to Malaysia, Singapore, and Global Ports"
                  className="corridors-map-img"
                  width={630}
                  height={340}
                  loading="lazy"
                />
              </picture>
              <div className="corridors-map-overlay">
                <h4>Key Hub: Tuticorin (VOC Port) &amp; Chennai</h4>
                <p>Direct weekly vessel calls ensuring optimal shelf life preservation and uninterrupted container availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: COLD-CHAIN INTEGRITY & PACKHOUSE EXCELLENCE
           ==================================================================== */}
      <section className="coldchain-section" id="coldchain" aria-label="Cold Chain and Packaging Infrastructure">
        <div className="container">
          <div className="section-intro-center coldchain-intro reveal-on-scroll">
            <span className="section-eyebrow eyebrow-light">Uncompromised Freshness</span>
            <h2 className="section-heading">Cold-Chain &amp; Packhouse Integrity Standards</h2>
            <p className="section-subtext">
              From the moment of farm picking to port handover, temperature and humidity parameters are rigorously maintained.
            </p>
          </div>

          <div className="coldchain-pillars-grid">
            <div className="coldchain-pillar-card reveal-on-scroll">
              <div className="coldchain-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="coldchain-pillar-title">Immediate Pre-Cooling</h3>
              <p className="coldchain-pillar-desc">
                Field heat is removed within 3-4 hours of harvest at our regional packhouses, arresting respiration and preserving crispness.
              </p>
            </div>

            <div className="coldchain-pillar-card reveal-on-scroll">
              <div className="coldchain-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="coldchain-pillar-title">Export-Grade CFB Packaging</h3>
              <p className="coldchain-pillar-desc">
                Multi-ply virgin kraft corrugated cartons with moisture-resistant sizing, ventilation holes, and corner post stacking strength.
              </p>
            </div>

            <div className="coldchain-pillar-card reveal-on-scroll">
              <div className="coldchain-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="coldchain-pillar-title">CA &amp; Dehum Reefers</h3>
              <p className="coldchain-pillar-desc">
                Controlled Atmosphere (CA) ocean reefer containers regulating O2/CO2 balances to extend transit life on long-haul sea voyages.
              </p>
            </div>

            <div className="coldchain-pillar-card reveal-on-scroll">
              <div className="coldchain-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="coldchain-pillar-title">Digital Data Logging</h3>
              <p className="coldchain-pillar-desc">
                Every container carries calibrated USB/IoT temperature loggers providing unbroken voyage data verification to the buyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: INCOTERMS & COMMERCIAL SHIPPING MODES
           ==================================================================== */}
      <section className="export-terms-section" id="incoterms" aria-label="Incoterms and Commercial Shipping Terms">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Commercial Terms</span>
            <h2 className="section-heading">Supported Incoterms &amp; Container Capacities</h2>
            <p className="section-subtext">
              Transparent commercial terms tailored to wholesale importers, distributors, supermarket chains, and food service partners globally.
            </p>
          </div>

          <div className="terms-grid">
            {INCOTERMS.map((term) => (
              <div key={term.code} className="term-box reveal-on-scroll">
                <div className="term-header">
                  <span className="term-code">{term.code}</span>
                  <span className="term-tag">{term.title}</span>
                </div>
                <h3 className="term-name">{term.sub}</h3>
                <p className="term-desc">{term.description}</p>
                <ul className="term-checklist">
                  {term.points.map((pt, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="reefer-specs-strip reveal-on-scroll" style={{ marginTop: '3rem' }}>
            {REEFER_SPECS.map((spec) => (
              <div key={spec.title} className="reefer-spec-col">
                <h5>{spec.title}</h5>
                <p><strong>Capacity:</strong> {spec.capacity}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{spec.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 6: INTERACTIVE EXPORT RFQ BUILDER
           ==================================================================== */}
      <section className="export-rfq-section" id="export-rfq" aria-label="Request an Export Quotation">
        <div className="container">
          <ExportRfqForm />
        </div>
      </section>

      {/* ====================================================================
           SECTION 7: EXPORT SERVICES FAQ
           ==================================================================== */}
      <section className="export-faq-section" id="faq" aria-label="Export Services FAQ">
        <div className="container faq-container-narrow">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Trade Inquiries</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subtext">Essential information for international produce buyers and trade partners.</p>
          </div>

          <FaqAccordion items={exportFaqs} defaultOpenId="faq-1" />
        </div>
      </section>

      {/* ====================================================================
           SECTION 8: CTA STRIP
           ==================================================================== */}
      <section className="about-cta-section" aria-label="Export Partnerships CTA">
        <div className="container">
          <div className="about-cta-box reveal-on-scroll">
            <div className="about-cta-content">
              <span className="section-eyebrow no-rule">Let's Connect</span>
              <h2 className="about-cta-heading">Ready to Discuss a Commercial Export Shipment?</h2>
              <p className="about-cta-subtext">
                Speak directly with Bala Chellapandiyan (+91 99946 40141) to receive detailed port schedules, packing specifications, or formal CIF quotations.
              </p>
              <div className="about-cta-actions">
                <a href="#export-rfq" className="btn btn-gold">
                  <span>Build an RFQ Now</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20discuss%20an%20export%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  <span>WhatsApp Commercial Lead</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
