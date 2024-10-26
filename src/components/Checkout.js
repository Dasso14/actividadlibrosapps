// src/components/Checkout.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart } = useContext(BookContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const shipping = 5.99;  // Ejemplo de costo de envío
  const tax = subtotal * 0.1;  // Impuesto del 10%
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    navigate('/shipping'); // Redirige a la pantalla de información de envío
  };

  return (
    <div className="checkout-container">
      <h2>Tu Carrito</h2>
      <div className="checkout-content">
        {/* Columna de artículos del carrito */}
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div className="item-details">
                      <img src="https://via.placeholder.com/50" alt={book.title} />
                      <span>{book.title}</span>
                    </div>
                  </td>
                  <td>${book.price}</td>
                  <td>{book.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
        </div>

        {/* Columna de resumen de pedido */}
        <div className="order-summary">
          <h3>Resumen</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Envío: ${shipping.toFixed(2)}</p>
          <p>Imp. Est.: ${tax.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          <button className="cancel-btn" onClick={() => navigate('/books')}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
