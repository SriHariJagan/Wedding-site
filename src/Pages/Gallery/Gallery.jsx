import React, { useState } from "react";
import styles from "./gallery.module.css";
import { galleryImages } from "../../Utils/IMAGES.JS";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = galleryImages[selectedCategory] || [];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.galleryContainer}>
      <h1 id={styles.galleryTitle}>Gallery</h1>

      <div className={styles.galleryTypes}>
        {Object.keys(galleryImages).map((category, i) => (
          <button key={i} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className={styles.galleryImageContainer}>
        {images.map((imgSrc, i) => (
          <div
            className={`${styles.galleryImage} topBlock`}
            key={i}
            onClick={() => handleImageClick(i)}
          >
            <img src={imgSrc} alt={selectedCategory} />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeBtn} onClick={handleClose}>
              &times;
            </span>
            <button className={styles.prevBtn} onClick={handlePrev}>
              &#10094;
            </button>
            <img src={images[selectedImageIndex]} alt="Gallery" />
            <button className={styles.nextBtn} onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
