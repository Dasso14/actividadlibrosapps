// src/components/BookDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import '../styles/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const { books, addBookToCart } = useContext(BookContext);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Precio: ${book.price}</p>
      <p>{book.description}</p>
      <button onClick={() => addBookToCart(book)}>Agregar al Carrito</button>
    </div>
  );
};

export default BookDetails;
