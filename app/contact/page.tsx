import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import { FAQ_ITEMS } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Contact Us | Trade Inquiries & Commercial Desk',
  description:
    'Connect with Santal Nexus in Madurai, Tamil Nadu. Phone +91 99946 40141, official email santalnexus@gmail.com, direct WhatsApp, and trade enquiry desk.',
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      {/* ====================================================================
           SECTION 1: HERO BANNER
           ==================================================================== */}
      <section className="page-hero-banner" aria-label="Contact Us Page Header">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/assets/images/contact-hero-leaves.jpg" type="image/jpeg" />
            <img
              src="/assets/images/contact-hero-leaves.jpg"
              alt="Fresh vibrant green banana leaves and morning dew in Madurai farm"
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
            <span className="contact-hero-eyebrow">CONTACT US</span>
            <h1 className="page-hero-title">Get in Touch</h1>
            <p className="page-hero-subtitle">
              We'd love to hear from you. Reach out to discuss fresh produce sourcing, domestic trading, or global export inquiries.
            </p>

            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 2: PRIMARY CONTACT SECTION
           ==================================================================== */}
      <section className="contact-primary-section" id="contact-form-section" aria-label="Direct Contact and Inquiry Form">
        <div className="container">
          <div className="contact-layout-grid">
            {/* LEFT COLUMN: Contact Information */}
            <div className="contact-info-panel reveal-on-scroll">
              <h2 className="contact-main-heading">Get in Touch</h2>
              <p className="contact-main-desc">
                We'd love to hear from you! Whether you are an international buyer, supermarket distributor, or regional grower, feel free to reach out. Our team is ready to assist you.
              </p>

              <div className="contact-items-stack">
                <div className="contact-item-row">
                  <div className="contact-icon-pill" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">Direct Phone / WhatsApp</span>
                    <div className="contact-item-value">
                      <a href="tel:+919994640141" aria-label="Call +91 999 464 0141">+91 999-464-0141</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-pill" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">Trading Hub &amp; Registered Office</span>
                    <address className="contact-address-text">
                      Opp to Uco Bank,<br />
                      Dindigul main road, T.Vadiapatti,<br />
                      Madurai - 625218, Tamil Nadu, India
                    </address>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-pill" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">Official Email</span>
                    <div className="contact-item-value">
                      <a href="mailto:santalnexus@gmail.com" aria-label="Email santalnexus@gmail.com">santalnexus@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-follow-block" style={{ marginTop: '2.5rem' }}>
                <h3 className="contact-follow-title">Follow Us</h3>
                <div className="contact-social-row">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-badge-btn facebook" aria-label="Follow on Facebook">
                    <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-badge-btn instagram" aria-label="Follow on Instagram">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-badge-btn linkedin" aria-label="Follow on LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="https://wa.me/919994640141" target="_blank" rel="noopener noreferrer" className="social-badge-btn whatsapp" aria-label="Direct WhatsApp">
                    <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Send Us a Message Form Card */}
            <div className="contact-form-box reveal-on-scroll">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <ContactForm compact={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 3: SPECIALIZED CONTACT DESKS
           ==================================================================== */}
      <section className="contact-desks-section" aria-label="Specialized Trade and Sourcing Desks">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Connect With The Right Desk</span>
            <h2 className="section-heading">Dedicated Trade &amp; Sourcing Assistance</h2>
            <p className="section-subtext">
              Our multi-disciplinary team handles wholesale sourcing, export documentations, quality packhouse inspections, and regional farmer relations with high responsiveness.
            </p>
          </div>

          <div className="desks-grid">
            <div className="desk-card reveal-on-scroll">
              <div className="desk-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="desk-title">Global Export Desk</h3>
              <p className="desk-desc">
                Direct consultation for container load inquiries (FOB/CIF), air-cargo consignments, reefer bookings, and port routing via Tuticorin, Chennai, and Cochin.
              </p>
              <Link href="/export-services" className="desk-action-link">
                <span>View Export Catalog</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

            <div className="desk-card reveal-on-scroll">
              <div className="desk-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="desk-title">Farmer &amp; FPO Network</h3>
              <p className="desk-desc">
                For agricultural growers and Farmer Producer Organisations (FPOs) across South India seeking transparent procurement, fair pricing, and long-term contracts.
              </p>
              <a href="mailto:santalnexus@gmail.com?subject=Grower%20Procurement%20Enrollment" className="desk-action-link">
                <span>Join Grower Network</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <div className="desk-card reveal-on-scroll">
              <div className="desk-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="desk-title">Quality &amp; Compliance</h3>
              <p className="desk-desc">
                Assistance with Phytosanitary certificates, APEDA registration proofs, residue test results, lab analyses, and customized corrugated packaging specifications.
              </p>
              <Link href="/about" className="desk-action-link">
                <span>Quality Standards</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

            <div className="desk-card reveal-on-scroll">
              <div className="desk-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="desk-title">Business &amp; Port Hours</h3>
              <p className="desk-desc">
                <strong>Office:</strong> Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                <strong>Global Trade WhatsApp:</strong> 24/7 Response<br />
                <strong>Port Dispatch:</strong> Active during reefer gate-in schedules.
              </p>
              <a href="https://wa.me/919994640141" target="_blank" rel="noopener noreferrer" className="desk-action-link">
                <span>24/7 WhatsApp Chat</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 4: INTERACTIVE MAP & LOGISTICS CORRIDOR
           ==================================================================== */}
      <section className="contact-map-section" aria-label="Interactive Map and Strategic Location">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Strategic Sourcing Location</span>
            <h2 className="section-heading">Our Hub in Madurai, Tamil Nadu</h2>
            <p className="section-subtext">
              Situated on the major Dindigul-Madurai agricultural artery (NH 44), enabling swift farm collection and fast reefer transit to key international ports.
            </p>
          </div>

          <div className="map-corridor-grid">
            <div className="map-embed-frame reveal-on-scroll">
              <iframe
                title="Santal Nexus Madurai Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125748.2581291882!2d77.940000!3d10.050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf7c5a037803%3A0x6b6388ff84501438!2sVadipatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="corridor-info-card reveal-on-scroll">
              <h3 className="corridor-info-title">Transit &amp; Shipping Gateways</h3>
              <p style={{ fontSize: '0.95rem', color: '#5E6760', marginBottom: '1rem' }}>
                Our trade operations in T. Vadiapatti offer immediate access to multimodal transport corridors across Southern India:
              </p>

              <ul className="corridor-list">
                <li className="corridor-item">
                  <div className="corridor-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" /></svg>
                  </div>
                  <div className="corridor-item-details">
                    <strong>Madurai International Airport (IXM)</strong>
                    <span>~42 km · Dedicated international air cargo connectivity</span>
                  </div>
                </li>

                <li className="corridor-item">
                  <div className="corridor-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" /><path d="M4 18 3 12h18l-1 6" /><path d="M12 2v7" /><path d="M12 9h4l-2-4h-2" /></svg>
                  </div>
                  <div className="corridor-item-details">
                    <strong>V.O. Chidambaranar Port (Tuticorin)</strong>
                    <span>~170 km · Primary deepwater container gateway for GCC &amp; SE Asia</span>
                  </div>
                </li>

                <li className="corridor-item">
                  <div className="corridor-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /></svg>
                  </div>
                  <div className="corridor-item-details">
                    <strong>Cochin Port &amp; Chennai Port</strong>
                    <span>~245 km / ~440 km · Multi-route redundancy for European &amp; Far East sailings</span>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                <a
                  href="https://maps.google.com/?q=T.+Vadipatti+Madurai+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                >
                  <span>Open in Google Maps</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           SECTION 5: FREQUENTLY ASKED QUESTIONS
           ==================================================================== */}
      <section className="contact-faq-section" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Common Trade Inquiries</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subtext">
              Quick answers to key commercial, export logistics, and procurement questions from overseas buyers and regional partners.
            </p>
          </div>

          <FaqAccordion items={FAQ_ITEMS} defaultOpenId="faq-4" />
        </div>
      </section>

      {/* ====================================================================
           SECTION 6: IMMEDIATE WHATSAPP CONTACT BAND
           ==================================================================== */}
      <section className="contact-cta-band" aria-label="Immediate WhatsApp Contact">
        <div className="container">
          <div className="contact-cta-box reveal-on-scroll">
            <div className="contact-cta-text">
              <h3>Need Immediate Trade Pricing or Fruit/Veg Specs?</h3>
              <p>
                Bala Chellapandiyan (+91 99946 40141) is available directly on WhatsApp for prompt quotation structures and harvest photos.
              </p>
            </div>
            <div className="contact-cta-actions">
              <a
                href="https://wa.me/919994640141?text=Hello%20Bala%20Chellapandiyan%2C%20I%20would%20like%20to%20enquire%20about%20produce%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
              <a href="tel:+919994640141" className="btn btn-outline-light">
                <span>Call +91 99946 40141</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
