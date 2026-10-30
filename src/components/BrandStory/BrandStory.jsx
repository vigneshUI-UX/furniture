// src/components/BrandStory/BrandStory.jsx
import React from 'react';
import './BrandStory.css';

export default function BrandStory() {
  return (
    <section className="brand-story-section">
      <div className="brand-story-container">
        <div className="story-content">
          <span className="section-subtitle"></span>
          <h2 className="section-title">About Our Brand </h2>
          <p>
            Founded in the heart of artisanal woodworking traditions, <strong>Sara Living</strong> brings royal craftsmanship directly into contemporary homes. Every sofa, dining table, and wardrobe is built by master karigars who infuse generational skill with modern ergonomics.
          </p>
          <p>
            This Diwali, we invite you to bring home pieces that radiate warmth, auspicious prosperity, and timeless elegance.
          </p>
        </div>
        <div className="story-image-box">
          <img 
            src="https://i.pinimg.com/1200x/cd/e6/55/cde6551c2ee1570e09c0a6d950b3fb9e.jpg" 
            alt="Craftsman workshop" 
            className="story-img"
          />
        </div>
      </div>
    </section>
  );
}