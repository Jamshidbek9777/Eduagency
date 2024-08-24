/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../sass/swiper.scss";

// eslint-disable-next-line react/prop-types
const Swiper = ({ children, autoplayInterval = 40000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const swiperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    autoplayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const intervalId = setInterval(play, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [autoplayInterval]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX > 50) {
      handlePrev();
    } else if (translateX < -50) {
      handleNext();
    }
    setTranslateX(0);
  };

  return (
    <div
      className="swiper-container"
      ref={swiperRef}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="swiper-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className="swiper-slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="swiper-button prev" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="114"
          height="36"
          viewBox="0 0 134 56"
          fill="none"
        >
          <g filter="url(#filter0_b_6_124)">
            <path
              d="M94 29.5C94.8284 29.5 95.5 28.8284 95.5 28C95.5 27.1716 94.8284 26.5 94 26.5V29.5ZM38.9393 26.9393C38.3535 27.5251 38.3535 28.4749 38.9393 29.0607L48.4853 38.6066C49.0711 39.1924 50.0208 39.1924 50.6066 38.6066C51.1924 38.0208 51.1924 37.0711 50.6066 36.4853L42.1213 28L50.6066 19.5147C51.1924 18.9289 51.1924 17.9792 50.6066 17.3934C50.0208 16.8076 49.0711 16.8076 48.4853 17.3934L38.9393 26.9393ZM94 26.5L40 26.5V29.5L94 29.5V26.5Z"
              fill="black"
            />
          </g>
        </svg>
      </button>
      <button className="swiper-button next" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="114"
          height="36"
          viewBox="0 0 134 56"
          fill="none"
        >
          <g filter="url(#filter0_b_6_126)">
            <path
              d="M40 26.5C39.1716 26.5 38.5 27.1716 38.5 28C38.5 28.8284 39.1716 29.5 40 29.5V26.5ZM95.0607 29.0607C95.6465 28.4749 95.6465 27.5251 95.0607 26.9393L85.5147 17.3934C84.9289 16.8076 83.9792 16.8076 83.3934 17.3934C82.8076 17.9792 82.8076 18.9289 83.3934 19.5147L91.8787 28L83.3934 36.4853C82.8076 37.0711 82.8076 38.0208 83.3934 38.6066C83.9792 39.1924 84.9289 39.1924 85.5147 38.6066L95.0607 29.0607ZM40 29.5H94V26.5H40V29.5Z"
              fill="black"
            />
          </g>
        </svg>
      </button>
      <div className="swiper-dots">
        {children.map((_, index) => (
          <span
            key={index}
            className={`swiper-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
