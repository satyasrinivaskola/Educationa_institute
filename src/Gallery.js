import React from "react";
import './Gallery.css'
import image33 from './im.webp'
function Gallery() {

  const images = [
    image33,
    image33,
    image33,
  ];

  return (
    <div className="page">
      <h1>Campus Gallery</h1>

      <div className="gallery">
        {images.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;