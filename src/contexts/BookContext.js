import React, { createContext, useState } from 'react';
import BinaryTree from '../data/BinaryTree'; 

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const bookTree = new BinaryTree();

  const initialBooks = [
    { id: 1, title: 'El Principito', price: 20, description: 'Un clásico de la literatura.' },
    { id: 2, title: '1984', price: 25, description: 'Una distopía intrigante.' },
  ];

  initialBooks.forEach((book) => bookTree.insert(book));

  const addBookToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);
    if (existingBook) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeBookFromCart = (id) => {
    const existingBook = cart.find((item) => item.id === id);
    if (existingBook.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const findBookByTitle = (title) => {
    return bookTree.find(title);
  };

  const deleteBookByTitle = (title) => {
    bookTree.delete(title);
  };

  return (
    <BookContext.Provider
      value={{
        books: initialBooks, 
        cart,
        addBookToCart,
        removeBookFromCart,
        findBookByTitle, 
        deleteBookByTitle, 
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
