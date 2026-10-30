import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection & Commercial Privacy',
  description:
    'Santal Nexus privacy policy detailing collection, storage, and cross-border processing of commercial inquiries, WhatsApp data, and export trade telematics in compliance with the DPDP Act and international standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-legal">
      {/* Header Banner */}
      <section className="legal-hero-banner" aria-label="Privacy Policy Header">
        <div className="container">
          <div className="legal-hero-content reveal-on-scroll">
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
            <span className="section-eyebrow">Legal &amp; Compliance</span>
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              Last Updated: October 2026 · Compliant with Digital Personal Data Protection (DPDP) Act &amp; International B2B Trade Standards
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content-section">
        <div className="container legal-container-grid">
          {/* Table of contents (sticky) */}
          <aside className="legal-toc-panel reveal-on-scroll">
            <h4 className="toc-heading">Table of Contents</h4>
            <ul className="toc-list">
              <li><a href="#introduction">1. Introduction &amp; Entity Scope</a></li>
              <li><a href="#information-collected">2. Information We Collect</a></li>
              <li><a href="#purpose-processing">3. Purpose of Processing</a></li>
              <li><a href="#cross-border">4. Cross-Border Trade &amp; Regulatory Sharing</a></li>
              <li><a href="#coldchain-data">5. Cold-Chain &amp; Telematics Data</a></li>
              <li><a href="#data-security">6. Security &amp; Data Retention</a></li>
              <li><a href="#user-rights">7. Your Rights &amp; Access Controls</a></li>
              <li><a href="#cookies">8. Cookies &amp; Digital Tracking</a></li>
              <li><a href="#grievance">9. Grievance Officer &amp; Inquiries</a></li>
            </ul>

            <div className="toc-support-card">
              <h5>Questions regarding your data?</h5>
              <p>Our designated compliance desk is available for official inquiries.</p>
              <a href="mailto:santalnexus@gmail.com" className="btn btn-outline-dark btn-sm">
                Email Compliance Desk
              </a>
            </div>
          </aside>

          {/* Legal Text Body */}
          <article className="legal-article-body reveal-on-scroll">
            <section id="introduction" className="legal-section-block">
              <h2>1. Introduction &amp; Entity Scope</h2>
              <p>
                <strong>Santal Nexus</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates an agricultural trading, sourcing, and international export enterprise headquartered at <em>Building No. 391/3, Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti, Madurai – 625218, Tamil Nadu, India</em>.
              </p>
              <p>
                This Privacy Policy establishes how we collect, process, manage, and safeguard commercial information, representative credentials, and personal data gathered through <strong>santalnexus.com</strong>, official WhatsApp channels (+91 99946 40141), commercial emails, and international trade desks.
              </p>
            </section>

            <section id="information-collected" className="legal-section-block">
              <h2>2. Information We Collect</h2>
              <p>We collect information strictly necessary to coordinate B2B procurement, cold-chain transport, and export logistics:</p>
              <ul>
                <li><strong>Commercial Representative Identifiers:</strong> Full legal name, business title, authorized company entity name, registration number, and corporate identity.</li>
                <li><strong>Communication Points:</strong> Corporate email address, telephone, WhatsApp business number, corporate billing address, and discharge delivery destination.</li>
                <li><strong>Trade &amp; Procurement Specifications:</strong> Requested agricultural produce varieties (e.g. Cavendish Bananas, Sambar Onions, Green Chillies), caliber sizing, container volume (FCL / LCL), packaging requirements, and target Incoterms (CIF, FOB, CFR).</li>
                <li><strong>Customs &amp; Consignee Documentation:</strong> Importer-Exporter Code (IEC), GSTIN, Phytosanitary consignee consignor declarations, and Bill of Lading documentation.</li>
              </ul>
            </section>

            <section id="purpose-processing" className="legal-section-block">
              <h2>3. Purpose of Processing</h2>
              <p>We process collected data exclusively for the following lawful commercial purposes:</p>
              <ol>
                <li>Formulating and issuing commercial quotations, Proforma Invoices, and Requests for Quotation (RFQs).</li>
                <li>Liaising with regional farmer clusters and packhouse inspectors in Madurai, Dindigul, and Theni for quality harvesting.</li>
                <li>Fulfilling legal compliance under the Agricultural and Processed Food Products Export Development Authority (APEDA), Plant Quarantine authorities, and Indian Customs.</li>
                <li>Scheduling refrigerated maritime containers with container carriers (e.g. Maersk, MSC, Hapag-Lloyd) operating out of V.O. Chidambaranar Port (Tuticorin) and Chennai Port.</li>
              </ol>
            </section>

            <section id="cross-border" className="legal-section-block">
              <h2>4. Cross-Border Trade &amp; Regulatory Sharing</h2>
              <p>
                In executing international contracts to destinations such as Malaysia (Port Klang), Singapore, UAE (Jebel Ali), Saudi Arabia, and Europe, we share verified consignee data solely with:
              </p>
              <ul>
                <li><strong>Port &amp; Customs Authorities:</strong> Indian Customs (ICEGATE) and foreign port entry inspection bodies for clearance.</li>
                <li><strong>Accredited Phytosanitary Laboratories:</strong> For issuance of non-GMO, residue-free, and pest-free export health certificates.</li>
                <li><strong>Cold-Chain Freight Forwarders &amp; Shipping Lines:</strong> For maritime Bill of Lading generation and reefer plug-in monitoring.</li>
              </ul>
              <p>We strictly do not sell, rent, monetize, or disclose your corporate or personal data to third-party marketing brokers.</p>
            </section>

            <section id="coldchain-data" className="legal-section-block">
              <h2>5. Cold-Chain &amp; Telematics Data</h2>
              <p>
                For ocean and air freight shipments, temperature, relative humidity, and transit GPS readings are logged using calibrated USB/IoT voyage loggers. This technical data is shared with the buyer to verify unbroken cold-chain compliance (e.g., maintaining +13.5°C for Cavendish bananas) and does not contain personal tracking data.
              </p>
            </section>

            <section id="data-security" className="legal-section-block">
              <h2>6. Security &amp; Data Retention</h2>
              <p>
                All digital communications transmitted through our online trade portal are encrypted using Transport Layer Security (TLS 1.3 / HTTPS). Inquiries and contract histories are retained for statutory retention periods mandated by Indian commercial tax and foreign trade regulations (typically 7–8 financial years) before secure deletion.
              </p>
            </section>

            <section id="user-rights" className="legal-section-block">
              <h2>7. Your Rights &amp; Access Controls</h2>
              <p>Under applicable data protection frameworks, authorized business contacts have the right to:</p>
              <ul>
                <li>Request confirmation and a summary of personal information held by Santal Nexus.</li>
                <li>Request rectification of inaccurate corporate contact or billing information.</li>
                <li>Request deletion of non-statutory commercial inquiries upon completion of discussions.</li>
                <li>Opt out of periodic trade newsletters or seasonal produce availability bulletins.</li>
              </ul>
            </section>

            <section id="cookies" className="legal-section-block">
              <h2>8. Cookies &amp; Digital Tracking</h2>
              <p>
                Our portal uses essential session tokens and anonymous analytical cookies to optimize page rendering across mobile and desktop devices. For complete details and to manage your preferences, consult our dedicated <Link href="/cookie-policy">Cookie Policy</Link>.
              </p>
            </section>

            <section id="grievance" className="legal-section-block">
              <h2>9. Grievance Officer &amp; Inquiries</h2>
              <p>For any privacy grievances, data rectification requests, or regulatory queries, please contact:</p>
              <div className="legal-contact-callout">
                <strong>Data Protection &amp; Compliance Officer</strong><br />
                Santal Nexus Export Desk<br />
                Building No. 391/3, Opp. UCO Bank, Dindigul Main Road,<br />
                T. Vadiapatti, Madurai – 625218, Tamil Nadu, India<br />
                <strong>Direct Phone / WhatsApp:</strong> <a href="tel:+919994640141">+91 99946 40141</a><br />
                <strong>Official Email:</strong> <a href="mailto:santalnexus@gmail.com">santalnexus@gmail.com</a>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
