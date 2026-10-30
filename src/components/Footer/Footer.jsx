// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-brand">SARAFwood</div>
          <p className="footer-desc">Crafting luxury homes with festive warmth and royal Indian heritage designs.</p>
        </div>

        <div>
          <h4>Festive Offers</h4>
          <ul>
            <li>Living Room Sale</li>
            <li>Dining Sets (Flat 40% Off)</li>
            <li>Diwali Lamps & Decor</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Free Home Delivery</li>
            <li>0% Interest EMI</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 SaraLiving Furniture. Deepavali! </p>
      </div>
    </footer>
  );
}