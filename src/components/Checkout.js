// src/components/Checkout.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart } = useContext(BookContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);

  const handleCheckout = () => {
    alert('Compra realizada exitosamente');
    // Aquí puedes limpiar el carrito después de la compra
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>Dirección de Envío:</label>
        <input type="text" required />
        <label>Método de Pago:</label>
        <select required>
          <option value="credit">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
        </select>
        <p>Total a pagar: ${total.toFixed(2)}</p>
        <button type="button" onClick={handleCheckout}>Confirmar Orden</button>
      </form>
      <button className="back-btn" onClick={() => navigate(-1)}>
        Regresar
      </button>
    </div>
  );
};

export default Checkout;
