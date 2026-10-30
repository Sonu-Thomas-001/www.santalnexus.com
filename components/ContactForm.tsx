'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phone: '',
    enquiryType: 'Fresh Produce Sourcing',
    destination: '',
    quantity: '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Please enter your business email';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      errs.businessEmail = 'Please enter a valid email address';
    }
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please describe your produce requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      `*New Business Enquiry — Santal Nexus*`,
      `────────────────────`,
      `*Name:* ${formData.fullName}`,
      `*Email:* ${formData.businessEmail}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      `*Category:* ${formData.enquiryType}`,
      `*Destination:* ${formData.destination || 'Domestic / Open to discussion'}`,
      `*Quantity:* ${formData.quantity || 'To be discussed'}`,
      `*Requirements:*`,
      formData.requirements,
      `────────────────────`,
      `_Sent via santalnexus.com Trade Portal_`,
    ];

    const encoded = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/919994640141?text=${encoded}`, '_blank', 'noopener,noreferrer');

    setSubmittedStatus({
      type: 'success',
      message: 'Opening WhatsApp with your pre-filled inquiry. Our trade desk will reply promptly!',
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Trade Enquiry: ${formData.enquiryType} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.businessEmail}\nPhone: ${formData.phone}\nCategory: ${formData.enquiryType}\nDestination: ${formData.destination}\nQuantity: ${formData.quantity}\n\nRequirements:\n${formData.requirements}`
    );

    window.location.href = `mailto:santalnexus@gmail.com?subject=${subject}&body=${body}`;

    setSubmittedStatus({
      type: 'success',
      message: 'Opening your email client to send your inquiry directly to our corporate desk.',
    });
  };

  return (
    <div className="enquiry-form-card">
      {submittedStatus && (
        <div
          className={`form-status-alert ${submittedStatus.type === 'success' ? 'form-status-success' : 'form-status-error'}`}
          role="alert"
          style={{
            padding: '1rem',
            marginBottom: '1.25rem',
            borderRadius: '6px',
            backgroundColor: submittedStatus.type === 'success' ? 'rgba(46, 125, 50, 0.12)' : 'rgba(211, 47, 47, 0.12)',
            border: `1px solid ${submittedStatus.type === 'success' ? '#2E7D32' : '#D32F2F'}`,
            color: submittedStatus.type === 'success' ? '#1B5E20' : '#B71C1C',
            fontSize: '0.9rem',
          }}
        >
          {submittedStatus.message}
        </div>
      )}

      <form onSubmit={handleEmailSubmit} className="enquiry-form" noValidate>
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
              placeholder="e.g. David Tan / Rajan Pillai"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              required
            />
            {errors.fullName && <span className="field-error-text" style={{ color: '#D32F2F', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.fullName}</span>}
          </div>

          {/* Business Email */}
          <div className="form-group">
            <label htmlFor="businessEmail" className="form-label">
              Business Email <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              className={`form-input ${errors.businessEmail ? 'has-error' : ''}`}
              placeholder="e.g. procurement@tradecorp.com"
              value={formData.businessEmail}
              onChange={(e) => {
                setFormData({ ...formData, businessEmail: e.target.value });
                if (errors.businessEmail) setErrors({ ...errors, businessEmail: '' });
              }}
              required
            />
            {errors.businessEmail && <span className="field-error-text" style={{ color: '#D32F2F', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.businessEmail}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone / WhatsApp (with country code)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="e.g. +91 99946 40141"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Enquiry Category */}
          <div className="form-group">
            <label htmlFor="enquiryType" className="form-label">
              Enquiry Category <span className="required-star">*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              className="form-select"
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              required
            >
              <option value="Fresh Produce Sourcing">Fresh Produce Sourcing</option>
              <option value="Export & International Trade">Export &amp; International Trade</option>
              <option value="Commercial Vegetables (Bulk)">Commercial Vegetables (Bulk)</option>
              <option value="Fresh Tropical Fruits">Fresh Tropical Fruits</option>
              <option value="Leafy Greens & Herbs">Leafy Greens &amp; Herbs</option>
              <option value="Grower / Sourcing Collaboration">Grower / Sourcing Collaboration</option>
            </select>
          </div>

          {!compact && (
            <>
              {/* Destination */}
              <div className="form-group">
                <label htmlFor="destination" className="form-label">
                  Destination Port / Market
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="form-input"
                  placeholder="e.g. Port Klang, Singapore, Jebel Ali, Chennai"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>

              {/* Quantity */}
              <div className="form-group">
                <label htmlFor="quantity" className="form-label">
                  Estimated Quantity / Frequency
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-input"
                  placeholder="e.g. 1 x 40ft Reefer weekly / 2 MT air freight"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
            </>
          )}

          {/* Requirements */}
          <div className="form-group form-group-full">
            <label htmlFor="requirements" className="form-label">
              Detailed Requirements &amp; Target Specifications <span className="required-star">*</span>
            </label>
            <textarea
              id="requirements"
              name="requirements"
              className={`form-textarea ${errors.requirements ? 'has-error' : ''}`}
              rows={compact ? 3 : 4}
              placeholder="Please specify produce varieties (e.g. G9 Bananas, Red Onions 45mm+, Green Chillies), packing preferences, sizing calibration, and target delivery timelines."
              value={formData.requirements}
              onChange={(e) => {
                setFormData({ ...formData, requirements: e.target.value });
                if (errors.requirements) setErrors({ ...errors, requirements: '' });
              }}
              required
            />
            {errors.requirements && <span className="field-error-text" style={{ color: '#D32F2F', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.requirements}</span>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions-split" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-gold"
            onClick={handleWhatsAppSubmit}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 200px', justifyContent: 'center' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z" />
            </svg>
            <span>Send via WhatsApp</span>
          </button>

          <button
            type="submit"
            className="btn btn-outline-dark"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 200px', justifyContent: 'center' }}
          >
            <span>Submit via Email</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
