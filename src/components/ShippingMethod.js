// src/components/ShippingMethod.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/ShippingMethod.css';

const ShippingMethod = () => {
  const { cart } = useContext(BookContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleContinue = () => {
    navigate('/payment-method'); 
  };

  return (
    <div className="shipping-method-container">
      <h2>Método de Envío</h2>
      <div className="shipping-method-content">
        <div className="shipping-options">
          <p>Dirección de Envío: 123 Calle Principal, Ciudad</p>
          <form>
            <div>
              <input type="radio" id="ground" name="shipping" value="ground" defaultChecked />
              <label htmlFor="ground">UPS Ground - $5.00</label>
            </div>
            <div>
              <input type="radio" id="two-day" name="shipping" value="two-day" />
              <label htmlFor="two-day">UPS 2nd Day Air - $12.50</label>
            </div>
            <div>
              <input type="radio" id="next-day" name="shipping" value="next-day" />
              <label htmlFor="next-day">UPS Next Day Air - $20.00</label>
            </div>
          </form>
          <button onClick={handleContinue} className="continue-btn">
            Continuar a Método de Pago
          </button>
        </div>

        <div className="order-summary">
          <h3>Resumen</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Imp. Est.: ${tax.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
