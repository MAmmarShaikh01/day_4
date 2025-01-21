// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo */}
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition mb-4 md:mb-0">
          <Link href="/">E-Store</Link>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center space-x-6 text-gray-600 mb-4 md:mb-0">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-gray-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className="bg-gray-100 text-center text-gray-500 py-2 mt-4">
        &copy; {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
