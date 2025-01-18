import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "John Doe",
    role: "Homeowner",
    feedback:
      "The sofa I bought from this store has completely transformed my living room! It’s both comfortable and stylish.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Smith",
    role: "Interior Designer",
    feedback:
      "I highly recommend this furniture for my clients. The quality is top-notch, and the design options are endless!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Alex Johnson",
    role: "Office Manager",
    feedback:
      "We’ve outfitted our entire office with desks and chairs from this shop. Perfect blend of ergonomics and aesthetics!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emma Brown",
    role: "Shop Owner",
    feedback:
      "The display units I purchased work perfectly in my store. The sleek design enhances the presentation of my products.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Lee",
    role: "Architect",
    feedback:
      "The modular furniture system is a game-changer. It perfectly fits into the spaces I design for my clients.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;
  const totalTestimonials = testimonialsData.length;

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + testimonialsPerPage) % totalTestimonials
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - testimonialsPerPage + totalTestimonials) % totalTestimonials
    );
  };

  // Get testimonials to display
  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  // Wrap around when reaching the end
  if (visibleTestimonials.length < testimonialsPerPage) {
    visibleTestimonials.push(
      ...testimonialsData.slice(0, testimonialsPerPage - visibleTestimonials.length)
    );
  }

  return (
    <div className="testimonials">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonial-wrapper">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>

        {/* Display Testimonials */}
        <div className="testimonial-items">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img
                className="testimonial-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
