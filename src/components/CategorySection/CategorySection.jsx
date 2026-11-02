// src/components/CategorySection/CategorySection.jsx
import React from 'react';
import './CategorySection.css';

const categories = [
  { id: 1, title: 'Living Room Sets', discount: 'Up to 50% Off', image: 'https://i.pinimg.com/1200x/c5/6b/4e/c56b4e8f83fbbfdb335de795ab811412.jpg' },
  { id: 2, title: 'Royal Dining Tables', discount: 'Up to 40% Off', image: 'https://i.pinimg.com/736x/fc/05/60/fc0560001b43cfbab78c8bf71ebd9c8b.jpg' },
  { id: 3, title: 'Luxury Bedroom Beds', discount: 'Up to 45% Off', image: 'https://i.pinimg.com/736x/7e/00/30/7e0030e50d503f9f52c3ab75fea4f0ec.jpg' },
  { id: 4, title: 'Festive Home Decor', discount: 'Flat 30% Off', image: 'https://i.pinimg.com/736x/34/78/b6/3478b63bfd26cfaf167d912d5337f841.jpg' },
];

export default function CategorySection() {
  return (
    <section id="categories" className="category-section">
      <div className="section-header">
        <h2 className="section-title"> Featured Collections</h2>
      </div>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.title} className="category-img" />
            <div className="category-overlay">
              <span className="cat-discount">{cat.discount}</span>
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}