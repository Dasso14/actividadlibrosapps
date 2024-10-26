// src/components/FeaturedBooks.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/FeaturedBooks.css';

const FeaturedBooks = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="featured-books">
      <h2>Libros Destacados</h2>
      <div className="book-grid">
        {books.slice(0, 3).map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
