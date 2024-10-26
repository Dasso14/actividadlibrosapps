// src/components/PaymentMethod.js
import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import '../styles/PaymentMethod.css';

const PaymentMethod = () => {
  const { cart } = useContext(BookContext);
  const navigate = useNavigate();
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const subtotal = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const shipping = 5.99; // Ejemplo de costo de envío
  const tax = subtotal * 0.1; // Impuesto del 10%
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setOrderCompleted(true);
    setTimeout(() => {
      navigate("/"); // Redirige al inicio después de mostrar el mensaje
    }, 2000); // Espera 2 segundos antes de redirigir
  };

  return (
    <div className="payment-method-container">
      <h2>Método de Pago</h2>
      <div className="payment-method-content">
        {/* Columna de información de pago */}
        <div className="payment-form">
          <p>Dirección de Envío: 123 Calle Principal, Ciudad</p>
          <p>Método de Envío: UPS Ground - $5.99</p>
          
          <label>Método de Pago</label>
          <div className="payment-inputs">
            <input type="text" placeholder="Número de tarjeta" required />
            <input type="text" placeholder="MM/YY" required />
            <input type="text" placeholder="CVC" required />
          </div>

          <div className="billing-address">
            <p>Dirección de Facturación</p>
            <div>
              <input 
                type="radio" 
                id="same-address" 
                name="billing" 
                defaultChecked 
                onChange={() => setShowBillingAddress(false)}
              />
              <label htmlFor="same-address">La misma que la dirección de envío</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="different-address" 
                name="billing" 
                onChange={() => setShowBillingAddress(true)}
              />
              <label htmlFor="different-address">Usar una dirección diferente</label>
            </div>
            {showBillingAddress && (
              <input 
                type="text" 
                placeholder="Dirección de Facturación" 
                className="billing-address-input" 
                required 
              />
            )}
          </div>

          <button onClick={handlePlaceOrder} className="place-order-btn">
            Completar Orden
          </button>
        </div>

        {/* Columna de resumen del pedido */}
        <div className="order-summary">
          <h3>Resumen</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Envío: ${shipping.toFixed(2)}</p>
          <p>Imp. Est.: ${tax.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
      </div>

      {/* Mensaje de confirmación de orden */}
      {orderCompleted && (
        <div className="order-complete-message">
          <p>Orden completada exitosamente</p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
