import React from "react";
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

  return (
    <>
      <Hero />
      <section className="product-page">
        <div className="container">
          <h2>{category.toUpperCase()} Products</h2>
          <div className="image-grid">
            {images.map((item) => (
              <div key={item.id} className="image-item">
                <img src={item.src} alt={item.alt} className="product-image" />
                <h5>{item.alt}</h5>
                <div className="product-details">
                  <p><strong>Height:</strong> {item.height || "N/A"}</p>
                  <p><strong>Width:</strong> {item.width || "N/A"}</p>
                  <p><strong>Depth:</strong> {item.depth || "N/A"}</p>
                  <p><strong>Weight:</strong> {item.weight || "N/A"}</p>
                  <p><strong>Material:</strong> {item.material || "N/A"}</p>
                  <p><strong>Color:</strong> {item.color || "N/A"}</p>
                  <p><strong>Price:</strong> {item.price || "N/A"}</p>
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
