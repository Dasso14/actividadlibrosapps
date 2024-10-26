import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItemsCount = 5;

  const showNext = () => setCurrentIndex((currentIndex + 1) % books.length);
  const showPrevious = () => setCurrentIndex((currentIndex - 1 + books.length) % books.length);

  const visibleBooks = books.slice(currentIndex, currentIndex + visibleItemsCount);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={showPrevious}>
        &#10094;
      </button>
      <div className="carousel-items">
        {visibleBooks.map((book) => (
          <div key={book.id} className="carousel-item">
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
