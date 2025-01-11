import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-serif text-pink-800 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex font-serif items-center text-pink-700">
                <Phone className="h-4 w-4 mr-2" />
                1-800-MOMEASE
              </p>
              <p className="flex font-serif items-center text-pink-700">
                <Mail className="h-4 w-4 mr-2" />
                support@momease.com
              </p>
              <p className="flex font-serif items-center text-pink-700">
                <MapPin className="h-4 w-4 mr-2" />
                Global Reach
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-serif text-pink-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-pink-700 hover:text-pink-600 font-serif">About Us</a></li>
              <li><a href="/services" className="text-pink-700 hover:text-pink-600 font-serif">Services</a></li>
              <li><a href="/community" className="text-pink-700 hover:text-pink-600 font-serif">Community</a></li>
              <li><a href="/register" className="text-pink-700 hover:text-pink-600 font-serif">Register</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-serif text-pink-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-pink-700 hover:text-pink-600 font-serif">Blog</a></li>
              <li><a href="/faq" className="text-pink-700 hover:text-pink-600 font-serif">FAQ</a></li>
              <li><a href="/privacy" className="text-pink-700 hover:text-pink-600 font-serif">Privacy Policy</a></li>
              <li><a href="/terms" className="text-pink-700 hover:text-pink-600 font-serif">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-serif text-pink-800 mb-4">Newsletter</h3>
            <p className="text-pink-700 mb-4 font-serif">Stay updated with our latest news and updates</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center">
          <p className="text-pink-700 flex  items-center justify-center font-serif">
            Dedicated to my mother <Heart className="h-4 w-4 ml-2 text-pink-600" />
          </p>
          <p className="text-pink-600 mt-2 font-serif">&copy; 2024 MomEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  );
};
