import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Commercial Trading & Export Conditions',
  description:
    'Commercial terms of service for fresh agricultural produce trading, Incoterms FOB/CIF, APEDA quality standards, maritime reefer logistics, and joint discharge inspection protocols with Santal Nexus.',
};

export default function TermsOfServicePage() {
  return (
    <div className="page-legal">
      {/* Header Banner */}
      <section className="legal-hero-banner" aria-label="Terms of Service Header">
        <div className="container">
          <div className="legal-hero-content">
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Terms of Service</li>
              </ol>
            </nav>
            <span className="section-eyebrow">Commercial Governance</span>
            <h1 className="legal-hero-title">Terms of Service</h1>
            <p className="legal-hero-subtitle">
              Commercial B2B Trading Conditions · Export Incoterms (ICC 2020) · Packhouse Integrity &amp; Quality Protocols
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content-section">
        <div className="container legal-container-grid">
          {/* Table of contents (sticky) */}
          <aside className="legal-toc-panel reveal-on-scroll">
            <h4 className="toc-heading">Contract Sections</h4>
            <ul className="toc-list">
              <li><a href="#acceptance">1. Scope of Agreement</a></li>
              <li><a href="#produce-specs">2. Produce Grading &amp; Caliber Specs</a></li>
              <li><a href="#quotations">3. Commercial Quotations &amp; Validity</a></li>
              <li><a href="#incoterms">4. Incoterms &amp; Maritime Delivery</a></li>
              <li><a href="#coldchain">5. Cold-Chain &amp; Reefer Voyage Integrity</a></li>
              <li><a href="#payment">6. Payment Terms &amp; Letters of Credit</a></li>
              <li><a href="#inspection">7. Inspection, Discharge &amp; Claims</a></li>
              <li><a href="#force-majeure">8. Force Majeure &amp; Port Congestion</a></li>
              <li><a href="#governing-law">9. Governing Law &amp; Arbitration</a></li>
            </ul>

            <div className="toc-support-card">
              <h5>Commercial Contract Inquiries?</h5>
              <p>Speak directly with our trade desks regarding customized Incoterms or contracts.</p>
              <a href="tel:+919994640141" className="btn btn-gold btn-sm">
                Call +91 99946 40141
              </a>
            </div>
          </aside>

          {/* Legal Article Text */}
          <article className="legal-article-body reveal-on-scroll">
            <section id="acceptance" className="legal-section-block">
              <h2>1. Scope of Agreement</h2>
              <p>
                These Commercial Terms of Service (&ldquo;Terms&rdquo;) govern all wholesale procurement, supply agreements, and export transactions entered into with <strong>Santal Nexus</strong> (&ldquo;Seller&rdquo;), registered in Madurai, Tamil Nadu, India.
              </p>
              <p>
                Issuing an official Purchase Order (PO), confirming an export Request for Quotation (RFQ), opening an Irrevocable Letter of Credit (L/C), or executing a formal Sales Contract constitutes unconditional acceptance of these Terms.
              </p>
            </section>

            <section id="produce-specs" className="legal-section-block">
              <h2>2. Produce Grading, Calibration &amp; Tolerances</h2>
              <p>
                All fresh agricultural commodities (including Cavendish G9 Bananas, Small Red Onions/Shallots, Green Chillies, Moringa Drumsticks, and Pomegranates) are graded and packed according to agreed commercial specifications, APEDA standards, and Codex Alimentarius guidelines.
              </p>
              <ul>
                <li><strong>Natural Transit Weight Loss:</strong> Fresh fruits and vegetables are living, respiring biological commodities. A natural transit moisture evaporation variance of <strong>2.0% to 3.5%</strong> between packhouse weighing and destination discharge is recognized as customary international trade practice.</li>
                <li><strong>Caliber &amp; Sizing:</strong> Calibration (e.g., 40mm+ for Shallots, 39–46 caliber for Bananas) is calibrated on packhouse sorting lines prior to pallet strapping.</li>
              </ul>
            </section>

            <section id="quotations" className="legal-section-block">
              <h2>3. Commercial Quotations &amp; Validity</h2>
              <p>
                Due to seasonal market dynamics, freight rate fluctuations, and diesel logistics benchmarks, written quotations and Proforma Invoices issued by Santal Nexus remain valid for <strong>five (5) business days</strong> from date of issuance, unless explicitly stated otherwise in writing.
              </p>
            </section>

            <section id="incoterms" className="legal-section-block">
              <h2>4. Incoterms &amp; Maritime Delivery</h2>
              <p>
                Unless alternative arrangements are mutually countersigned, all cross-border commercial transactions are executed under <strong>Incoterms® 2020 (ICC)</strong> rules:
              </p>
              <ul>
                <li><strong>CIF (Cost, Insurance and Freight):</strong> Seller arranges and pays for ocean carriage, port loading at V.O. Chidambaranar Port (Tuticorin) or Chennai, and marine cargo insurance (ICC Clause A Institute Frozen/Chilled Produce) to agreed discharge port (e.g., Port Klang, Singapore, Jebel Ali). Risk transfers to Buyer once container passes the ship&apos;s rail at loading port.</li>
                <li><strong>FOB (Free on Board):</strong> Seller is responsible for packhouse sorting, local cold trucking, customs clearance, and loading aboard Buyer&apos;s nominated vessel. Buyer bears freight costs and transit insurance.</li>
              </ul>
            </section>

            <section id="coldchain" className="legal-section-block">
              <h2>5. Cold-Chain &amp; Reefer Voyage Integrity</h2>
              <p>
                For refrigerated ocean containers (40ft High Cube Reefers), Seller guarantees that produce is pre-cooled and containerized at the agreed transit setpoint (e.g., +13.5°C with 15 CMH ventilation for Cavendish Bananas).
              </p>
              <p>
                Every container carries dual certified USB/IoT voyage data loggers. The carrier&apos;s maritime reefer plug-in logs and data logger readings serve as definitive proof of cold-chain continuity during transit.
              </p>
            </section>

            <section id="payment" className="legal-section-block">
              <h2>6. Payment Terms &amp; Letters of Credit</h2>
              <p>Accepted payment modalities for international trade include:</p>
              <ul>
                <li><strong>Irrevocable Confirmed Letter of Credit (L/C):</strong> Payable at sight against presentation of clean On-Board Ocean Bills of Lading, Commercial Invoice, Certificate of Origin, and Phytosanitary Certificate issued by first-class international banks.</li>
                <li><strong>Telegraphic Transfer (T/T):</strong> Part-advance deposit upon contract signing, with final balance payable against soft copy presentation of Bill of Lading prior to vessel arrival at destination.</li>
              </ul>
            </section>

            <section id="inspection" className="legal-section-block">
              <h2>7. Inspection, Discharge &amp; Claims Protocol</h2>
              <p>
                Buyer has the right to inspect the cargo at the port of discharge. In the rare event of quality divergence or temperature abuse in transit:
              </p>
              <ol>
                <li>Notice of discrepancy must be communicated to Seller within <strong>48 hours</strong> of container destuffing, accompanied by unbroken container seal records.</li>
                <li>Claims must be supported by an independent joint survey report performed by an accredited maritime surveyor (e.g., SGS, Bureau Veritas, or Intertek).</li>
                <li>Seller shall not be liable for quality deterioration resulting from post-discharge warehouse delays, customs clearance holds at destination, or reefer power disconnections attributable to consignee agents.</li>
              </ol>
            </section>

            <section id="force-majeure" className="legal-section-block">
              <h2>8. Force Majeure &amp; Port Congestion</h2>
              <p>
                Neither party shall be held liable for failure or delay in performance resulting from causes beyond reasonable control, including cyclones, catastrophic floods, strikes, port canal blockades, civil unrest, export embargoes imposed by regulatory authorities, or global maritime vessel omissions.
              </p>
            </section>

            <section id="governing-law" className="legal-section-block">
              <h2>9. Governing Law &amp; Arbitration</h2>
              <p>
                These Terms and all commercial contracts derived hereunder are construed and governed in accordance with the laws of the Republic of India. Any unresolved commercial dispute shall be submitted to binding arbitration in Madurai / Chennai, Tamil Nadu under the Indian Arbitration and Conciliation Act, 1996.
              </p>
              <div className="legal-contact-callout">
                <strong>Commercial Desk Contact</strong><br />
                Santal Nexus Commercial Secretariat<br />
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
