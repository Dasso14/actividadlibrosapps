// src/components/Orders.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Orders.css';

const Orders = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="orders">
      <h2>Pedidos Realizados</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos realizados.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>Pedido #{index + 1}</h3>
              <ul>
                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/')} className="back-button">Volver</button>
    </div>
  );
};

export default Orders;
