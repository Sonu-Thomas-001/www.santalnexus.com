'use client';

import React from 'react';

interface RouteItem {
  id: string;
  type: 'sea' | 'air';
  origin: string;
  destination: string;
  country: string;
  flag: string;
  transit: string;
  mode: string;
}

const TRADE_ROUTES: RouteItem[] = [
  {
    id: 'port-klang',
    type: 'sea',
    origin: 'VOC Tuticorin Sea Port',
    destination: 'Port Klang',
    country: 'Malaysia',
    flag: '🇲🇾',
    transit: '6–7 Days Transit',
    mode: 'FCL CA Reefer Container',
  },
  {
    id: 'dubai-air',
    type: 'air',
    origin: 'Madurai Cargo (IXM)',
    destination: 'Dubai International (DXB)',
    country: 'UAE',
    flag: '🇦🇪',
    transit: '4.5 Hours Direct',
    mode: 'Same-Day Air Freight',
  },
  {
    id: 'singapore-psa',
    type: 'sea',
    origin: 'Chennai Sea Port',
    destination: 'PSA Terminal',
    country: 'Singapore',
    flag: '🇸🇬',
    transit: '5 Days Transit',
    mode: 'Express Feeder Reefer',
  },
  {
    id: 'doha-hamad',
    type: 'sea',
    origin: 'VOC Tuticorin Sea Port',
    destination: 'Hamad Port, Doha',
    country: 'Qatar',
    flag: '🇶🇦',
    transit: '8–9 Days Transit',
    mode: 'Continuous Cold-Chain Sea',
  },
  {
    id: 'male-maldives',
    type: 'sea',
    origin: 'Cochin / Tuticorin',
    destination: 'Port of Malé',
    country: 'Maldives',
    flag: '🇲🇻',
    transit: '36 Hours Barge',
    mode: 'Island Reefer Vessel',
  },
  {
    id: 'jebel-ali',
    type: 'sea',
    origin: 'VOC Tuticorin Sea Port',
    destination: 'Jebel Ali, Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    transit: '6 Days Fast Sea',
    mode: '+13.5°C Controlled Atmosphere',
  },
  {
    id: 'london-air',
    type: 'air',
    origin: 'Chennai Air Cargo (MAA)',
    destination: 'London Heathrow (LHR)',
    country: 'United Kingdom',
    flag: '🇬🇧',
    transit: 'Overnight Express',
    mode: 'Pre-cooled Air Pallet',
  },
  {
    id: 'sohar-oman',
    type: 'sea',
    origin: 'VOC Tuticorin Sea Port',
    destination: 'Sohar Port',
    country: 'Oman',
    flag: '🇴🇲',
    transit: '7–8 Days Sea',
    mode: 'Temperature-Logged Reefer',
  },
];

export default function TradeRouteMarquee() {
  const routesList = [...TRADE_ROUTES, ...TRADE_ROUTES];

  return (
    <div className="trade-routes-marquee-block" aria-label="International Freight Corridors and Transit Schedules">
      <div className="routes-marquee-eyebrow">
        <span>ACTIVE MARITIME &amp; AIR TRANSIT CORRIDORS</span>
      </div>

      <div className="routes-marquee-wrapper">
        <div className="routes-fade-overlay left"></div>
        <div className="routes-fade-overlay right"></div>

        <div className="routes-marquee-track">
          {routesList.map((route, i) => (
            <div key={`${route.id}-${i}`} className="route-card-pill">
              <div className="route-mode-badge">
                {route.type === 'sea' ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
                    <path d="M4 18L2 12h20l-2 6" />
                    <path d="M12 4v8" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-1.9.9l-.4.9 5.5 3.5L5 15l-2.5-.5L1 16l3.5 2 2 3.5 1.5-1.5L7.5 17.5l3 3.5.9-.4c.7-.3 1.1-1.1.9-1.9z" />
                  </svg>
                )}
                <span>{route.mode}</span>
              </div>

              <div className="route-endpoints">
                <span className="route-origin">{route.origin}</span>
                <span className="route-arrow" aria-hidden="true">&rarr;</span>
                <span className="route-destination">
                  <span className="route-flag" aria-hidden="true">{route.flag}</span>
                  <strong>{route.destination}</strong>, {route.country}
                </span>
              </div>

              <div className="route-timing-chip">
                <span className="live-pulse-dot green mini"></span>
                <span>{route.transit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
