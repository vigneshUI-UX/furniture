// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-area">
          <span className="diya-icon"></span>
          <span className="brand-name">SARAF<span>wood</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <a href="#hero">Home</a>
          <a href="#sale">Festive Offers</a>
          <a href="#categories">Collections</a>
          <a href="#products">Diwali Specials</a>
        </nav>

        {/* Mobile Navigation Drawer Overlay & Menu */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
          <nav className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="drawer-logo">SARAFwood</span>
              <button className="drawer-close-btn" onClick={closeMenu}>✕</button>
            </div>

            <div className="mobile-nav-links">
              <a href="#hero" onClick={closeMenu}>Home</a>
              <a href="#sale" onClick={closeMenu}>Festive Offers</a>
              <a href="#categories" onClick={closeMenu}>Collections</a>
              <a href="#products" onClick={closeMenu}>Diwali Specials</a>
            </div>

            <div className="mobile-drawer-footer">
              <p>✨ Deepavali Sale Active</p>
            </div>
          </nav>
        </div>

        <div className="nav-actions">
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <span className="cart-icon">🛒</span>
            <span>Cart</span>
            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </button>

          <button 
            className={`hamburger-toggle ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}