// src/components/BookList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import '../styles/BookList.css';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="book-list">
      <h2>Lista de Libros</h2>
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>${book.price}</p>
          <Link to={`/books/${book.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
