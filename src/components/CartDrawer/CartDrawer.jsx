// src/components/CartDrawer/CartDrawer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalAmount } = useCart();
  const [blastActive, setBlastActive] = useState(false);
  const canvasRef = useRef(null);

  // Embedded Paper Blast Canvas Logic
  useEffect(() => {
    if (!blastActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#E89B5B', '#D46743', '#FFD285', '#FFEAD3', '#FF4500', '#00E5FF', '#FF007F'];

    // Generate confetti / paper blast particles
    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3, // Initial upward push
        width: Math.random() * 8 + 4,
        height: Math.random() * 14 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.008,
      });
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2; // Gravity effect
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        ctx.restore();

        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      if (particles.length > 0) {
        animationId = requestAnimationFrame(animate);
      } else {
        setBlastActive(false);
      }
    }

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [blastActive]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setBlastActive(false);
    setTimeout(() => setBlastActive(true), 10);
  };

  return (
    <>
      {/* Inline Paper Blast Overlay */}
      {blastActive && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      )}

      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
        <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h3>Your Festive Cart ({cartItems.length})</h3>
            <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>

          <div className="cart-body">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p> Your cart is empty right now.</p>
                <small>Explore Diwali specials to add luxury items.</small>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="total-row">
                <span>Total Amount:</span>
                <span className="total-num">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed To Diwali Checkout ✨
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}