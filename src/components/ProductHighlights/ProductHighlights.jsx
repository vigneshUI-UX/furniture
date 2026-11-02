// src/components/ProductHighlights/ProductHighlights.jsx
import React from 'react';
import './ProductHighlights.css';

const highlights = [
  { 
    iconClass: 'bi bi-tree-fill', 
    title: '100% Solid Teak & Sheesham', 
    desc: 'Crafted from premium certified Indian hardwoods built to last generations.' 
  },
  { 
    iconClass: 'bi bi-stars', 
    title: 'Velvet & Brass Accents', 
    desc: 'Luxurious stain-resistant fabrics hand-stitched with polished gold brass fittings.' 
  },
  { 
    iconClass: 'bi bi-brightness-high-fill', 
    title: 'Festive Ready Polish', 
    desc: 'Treated with eco-friendly organic waxes for a rich glossy sheen during Diwali.' 
  },
];

export default function ProductHighlights() {
  return (
    <section className="highlights-section">
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">Product Highlights</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((h, index) => (
          <div 
            key={index} 
            className="highlight-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="highlight-icon-wrapper">
              <i className={h.iconClass}></i>
            </div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}