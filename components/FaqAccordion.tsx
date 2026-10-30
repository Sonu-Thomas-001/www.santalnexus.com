'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/data/faq';

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export default function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-group">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'active' : ''}`} style={{ marginBottom: '1rem' }}>
            <button
              type="button"
              className="faq-summary"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '1.25rem 1.5rem',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-primary)' }}>
                {item.question}
              </span>
              <svg
                className="faq-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  width: '18px',
                  height: '18px',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  flexShrink: 0,
                  color: 'var(--color-gold)',
                  marginLeft: '1rem',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div className="faq-body" style={{ padding: '0 1.5rem 1.25rem 1.5rem' }}>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
