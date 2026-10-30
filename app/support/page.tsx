'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    phone: '',
    orderRef: '',
    category: 'Shipment Tracking & Reefer Telematics',
    priority: 'Normal',
    description: '',
  });

  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketData.name || !ticketData.email || !ticketData.description) {
      alert('Please fill in your Name, Email, and Support Request details.');
      return;
    }

    const messageLines = [
      `*Urgent Support Ticket — Santal Nexus Trade Desk*`,
      `────────────────────`,
      `*Name:* ${ticketData.name}`,
      `*Email:* ${ticketData.email}`,
      `*Phone:* ${ticketData.phone || 'Not provided'}`,
      `*Order/Contract Ref:* ${ticketData.orderRef || 'Pre-contract inquiry'}`,
      `*Category:* ${ticketData.category}`,
      `*Priority Level:* ${ticketData.priority}`,
      `*Details:*`,
      ticketData.description,
      `────────────────────`,
      `_Submitted via santalnexus.com Help Center_`,
    ];

    const encoded = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/919994640141?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmittedStatus('Support request launched on WhatsApp. Our dispatch lead will respond promptly.');
  };

  const supportCategories = [
    {
      title: 'Container Tracking & Reefer Telematics',
      desc: 'Verify vessel ETAs, VOC Port Tuticorin / Chennai container loading, and ocean reefer temperature logger records.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      actionText: 'Track Shipment & Loggers',
      actionLink: 'https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20would%20like%20to%20verify%20my%20container%20tracking%20and%20reefer%20telematics.',
    },
    {
      title: 'Phytosanitary & APEDA Clearance',
      desc: 'Request duplicate health certificates, Certificate of Origin, fumigation seals, or customs document packs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      actionText: 'Request Export Documents',
      actionLink: 'https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20need%20assistance%20with%20Phytosanitary%20or%20export%20documentation.',
    },
    {
      title: 'Quality & Packhouse Calibration',
      desc: 'Pre-shipment brix testing, caliber grading parameters, sorting videos, and moisture-resistant carton inspection.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      actionText: 'Inspect Quality Reports',
      actionLink: 'https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20have%20an%20inquiry%20regarding%20produce%20quality%20and%20packhouse%20inspection.',
    },
    {
      title: 'Payment, LC & Contract Support',
      desc: 'Clarifications on Irrevocable Letters of Credit, Swift MT103 confirmations, Proforma Invoices, and trade insurance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      actionText: 'Contact Banking Desk',
      actionLink: 'https://wa.me/919994640141?text=Hello%20Santal%20Nexus%2C%20I%20need%20assistance%20with%20an%20LC%20or%20banking%20documentation.',
    },
  ];

  return (
    <div className="page-support">
      {/* Hero Banner */}
      <section className="legal-hero-banner" aria-label="Support Desk Header">
        <div className="container">
          <div className="legal-hero-content reveal-on-scroll">
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="sep" aria-hidden="true">&gt;</li>
                <li className="active" aria-current="page">Help &amp; Support Desk</li>
              </ol>
            </nav>
            <span className="section-eyebrow">Trade Resolution &amp; Client Service</span>
            <h1 className="legal-hero-title">Help Center &amp; Support Desk</h1>
            <p className="legal-hero-subtitle">
              Dedicated commercial assistance for international produce importers, regional supermarket distributors, and contract partners.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Resolution Channels Grid */}
      <section className="support-channels-section">
        <div className="container">
          <div className="section-intro-center reveal-on-scroll">
            <span className="section-eyebrow">Fast Resolution</span>
            <h2 className="section-heading">Dedicated Trade Desks</h2>
            <p className="section-subtext">Select an operational category to connect immediately with the responsible coordinator.</p>
          </div>

          <div className="support-cards-grid">
            {supportCategories.map((cat, i) => (
              <div key={i} className="support-card-item reveal-on-scroll">
                <div className="support-card-icon" aria-hidden="true">
                  {cat.icon}
                </div>
                <h3 className="support-card-title">{cat.title}</h3>
                <p className="support-card-desc">{cat.desc}</p>
                <a
                  href={cat.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-card-cta"
                >
                  <span>{cat.actionText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Support Ticket Form */}
      <section className="support-ticket-section">
        <div className="container support-ticket-layout">
          {/* Left Column: Direct Escalation Info */}
          <div className="support-escalation-panel reveal-on-scroll">
            <span className="section-eyebrow">Priority Escalation</span>
            <h2 className="escalation-heading">Direct Commercial Lines</h2>
            <p className="escalation-desc">
              For active vessels or container dispatches experiencing customs inspection delays or technical questions, reach our senior trade operations desk directly:
            </p>

            <div className="escalation-contacts-stack">
              <a href="tel:+919994640141" className="escalation-contact-row">
                <div className="esc-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="esc-info">
                  <span className="esc-label">24/7 Trade Hotline</span>
                  <span className="esc-value">+91 99946 40141</span>
                </div>
              </a>

              <a href="mailto:santalnexus@gmail.com" className="escalation-contact-row">
                <div className="esc-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="esc-info">
                  <span className="esc-label">Priority Trade Email</span>
                  <span className="esc-value">santalnexus@gmail.com</span>
                </div>
              </a>

              <div className="escalation-contact-row static-row">
                <div className="esc-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="esc-info">
                  <span className="esc-label">Physical Trading Hub &amp; Packhouse</span>
                  <span className="esc-value">Opp. UCO Bank, Dindigul Main Road, T. Vadiapatti, Madurai – 625218, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ticket Submission Box */}
          <div className="support-form-card reveal-on-scroll">
            <h3 className="support-form-title">Submit a Support Ticket</h3>
            <p className="support-form-sub">Our operations team will review your order details and respond within 2 to 4 business hours.</p>

            {submittedStatus && (
              <div className="form-status-alert success" role="alert">
                <div className="status-alert-body">
                  <strong>✓ Request Transmitted</strong>
                  <p>{submittedStatus}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ticketName" className="form-label">
                    Your Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="ticketName"
                    className="form-input"
                    placeholder="e.g. David Tan / Ahmed Al-Mansoori"
                    value={ticketData.name}
                    onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ticketEmail" className="form-label">
                    Corporate Email <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="ticketEmail"
                    className="form-input"
                    placeholder="e.g. procurement@apexfresh.com"
                    value={ticketData.email}
                    onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ticketPhone" className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="ticketPhone"
                    className="form-input"
                    placeholder="e.g. +60 12-345 6789"
                    value={ticketData.phone}
                    onChange={(e) => setTicketData({ ...ticketData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ticketOrderRef" className="form-label">Order / Container / RFQ Ref</label>
                  <input
                    type="text"
                    id="ticketOrderRef"
                    className="form-input"
                    placeholder="e.g. SN-2026-OCT-042 / Pre-contract"
                    value={ticketData.orderRef}
                    onChange={(e) => setTicketData({ ...ticketData, orderRef: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ticketCategory" className="form-label">Category</label>
                  <select
                    id="ticketCategory"
                    className="form-select"
                    value={ticketData.category}
                    onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
                  >
                    <option value="Shipment Tracking & Reefer Telematics">Shipment Tracking &amp; Reefer Telematics</option>
                    <option value="Phytosanitary & APEDA Clearance">Phytosanitary &amp; APEDA Clearance</option>
                    <option value="Quality Inspection & Sorting Verification">Quality Inspection &amp; Sorting Verification</option>
                    <option value="Payment, LC & Commercial Terms">Payment, LC &amp; Commercial Terms</option>
                    <option value="General Trade Desk Inquiries">General Trade Desk Inquiries</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="ticketPriority" className="form-label">Priority Level</label>
                  <select
                    id="ticketPriority"
                    className="form-select"
                    value={ticketData.priority}
                    onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
                  >
                    <option value="Normal">Normal — Standard Inquiry</option>
                    <option value="High">High — Scheduled Loading in 48h</option>
                    <option value="Critical / Urgent Port Hold">Critical — Vessel at Discharge Port / Customs Hold</option>
                  </select>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="ticketDesc" className="form-label">
                    Describe the Issue or Documentation Needed <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="ticketDesc"
                    className="form-textarea"
                    rows={4}
                    placeholder="Please provide details, container numbers, target discharge dates, or specific documents requested."
                    value={ticketData.description}
                    onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-actions-split">
                <button type="submit" className="btn-form-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z" />
                  </svg>
                  <span>Transmit Ticket via WhatsApp</span>
                </button>

                <a
                  href={`mailto:santalnexus@gmail.com?subject=${encodeURIComponent(`Support Request: ${ticketData.category} - ${ticketData.name}`)}&body=${encodeURIComponent(`Name: ${ticketData.name}\nEmail: ${ticketData.email}\nPhone: ${ticketData.phone}\nRef: ${ticketData.orderRef}\nPriority: ${ticketData.priority}\n\nDetails:\n${ticketData.description}`)}`}
                  className="btn-form-email"
                >
                  <span>Send Ticket via Email</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
