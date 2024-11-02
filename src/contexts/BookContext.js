import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); 

  const initialBooks = [
    { id: 1, title: 'El Principito', price: 20, description: 'Un clásico de la literatura.', category: "Infantil" },
    { id: 2, title: '1984', price: 25, description: 'Una distopía intrigante.', category: "Ciencia Ficción" },
  ];

  const addBookToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);
    if (existingBook) {
      setCart(cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeBookFromCart = (id) => {
    const existingBook = cart.find((item) => item.id === id);
    if (existingBook.quantity > 1) {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== id));
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prevCategories => 
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <BookContext.Provider
      value={{
        books: initialBooks,
        cart,
        addBookToCart,
        removeBookFromCart,
        selectedCategories,   
        toggleCategory
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
