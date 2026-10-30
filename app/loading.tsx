import React from 'react';

export default function Loading() {
  return (
    <div className="page-loading-skeleton" aria-live="polite" aria-busy="true">
      <div className="skeleton-inner">
        <div className="skeleton-brand-lockup">
          <div className="skeleton-spinner-ring">
            <div className="skeleton-spinner-core"></div>
          </div>
          <div className="skeleton-pulse-text">
            <span className="skeleton-title">SANTAL NEXUS</span>
            <span className="skeleton-sub">Loading Fresh Produce Specifications...</span>
          </div>
        </div>

        <div className="skeleton-cards-row">
          <div className="skeleton-block block-hero"></div>
          <div className="skeleton-grid-preview">
            <div className="skeleton-block block-card"></div>
            <div className="skeleton-block block-card"></div>
            <div className="skeleton-block block-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
