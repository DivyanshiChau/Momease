import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';
import { LoadingScreen } from './LoadingScreen'; // Assuming you have the LoadingScreen component

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [loading, setLoading] = useState(true); // State to track if loading screen is visible

  const handleScroll = () => {
    if (window.scrollY > 50) { // You can adjust the scroll value for when the fade starts
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Set loading state to false after a delay (for example, after 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay based on how long you want the loading screen to show

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Render loading screen only if loading is true */}
      {loading && <LoadingScreen />}

      {/* Navbar will be hidden if loading screen is visible */}
      {!loading && (
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-3/4 bg-pink-100 border border-pink-200 rounded-full mt-4 z-50 transition-opacity duration-300 ${
            scrolling ? 'opacity-80' : 'opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <span className="ml-2 text-2xl font-normal text-pink-800">MomEase</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-4 font-serif">
                <Link to="/services" className="text-pink-800 hover:text-pink-600">Services</Link>
                <Link to="/community" className="text-pink-800 hover:text-pink-600">Community</Link>
                <Link to="/education" className="text-pink-800 hover:text-pink-600">Education</Link>
                <Link to="/register" className="bg-pink-600 text-white px-4 py-2 rounded-full">
                  Register
                </Link>
              </div>

              <div className="md:hidden flex items-center">
                <button className="text-pink-800">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
