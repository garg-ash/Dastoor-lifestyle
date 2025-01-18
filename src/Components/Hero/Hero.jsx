import React, { useState, useEffect } from "react";
import "./Hero.css";
import image3 from "../Assets/image3.jpg";
import bannertwo from "../Assets/banner-two.jpg";
import banner3 from "../Assets/banner-3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [image3, bannertwo, banner3];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === banners.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [banners.length]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
          >
            <img src={banner} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
