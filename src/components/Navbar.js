// src/components/Navbar.js
import React, { useState } from 'react';
import CartDrawer from './CartDrawer';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav>
      <h1>LibroHub</h1>
      <input type="text" placeholder="Search" />
      <div>
        <button className="cart-button" onClick={toggleCart}>
          Cart
        </button>
      </div>
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;
