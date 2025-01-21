"use client"
// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
          <Link href="/">AM-Store</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 ml-3 text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <Link href="/cart" className="hover:text-blue-600 transition">
            <FaShoppingCart size={20} />
          </Link>
          <Link href="/profile" className="hover:text-blue-600 transition">
            <FaUser size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-600 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link href="/shop" className="block py-2 text-gray-600 hover:text-blue-600 transition">Shop</Link>
          <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600 transition">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
