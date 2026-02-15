import React, { useState } from 'react';
import Register from './Register'; // This connects your NRC form to the homepage

const ZIHubWebHome = () => {
  // This 'state' tells the app which page to show. 
  // false = Home, true = Registration form.
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-t-4 border-green-600">
        <div 
          className="text-2xl font-bold text-black flex items-center cursor-pointer"
          onClick={() => setShowRegister(false)} // Clicking the logo takes you home
        >
          <span className="text-green-600">ZI</span>HUB
          <span className="ml-2 bg-orange-500 w-3 h-3 rounded-full"></span>
        </div>
        <div className="space-x-8 font-medium hidden md:flex">
          <button onClick={() => setShowRegister(false)} className="hover:text-green-600">Invest</button>
          <button className="hover:text-green-600">EdTech</button>
          <button className="hover:text-green-600">Marketplace</button>
        </div>
        <div>
          {/* THE FIX: This button now triggers the form */}
          <button 
            onClick={() => setShowRegister(true)}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Join Hub
          </button>
        </div>
      </nav>

      {/* Logic: Show Register form if showRegister is true, otherwise show the Hero */}
      {showRegister ? (
        <div className="py-10">
           <button 
             onClick={() => setShowRegister(false)} 
             className="ml-10 text-green-600 font-bold hover:underline"
           >
             ← Back to Home
           </button>
           <Register />
        </div>
      ) : (
        <header className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden text-white">
          <div className="absolute z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              Empowering <span className="text-green-500">Zambia's</span> Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
              The all-in-one platform for Zambian Innovation, Culture, and Investment.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowRegister(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg"
              >
                Start Investing
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black px-10 py-4 rounded-lg font-bold text-lg transition">
                Explore Culture
              </button>
            </div>
          </div>
          {/* Hero Image Background */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1577947582344-e29058b29c9c')] bg-cover bg-center"></div>
        </header>
      )}
    </div>
  );
};

export default ZIHubWebHome;
