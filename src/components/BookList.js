// src/components/BookList.js
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/BookList.css';

const BookList = ({ toggleCart, searchTerm }) => {
  const { books, addBookToCart, selectedCategories } = useContext(BookContext);

  // Filtramos los libros basados en el término de búsqueda o en la categoría seleccionada
  const filteredBooks = books.filter((book) => {
    // Si hay un término de búsqueda, filtramos por título y descartamos el filtro de categorías
    if (searchTerm) {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    // Si no hay término de búsqueda, aplicamos el filtro de categorías
    return selectedCategories.length === 0 || selectedCategories.includes(book.category);
  });

  const handleSelectProduct = (book) => {
    addBookToCart(book); 
    toggleCart();        
  };

  return (
    <div className="book-list">
      <h2>Resultados de búsqueda</h2>
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>${book.price.toFixed(2)}</p>
              <button onClick={() => handleSelectProduct(book)} className="select-button">
                Seleccionar Producto
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron libros para "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
