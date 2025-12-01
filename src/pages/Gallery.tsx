import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366811-1497366811-0cfed4f6a45d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1564679029071-3c284d36e4f5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-light-gray to-pastel-blue">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-2xl transition-transform duration-300 transform group-hover:scale-105"
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(src, '_blank')} // Lightbox effect via link
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;