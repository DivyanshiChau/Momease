import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-pink-100 border border-pink-200 rounded-full mt-4 mx-auto w-3/4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-2xl font-bold text-pink-800">MomEase</span>
            </Link>
            
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
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
  );
};
