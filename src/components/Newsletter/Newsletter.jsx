// src/components/Newsletter/Newsletter.jsx
import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="section-title"> Newsletter Subscription</h2>
        <p>Subscribe to get exclusive festive discount codes, new arrival alerts, and interior styling tips.</p>

        {submitted ? (
          <div className="success-msg">✨ Thank you for subscribing! Check your inbox for your welcome voucher.</div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary">Subscribe Now</button>
          </form>
        )}
      </div>
    </section>
  );
}