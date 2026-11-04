'use client';

import React from 'react';
import Link from 'next/link';

interface CommodityItem {
  id: string;
  emoji: string;
  name: string;
  origin: string;
  spec: string;
  temp: string;
  markets: string;
}

const COMMODITIES: CommodityItem[] = [
  {
    id: 'banana',
    emoji: '🍌',
    name: 'Cavendish G9 Bananas',
    origin: 'Theni & Trichy Belts',
    spec: 'Optical Graded · Class 1',
    temp: '+13.5°C Reefer',
    markets: 'UAE · Qatar · Oman',
  },
  {
    id: 'shallot',
    emoji: '🧅',
    name: 'Small Red Onions (Shallots)',
    origin: 'Dindigul & Madurai',
    spec: '25mm–35mm · Mesh Bags',
    temp: 'Ventilated Stowage',
    markets: 'Malaysia · Singapore',
  },
  {
    id: 'chilli',
    emoji: '🌶️',
    name: 'G4 Green Chillies',
    origin: 'Theni Farm Clusters',
    spec: '7cm–10cm · Unblemished',
    temp: 'Air Cargo Express',
    markets: 'UK · UAE · Saudi Arabia',
  },
  {
    id: 'curry-leaves',
    emoji: '🌿',
    name: 'Fresh Aroma Curry Leaves',
    origin: 'Karur Agrarian Belt',
    spec: 'Daily 4:00 AM Harvest',
    temp: 'Hydro-Cooled Transit',
    markets: 'Singapore · Dubai · Qatar',
  },
  {
    id: 'mango',
    emoji: '🥭',
    name: 'Alphonso & Banganapalli',
    origin: 'Krishnagiri Orchards',
    spec: 'GI Tagged · 250g–350g',
    temp: 'Ethylene Controlled',
    markets: 'Singapore · GCC · UK',
  },
  {
    id: 'pomegranate',
    emoji: '🍈',
    name: 'Bhagwa Ruby Pomegranates',
    origin: 'South Indian Belts',
    spec: '16°+ Brix · Deep Arils',
    temp: '+5°C Reefer Calibrated',
    markets: 'Europe · UAE · SE Asia',
  },
  {
    id: 'drumstick',
    emoji: '🥢',
    name: 'Moringa Fresh Drumsticks',
    origin: 'Dindigul Basin',
    spec: '45cm–60cm Uniform Cut',
    temp: 'Rapid Port Dispatch',
    markets: 'Malaysia · Maldives · GCC',
  },
  {
    id: 'lemon',
    emoji: '🍋',
    name: 'Fresh Seedless Lemons',
    origin: 'Tirunelveli Farms',
    spec: '40mm+ High Juice Yield',
    temp: 'Pre-cooled Packaging',
    markets: 'Gulf & Domestic Terminals',
  },
];

export default function ProduceTicker() {
  const tickerList = [...COMMODITIES, ...COMMODITIES];

  return (
    <section className="produce-ticker-section" aria-label="Real-time Farm Produce Harvest & Export Ticker">
      <div className="produce-ticker-header">
        <div className="container ticker-header-container">
          <div className="ticker-badge-row">
            <span className="ticker-pulse-pill">
              <span className="live-pulse-dot gold"></span>
              LIVE COMMODITY DISPATCH
            </span>
            <span className="ticker-title">Seasonal Fresh Produce &amp; Export Specifications</span>
          </div>
          <Link href="/products" className="ticker-view-all">
            <span>Explore Catalog Matrix &rarr;</span>
          </Link>
        </div>
      </div>

      <div className="produce-ticker-wrapper">
        <div className="ticker-fade-overlay left"></div>
        <div className="ticker-fade-overlay right"></div>

        <div className="produce-ticker-track">
          {tickerList.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="commodity-ticker-chip">
              <span className="commodity-emoji" aria-hidden="true">{item.emoji}</span>
              <div className="commodity-details">
                <div className="commodity-top-line">
                  <strong className="commodity-name">{item.name}</strong>
                  <span className="commodity-temp-pill">{item.temp}</span>
                </div>
                <div className="commodity-bottom-line">
                  <span className="commodity-origin">{item.origin}</span>
                  <span className="commodity-bullet">&bull;</span>
                  <span className="commodity-spec">{item.spec}</span>
                  <span className="commodity-bullet">&bull;</span>
                  <span className="commodity-markets">Destinations: {item.markets}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
