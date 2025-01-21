import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

type Product = {
  _id: string;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  name: string;
  price: number;
  imageUrl: string;
}

const LandingPage = async () => {
  const products = await client.fetch(`*[_type=="product"]{
    _id,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    price,
    "imageUrl": image.asset->url
  }`  );

  // Filter products to only show those with isFeaturedProduct true
  const featuredProducts = products.filter((product: Product) => product.isFeaturedProduct);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to AM-Store</h1>
        <p className="text-xl mb-8">Discover exclusive deals on our premium products</p>
        <Link
          href="/shop"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Explore Now
        </Link>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: Product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="hover:opacity-90 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  {product.discountPercentage > 0 ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">
                        ${product.price}
                      </span>
                      <span className="text-green-600 font-semibold">
                        ${
                          (product.price -
                            (product.price * product.discountPercentage) / 100
                          ).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </p>
                <p className="text-gray-500 mb-6">{product.description}</p>
                <Link
                  href={`/product/${product._id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full block text-center hover:bg-blue-700 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
