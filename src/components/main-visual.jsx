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
    <div className="slider relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""} absolute top-0 left-0 w-full h-full`}
          style={{
            backgroundImage: `url(${image})`,
            animationName: "slideAnimation",
            animationDuration: "12s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${index * 3}s`,
          }}
        >
        </div>
      ))}
    </div>
  );
}

export default Main;
