import React from 'react'; 

const About: React.FC = () => { 
  return ( 
    <section className="py-24 bg-gradient-to-r from-light-gray to-pastel-blue"> 
      <div className="container mx-auto flex flex-col lg:flex-row items-center"> 
        <div className="lg:w-1/2 p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2> 
          <p className="text-lg text-gray-600 mb-6">
            At Pluimmers, we specialize in crafting beautiful, user-friendly websites that are tailored to your unique needs. Our focus is on quality, craftsmanship, and care in every project we undertake.
          </p> 
          <ul className="list-disc list-inside mb-6 space-y-2"> 
            <li className="text-gray-600">Modern, innovative designs</li> 
            <li className="text-gray-600">Responsive layouts for all devices</li> 
            <li className="text-gray-600">SEO optimization to boost visibility</li> 
            <li className="text-gray-600">Exceptional customer support</li> 
          </ul> 
        </div> 
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"> 
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Team" className="rounded-full shadow-lg hover:scale-105 transition-transform duration-500" /> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default About;