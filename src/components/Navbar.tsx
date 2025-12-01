import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => { 
  return ( 
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 py-4"> 
      <div className="container mx-auto flex justify-between items-center"> 
        <Link to="/" className="text-3xl font-bold text-gray-800">Pluimmers</Link> 
        <div className="space-x-4"> 
          <Link to="/" className="text-gray-700 hover:text-pastel-blue">Home</Link> 
          <Link to="/about" className="text-gray-700 hover:text-pastel-blue">About</Link> 
          <Link to="/services" className="text-gray-700 hover:text-pastel-blue">Services</Link> 
          <Link to="/gallery" className="text-gray-700 hover:text-pastel-blue">Gallery</Link> 
          <Link to="/contact" className="text-gray-700 hover:text-pastel-blue">Contact</Link> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;