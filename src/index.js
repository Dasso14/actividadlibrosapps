// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BookProvider from './contexts/BookContext';

ReactDOM.render(
  <BookProvider>
    <App />
  </BookProvider>,
  document.getElementById('root')
);
