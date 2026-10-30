// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DiwaliBanner from './components/DiwaliBanner/DiwaliBanner';
import CategorySection from './components/CategorySection/CategorySection';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import NewArrivals from './components/NewArrivals/NewArrivals';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import BrandStory from './components/BrandStory/BrandStory';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProductHighlights from './components/ProductHighlights/ProductHighlights';
import Testimonials from './components/Testimonials/Testimonials';
import SocialGallery from './components/SocialGallery/SocialGallery';
import Newsletter from './components/Newsletter/Newsletter';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app-main">
        <Navbar />
        <Hero />
        <DiwaliBanner />
        <CategorySection />
        <FeaturedProducts />
        <NewArrivals />
        <SpecialOffers />
        <ProductHighlights />
        <BrandStory />
        <WhyChooseUs />
        <Testimonials />
        <SocialGallery />
        <Newsletter />
        <CartDrawer />
        <Footer />
      </div>
    </CartProvider>
  );
}