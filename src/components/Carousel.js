// src/components/Carousel.js
import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const visibleBooks = books.slice(currentIndex, currentIndex + 5);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={showPrevious}>
        &#10094;
      </button>
      <div className="carousel-items">
        {visibleBooks.map((book, index) => (
          <div key={index} className="carousel-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={showNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
