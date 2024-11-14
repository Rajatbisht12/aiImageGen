import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
        try {
          const response = await axios.get('/images');
          return response.data;
        } catch (error) {
          console.error("Error fetching images:", error);
          throw error;
        }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Generated Images Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="border rounded p-4">
            <img
              src={image.imageUrl}
              alt={image.prompt}
              className="w-full rounded"
            />
            <p className="mt-2 text-sm text-gray-600">{image.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
