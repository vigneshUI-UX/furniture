// src/components/FeaturedProducts/FeaturedProducts.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import './FeaturedProducts.css';

const products = [
  { id: 'p1', name: 'Maharaja Royal Velvet Sofa', originalPrice: 65000, price: 42999, rating: 4.9, image: 'https://i.pinimg.com/736x/5c/a9/e9/5ca9e97f533e7b4d43a5add7da48e83c.jpg', tag: 'Bestseller' },
  { id: 'p2', name: 'Solid Teak Wood Dining 6-Seater', originalPrice: 80000, price: 54999, rating: 4.8, image: 'https://i.pinimg.com/1200x/0b/94/33/0b943343848fcdacffb63b82326ab4e7.jpg', tag: 'Diwali Special' },
  { id: 'p3', name: 'King Size Tufted Velvet Bed', originalPrice: 52000, price: 36999, rating: 4.9, image: 'https://i.pinimg.com/736x/9f/88/4a/9f884a545ccb743400e1074a83971785.jpg', tag: 'Limited Stock' },
  { id: 'p4', name: 'Handcrafted Sheesham Armchair', originalPrice: 22000, price: 13999, rating: 4.7, image: 'https://i.pinimg.com/736x/ef/68/fa/ef68fa8fd1ad37adf0ed7a7fd9553be7.jpg', tag: 'Trending' },
];

// Array of different AOS animations to cycle through
const animations = ['fade-up', 'zoom-in', 'fade-right', 'fade-left'];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="products-section">
      <div className="section-header" data-aos="fade-down">
        <span className="section-subtitle">EXCLUSIVE FESTIVE DEALS</span>
        <h2 className="section-title">Best-Selling Products</h2>
      </div>

      <div className="products-grid">
        {products.map((item, index) => (
          <div 
            key={item.id} 
            className="product-card"
            data-aos={animations[index % animations.length]} // Assigns a different animation to each card!
            data-aos-delay={index * 150}
          >
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