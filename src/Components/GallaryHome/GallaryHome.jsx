import React from "react";
import { useNavigate } from "react-router-dom";
import imageData, { category } from "../../Utils/imageData";
import "./GallaryHome.css";
import { IoIosArrowDropright } from "react-icons/io";

const GallaryHome = () => {

  
  const navigate = useNavigate();

 

  // Select the first 4 images for the Home Page
  const homeGalleryImages = imageData.slice(0, 4);

  // Handler to navigate to the category page
  const handleImageClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <>
      <div className="gallary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="home-gallery">
                <h2>Discover Our Featured Gallery</h2>
                <p>
                  Explore a curated selection of our finest furniture pieces,
                  blending style and functionality to elevate your space.
                </p>
                <div className="gallery-grid">
                  {homeGalleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="gallery-item"
                      onClick={() => handleImageClick(image.category)}
                      style={{ cursor: "pointer" }} // Add cursor pointer for better UX
                    >
                      <img src={image.src} className="gallery-img" alt={image.alt} />
                      <h5>{image.alt}</h5>
                      <p>
                        <IoIosArrowDropright />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="view-button">
                <a href="ourproject">
                  <button type="button" className="btn btn-secondary">
                    View More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallaryHome;

