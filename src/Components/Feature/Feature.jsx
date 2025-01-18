import React from 'react';
import './Feature.css';
import '../Common/style.css'


// Import images directly
import Designs from '../Assets/designs.jpg';
import comfort from '../Assets/comfort.jpg';
import SustainableImage from '../Assets/sustaianbleImage.png';

const Feature = () => {
  const features = [
    {
      id: 1,
      title: 'Elegant Designs',
      description: 'Explore our collection of beautifully crafted furniture to elevate your home.',
      image: Designs,
    },
    {
      id: 2,
      title: 'Comfort Meets Style',
      description: 'Experience unmatched comfort with stylish designs for every space.',
      image: comfort,
    },
    {
      id: 3,
      title: 'Durable & Sustainable',
      description: 'Made with high-quality materials that ensure longevity and sustainability.',
      image: SustainableImage,
    },
  ];

  return (
    <div className="feature-section">
      <h2 className="feature-title">Crafting Comfort and Style for Your Home</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-heading">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
