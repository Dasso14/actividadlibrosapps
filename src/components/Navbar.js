import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { BookContext } from '../contexts/BookContext';

const Navbar = ({ toggleCart, isLoggedIn, logout }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setSearchTerm } = useContext(BookContext); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
        <input
          type="text"
          placeholder="Buscar libros..."
          onChange={handleSearchChange}
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">
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
