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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green text-center">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-outline rounded-lg shadow-md">
              あなたにおすすめキャンプサイト<br />自然で癒されよう
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
