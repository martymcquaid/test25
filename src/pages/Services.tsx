import React from 'react'; 

const Services: React.FC = () => { 
  return ( 
    <section className="py-24 bg-gradient-to-b from-light-gray to-pastel-blue"> 
      <div className="container mx-auto text-center"> 
        <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Services</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
          <div className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl p-8"> 
            <img src="https://img.icons8.com/ios/100/4A4A4A/web-design.png" alt="Web Design Icon" className="mb-4" />
            <h3 className="text-3xl font-semibold">Web Design</h3> 
            <p className="text-gray-600 mt-2">Creating beautiful, responsive websites that capture your brand's essence.</p> 
          </div> 
          <div className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl p-8"> 
            <img src="https://img.icons8.com/ios/100/4A4A4A/seo.png" alt="SEO Services Icon" className="mb-4" />
            <h3 className="text-3xl font-semibold">SEO Services</h3> 
            <p className="text-gray-600 mt-2">Optimizing your website to rank higher in search engines and attract more visitors.</p> 
          </div> 
          <div className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl p-8"> 
            <img src="https://img.icons8.com/ios/100/4A4A4A/content.png" alt="Content Creation Icon" className="mb-4" />
            <h3 className="text-3xl font-semibold">Content Creation</h3> 
            <p className="text-gray-600 mt-2">Crafting compelling content that engages and converts your audience.</p> 
          </div> 
          <div className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl p-8"> 
            <img src="https://img.icons8.com/ios/100/4A4A4A/brand.png" alt="Brand Strategy Icon" className="mb-4" />
            <h3 className="text-3xl font-semibold">Brand Strategy</h3> 
            <p className="text-gray-600 mt-2">Helping you define and convey your brand identity effectively.</p> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Services;