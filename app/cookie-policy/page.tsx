import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Privacy Preferences & Tracking Transparency',
  description:
    'Santal Nexus Cookie Policy explaining how we utilize essential, analytical, and preference cookies on santalnexus.com with interactive privacy preference controls.',
};

export default function CookiePolicyPage() {
  return (
    <div className="page-legal">
      {/* Header Banner */}
      <section className="legal-hero-banner" aria-label="Cookie Policy Header">
        <div className="container">
          <div className="legal-hero-content reveal-on-scroll">
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Cookie Policy</li>
              </ol>
            </nav>
            <span className="section-eyebrow">Transparency &amp; Governance</span>
            <h1 className="legal-hero-title">Cookie Policy</h1>
            <p className="legal-hero-subtitle">
              Learn how cookies enhance your trade portal browsing experience, verify session security, and optimize produce catalog loading.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content-section">
        <div className="container legal-container-grid">
          {/* Table of contents (sticky) */}
          <aside className="legal-toc-panel reveal-on-scroll">
            <h4 className="toc-heading">Policy Sections</h4>
            <ul className="toc-list">
              <li><a href="#what-are-cookies">1. What are Cookies?</a></li>
              <li><a href="#categories">2. Categories of Cookies We Use</a></li>
              <li><a href="#essential-cookies">3. Strictly Necessary Cookies</a></li>
              <li><a href="#analytics-cookies">4. Analytical &amp; Performance Cookies</a></li>
              <li><a href="#managing-cookies">5. Managing Your Browser Settings</a></li>
              <li><a href="#updates">6. Updates to this Policy</a></li>
            </ul>

            <div className="toc-support-card">
              <h5>Privacy Desk</h5>
              <p>For inquiries regarding digital tracking or telemetry, connect with our compliance desk.</p>
              <a href="mailto:santalnexus@gmail.com" className="btn btn-outline-dark btn-sm">
                santalnexus@gmail.com
              </a>
            </div>
          </aside>

          {/* Legal Article Text */}
          <article className="legal-article-body reveal-on-scroll">
            <section id="what-are-cookies" className="legal-section-block">
              <h2>1. What are Cookies?</h2>
              <p>
                Cookies are compact alphanumeric text files placed onto your device (computer, smartphone, or tablet) when you visit <strong>santalnexus.com</strong>. They allow our web server to remember your preferences (e.g. mobile navigation states, produce filter choices) and maintain secure connections.
              </p>
            </section>

            <section id="categories" className="legal-section-block">
              <h2>2. Categories of Cookies We Use</h2>
              <p>We classify our cookies into distinct categories based on their operational necessity:</p>

              <div className="cookie-table-wrapper">
                <table className="cookie-table">
                  <thead>
                    <tr>
                      <th>Cookie Category</th>
                      <th>Operational Purpose</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Strictly Necessary</strong></td>
                      <td>Ensures security, preloader execution, form submission integrity, and page rendering.</td>
                      <td><span className="cookie-status-badge active">Always Active</span></td>
                    </tr>
                    <tr>
                      <td><strong>Performance &amp; Analytics</strong></td>
                      <td>Aggregated, anonymized metrics on page load times, device viewports, and popular commodity pages.</td>
                      <td><span className="cookie-status-badge optional">Optional</span></td>
                    </tr>
                    <tr>
                      <td><strong>Preference &amp; Functional</strong></td>
                      <td>Remembers recent category filters in the produce catalog and your cookie consent choice.</td>
                      <td><span className="cookie-status-badge optional">Optional</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="essential-cookies" className="legal-section-block">
              <h2>3. Strictly Necessary Cookies</h2>
              <p>
                These cookies are indispensable for the core functionality of our web portal. They enable navigation across pages, secure transmission of export RFQs and WhatsApp links, and prevention of cross-site request forgery. They cannot be disabled without compromising platform stability.
              </p>
            </section>

            <section id="analytics-cookies" className="legal-section-block">
              <h2>4. Analytical &amp; Performance Cookies</h2>
              <p>
                We use aggregated, anonymized analytical tools to understand how international buyers interact with our produce specifications and export calculators. These metrics do not collect or store personally identifiable data like your name or IP address.
              </p>
            </section>

            <section id="managing-cookies" className="legal-section-block">
              <h2>5. Managing Your Browser Settings</h2>
              <p>
                You have the option to accept, block, or delete cookies via your browser settings. Please refer to your browser&apos;s documentation to configure these controls:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data.</li>
                <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
                <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.</li>
                <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies.</li>
              </ul>
            </section>

            <section id="updates" className="legal-section-block">
              <h2>6. Updates to this Policy</h2>
              <p>
                We may periodically update this Cookie Policy to reflect technical revisions or regulatory standards. The updated policy with revision date will always be posted here.
              </p>
              <div className="legal-contact-callout">
                <strong>Questions or Specific Inquiries?</strong><br />
                Santal Nexus Compliance Secretariat<br />
                Building No. 391/3, Opp. UCO Bank, Dindigul Main Road,<br />
                T. Vadiapatti, Madurai – 625218, Tamil Nadu, India<br />
                <strong>Direct Desk:</strong> <a href="tel:+919994640141">+91 99946 40141</a> · <strong>Email:</strong> <a href="mailto:santalnexus@gmail.com">santalnexus@gmail.com</a>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
