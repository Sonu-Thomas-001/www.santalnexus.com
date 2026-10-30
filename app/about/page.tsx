import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Trusted Partners in Global Fresh Produce',
  description:
    'Discover the story, mission, vision, and core operational values of Santal Nexus. Direct farm sourcing in Madurai, Tamil Nadu for domestic and international produce trade.',
};

export default function AboutPage() {
  return (
    <div className="page-about">
      {/* ====================================================================
           SECTION 1: HERO BANNER
           ==================================================================== */}
      <section className="page-hero-banner" aria-label="About Us Introduction">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/assets/images/about-hero-sunrise.webp" type="image/webp" />
            <img
              src="/assets/images/about-hero-sunrise.jpg"
              alt="Golden sunrise over a lush agricultural farmland in Tamil Nadu"
              className="page-hero-img"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-container">
          <div className="page-hero-content">
            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="sep" aria-hidden="true">
                  &gt;
                </li>
                <li className="active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <h1 className="page-hero-title">About Us</h1>
            <p className="page-hero-subtitle">Trusted Partners in Global Fresh Produce</p>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: OUR STORY
           ==================================================================== */}
      <section className="section-padding about-story-section" aria-label="Our Story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content reveal-on-scroll">
              <div className="about-eyebrow-wrap">
                <span className="gold-dash" aria-hidden="true"></span>
                <span className="about-eyebrow">OUR STORY</span>
              </div>

              <h2 className="about-story-heading">Santal Nexus</h2>

              <div className="about-story-text">
                <p>
                  Santal Nexus is a Madurai based vegetable and fruit trading company, committed to delivering high-quality fresh produce to domestic and international markets.
                </p>
                <p>
                  We focus on building long-term relationships with farmers, suppliers and global buyers by ensuring fair trade, transparent processes and consistent quality.
                </p>
              </div>

              <div className="story-features-grid">
                <div className="story-feat-item">
                  <div className="story-feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="story-feat-text">Quality First</div>
                </div>

                <div className="story-feat-item">
                  <div className="story-feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
                      <path d="m13 7-2-2a1 1 0 0 0-1.4 0L5.3 9.3a1 1 0 0 0 0 1.4l2 2" />
                      <path d="m8.5 8.5 7 7" />
                      <path d="M14 14l3.5-3.5" />
                    </svg>
                  </div>
                  <div className="story-feat-text">Long-Term Partnerships</div>
                </div>

                <div className="story-feat-item">
                  <div className="story-feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <div className="story-feat-text">Sustainable Growth</div>
                </div>

                <div className="story-feat-item">
                  <div className="story-feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div className="story-feat-text">Global Opportunities</div>
                </div>
              </div>
            </div>

            <div className="about-story-visual reveal-on-scroll">
              <div className="story-image-wrap">
                <picture>
                  <source srcSet="/assets/images/about-story-crate.webp" type="image/webp" />
                  <img
                    src="/assets/images/about-story-crate.jpg"
                    alt="Farmer holding a wooden crate overflowing with freshly harvested tomatoes, peppers, carrots and vegetables"
                    className="story-crop-img"
                    width={1200}
                    height={900}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: DUAL VISION & MISSION BLOCK
           ==================================================================== */}
      <section className="about-dual-vision-mission" aria-label="Our Vision and Mission">
        <div className="dual-block-grid">
          <div className="dual-block dual-block-vision reveal-on-scroll">
            <div className="dual-block-inner">
              <div className="dual-icon-wrap gold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
                  <path d="m13 7-2-2a1 1 0 0 0-1.4 0L5.3 9.3a1 1 0 0 0 0 1.4l2 2" />
                  <path d="m8.5 8.5 7 7" />
                  <path d="M14 14l3.5-3.5" />
                </svg>
              </div>
              <h3 className="dual-title gold">Our Vision</h3>
              <p className="dual-desc light">
                To become a globally trusted fresh produce exporter, creating value for farmers, customers and communities across the world.
              </p>
            </div>
          </div>

          <div className="dual-block dual-block-mission reveal-on-scroll">
            <div className="dual-block-inner">
              <div className="dual-icon-wrap dark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="dual-title dark">Our Mission</h3>
              <p className="dual-desc dark">
                To deliver safe, high-quality fresh produce with efficiency, integrity and a passion for global trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: WHY CHOOSE US?
           ==================================================================== */}
      <section className="section-padding about-why-section" aria-label="Why Choose Santal Nexus">
        <div className="container">
          <div className="about-why-grid">
            <div className="about-why-visual reveal-on-scroll">
              <div className="why-image-card">
                <picture>
                  <source srcSet="/assets/images/about-why-seedling.webp" type="image/webp" />
                  <img
                    src="/assets/images/about-why-seedling.jpg"
                    alt="Farmer hands gently cupping fertile rich soil nurturing a young green seedling"
                    className="why-seedling-img"
                    width={1200}
                    height={900}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>

            <div className="about-why-content reveal-on-scroll">
              <h2 className="about-why-heading">Why Choose Us?</h2>

              <ul className="why-check-list">
                <li>
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Premium quality fresh produce</strong>
                    <p>Hand-picked from certified harvests, adhering to strict sizing and maturity standards.</p>
                  </div>
                </li>

                <li>
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Trusted farmer &amp; supplier network</strong>
                    <p>Direct collaborative relationships across Tamil Nadu and South India's fertile agrarian belts.</p>
                  </div>
                </li>

                <li>
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>International market experience</strong>
                    <p>Familiarity with cross-border protocols, grading categories, and commercial documentation.</p>
                  </div>
                </li>

                <li>
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Reliable logistics &amp; timely delivery</strong>
                    <p>Coordinated cold-chain handling from post-harvest collection to sea and air transit ports.</p>
                  </div>
                </li>

                <li>
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Dedicated customer support</strong>
                    <p>Transparent communication, live shipment updates, and prompt commercial coordination.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: OPERATIONAL PILLARS
           ==================================================================== */}
      <section className="section-padding section-ivory about-pillars-section" aria-label="Our Operational Pillars">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">How We Operate</span>
            <h2 className="section-heading">Built on Integrity. Driven by Excellence.</h2>
            <p className="section-subtext">
              Our trade operations are grounded in four core principles that govern how we procure, inspect, and supply fresh agricultural produce to domestic and overseas partners.
            </p>
          </div>

          <div className="about-pillars-grid">
            <article className="pillar-card reveal-on-scroll">
              <div className="pillar-number" aria-hidden="true">01</div>
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Transparent Trade</h3>
              <p>Every quote, specification sheet, and commercial agreement is communicated with complete openness, eliminating hidden surprises for buyers and growers alike.</p>
            </article>

            <article className="pillar-card reveal-on-scroll">
              <div className="pillar-number" aria-hidden="true">02</div>
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Farm-Level Sourcing</h3>
              <p>We work directly at the regional collection centers in Tamil Nadu, inspecting produce at point of harvest to guarantee optimal grade, skin health, and shelf life.</p>
            </article>

            <article className="pillar-card reveal-on-scroll">
              <div className="pillar-number" aria-hidden="true">03</div>
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3>Customized Packing</h3>
              <p>Whether you require ventilated corrugated export cartons, returnable plastic crates, or palletized bulk containers, we pack to your precise receiving specifications.</p>
            </article>

            <article className="pillar-card reveal-on-scroll">
              <div className="pillar-number" aria-hidden="true">04</div>
              <div className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Responsible Ethics</h3>
              <p>Fair compensation for local farmers and sustainable harvesting practices are essential to building resilient, multi-year supply partnerships worldwide.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 6: MADURAI SOURCING STRIP
           ==================================================================== */}
      <section className="about-region-strip" aria-label="Madurai Sourcing Advantage">
        <div className="container">
          <div className="about-region-grid reveal-on-scroll">
            <div className="about-region-text">
              <span className="region-tag">Strategic Agricultural Hub</span>
              <h2>Rooted in Madurai — Gateway to South India's Harvest</h2>
              <p>
                Headquartered at T. Vadiapatti, Madurai, Santal Nexus benefits from direct proximity to rich fertile belts along the Vaigai and Cauvery rivers, as well as the Dindigul vegetable trade hub.
              </p>
              <p>
                This strategic geographic position allows rapid aggregation of fresh produce within hours of picking, ensuring minimal field-to-pack transit times and superior freshness upon dispatch to major Indian sea ports like Tuticorin and Chennai.
              </p>
            </div>

            <div className="about-region-badges">
              <div className="region-badge-card">
                <span className="badge-num">100%</span>
                <span className="badge-lbl">Direct Farm Sourcing</span>
              </div>
              <div className="region-badge-card">
                <span className="badge-num">24h</span>
                <span className="badge-lbl">Rapid Dispatch Protocol</span>
              </div>
              <div className="region-badge-card">
                <span className="badge-num">Global</span>
                <span className="badge-lbl">Export Grade Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 7: CALL TO ACTION BANNER
           ==================================================================== */}
      <section className="about-cta-section" aria-label="Partner With Us">
        <div className="container">
          <div className="about-cta-box reveal-on-scroll">
            <div className="about-cta-content">
              <span className="section-eyebrow no-rule">Let's Connect</span>
              <h2 className="about-cta-heading">Ready to Source High-Quality Fresh Produce?</h2>
              <p className="about-cta-subtext">
                Speak directly with Bala Chellapandiyan and our trade coordination desk to discuss seasonal availability, custom grading, or trial order shipments.
              </p>
              <div className="about-cta-actions">
                <Link href="/contact" className="btn btn-gold">
                  <span>Discuss Your Requirements</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <a
                  href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20discuss%20fresh%20produce%20procurement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  <span>WhatsApp Sourcing Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
