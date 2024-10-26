// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FeaturedBooks from './components/FeaturedBooks';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import ShippingInfo from './components/ShippingInfo';
import ShippingMethod from './components/ShippingMethod';
import PaymentMethod from './components/PaymentMethod';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';

function AppContent({ books, searchTerm, toggleCart, isLoggedIn, logout, setSearchTerm, isCartOpen, orders, handlePlaceOrder, login }) {
  const location = useLocation();

  // Determina si la ruta actual es la página de inicio
  const isHomePage = location.pathname === '/';

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Navbar
          setSearchTerm={setSearchTerm}
          toggleCart={toggleCart}
          isLoggedIn={isLoggedIn}
          logout={logout}
        />
      )}
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {isHomePage && <Carousel books={books} />}
              {isHomePage && <FeaturedBooks searchTerm={searchTerm} toggleCart={toggleCart} />}
            </>
          }
        />
        {/* Página de detalles del pedido */}
        <Route path="/orders" element={<Orders orders={orders} />} />
        {/* Páginas de autenticación */}
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />
        {/* Flujo de checkout */}
        <Route path="/checkout" element={<Checkout onPlaceOrder={handlePlaceOrder} />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/shipping-method" element={<ShippingMethod />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        {/* Página de lista de libros */}
        <Route path="/books" element={<BookList toggleCart={toggleCart} />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1', price: 20 },
    { id: 2, title: 'Libro 2', author: 'Autor 2', price: 25 },
    { id: 3, title: 'Libro 3', author: 'Autor 3', price: 30 },
    { id: 4, title: 'Libro 4', author: 'Autor 4', price: 22 },
    { id: 5, title: 'Libro 5', author: 'Autor 5', price: 28 },
  ];

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handlePlaceOrder = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setOrders([...orders, { items: cartItems, total }]);
  };

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <Router>
      <AppContent
        books={books}
        searchTerm={searchTerm}
        toggleCart={toggleCart}
        isLoggedIn={isLoggedIn}
        logout={logout}
        setSearchTerm={setSearchTerm}
        isCartOpen={isCartOpen}
        orders={orders}
        handlePlaceOrder={handlePlaceOrder}
        login={login}
      />
    </Router>
  );
}

export default App;