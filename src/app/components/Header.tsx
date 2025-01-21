"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  imageUrl: string;
  description: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = await client.fetch(
        `*[_type == "product"]{
          _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url,
          description
        }`
      );
      setProducts(query);
    };
    fetchProducts();
  }, []);

  // Handle search filtering
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchTerm, products]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
          <Link href="/">AM-Store</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 ml-3 text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 mx-4 relative">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow clicks
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          {isDropdownOpen && searchResults.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-2 z-10">
              {searchResults.map((product) => (
                <li key={product._id} className="hover:bg-gray-100">
                  <Link
                    href={`/product/${product._id}`}
                    className="block px-4 py-2 text-gray-700"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/shop" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            Shop
          </Link>
          <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/cart" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            Cart
          </Link>
          <Link href="/signup" className="block py-2 text-gray-600 hover:text-blue-600 transition">
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
