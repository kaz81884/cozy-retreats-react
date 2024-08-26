// src/components/Slideshow.js
import React, { useState } from 'react';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      <button onClick={prevSlide}>❮</button>
      <button onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slideshow;