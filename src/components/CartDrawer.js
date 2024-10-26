// src/components/CartDrawer.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CartDrawer.css';

const CartDrawer = ({ isOpen, toggleCart }) => {
  const { cart, addBookToCart, removeBookFromCart } = useContext(BookContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      {/* Barra de navegación del carrito */}
      <div className="cart-nav">
        <h2>Carrito</h2>
        <button className="close-btn" onClick={toggleCart}>X</button>
      </div>
      
      <ul className="cart-items">
        {cart.length > 0 ? (
          cart.map((book) => (
            <li key={book.id} className="cart-item">
              <span className="cart-item-title">{book.title}</span>
              <div className="quantity-controls">
                <button onClick={() => removeBookFromCart(book.id)}>-</button>
                <span>{book.quantity}</span>
                <button onClick={() => addBookToCart(book)}>+</button>
              </div>
              <p className="cart-item-price">${(book.price * book.quantity).toFixed(2)}</p>
            </li>
          ))
        ) : (
          <p className="empty-cart">El carrito está vacío.</p>
        )}
      </ul>
      
      <div className="cart-footer">
        <p className="cart-total">Total: ${total.toFixed(2)}</p>
        <button className="checkout-btn" onClick={() => {
          toggleCart();
          navigate('/checkout');
        }}>
          Ir al Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
