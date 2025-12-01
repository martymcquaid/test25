import React from 'react'; 

const Contact: React.FC = () => { 
  return ( 
    <section className="py-24 bg-light-gray"> 
      <div className="container mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2> 
        <form className="max-w-lg mx-auto"> 
          <input type="text" placeholder="Your Name" className="border-2 border-gray-300 rounded-lg p-4 mb-4 w-full" required /> 
          <input type="email" placeholder="Your Email" className="border-2 border-gray-300 rounded-lg p-4 mb-4 w-full" required /> 
          <textarea placeholder="Your Message" className="border-2 border-gray-300 rounded-lg p-4 mb-4 w-full h-32" required></textarea> 
          <button type="submit" className="bg-gradient-to-r from-pastel-blue to-mint-green text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-transform duration-300">Send Message</button> 
        </form> 
      </div> 
    </section> 
  ); 
}; 

export default Contact;