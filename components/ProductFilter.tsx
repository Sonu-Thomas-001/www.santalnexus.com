'use client';

import React, { useState } from 'react';
import { PRODUCE_ITEMS, PRODUCE_CATEGORIES, ProduceItem } from '@/data/products';

export default function ProductFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? PRODUCE_ITEMS
    : PRODUCE_ITEMS.filter((item) => item.category === activeCategory);

  const filterTabs = [
    { id: 'all', label: 'All Produce' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'fruits', label: 'Fruits' },
    { id: 'greens', label: 'Leafy Greens' },
    { id: 'exotic', label: 'Exotic Produce' },
  ];

  return (
    <div className="product-filter-container">
      {/* Category Tabs */}
      <div
        className="category-tabs-bar"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
        }}
      >
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`btn-tab ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(tab.id)}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '9999px',
              border: '1.5px solid',
              borderColor: activeCategory === tab.id ? 'var(--color-gold)' : 'var(--color-border)',
              backgroundColor: activeCategory === tab.id ? 'var(--color-gold)' : 'var(--color-white)',
              color: activeCategory === tab.id ? 'var(--color-dark)' : 'var(--color-primary)',
              fontWeight: 600,
              fontSize: '0.925rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Produce Grid */}
      <div className="produce-items-grid">
        {filteredItems.map((item) => {
          const whatsappMsg = `Hello Santal Nexus, I am enquiring about bulk supply / export for ${item.name}.`;
          const whatsappUrl = `https://wa.me/919994640141?text=${encodeURIComponent(whatsappMsg)}`;

          return (
            <div key={item.id} className="produce-item-card reveal-on-scroll">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem' }}>{item.name}</h4>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(215, 180, 90, 0.15)',
                    color: 'var(--color-gold-dark)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </span>
              </div>

              <span className="produce-spec-badge">{item.spec}</span>
              <p style={{ margin: '0.75rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {item.description}
              </p>

              <div style={{ fontSize: '0.825rem', color: '#555', marginBottom: '0.85rem' }}>
                <div><strong>Packaging:</strong> {item.packing}</div>
                {item.origin && <div><strong>Origin:</strong> {item.origin}</div>}
              </div>

              <div className="produce-card-footer">
                <span className="produce-avail">{item.availability}</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="produce-enquire-link"
                >
                  Enquire &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
