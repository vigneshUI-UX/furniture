// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="festive-tag">✨ DEEPAVALI SPECIAL ✨</div>
          <h1 className="hero-title">
            Illuminate Your Home With <span>Luxury Comfort</span>
          </h1>
          <p className="hero-subtitle">
            Transform your living spaces this festive season. Enjoy up to <strong>50% OFF</strong> on premium handcrafted teak, velvet sofas, and royal dining collections.
          </p>

          <div className="hero-badges">
            <div className="badge-item">
              <span className="badge-num">50%</span>
              <span className="badge-text">Max Discount</span>
            </div>
            <div className="badge-divider"></div>
            <div className="badge-item">
              <span className="badge-num">0%</span>
              <span className="badge-text">Cost EMI</span>
            </div>
            <div className="badge-divider"></div>
            <div className="badge-item">
              <span className="badge-num">Free</span>
              <span className="badge-text">Diwali Delivery</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#products" className="btn-primary">Explore Festive Deals</a>
            <a href="#categories" className="btn-secondary">View Catalog</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="card-glass-frame">
            <img
              src="https://i.pinimg.com/736x/c5/1d/6b/c51d6b320889dcf736e3fc56f88e923c.jpg"
              alt="Royal Sofa Collection"
              className="hero-img"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}