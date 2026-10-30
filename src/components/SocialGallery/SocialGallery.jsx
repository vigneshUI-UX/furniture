// src/components/SocialGallery/SocialGallery.jsx
import React from 'react';
import './SocialGallery.css';

const gramImages = [
  'https://i.pinimg.com/1200x/d3/2a/e8/d32ae801a9c45ce630890604b64ec290.jpg',
  'https://i.pinimg.com/736x/cb/20/e2/cb20e2bc51014415f09178d693b59829.jpg',
  'https://i.pinimg.com/1200x/83/ad/db/83addb1ccf03e91235b3be2d0d5e8bc4.jpg',
  'https://i.pinimg.com/736x/55/ee/52/55ee52a8029d2f986ba73d64d0c21601.jpg',
];

export default function SocialGallery() {
  return (
    <section className="social-gallery-section">
      <div className="section-header">
        <span className="section-subtitle">SARAF.LIVING ON INSTAGRAM</span>
        <h2 className="section-title">Social Media Gallery</h2>
      </div>
      <div className="social-grid">
        {gramImages.map((img, i) => (
          <div key={i} className="social-card">
            <img src={img} alt="Customer home setup" className="social-img" />
            <div className="social-overlay">
              <span>sarafwood</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}