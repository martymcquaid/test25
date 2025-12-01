import React from 'react'; 

const Home: React.FC = () => { 
  return ( 
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-light-gray to-pastel-blue"> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div> 
      <h1 className="text-7xl font-bold text-white z-10 leading-tight">Welcome to Pluimmers</h1> 
      <p className="text-2xl text-white z-10 mt-4">Your partner in modern web design.</p> 
      <div className="mt-8 z-10"> 
        <button className="bg-gradient-to-r from-pastel-blue to-mint-green text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-transform duration-300">Get Started</button> 
        <button className="border-2 border-pastel-blue text-pastel-blue px-8 py-4 rounded-full ml-4 hover:bg-pastel-blue hover:text-white transition duration-300">Learn More</button> 
      </div> 
    </div> 
  ); 
}; 

export default Home;