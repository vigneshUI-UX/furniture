// src/components/ProductHighlights/ProductHighlights.jsx
import React from 'react';
import './ProductHighlights.css';

const highlights = [
  { icon: '🪵', title: '100% Solid Teak & Sheesham', desc: 'Crafted from premium certified Indian hardwoods built to last generations.' },
  { icon: '✨', title: 'Velvet & Brass Accents', desc: 'Luxurious stain-resistant fabrics hand-stitched with polished gold brass fittings.' },
  { icon: '🪔', title: 'Festive Ready Polish', desc: 'Treated with eco-friendly organic waxes for a rich glossy sheen during Diwali.' },
];

export default function ProductHighlights() {
  return (
    <section className="highlights-section">
      <div className="section-header">
        <span className="section-subtitle">EXCELLENCE IN EVERY DETAIL</span>
        <h2 className="section-title">Product Highlights</h2>
      </div>
      <div className="highlights-grid">
        {highlights.map((h, index) => (
          <div key={index} className="highlight-card">
            <span className="highlight-icon">{h.icon}</span>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}