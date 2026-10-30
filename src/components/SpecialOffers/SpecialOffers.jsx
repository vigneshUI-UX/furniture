// src/components/SpecialOffers/SpecialOffers.jsx
import React from 'react';
import './SpecialOffers.css';

export default function SpecialOffers() {
  return (
    <section className="special-offers-section">
      <div className="offers-container">
        <div className="offer-box">
          <span className="badge-pill"> Promotional Banner</span>
          <h3>Festive Combo Dhamaka</h3>
          <p>Buy any 6-Seater Dining Table & get a Sheesham Armchair at <strong>Flat 50% Off!</strong></p>
          <a href="#products" className="btn-primary">Claim Combo Deal</a>
        </div>
        <div className="offer-box highlight-box">
          <span className="badge-pill"> Special Offers</span>
          <h3>Bank Cashback Extra 10%</h3>
          <p>Use HDFC, ICICI, or SBI credit cards during checkout for instant festival statement cashback.</p>
          <span className="code-tag">Use Code: DIWALI10</span>
        </div>
      </div>
    </section>
  );
}