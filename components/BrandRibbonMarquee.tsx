'use client';

import React from 'react';

const HIGHLIGHTS = [
  'APEDA REGISTERED MERCHANT EXPORTER',
  'VOC TUTICORIN REEFER CORRIDOR',
  'MADURAI AIR CARGO EXPRESS',
  'FSSAI CENTRAL FOOD SAFETY CERTIFIED',
  'OPTICAL GRADING & EXPORT PACKHOUSE',
  'SE ASIA & GCC MARITIME SUPPLY',
  'PHYTOSANITARY PRE-INSPECTION CLEARANCE',
  'COLD-CHAIN TEMPERATURE LOGGED',
];

const PRODUCE_TAGS = [
  'G9 CAVENDISH BANANAS',
  'DINDIGUL RED SHALLOTS',
  'G4 GREEN CHILLIES',
  'FRESH MORINGA DRUMSTICKS',
  'AROMA CURRY LEAVES',
  'BHAGWA RUBY POMEGRANATES',
  'ALPHONSO & BANGANAPALLI MANGOES',
  'FRESH SEEDLESS LEMONS',
];

export default function BrandRibbonMarquee() {
  const listA = [...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS];
  const listB = [...PRODUCE_TAGS, ...PRODUCE_TAGS, ...PRODUCE_TAGS];

  return (
    <aside className="brand-ribbon-section" aria-label="Export Standards and Harvest Highlights Ribbon">
      {/* Top Gold Ribbon - Left Scrolling */}
      <div className="ribbon-strip ribbon-strip-gold" aria-hidden="true">
        <div className="ribbon-track ribbon-track-left">
          {listA.map((item, idx) => (
            <span key={`ribbon-a-${idx}`} className="ribbon-item">
              <span className="ribbon-star">★</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Forest Ribbon - Right Scrolling */}
      <div className="ribbon-strip ribbon-strip-dark" aria-hidden="true">
        <div className="ribbon-track ribbon-track-right">
          {listB.map((item, idx) => (
            <span key={`ribbon-b-${idx}`} className="ribbon-item">
              <span className="ribbon-gem">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

