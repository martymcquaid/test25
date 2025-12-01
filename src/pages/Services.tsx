import React from 'react'; 

const Services: React.FC = () => { 
  return ( 
    <section className="py-24 bg-light-gray"> 
      <div className="container mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-8">Our Services</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> 
          <div className="bg-white rounded-xl shadow-lg p-6"> 
            <h3 className="text-2xl font-semibold">Web Design</h3> 
            <p>Creating beautiful, responsive websites that capture your brand's essence.</p> 
          </div> 
          <div className="bg-white rounded-xl shadow-lg p-6"> 
            <h3 className="text-2xl font-semibold">SEO Services</h3> 
            <p>Optimizing your website to rank higher in search engines and attract more visitors.</p> 
          </div> 
          <div className="bg-white rounded-xl shadow-lg p-6"> 
            <h3 className="text-2xl font-semibold">Content Creation</h3> 
            <p>Crafting compelling content that engages and converts your audience.</p> 
          </div> 
          <div className="bg-white rounded-xl shadow-lg p-6"> 
            <h3 className="text-2xl font-semibold">Brand Strategy</h3> 
            <p>Helping you define and convey your brand identity effectively.</p> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Services;