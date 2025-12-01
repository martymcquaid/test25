import React from 'react'; 

const Gallery: React.FC = () => { 
  return ( 
    <section className="py-24 bg-white"> 
      <div className="container mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-8">Our Work</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" alt="Gallery Image 1" className="rounded-lg" /> 
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Gallery Image 2" className="rounded-lg" /> 
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Gallery Image 3" className="rounded-lg" /> 
          <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop" alt="Gallery Image 4" className="rounded-lg" /> 
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" alt="Gallery Image 5" className="rounded-lg" /> 
          <img src="https://images.unsplash.com/photo-1497366811-1497366811-0cfed4f6a45d?w=800&h=600&fit=crop" alt="Gallery Image 6" className="rounded-lg" /> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Gallery;