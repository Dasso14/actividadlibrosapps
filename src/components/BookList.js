import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/BookList.css';

const BookList = ({ toggleCart }) => {
  const { books, addBookToCart } = useContext(BookContext);

  const handleSelectProduct = (book) => {
    addBookToCart(book); 
    toggleCart();        
  };

  return (
    <div className="book-list">
      <h2>Lista de Libros</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
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

export default BookList;
