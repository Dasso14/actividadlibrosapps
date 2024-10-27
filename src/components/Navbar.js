// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import '../styles/Navbar.css';

const Navbar = ({ setSearchTerm, toggleCart, isLoggedIn, logout }) => {
  const [searchInput, setSearchInput] = useState('');
  const { setSelectedCategory } = useContext(BookContext); // Obtenemos la función para actualizar la categoría
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    if (searchInput.trim() === '') {
      navigate('/');
    } else {
      navigate('/books');
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Actualizamos la categoría seleccionada
    navigate('/books');           // Redirigimos a la página de libros
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <h1>LibroHub</h1>
        </Link>
      </div>
      
      <div className="navbar-center">
        <form onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="navbar-search"
            />
            <button type="submit" className="search-button">Buscar</button>
          </div>
        </form>
      </div>

      <div className="navbar-right">
      <div className="category-dropdown">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Categorías
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <button onClick={() => handleCategoryChange('Infantil')}>Infantil</button>
            <button onClick={() => handleCategoryChange('Ciencia Ficción')}>Ciencia Ficción</button>
          </div>
        )}
      </div>

        <button className="cart-button" onClick={toggleCart}>
          Cart
        </button>
        <button className="orders-button" onClick={() => navigate('/orders')}>
          Pedidos
        </button>

        {isLoggedIn && (
          <div className="user-menu">
            <button className="user-icon" onClick={toggleDropdown} style={{ backgroundColor: 'white' }}>
              👤
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="logout-button">
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
