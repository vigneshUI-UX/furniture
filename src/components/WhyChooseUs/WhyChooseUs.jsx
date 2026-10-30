// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  { num: '', title: 'Lifetime Wood Warranty', desc: 'Guaranteed termite-free solid timber frame constructions.' },
  { num: '', title: 'Free Festive White-Glove Delivery', desc: 'Complimentary assembly and doorstep setup across India.' },
  { num: '', title: '0% Cost EMI Options', desc: 'Flexible festival payment plans with major credit partners.' },
  { num: '', title: 'Handcrafted Perfection', desc: 'Inspected rigorously through 25 quality checkpoints.' },
];

const cardAnimations = ['fade-right', 'zoom-in-up', 'zoom-in-down', 'fade-left'];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="section-header" data-aos="fade-up">
        <span className="section-subtitle">THE AURA PROMISE</span>
        <h2 className="section-title">Why Choose Us</h2>
      </div>
      <div className="why-grid">
        {reasons.map((r, i) => (
          <div 
            key={i} 
            className="why-card"
            data-aos={cardAnimations[i % cardAnimations.length]}
            data-aos-delay={i * 120}
          >
            <span className="why-num">{r.num}</span>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}