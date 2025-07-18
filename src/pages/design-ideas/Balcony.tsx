import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Balcony: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Balcony Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your balcony into a beautiful outdoor retreat with our innovative design solutions. We create functional spaces that extend your living area and connect you with nature.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/balcony7.jpg"
            alt="Balcony Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Balcony Design Solutions"
            description="Reimagine your balcony as an oasis. Our designs blend nature, comfort, and style to make the most of your outdoor space—whether it’s for relaxing, gardening, or entertaining."
            image="/balcony1.jpg"
            features={[
              'Weather-resistant design solutions',
              'Space optimization for small balconies',
              'Outdoor furniture and seating',
              'Plant and garden integration',
              'Privacy and shade solutions',
              'Lighting for evening ambiance',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Balcony Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/balcony1.jpg',
              '/balcony2.jpg',
              '/balcony3.jpg',
              '/balcony4.jpg',
              '/balcony5.jpg',
              '/balcony6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Balcony Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Balcony Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider weather conditions and exposure</li>
                <li>• Plan for drainage and water management</li>
                <li>• Maximize space with multi-functional furniture</li>
                <li>• Create privacy without blocking light</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose weather-resistant materials</li>
                <li>• Select UV-resistant fabrics and finishes</li>
                <li>• Use non-slip flooring for safety</li>
                <li>• Consider maintenance requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Balcony Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Balcony Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Garden', description: 'Green and plant-focused designs', icon: '🌱' },
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Cozy', description: 'Intimate and comfortable spaces', icon: '🏠' },
              { style: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
            ].map((style, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{style.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{style.style}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balcony;
