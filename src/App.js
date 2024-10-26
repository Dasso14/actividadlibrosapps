import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import FeaturedBooks from './components/FeaturedBooks';
import BookDetails from './components/BookDetails';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import ShippingInfo from './components/ShippingInfo';
import ShippingMethod from './components/ShippingMethod';
import PaymentMethod from './components/PaymentMethod';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<FeaturedBooks toggleCart={toggleCart} />} />
        <Route path="/books" element={<BookList toggleCart={toggleCart} />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/shipping-method" element={<ShippingMethod />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
      </Routes>
    </Router>
  );
}

export default App;
