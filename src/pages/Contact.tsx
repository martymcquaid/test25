import React from 'react'; 

const Contact: React.FC = () => { 
  return ( 
    <section className="py-24 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop')"}}> 
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto text-center shadow-lg"> 
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue to-mint-green">Get in Touch</h2> 
        <form className="flex flex-col space-y-4"> 
          <input type="text" placeholder="Your Name" className="border-2 border-gray-300 rounded-lg p-4 w-full focus:border-pastel-blue focus:ring focus:ring-pastel-blue transition duration-300" required /> 
          <input type="email" placeholder="Your Email" className="border-2 border-gray-300 rounded-lg p-4 w-full focus:border-pastel-blue focus:ring focus:ring-pastel-blue transition duration-300" required /> 
          <textarea placeholder="Your Message" className="border-2 border-gray-300 rounded-lg p-4 w-full h-32 focus:border-pastel-blue focus:ring focus:ring-pastel-blue transition duration-300" required></textarea> 
          <button type="submit" className="bg-gradient-to-r from-pastel-blue to-mint-green text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-transform duration-300">Send Message</button> 
        </form> 
        <div className="mt-8 text-gray-600"> 
          <p>If you prefer to reach us directly:</p> 
          <p>Email: hello@pluimmers.com</p> 
          <p>Phone: (123) 456-7890</p> 
        </div> 
        <div className="mt-6 flex justify-center space-x-4"> 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pastel-blue transition duration-300">Facebook</a> 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pastel-blue transition duration-300">Twitter</a> 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pastel-blue transition duration-300">Instagram</a> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Contact;