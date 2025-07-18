import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const KitchenSinks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kitchen Sinks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium kitchen sink solutions that combine functionality with style. We offer a wide range of materials, sizes, and configurations to meet your cooking and cleaning needs.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/livingroom_hero_1.jpg"
            alt="Kitchen Sinks"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Stylish & Functional Kitchen Sinks"
            description="Our range of kitchen sinks blends utility with elegance—perfect for modern kitchens and demanding home chefs."
            image="/livingroom_hero_2.jpg"
            features={[
              'Wide variety of sink materials and styles',
              'Custom sizing and configuration options',
              'Water-efficient and eco-friendly designs',
              'Professional installation services',
              'Integrated accessories and features',
              'Easy maintenance and durability',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kitchen Sink Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/sink_1.jpg',
              '/sink_2.jpg',
              '/sink_3.jpg',
              '/sink_4.jpg',
              '/sink_5.jpg',
              '/sink_6.jpg',
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={img}
                  alt={`Kitchen Sink Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sink Selection Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider kitchen size and workflow needs</li>
                <li>• Choose appropriate material for your lifestyle</li>
                <li>• Think about maintenance and cleaning requirements</li>
                <li>• Plan for proper plumbing and installation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider single vs. double bowl options</li>
                <li>• Think about depth and capacity needs</li>
                <li>• Plan for accessories like cutting boards</li>
                <li>• Consider sound dampening and insulation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sink Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Stainless Steel', description: 'Durable and hygienic options', icon: '✨' },
              { style: 'Granite Composite', description: 'Premium and scratch-resistant', icon: '🏛️' },
              { style: 'Farmhouse', description: 'Traditional and spacious designs', icon: '🏠' },
              { style: 'Undermount', description: 'Sleek and integrated installations', icon: '🔲' },
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

export default KitchenSinks;
