// src/components/FeaturedBooks.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/FeaturedBooks.css';

const FeaturedBooks = ({ toggleCart }) => { // Recibe toggleCart como prop
  const { books, addBookToCart } = useContext(BookContext);

  const handleSelectProduct = (book) => {
    addBookToCart(book); // Agrega el libro destacado al carrito
    toggleCart();        // Abre el carrito
  };

  return (
    <div className="featured-books">
      <h2>Libros Destacados</h2>
      <div className="book-grid">
        {books.slice(0, 3).map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>${book.price.toFixed(2)}</p>
            <button onClick={() => handleSelectProduct(book)} className="select-button">
              Seleccionar Producto
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;