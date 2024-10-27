// src/components/ShippingInfo.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/ShippingInfo.css';

const ShippingInfo = () => {
  const { cart } = useContext(BookContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const total = subtotal;

  const handleContinue = () => {
    navigate('/shipping-method'); 
  };

  return (
    <div className="shipping-info-container">
      <h2>Información de Envío</h2>
      <div className="shipping-info-content">
        <div className="shipping-form">
          <form>
            <label>Email</label>
            <input type="email" required />

            <label>Nombre</label>
            <input type="text" required />

            <label>Apellido</label>
            <input type="text" required />

            <label>Dirección</label>
            <input type="text" required />

            <label>Ciudad</label>
            <input type="text" required />

            <label>Estado</label>
            <input type="text" required />

            <label>Código Postal</label>
            <input type="text" required />

            <button type="button" onClick={handleContinue} className="continue-btn">
              Continuar a Método de Envío
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Resumen</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
