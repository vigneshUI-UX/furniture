// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const reviews = [
  { name: 'Sara', location: 'Tamil Nadu', text: 'Ordered the Maharaja Royal Velvet Sofa for Diwali. The quality is exceptional and delivery was right on time!', rating: 5 },
  { name: 'Udhay', location: 'Delhi', text: 'The teak wood dining table is stunning. All our relatives complimented the craftsmanship during Laxmi Pujan.', rating: 5 },
  { name: 'Vicky', location: 'Bangalore', text: 'Superb customer support and zero cost EMI made luxury furniture shopping effortless this festive season.', rating: 5 },
];

const testAnims = ['fade-up', 'flip-left', 'fade-down'];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-header" data-aos="zoom-in">
        <h2 className="section-title">Customer Reviews</h2>
      </div>
      <div className="testimonials-grid">
        {reviews.map((rev, i) => (
          <div 
            key={i} 
            className="testimonial-card"
            data-aos={testAnims[i % testAnims.length]}
            data-aos-delay={i * 200}
          >
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"{rev.text}"</p>
            <div className="reviewer-info">
              <strong>{rev.name}</strong>
              <span>{rev.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}