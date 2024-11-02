import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import '../styles/Navbar.css';

const Navbar = ({ setSearchTerm, toggleCart, isLoggedIn, logout }) => {
  const [searchInput, setSearchInput] = useState('');
  const { toggleCategory, selectedCategories } = useContext(BookContext);
  const navigate = useNavigate();
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    navigate(searchInput.trim() === '' ? '/' : '/books');
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsUserDropdownOpen(false); 
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsCategoryDropdownOpen(false); 
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
          <button onClick={toggleCategoryDropdown} className="category-button">
            Categorías
          </button>
          {isCategoryDropdownOpen && (
            <div className="dropdown-content category-dropdown-content">
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Infantil')}
                  onChange={() => toggleCategory('Infantil')}
                />
                Infantil
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Ciencia Ficción')}
                  onChange={() => toggleCategory('Ciencia Ficción')}
                />
                Ciencia Ficción
              </label>
            </div>
          )}
        </div>

        <button className="cart-button" onClick={toggleCart}>
          Cart
        </button>
        <button className="orders-button" onClick={() => navigate('/orders')}>
          Pedidos
        </button>

        {isLoggedIn ? (
          <div className="user-menu">
            <button className="user-icon" onClick={toggleUserDropdown} style={{ backgroundColor: 'white' }}>
              👤
            </button>
            {isUserDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="logout-button">
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={() => navigate('/login')}>
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
