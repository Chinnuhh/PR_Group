import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Bathroom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bathroom Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your bathroom into a luxurious retreat with our innovative design solutions. We create beautiful, functional bathrooms that combine comfort with style.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/bathroom_4.jpg"
            alt="Bathroom Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Bathroom Design Solutions"
            description="Turn your bathroom into a spa-like oasis with our modern and elegant design concepts. We focus on space utilization, luxury, and comfort to create your ideal retreat."
            image="/bathroom_3.jpg"
            features={[
              'Luxury bathroom fixtures and fittings',
              'Water-efficient plumbing solutions',
              'Premium tiles and finishes',
              'Proper ventilation systems',
              'Storage and organization solutions',
              'Safety and accessibility features',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bathroom Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/bathroom_1.jpg',
              '/bathroom_2.jpg',
              '/bathroom_3.jpg',
              '/bathroom_4.jpg',
              '/bathroom_5.jpg',
              '/bathroom_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Bathroom Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bathroom Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Layout Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Optimize space utilization effectively</li>
                <li>• Ensure proper water drainage</li>
                <li>• Plan for adequate lighting</li>
                <li>• Consider privacy and ventilation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose water-resistant materials</li>
                <li>• Select slip-resistant flooring</li>
                <li>• Use mold and mildew resistant finishes</li>
                <li>• Invest in quality fixtures and fittings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bathroom Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Bathroom Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
              { style: 'Spa-like', description: 'Relaxing and luxurious atmosphere', icon: '🛁' },
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

export default Bathroom;
