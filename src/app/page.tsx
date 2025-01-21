import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Learn more about AM-Store, our mission, vision, and the passionate team behind our exceptional shopping experience.</p>
        <Link
          href="/shop"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-xl hover:bg-blue-50 transition transform hover:scale-105"
        >
          Shop Now
        </Link>
      </section>

      {/* Company Mission Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At AM-Store, we are committed to providing customers with premium products at affordable prices. Our goal is to enhance the shopping experience, ensuring satisfaction from the moment you browse to checkout. We are driven by customer-centric values and aim to offer the best deals in the market.
            </p>
          </div>
        </div>
      </section>

      {/* About the Team Section */}
      <section className="bg-blue-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">Our team is dedicated to ensuring that every product, service, and interaction exceeds expectations. Each team member plays a vital role in shaping the AM-Store experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-4">John leads the vision and strategic direction of AM-Store, ensuring that we offer top-notch products and an exceptional customer experience.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
              <p className="text-gray-500 mt-4">Jane drives AM-Store’s marketing initiatives and ensures our products reach the right audience through innovative campaigns.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Emily Johnson</h3>
              <p className="text-gray-600">Product Manager</p>
              <p className="text-gray-500 mt-4">Emily oversees the selection of products, ensuring that we offer a range of high-quality items that cater to our customers' needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Our vision is to become the premier destination for online shoppers, offering high-quality products at competitive prices. We are dedicated to providing exceptional customer service, innovative solutions, and a seamless shopping experience.
        </p>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h3 className="text-3xl font-bold mb-4">Join the AM-Store Family</h3>
        <p className="text-xl mb-6">Sign up for exclusive offers, updates, and more.</p>
        <Link
          href="/signup"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
