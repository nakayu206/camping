import React, { useState, useEffect } from "react";

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./img/image01.jpg",
    "./img/image02.jpg",
    "./img/image03.jpg",
    "./img/image05.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider"style={{ zIndex: -1, position: "relative" }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
            animationName: "slideAnimation",
            animationDuration: "12s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${index * 3}s`
          }}
        />
      ))}
    </div>
  );
}

export default Main;
