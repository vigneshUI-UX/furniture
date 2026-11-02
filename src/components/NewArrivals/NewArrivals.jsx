// src/components/NewArrivals/NewArrivals.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import './NewArrivals.css';

const newItems = [
  { id: 'na1', name: 'Modern Minimalist Lounge Chair', price: 18999, originalPrice: 26000, rating: 4.9, image: 'https://i.pinimg.com/1200x/33/91/1a/33911a027f9893731f43bb2f35a43fc4.jpg', tag: 'Just Landed' },
  { id: 'na2', name: 'Teak Wood Coffee Table with ', price: 15499, originalPrice: 21000, rating: 4.8, image: 'https://i.pinimg.com/736x/f7/69/e0/f769e07652aa45d035014e516dac84e0.jpg', tag: 'New Festive Drop' },
  { id: 'na3', name: 'Hand-Carved Wooden Bookshelf', price: 28999, originalPrice: 38000, rating: 5.0, image: 'https://i.pinimg.com/1200x/98/24/dd/9824dd772d9c176b1d71045c6eaf1d20.jpg', tag: 'Handcrafted' },
];

export default function NewArrivals() {
  const { addToCart } = useCart();

  return (
    <section className="new-arrivals-section">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
      </div>

      <div className="new-arrivals-grid">
        {newItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-box">
              <span className="product-tag">{item.tag}</span>
              <img src={item.image} alt={item.name} className="product-img" />
            </div>
            <div className="product-info">
              <div className="product-rating">⭐ {item.rating}</div>
              <h3 className="product-title">{item.name}</h3>
              <div className="product-price-row">
                <div>
                  <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="original-price">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <button className="add-cart-btn" onClick={() => addToCart(item)}>+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}