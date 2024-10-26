// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FeaturedBooks from './components/FeaturedBooks';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Carousel from './components/Carousel';

function App() {
  const books = [
    { title: 'Libro 1', author: 'Autor 1' },
    { title: 'Libro 2', author: 'Autor 2' },
    { title: 'Libro 3', author: 'Autor 3' },
    { title: 'Libro 4', author: 'Autor 4' },
    { title: 'Libro 5', author: 'Autor 5' },
  ];
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/carousel" element={<Carousel books={books} />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <FeaturedBooks /> {/* Muestra los libros destacados en la página principal */}
    </Router>
  );
}

export default App;
