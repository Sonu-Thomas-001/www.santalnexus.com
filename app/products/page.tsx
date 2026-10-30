import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProductFilter from '@/components/ProductFilter';
import { PRODUCE_CATEGORIES } from '@/data/products';

export const metadata: Metadata = {
  title: 'Our Products | Fresh Fruits & Vegetables Catalogue',
  description:
    'Explore Santal Nexus produce catalogue: Indian Red Onions, G9 Cavendish Bananas, Green Chillies, Moringa Drumsticks, Pomegranates and Leafy Greens. International export packaging and seasonal specs.',
};

export default function ProductsPage() {
  return (
    <div className="page-products">
      {/* ====================================================================
           SECTION 1: HERO BANNER
           ==================================================================== */}
      <section className="page-hero-banner" aria-label="Our Products Introduction">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/assets/images/products-hero-bg.webp" type="image/webp" />
            <img
              src="/assets/images/products-hero-bg.jpg"
              alt="Vibrant fresh produce assortment with ripe red tomatoes and peppers"
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
                <li className="active" aria-current="page">Products</li>
              </ol>
            </nav>

            <h1 className="page-hero-title">Our Products</h1>
            <p className="page-hero-subtitle">Fresh. Natural. Global Quality.</p>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: FRESH PRODUCE RANGE (4-Card Category Grid)
           ==================================================================== */}
      <section className="section-padding products-range-section" id="produce-range" aria-label="Fresh Produce Range">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <h2 className="section-heading">Fresh Produce Range</h2>
            <p className="section-subtext">
              We source and supply a wide variety of fresh fruits and vegetables, carefully selected to meet international quality standards.
            </p>
          </div>

          <div className="products-showcase-grid">
            {PRODUCE_CATEGORIES.map((cat) => (
              <article key={cat.id} className="product-showcase-card reveal-on-scroll">
                <div className="showcase-img-wrap">
                  <picture>
                    <source srcSet={cat.image} type="image/webp" />
                    <img
                      src={cat.imageFallback}
                      alt={cat.title}
                      className="showcase-card-img"
                      width={800}
                      height={800}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="showcase-card-body">
                  <h3 className="showcase-card-title">{cat.title}</h3>
                  <a href="#detailed-catalogue" className="showcase-link-btn" aria-label={`View ${cat.title} Products`}>
                    <span>View Products</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: QUALITY YOU CAN TRUST
           ==================================================================== */}
      <section className="quality-trust-strip" aria-label="Quality Assurance Pillars">
        <div className="container">
          <div className="quality-trust-box reveal-on-scroll">
            <h2 className="quality-trust-title">Quality You Can Trust</h2>

            <div className="quality-pillars-grid">
              <div className="quality-pillar-item">
                <div className="quality-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h4>Freshly Harvested</h4>
                <p>Direct from certified regional harvests</p>
              </div>

              <div className="quality-pillar-item">
                <div className="quality-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4>Stringent Quality Checks</h4>
                <p>Grading for size, skin health &amp; maturity</p>
              </div>

              <div className="quality-pillar-item">
                <div className="quality-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h4>Proper Packaging</h4>
                <p>Ventilated export cartons &amp; plastic crates</p>
              </div>

              <div className="quality-pillar-item">
                <div className="quality-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <h4>On-Time Delivery</h4>
                <p>Coordinated cold-chain to port &amp; markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: INTERACTIVE CATALOGUE & SPECIFICATIONS
           ==================================================================== */}
      <section className="section-padding products-catalog-section" id="detailed-catalogue" aria-label="Detailed Produce Catalogue">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Catalogue &amp; Sourcing Specifications</span>
            <h2 className="section-heading">Detailed Produce Offerings</h2>
            <p className="section-subtext">
              Below are our primary trade lines. Filter by category, review export calibrations, and send direct WhatsApp inquiries to our commercial desk.
            </p>
          </div>

          <ProductFilter />
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: GOOD PRODUCE BUILDS A HEALTHIER TOMORROW BANNER
           ==================================================================== */}
      <section className="products-tomorrow-section" aria-label="Good Produce Vision Banner">
        <div className="tomorrow-bg">
          <picture>
            <source srcSet="/assets/images/products-tomorrow-banner.webp" type="image/webp" />
            <img
              src="/assets/images/products-tomorrow-banner.jpg"
              alt="Agricultural sunrise farm landscape with harvest wooden crate overflowing with vegetables"
              className="tomorrow-bg-img"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </picture>
        </div>
        <div className="tomorrow-overlay" aria-hidden="true"></div>

        <div className="container tomorrow-container">
          <div className="tomorrow-content reveal-on-scroll">
            <h2 className="tomorrow-heading">
              Good produce builds a<br />healthier tomorrow
            </h2>
            <p className="tomorrow-sub">
              Delivering the freshest fruits and vegetables to every corner of the world.
            </p>
            <Link href="/contact" className="btn btn-gold tomorrow-btn">
              <span>Start Sourcing Today</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
