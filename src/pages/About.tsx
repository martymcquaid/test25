import React from 'react'; 

const About: React.FC = () => { 
  return ( 
    <section className="py-24 bg-white"> 
      <div className="container mx-auto flex flex-col lg:flex-row items-center"> 
        <div className="lg:w-1/2"> 
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2> 
          <p className="text-lg mb-4">At Pluimmers, we specialize in creating beautiful, user-friendly websites tailored to your needs.</p> 
          <ul className="list-disc list-inside mb-4"> 
            <li>Modern designs</li> 
            <li>Responsive layouts</li> 
            <li>SEO optimization</li> 
            <li>Excellent support</li> 
          </ul> 
        </div> 
        <div className="lg:w-1/2 mt-8 lg:mt-0"> 
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Team" className="rounded-full" /> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default About;