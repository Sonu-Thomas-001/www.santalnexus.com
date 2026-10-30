'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCE_ITEMS, ProduceItem } from '@/data/products';

export default function ProductFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Produce' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'fruits', label: 'Fruits' },
    { id: 'greens', label: 'Leafy Greens' },
    { id: 'exotic', label: 'Exotic Produce' },
  ];

  const filteredItems = useMemo(() => {
    return PRODUCE_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category.toLowerCase() === activeCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.spec.toLowerCase().includes(q) ||
        (item.origin && item.origin.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="product-filter-container">
      {/* Search & Category Filter Header */}
      <div className="product-filter-controls">
        {/* Search Bar */}
        <div className="produce-search-wrap">
          <svg className="produce-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="produce-search-input"
            placeholder="Search by produce name, specification (e.g. G9 Banana, Red Onion, Moringa)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search produce catalog"
          />
          {searchQuery && (
            <button
              type="button"
              className="produce-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
            >
              &times;
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-bar" role="tablist" aria-label="Produce Categories">
          {filterTabs.map((tab) => {
            const count = tab.id === 'all'
              ? PRODUCE_ITEMS.length
              : PRODUCE_ITEMS.filter((i) => i.category.toLowerCase() === tab.id.toLowerCase()).length;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.id}
                className={`btn-tab ${activeCategory === tab.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="produce-results-meta">
        <span className="results-count-text">
          Showing <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'produce variety' : 'produce varieties'}
          {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
        </span>
      </div>

      {/* Produce Grid or Empty State */}
      {filteredItems.length > 0 ? (
        <div className="produce-items-grid">
          {filteredItems.map((item) => {
            const whatsappMsg = `Hello Santal Nexus, I am enquiring about bulk supply / export for ${item.name}.`;
            const whatsappUrl = `https://wa.me/919994640141?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div key={item.id} className="produce-item-card reveal-on-scroll">
                <div className="produce-card-header">
                  <h4 className="produce-card-title">{item.name}</h4>
                  <span className="produce-category-tag">{item.category}</span>
                </div>

                <span className="produce-spec-badge">{item.spec}</span>
                <p className="produce-desc">{item.description}</p>

                <div className="produce-meta-list">
                  <div className="produce-meta-row">
                    <span className="meta-label">Packaging:</span>
                    <span className="meta-val">{item.packing}</span>
                  </div>
                  {item.origin && (
                    <div className="produce-meta-row">
                      <span className="meta-label">Origin:</span>
                      <span className="meta-val">{item.origin}</span>
                    </div>
                  )}
                </div>

                <div className="produce-card-footer">
                  <span className="produce-avail">
                    <span className="avail-dot"></span>
                    {item.availability}
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="produce-enquire-link"
                    aria-label={`Inquire about ${item.name} on WhatsApp`}
                  >
                    <span>Enquire</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State / No Results */
        <div className="produce-empty-state" role="alert">
          <div className="empty-state-graphic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="64" height="64" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <path d="M8 11h6" />
            </svg>
          </div>

          <h3 className="empty-state-title">No Agricultural Produce Found</h3>
          <p className="empty-state-desc">
            No crops matched your current filter or keyword &ldquo;<strong>{searchQuery}</strong>&rdquo;. However, Santal Nexus works directly with over 500+ growers across Madurai, Dindigul, and Theni. We can custom-procure unlisted varieties to your exact sizing and packing specs.
          </p>

          <div className="empty-state-actions">
            <button type="button" onClick={resetFilters} className="btn btn-gold">
              <span>Reset Filters &amp; Show All</span>
            </button>

            <a
              href={`https://wa.me/919994640141?text=${encodeURIComponent(`Hello Santal Nexus, I am looking for a produce variety (${searchQuery || 'custom produce'}) not listed on your website. Can your trade desk source this?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <span>Request Custom Sourcing on WhatsApp</span>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.52-1.11 1.01-1.54 1.06-.41.05-.95.07-2.84-.71-1.61-.66-2.65-2.28-2.73-2.39-.08-.11-.64-.86-.64-1.64 0-.78.41-1.16.55-1.32.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.33.48 1.16.52 1.25.04.09.07.2.01.31-.05.11-.08.18-.16.27-.08.09-.17.2-.24.27-.08.08-.16.17-.07.33.09.16.41.67.88 1.09.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.1-.11.41-.48.52-.64.11-.16.22-.14.37-.08.15.05.95.45 1.11.53.16.08.27.12.31.19.04.07.04.42-.15.94Z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
