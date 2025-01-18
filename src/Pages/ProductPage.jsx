import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  sofa,
  bed,
  couch,
  TeaTable,
  DinningSet,
  Wardrobe,
  consols,
  ModernChair,
  SmallCoffeeTable,
  BookShelf,
  OfficeTable,
  DressingTable,
} from "../Utils/imageData";
import Hero from "../Components/Hero/Hero";
import "./CSS/ProductPage.css";

function ProductPage() {
  const { category } = useParams(); // Get category from URL parameter

  const categoryMap = {
    sofa,
    bed,
    couch,
    "Tea Table": TeaTable,
    "Dinning Set": DinningSet,
    Wardrobe,
    consols,
    "Modern Chair": ModernChair,
    "Small Coffee Table": SmallCoffeeTable,
    "Book Shelf": BookShelf,
    "Office Table": OfficeTable,
    "Dressing Table": DressingTable,
  };

  const images = categoryMap[category] || []; // Default to empty array if category not found

  const [flipped, setFlipped] = useState({}); // Track flipped state for each card

  const handleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle flip state for the selected card
    }));
  };

  return (
    <>
      <Hero />
      <section className="product-page">
        <div className="container">
          <h2>{category.toUpperCase()} Images</h2>
          <div className="image-grid">
            {images.map((item) => (
              <div
                key={item.id}
                className="image-item"
                onClick={() => handleFlip(item.id)}
              >
                <div className={`card ${flipped[item.id] ? "is-flipped" : ""}`}>
                  <div className="card__face card__face--front">
                    <img src={item.src} alt={item.alt} />
                    <h5>{item.alt}</h5>
                  </div>
                  <div className="card__face card__face--back">
                    <p>Height: {item.height || "N/A"}</p>
                    <p>Width: {item.width || "N/A"}</p>
                    <p>Depth: {item.depth || "N/A"}</p>
                    <p>Weight: {item.weight || "N/A"}</p>
                    <p>Material: {item.material || "N/A"}</p>
                    <p>Color: {item.color || "N/A"}</p>
                    <p>Price: {item.price || "N/A"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
