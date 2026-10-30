'use client';

import React, { useState } from 'react';

export default function ExportRfqForm() {
  const [rfq, setRfq] = useState({
    buyerName: '',
    company: '',
    email: '',
    phone: '',
    produce: 'Cavendish Bananas (G9)',
    volume: '1 x 40ft Reefer Container (FCL)',
    destinationPort: '',
    incoterm: 'CIF (Cost, Insurance & Freight)',
    notes: '',
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const buildMessage = () => {
    return [
      `*New Export RFQ — Santal Nexus*`,
      `────────────────────`,
      `*Buyer Name:* ${rfq.buyerName}`,
      `*Company:* ${rfq.company}`,
      `*Email:* ${rfq.email}`,
      `*Phone/WhatsApp:* ${rfq.phone}`,
      `*Target Produce:* ${rfq.produce}`,
      `*Volume:* ${rfq.volume}`,
      `*Discharge Port:* ${rfq.destinationPort}`,
      `*Preferred Incoterm:* ${rfq.incoterm}`,
      `*Specific Notes / Packaging:*`,
      rfq.notes || 'Standard international export packing requested.',
      `────────────────────`,
      `_Submitted via santalnexus.com Export Desk_`,
    ].join('\n');
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!rfq.buyerName || !rfq.company || !rfq.email || !rfq.destinationPort) {
      alert('Please fill in your Name, Company, Email, and Destination Port.');
      return;
    }

    const encoded = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/919994640141?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setFeedback('WhatsApp launched with your completed RFQ specifications.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rfq.buyerName || !rfq.company || !rfq.email || !rfq.destinationPort) {
      alert('Please fill in your Name, Company, Email, and Destination Port.');
      return;
    }

    const subject = encodeURIComponent(`Export RFQ: ${rfq.produce} to ${rfq.destinationPort} - ${rfq.company}`);
    const body = encodeURIComponent(buildMessage());

    window.location.href = `mailto:santalnexus@gmail.com?subject=${subject}&body=${body}`;
    setFeedback('Email client opened with your RFQ details addressed to santalnexus@gmail.com.');
  };

  return (
    <div className="export-rfq-box reveal-on-scroll">
      <div className="rfq-header-center">
        <span className="section-eyebrow">Instant Commercial Quotation</span>
        <h2 className="section-heading">Request an Export Quote (RFQ)</h2>
        <p className="section-subtext">
          Share your target produce requirements, destination port, and container volume. Our export desk will review and provide a competitive commercial quote.
        </p>
      </div>

      {feedback && (
        <div
          role="alert"
          style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(46, 125, 50, 0.12)',
            border: '1px solid #2E7D32',
            color: '#1B5E20',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          {feedback}
        </div>
      )}

      <form id="exportRfqForm" className="rfq-form" onSubmit={handleSubmit}>
        <div className="rfq-form-grid">
          {/* Name */}
          <div className="rfq-field-group">
            <label htmlFor="rfqBuyerName">Your Full Name *</label>
            <input
              type="text"
              id="rfqBuyerName"
              className="rfq-input"
              placeholder="e.g. David Tan / Ahmed Al-Mansoori"
              required
              value={rfq.buyerName}
              onChange={(e) => setRfq({ ...rfq, buyerName: e.target.value })}
            />
          </div>

          {/* Company */}
          <div className="rfq-field-group">
            <label htmlFor="rfqCompany">Company / Trading Entity *</label>
            <input
              type="text"
              id="rfqCompany"
              className="rfq-input"
              placeholder="e.g. Apex Fresh Trading Pte Ltd"
              required
              value={rfq.company}
              onChange={(e) => setRfq({ ...rfq, company: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="rfq-field-group">
            <label htmlFor="rfqEmail">Business Email *</label>
            <input
              type="email"
              id="rfqEmail"
              className="rfq-input"
              placeholder="e.g. procurement@apexfresh.com"
              required
              value={rfq.email}
              onChange={(e) => setRfq({ ...rfq, email: e.target.value })}
            />
          </div>

          {/* Phone / WhatsApp */}
          <div className="rfq-field-group">
            <label htmlFor="rfqPhone">Phone / WhatsApp Number (with Country Code) *</label>
            <input
              type="tel"
              id="rfqPhone"
              className="rfq-input"
              placeholder="e.g. +60 12-345 6789"
              required
              value={rfq.phone}
              onChange={(e) => setRfq({ ...rfq, phone: e.target.value })}
            />
          </div>

          {/* Produce Selection */}
          <div className="rfq-field-group">
            <label htmlFor="rfqProduce">Produce Variety of Interest *</label>
            <select
              id="rfqProduce"
              className="rfq-select"
              required
              value={rfq.produce}
              onChange={(e) => setRfq({ ...rfq, produce: e.target.value })}
            >
              <option value="Cavendish Bananas (G9)">Cavendish Bananas (G9 Variety)</option>
              <option value="Fresh Green Chillies (G4/Bullet)">Fresh Green Chillies (G4 / Bullet)</option>
              <option value="Small Red Onions / Shallots">Small Red Onions / Shallots (Sambar)</option>
              <option value="Fresh Drumsticks (Moringa)">Fresh Drumsticks (Moringa)</option>
              <option value="Bhagwa Pomegranates">Bhagwa Pomegranates</option>
              <option value="Fresh Ginger & Garlic">Fresh Ginger &amp; Garlic</option>
              <option value="Mixed Vegetables Assortment">Mixed Vegetables Assortment</option>
              <option value="Other Agricultural Produce">Other Specific Produce</option>
            </select>
          </div>

          {/* Volume */}
          <div className="rfq-field-group">
            <label htmlFor="rfqVolume">Estimated Shipment Volume *</label>
            <select
              id="rfqVolume"
              className="rfq-select"
              required
              value={rfq.volume}
              onChange={(e) => setRfq({ ...rfq, volume: e.target.value })}
            >
              <option value="1 x 40ft Reefer Container (FCL)">1 x 40ft Reefer Container (FCL ~22 MT)</option>
              <option value="1 x 20ft Reefer Container (FCL)">1 x 20ft Reefer Container (FCL ~12 MT)</option>
              <option value="Multiple 40ft Reefers Weekly">Multiple 40ft Reefers Weekly</option>
              <option value="Air Cargo (1 - 3 MT)">Air Cargo (1 – 3 MT)</option>
              <option value="Trial Shipment / LCL">Trial Shipment / LCL</option>
            </select>
          </div>

          {/* Destination Port */}
          <div className="rfq-field-group">
            <label htmlFor="rfqDestinationPort">Destination Discharge Port &amp; Country *</label>
            <input
              type="text"
              id="rfqDestinationPort"
              className="rfq-input"
              placeholder="e.g. Port Klang (Malaysia) / Jebel Ali (Dubai)"
              required
              value={rfq.destinationPort}
              onChange={(e) => setRfq({ ...rfq, destinationPort: e.target.value })}
            />
          </div>

          {/* Preferred Incoterm */}
          <div className="rfq-field-group">
            <label htmlFor="rfqIncoterm">Preferred Incoterm *</label>
            <select
              id="rfqIncoterm"
              className="rfq-select"
              required
              value={rfq.incoterm}
              onChange={(e) => setRfq({ ...rfq, incoterm: e.target.value })}
            >
              <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance &amp; Freight) — Recommended</option>
              <option value="FOB (Free On Board Tuticorin/Chennai)">FOB (Free On Board Tuticorin / Chennai)</option>
              <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
              <option value="Air Freight Direct (CPT / CIP)">Air Freight Direct (CPT / CIP)</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div className="rfq-field-group rfq-full-width">
            <label htmlFor="rfqNotes">Packaging Requirements, Sizing or Specific Questions</label>
            <textarea
              id="rfqNotes"
              className="rfq-textarea"
              rows={3}
              placeholder="Specify any custom carton branding, grading sizing, target arrival dates, or payment terms."
              value={rfq.notes}
              onChange={(e) => setRfq({ ...rfq, notes: e.target.value })}
            />
          </div>
        </div>

        <div className="rfq-actions-row">
          <button type="button" className="btn-rfq-whatsapp" id="rfqWhatsAppBtn" onClick={handleWhatsApp}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z" />
            </svg>
            <span>Send RFQ via WhatsApp</span>
          </button>

          <button type="submit" className="btn-rfq-submit" id="rfqSubmitBtn">
            <span>Submit RFQ via Email</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
