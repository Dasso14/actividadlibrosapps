// src/components/FeaturedBooks.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/FeaturedBooks.css';

const FeaturedBooks = ({ toggleCart }) => {
  const { books, addBookToCart, selectedCategories } = useContext(BookContext);

  const filteredBooks = selectedCategories.length > 0
    ? books.filter(book => selectedCategories.includes(book.category))
    : books;

  return (
    <div className="featured-books">
      <h2>Lista de libros</h2>
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>${book.price.toFixed(2)}</p>
            <button onClick={() => addBookToCart(book)} className="select-button">
              Seleccionar Producto
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;