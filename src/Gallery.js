import React from "react";

function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
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