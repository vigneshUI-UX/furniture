// src/components/DiwaliBanner/DiwaliBanner.jsx
import React, { useState, useEffect } from 'react';
import './DiwaliBanner.css';

export default function DiwaliBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sale" className="sale-banner-section">
      <div className="sale-banner-container">
        <div className="sale-banner-content">
          <div className="sale-tag">🔥 FLASH FESTIVE OFFER</div>
          <h2>Diwali Maha Dhamaka Deal</h2>
          <p>Extra 10% Instant Discount with HDFC & ICICI Cards | Free Festive Gift Box on orders above ₹49,999</p>
        </div>

        <div className="countdown-box">
          <span className="timer-title">Sale Ends In</span>
          <div className="timer-digits">
            <div className="digit-unit">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <label>Hours</label>
            </div>
            <span className="colon">:</span>
            <div className="digit-unit">
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <label>Mins</label>
            </div>
            <span className="colon">:</span>
            <div className="digit-unit">
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <label>Secs</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}