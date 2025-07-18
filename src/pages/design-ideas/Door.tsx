import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Door: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Door Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your home's security and style with our premium door designs. We offer a wide range of materials, styles, and security features to complement your home's architecture.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/door_hero1.jpg"
            alt="Door Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Door Design Solutions"
            description="We provide a wide variety of high-quality doors to match your home's aesthetic and ensure top-notch security. From sleek modern entries to timeless traditional options, our doors are crafted to impress."
            image="/door_hero2.jpg"
            features={[
              'Wide variety of door materials and styles',
              'Custom sizing and design options',
              'Security features and hardware',
              'Energy-efficient and weather-resistant',
              'Professional installation services',
              'Maintenance and warranty support',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Door Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/door_1.jpg',
              '/door_2.jpg',
              '/door_3.jpg',
              '/door_4.jpg',
              '/door_5.jpg',
              '/door_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Door Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Door Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider architectural style and compatibility</li>
                <li>• Think about security and safety requirements</li>
                <li>• Plan for weather resistance and durability</li>
                <li>• Consider maintenance and upkeep needs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure proper measurements and fit</li>
                <li>• Plan for hardware and locking systems</li>
                <li>• Consider swing direction and clearance</li>
                <li>• Think about accessibility and ease of use</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Door Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Door Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Traditional', description: 'Classic and timeless designs', icon: '🏛️' },
              { style: 'Modern', description: 'Contemporary and sleek styles', icon: '✨' },
              { style: 'Rustic', description: 'Natural and textured materials', icon: '🌳' },
              { style: 'Glass', description: 'Light-filled and open designs', icon: '🔲' },
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

export default Door;
