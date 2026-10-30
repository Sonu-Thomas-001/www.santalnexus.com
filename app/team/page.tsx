import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TEAM_MEMBERS, TEAM_PILLARS, FUNCTIONAL_DESKS } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team | Leadership & Trade Specialists',
  description:
    'Meet the dedicated leadership, field agronomists, and export coordinators behind Santal Nexus. Founded by Bala Chellapandiyan to connect Indian fresh produce with global markets.',
};

export default function TeamPage() {
  return (
    <div className="page-team">
      {/* ====================================================================
           SECTION 1: HERO BANNER
           ==================================================================== */}
      <section className="page-hero-banner" aria-label="Our Team Page Header">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/assets/images/team-hero-banner.jpg" type="image/jpeg" />
            <img
              src="/assets/images/team-hero-banner.jpg"
              alt="Santal Nexus Leadership and Operations Team"
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
            <span className="team-hero-eyebrow">OUR TEAM</span>
            <h1 className="page-hero-title">Strong People. Global Vision.</h1>
            <p className="page-hero-subtitle">
              Meet the dedicated team behind Santal Nexus, working together to bring the best of Indian fresh produce to the world.
            </p>

            <nav className="team-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Our Team</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: PRIMARY TEAM GRID & CAPABILITY STRIP
           ==================================================================== */}
      <section className="section-padding team-section" id="team-members" aria-label="Leadership and Team Profiles">
        <div className="container">
          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.id} className="team-card reveal-on-scroll">
                <div className="team-image-wrap">
                  <picture>
                    <source srcSet={member.photoWebp} type="image/webp" />
                    <img
                      src={member.photoJpg}
                      alt={`${member.name} - ${member.role}`}
                      width={288}
                      height={250}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="team-body">
                  <span className="team-badge">{member.badge}</span>
                  <h2 className="team-name">{member.name}</h2>
                  <p className="team-pillars">{member.pillars}</p>
                  <p className="team-bio">{member.bio}</p>
                  {member.desk && (
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(215, 180, 90, 0.2)', fontSize: '0.8rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      Desk: {member.desk}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Team Capability Highlights Strip */}
          <div className="team-capability-strip reveal-on-scroll" style={{ marginTop: '3.5rem' }}>
            {TEAM_PILLARS.map((pillar) => (
              <div key={pillar.title} className="team-cap-item">
                <div className="team-cap-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="team-cap-text">
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.15rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#D7DDD7', marginBottom: 0 }}>
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: FUNCTIONAL DEPARTMENTS & SOURCING DESKS
           ==================================================================== */}
      <section className="team-departments-section" aria-label="Functional Operations Desks">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Operational Backbone</span>
            <h2 className="section-heading">How Our Teams Work Across the Supply Chain</h2>
            <p className="section-subtext">
              From the fertile soil in Tamil Nadu and South India to destination ports worldwide, our departments coordinate with seamless synchronization.
            </p>
          </div>

          <div className="dept-cards-grid">
            {FUNCTIONAL_DESKS.map((dept) => (
              <div key={dept.title} className="dept-card reveal-on-scroll">
                <div className="dept-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>{dept.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {dept.lead}
                </p>
                <p>{dept.scope}</p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  {dept.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: CORE CULTURE & GUIDING VALUES
           ==================================================================== */}
      <section className="team-culture-section" aria-label="Our Team Culture and Guiding Values">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Our Guiding Values</span>
            <h2 className="section-heading">Principles That Power Our Team</h2>
            <p className="section-subtext">
              Every shipment dispatched by Santal Nexus is guided by values that uphold trust with our farmers and integrity with our global buyers.
            </p>
          </div>

          <div className="culture-grid">
            <div className="culture-card reveal-on-scroll">
              <span className="culture-num">01</span>
              <div className="culture-content">
                <h3>Farmer-Centric Sourcing Integrity</h3>
                <p>
                  We believe sustainable trade begins at the grassroots. Our team ensures transparent pricing, timely payments, and agronomic knowledge-sharing with rural farming communities.
                </p>
              </div>
            </div>

            <div className="culture-card reveal-on-scroll">
              <span className="culture-num">02</span>
              <div className="culture-content">
                <h3>Uncompromised Cold Chain Precision</h3>
                <p>
                  Freshness is not an accident—it is meticulous science. Our team maintains zero-break cold chain standards from packhouse washing to reefer container plug-in at sea.
                </p>
              </div>
            </div>

            <div className="culture-card reveal-on-scroll">
              <span className="culture-num">03</span>
              <div className="culture-content">
                <h3>Global Quality Standards with Local Soul</h3>
                <p>
                  We bridge regional agricultural treasures—from Cavendish bananas and G4 green chillies to fresh drumsticks and red onions—with exacting international supermarket standards.
                </p>
              </div>
            </div>

            <div className="culture-card reveal-on-scroll">
              <span className="culture-num">04</span>
              <div className="culture-content">
                <h3>Responsiveness Across Global Timezones</h3>
                <p>
                  Trade moves swiftly. Whether our buyers are in Dubai, Singapore, Doha, or London, our team remains connected 24/7 on WhatsApp, voice, and email for transparent updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: FOUNDER'S VISION STATEMENT
           ==================================================================== */}
      <section className="team-founder-quote-section" aria-label="Founder's Statement">
        <div className="container">
          <div className="founder-quote-box reveal-on-scroll">
            <div className="founder-quote-glyph" aria-hidden="true">&ldquo;</div>
            <blockquote className="founder-quote-text">
              Agriculture is far more than trade for us; it is a sacred trust between the farmer who nurtures the soil in Tamil Nadu and the global family who savors the harvest thousands of miles away.
            </blockquote>
            <div className="founder-quote-author">
              <span className="author-name">Bala Chellapandiyan</span>
              <span className="author-title">Founder &amp; CEO · Santal Nexus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 6: CAREERS & TALENT INVITATION
           ==================================================================== */}
      <section className="team-careers-section" aria-label="Careers with Santal Nexus">
        <div className="container">
          <div className="careers-banner-box reveal-on-scroll">
            <div className="careers-text">
              <h3>Passionate About Agriculture &amp; Global Trade?</h3>
              <p>
                We are constantly seeking energetic field agronomists, quality auditors, export document specialists, and logistics coordinators to expand our operations.
              </p>
            </div>
            <div className="careers-cta">
              <a href="mailto:santalnexus@gmail.com?subject=Career%20Application%20at%20Santal%20Nexus" className="btn btn-gold">
                <span>Send Your Resume</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 7: CONNECT WITH OUR TEAM CALL TO ACTION
           ==================================================================== */}
      <section className="contact-cta-band" aria-label="Connect With Our Team">
        <div className="container">
          <div className="contact-cta-box reveal-on-scroll">
            <div className="contact-cta-text">
              <h3>Ready to Partner with Our Agricultural Trade Team?</h3>
              <p>
                Whether you are an overseas importer, wholesale distributor, or regional grower, our team is eager to collaborate with you.
              </p>
            </div>
            <div className="contact-cta-actions">
              <Link href="/contact" className="btn btn-gold">
                <span>Contact Trade Desk</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a
                href="https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20connect%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>WhatsApp Leadership</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
