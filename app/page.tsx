import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { TEAM_MEMBERS } from '@/data/team';

export default function HomePage() {
  return (
    <>
      {/* ====================================================================
           SECTION 1: HERO SECTION
           ==================================================================== */}
      <section className="hero-section" id="home" aria-label="Hero Introduction">
        <div className="hero-bg">
          <picture>
            <source srcSet="/assets/images/fresh-produce-hero.webp" type="image/webp" />
            <img
              src="/assets/images/fresh-produce-hero.jpg"
              alt="Lush agricultural produce farm with basket of freshly harvested vegetables and fruits"
              className="hero-bg-img"
              width={1376}
              height={768}
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Fresh Produce · Professional Trade
            </span>

            <h1 className="hero-heading">
              Connecting Quality Produce to <span className="text-gold">Global Markets</span>.
            </h1>

            <p className="hero-description">
              Santal Nexus connects fresh produce sourcing with the needs of business buyers through quality-focused procurement, professional coordination and a commitment to long-term trading relationships.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn btn-gold">
                <span>Explore Our Products</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                <span>Discuss Your Requirements</span>
              </Link>
            </div>

            <div className="hero-descriptor">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Madurai, India · Domestic Trading · International Trade Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: CERTIFIED AGRICULTURAL TRUST & PORT GATEWAYS
           ==================================================================== */}
      <section className="capability-strip" aria-label="Agricultural Certifications and Trade Capabilities">
        <div className="container">
          <div className="capability-grid">
            <div className="capability-item reveal-on-scroll">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="capability-text">
                <span className="cert-subtitle">Govt. of India Recognized</span>
                <h3>APEDA Registered Exporter</h3>
                <p>Official RCMC merchant exporter registration for fresh fruits &amp; vegetables with full compliance.</p>
              </div>
            </div>

            <div className="capability-item reveal-on-scroll">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="capability-text">
                <span className="cert-subtitle">Food Safety Standard</span>
                <h3>FSSAI Central License</h3>
                <p>Stringent compliance with hygienic farm-gate procurement, cold store handling, and packhouse sorting norms.</p>
              </div>
            </div>

            <div className="capability-item reveal-on-scroll">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="capability-text">
                <span className="cert-subtitle">Plant Quarantine Clearance</span>
                <h3>Phytosanitary Pre-Inspection</h3>
                <p>Directorate of Plant Protection certification. Lab tested for zero quarantine pests &amp; pesticide residue levels.</p>
              </div>
            </div>

            <div className="capability-item reveal-on-scroll">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className="capability-text">
                <span className="cert-subtitle">Cold-Chain Maritime Access</span>
                <h3>VOC Tuticorin Sea Port</h3>
                <p>24-hour maritime reefer connectivity via VOC Port Tuticorin, Chennai Port, and Madurai Air Cargo terminals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: ABOUT SANTAL NEXUS
           ==================================================================== */}
      <section className="section-padding section-ivory" id="about" aria-label="About Santal Nexus">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal-on-scroll">
              <span className="section-eyebrow no-rule">About Santal Nexus</span>
              <h2 className="section-heading">Built on Relationships. Driven by Opportunity.</h2>

              <div className="about-paragraphs">
                <p>
                  Santal Nexus is an India-based fruits and vegetables trading business focused on connecting sourcing opportunities with the needs of domestic and international buyers.
                </p>
                <p>
                  Operating from Madurai, Tamil Nadu, we focus on produce trading, procurement discussions and business-to-business supply relationships.
                </p>
                <p>
                  We believe successful trading begins with understanding product requirements, communicating clearly and developing dependable long-term business relationships.
                </p>
              </div>

              <div className="about-mission-box">
                <h4>Our Mission</h4>
                <p>
                  To build dependable produce trading relationships through quality-oriented sourcing, professional coordination and responsible business practices.
                </p>
              </div>

              <div>
                <Link href="/about" className="btn btn-outline-dark">
                  <span>Learn More About Us</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="about-visual reveal-on-scroll">
              <div className="about-image-card">
                <picture>
                  <source srcSet="/assets/images/agricultural-field.webp" type="image/webp" />
                  <img src="/assets/images/agricultural-field.jpg" alt="Lush cultivated agricultural field in India under morning sunlight" width={1200} height={896} loading="lazy" />
                </picture>
                <div className="about-visual-badge">
                  <span>Field Sourcing Coordination</span>
                  <p>Direct coordination with regional growers and wholesale markets across Tamil Nadu and South India.</p>
                </div>
              </div>
            </div>
          </div>

          {/* VALUES GRID */}
          <div className="values-block reveal-on-scroll">
            <div className="values-header">
              <span className="section-eyebrow">Our Principles</span>
              <h3 className="values-title">Our Values</h3>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h4>Quality</h4>
                <p>We deliver only the best produce.</p>
              </div>

              <div className="value-card">
                <div className="value-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4>Trust</h4>
                <p>Building long-term relationships.</p>
              </div>

              <div className="value-card">
                <div className="value-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h4>Sustainability</h4>
                <p>Supporting farmers and communities.</p>
              </div>

              <div className="value-card">
                <div className="value-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4>Global Mindset</h4>
                <p>Local roots, international reach.</p>
              </div>
            </div>
          </div>

          {/* WHY CHOOSE US CHECKLIST */}
          <div className="about-why-feature reveal-on-scroll">
            <div className="about-why-checklist">
              <h3>Why Choose Us?</h3>
              <ul className="check-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fresh, high-quality produce</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reliable supply chain &amp; timely delivery</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Professional coordination</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Customer-focused approach</span>
                </li>
              </ul>
            </div>

            <div className="about-why-calligraphy">
              <span className="calligraphy-tagline">Expanding<br />Beyond Borders</span>
              <div className="calligraphy-rule"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: PRODUCT CATEGORIES
           ==================================================================== */}
      <section className="section-padding section-white" id="products" aria-label="Product Categories">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Our Products</span>
            <h2 className="section-heading">Fresh Produce. Professional Trade.</h2>
            <p className="section-subtext">
              Explore our core product categories. Availability, grades, quantities and packing requirements can be discussed according to each enquiry.
            </p>
          </div>

          <div className="products-grid">
            <article className="product-card reveal-on-scroll">
              <div className="product-image-wrap">
                <picture>
                  <source srcSet="/assets/images/fresh-vegetables.webp" type="image/webp" />
                  <img src="/assets/images/fresh-vegetables.jpg" alt="Crisp fresh vegetables including shallots, drumsticks, chillies and tomatoes" width={1200} height={896} loading="lazy" />
                </picture>
                <span className="product-badge">Farm Staples &amp; Vegetables</span>
              </div>
              <div className="product-body">
                <h3>Fresh Regional Vegetables</h3>
                <p>Direct farm-gate sourcing of Small Red Onions (Sambar Shallots), export-cut Moringa Drumsticks, G4 Green Chillies, and Gherkins calibrated to international buyer specifications.</p>
                <div className="product-meta-pills">
                  <span className="meta-pill">Madurai &amp; Dindigul Origin</span>
                  <span className="meta-pill">Graded &amp; Sorted</span>
                </div>
                <Link href="/products" className="product-action-btn" aria-label="View Farm Staples and Vegetables">
                  <span>View Catalog Matrix</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>

            <article className="product-card reveal-on-scroll">
              <div className="product-image-wrap">
                <picture>
                  <source srcSet="/assets/images/fresh-fruits.webp" type="image/webp" />
                  <img src="/assets/images/fresh-fruits.jpg" alt="Fresh tropical fruits including Cavendish G9 bananas, mangoes, and pomegranates" width={1200} height={896} loading="lazy" />
                </picture>
                <span className="product-badge">Tropical Orchard Fruits</span>
              </div>
              <div className="product-body">
                <h3>Tropical Orchard Fruits</h3>
                <p>Premium Cavendish G9 Bananas (+13.5°C reefer calibrated), GI-tagged Alphonso &amp; Banganapalli Mangoes, Bhagwa Pomegranates, and crisp Taiwan Pink Guavas.</p>
                <div className="product-meta-pills">
                  <span className="meta-pill">Reefer Ready</span>
                  <span className="meta-pill">Optical Sizing</span>
                </div>
                <Link href="/products" className="product-action-btn" aria-label="View Tropical Orchard Fruits">
                  <span>View Catalog Matrix</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>

            <article className="product-card reveal-on-scroll">
              <div className="product-image-wrap">
                <picture>
                  <source srcSet="/assets/images/seasonal-produce.webp" type="image/webp" />
                  <img src="/assets/images/seasonal-produce.jpg" alt="Fresh curry leaves, herbs and seasonal horticultural crops" width={1200} height={896} loading="lazy" />
                </picture>
                <span className="product-badge">Fresh Leafy Greens &amp; Herbs</span>
              </div>
              <div className="product-body">
                <h3>Leafy Greens &amp; Culinary Herbs</h3>
                <p>Express morning harvest of high-aroma Curry Leaves, hydro-cooled Coriander bunches, Fresh Mint, and regional seasonal specialties dispatched for rapid air-cargo delivery.</p>
                <div className="product-meta-pills">
                  <span className="meta-pill">Air Cargo Dispatched</span>
                  <span className="meta-pill">Hydro-Cooled</span>
                </div>
                <Link href="/products" className="product-action-btn" aria-label="View Leafy Greens and Herbs">
                  <span>View Catalog Matrix</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>

            <article className="product-card reveal-on-scroll">
              <div className="product-image-wrap">
                <picture>
                  <source srcSet="/assets/images/bulk-produce-crates.webp" type="image/webp" />
                  <img src="/assets/images/bulk-produce-crates.jpg" alt="Commercial produce crates, packing facility and container loading" width={1200} height={896} loading="lazy" />
                </picture>
                <span className="product-badge">Custom Sourcing &amp; Procurement</span>
              </div>
              <div className="product-body">
                <h3>Commercial Bulk Procurement</h3>
                <p>Dedicated contract farming aggregation, custom CFB ventilated master cartons, brand labeling, and full container load (FCL) coordination under standard Incoterms.</p>
                <div className="product-meta-pills">
                  <span className="meta-pill">FCL Reefer Containers</span>
                  <span className="meta-pill">FOB / CIF Trade</span>
                </div>
                <Link href="/contact" className="product-action-btn" aria-label="Enquire Bulk Procurement">
                  <span>Enquire Container Load</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          </div>

          {/* Product Quality Assurance Strip */}
          <div className="product-assurance-strip reveal-on-scroll">
            <div className="product-assurance-item">
              <div className="assurance-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="assurance-text">
                <h4>Farm Fresh</h4>
                <p>Direct from trusted farms</p>
              </div>
            </div>

            <div className="product-assurance-item">
              <div className="assurance-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="assurance-text">
                <h4>Quality Checked</h4>
                <p>Before Export</p>
              </div>
            </div>

            <div className="product-assurance-item">
              <div className="assurance-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className="assurance-text">
                <h4>Flexible Supply</h4>
                <p>As per buyer needs</p>
              </div>
            </div>

            <div className="product-assurance-item">
              <div className="assurance-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="assurance-text">
                <h4>Global Standards</h4>
                <p>Safe &amp; reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: GLOBAL FRESH PRODUCE PARTNER BANNER
           ==================================================================== */}
      <section className="global-partner-banner" id="partner-banner" aria-label="Your Global Fresh Produce Partner">
        <div className="banner-bg">
          <picture>
            <source srcSet="/assets/images/global-partner-banner.webp" type="image/webp" />
            <img src="/assets/images/global-partner-banner.jpg" alt="Your Global Fresh Produce Partner - Cargo Vessel and Worldwide Trade Routes" className="banner-bg-img" width={1920} height={1072} loading="lazy" />
          </picture>
        </div>
        <div className="banner-overlay" aria-hidden="true"></div>

        <div className="container banner-container">
          <div className="banner-content reveal-on-scroll">
            <h2 className="banner-heading">
              Your Global Fresh<br />Produce Partner
            </h2>
            <div className="banner-values">
              <span className="value-item">Quality</span>
              <span className="value-sep" aria-hidden="true">|</span>
              <span className="value-item">Reliability</span>
              <span className="value-sep" aria-hidden="true">|</span>
              <span className="value-item">Growth</span>
            </div>
            <div className="banner-cta-wrap">
              <Link href="/contact" className="btn btn-gold banner-cta-btn">
                <span>Get in Touch</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 6: TRADING & SOURCING SERVICES
           ==================================================================== */}
      <section className="section-padding section-soft-green" id="services" aria-label="Trading and Sourcing Services">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-heading">Trade Solutions Built Around Your Business.</h2>
            <p className="section-subtext">
              We bridge procurement requirements with agricultural sourcing capabilities, supporting clear commercial discussions at every stage.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3>Produce Sourcing</h3>
              <p>Understanding product type, specifications, quantity and availability before discussing suitable sourcing options.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>B2B Supply Coordination</h3>
              <p>Coordinating commercial enquiries and communications between buyers and relevant sourcing partners.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3>Bulk Order Discussions</h3>
              <p>Discussing quantity, packaging preferences, pricing and delivery expectations before order confirmation.</p>
            </div>

            <div className="service-card reveal-on-scroll">
              <div className="service-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3>International Trade Enquiries</h3>
              <p>Exploring sourcing and trade opportunities with overseas buyers, subject to feasibility and applicable requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 7: EXPORT & GLOBAL REACH
           ==================================================================== */}
      <section className="section-padding global-reach-section" id="global-reach" aria-label="Export and Global Reach">
        <div className="global-reach-bg">
          <picture>
            <source srcSet="/assets/images/global-trade-vessel.webp" type="image/webp" />
            <img src="/assets/images/global-trade-vessel.jpg" alt="Commercial container cargo ship transporting goods on global maritime trade routes" width={1376} height={768} loading="lazy" />
          </picture>
        </div>
        <div className="global-reach-overlay"></div>

        <div className="container global-reach-container">
          <div className="global-reach-header reveal-on-scroll">
            <span className="section-eyebrow">Global Reach</span>
            <h2 className="section-heading">From Indian Produce to Global Opportunities.</h2>
            <p className="section-subtext">
              Santal Nexus is focused on developing business relationships that connect suitable Indian produce sourcing opportunities with the needs of overseas buyers.
            </p>
          </div>

          <div className="global-capabilities-grid">
            <div className="global-cap-card reveal-on-scroll">
              <div className="global-cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Product &amp; Specification Discussions</h3>
              <p>Clear consultations on product varieties, grading criteria, sizing, and post-harvest quality expectations.</p>
            </div>

            <div className="global-cap-card reveal-on-scroll">
              <div className="global-cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Packaging &amp; Order Coordination</h3>
              <p>Collaborative alignment on commercial packing formats, cartons, labeling, and palletizing requirements.</p>
            </div>

            <div className="global-cap-card reveal-on-scroll">
              <div className="global-cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3>Destination-Specific Requirements</h3>
              <p>Open discussions regarding target country protocols, documentation coordination, and import viability.</p>
            </div>
          </div>

          <div className="export-showcase-box reveal-on-scroll">
            <div className="export-showcase-left">
              <span className="section-eyebrow no-rule">International Supply</span>
              <h3>Taking Indian Fresh Produce to the World</h3>
              <p>
                We specialize in exporting high-quality fruits and vegetables to international markets, with a focus on reliable supply, safe handling and timely delivery.
              </p>

              <div className="export-services-list">
                <h4>Our Export Services</h4>
                <ul className="check-list check-list-gold">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fresh fruits &amp; vegetables</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Proper grading &amp; packaging</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Documentation &amp; compliance support</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>On-time delivery &amp; tracking</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dedicated export coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="export-showcase-right">
              <div className="export-map-card">
                <picture>
                  <source srcSet="/assets/images/export-routes-map.webp" type="image/webp" />
                  <img src="/assets/images/export-routes-map.png" alt="Santal Nexus Global Trade Routes connecting India to international export destinations" className="export-map-img" width={630} height={340} loading="lazy" />
                </picture>
                <div className="export-market-badge">
                  <span className="market-badge-title">Our Key Export Market</span>
                  <div className="market-country">
                    <span className="country-flag" aria-hidden="true">🇲🇾</span>
                    <div className="country-details">
                      <strong>Malaysia</strong>
                      <p>Fresh, Safe, Sustainable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="global-focus-bar reveal-on-scroll">
            <div className="global-focus-info">
              <div className="global-focus-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="global-focus-text">
                <h4>Prospective Trade Opportunities</h4>
                <p>We actively explore fresh produce sourcing discussions with international buyers across Southeast Asia (including prospective enquiries in Malaysia) and the Middle East.</p>
              </div>
            </div>
            <Link href="/export-services" className="btn btn-gold">
              <span>Explore Export Services</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 8: WHY CHOOSE SANTAL NEXUS
           ==================================================================== */}
      <section className="section-padding section-white" aria-label="Why Choose Santal Nexus">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-heading">A Professional Partner for Produce Trading.</h2>
            <p className="section-subtext">
              Our trade philosophy is rooted in commercial clarity, dependable coordination, and long-term business values.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card reveal-on-scroll">
              <span className="why-card-number">01</span>
              <h3>Buyer-Focused Communication</h3>
              <p>We aim to understand product and procurement requirements before discussing sourcing options.</p>
            </div>

            <div className="why-card reveal-on-scroll">
              <span className="why-card-number">02</span>
              <h3>Quality-Oriented Approach</h3>
              <p>Product specifications and expectations are discussed clearly during the enquiry process.</p>
            </div>

            <div className="why-card reveal-on-scroll">
              <span className="why-card-number">03</span>
              <h3>Relationship-Driven Trading</h3>
              <p>We value dependable communication and long-term commercial relationships.</p>
            </div>

            <div className="why-card reveal-on-scroll">
              <span className="why-card-number">04</span>
              <h3>Flexible Enquiry Discussions</h3>
              <p>Product types, quantities, packing preferences and delivery expectations can be discussed according to the order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 9: OUR TEAM
           ==================================================================== */}
      <section className="section-padding team-section" id="team" aria-label="Our Team">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Our Team</span>
            <h2 className="section-heading">Strong People. Global Vision.</h2>
            <p className="section-subtext">
              Meet the dedicated team behind Santal Nexus, working together to bring the best of Indian fresh produce to the world.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.id} className="team-card reveal-on-scroll">
                <div className="team-image-wrap">
                  <picture>
                    <source srcSet={member.photoWebp} type="image/webp" />
                    <img src={member.photoJpg} alt={`${member.name} - ${member.role}`} width={288} height={244} loading="lazy" />
                  </picture>
                </div>
                <div className="team-body">
                  <span className="team-badge">{member.badge}</span>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-pillars">{member.pillars}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="partnership-callout reveal-on-scroll" style={{ marginTop: '3.5rem' }}>
            <div className="partnership-callout-text">
              <h3>Partnerships That Move Business Forward.</h3>
              <p>We welcome conversations with produce suppliers, wholesale buyers and business partners interested in exploring suitable trading opportunities across regional and international markets.</p>
            </div>
            <Link href="/team" className="btn btn-gold">
              <span>View Full Leadership Team</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 10: BUSINESS ENQUIRY CTA STRIP
           ==================================================================== */}
      <section className="cta-strip-section" aria-label="Enquiry Call to Action">
        <div className="container">
          <div className="cta-strip-content reveal-on-scroll">
            <span className="section-eyebrow">Direct Trade Dialogue</span>
            <h2>Let's Discuss Your Sourcing Requirements.</h2>
            <p>
              Tell us what products you need, the quantities you are considering and your destination. Our team can review your enquiry and discuss suitable next steps.
            </p>
            <div className="cta-strip-buttons">
              <Link href="/contact" className="btn btn-gold">
                <span>Send a Business Enquiry</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a
                href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20enquire%20about%20fresh%20produce%20sourcing."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 11: CONTACT SECTION & ENQUIRY FORM
           ==================================================================== */}
      <section className="section-padding section-white" id="contact" aria-label="Contact and Business Enquiry">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-col reveal-on-scroll">
              <span className="section-eyebrow no-rule">Get in Touch</span>
              <h2 className="section-heading">Let's Connect Directly.</h2>
              <p className="contact-intro-text">
                We welcome enquiries from produce wholesale buyers, institutional buyers, and business partners. Reach out to discuss specifications, pricing indications, and delivery coordination.
              </p>

              <div className="contact-cards-stack">
                <div className="contact-card-item">
                  <div className="contact-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <span>Contact Person</span>
                    <p>Bala Chellapandiyan</p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <span>Direct Telephone</span>
                    <p><a href="tel:+919994640141">+91 99946 40141</a></p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <span>Business Email</span>
                    <p><a href="mailto:santalnexus@gmail.com">santalnexus@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <span>Registered Trade Office</span>
                    <p id="businessAddressDisplay">
                      Building No. 391/3, Opp. UCO Bank,<br />
                      Dindigul Main Road, T. Vadiapatti,<br />
                      Madurai – 625218, Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card reveal-on-scroll">
              <div className="form-header">
                <h3>Send a Business Enquiry</h3>
                <p>Complete the form below. Your specifications will be formatted directly for our commercial team.</p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
