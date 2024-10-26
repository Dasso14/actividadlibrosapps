import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeBookFromCart } = useContext(BookContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button onClick={() => removeBookFromCart(book.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => navigate('/checkout')}>Proceder al Pago</button>
    </div>
  );
};

export default Cart;
