import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const DiningRoom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dining Room Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create memorable dining experiences with our elegant dining room designs. We combine functionality with style to design spaces perfect for family meals and entertaining guests.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/diningroom_5.jpg"
            alt="Dining Room Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Dining Room Design Solutions"
            description="Design a stylish and comfortable dining area that brings people together. Our dining room designs focus on elegance, functionality, and warmth to elevate your home’s dining experience."
            image="/diningroom_hero_2.jpg"
            features={[
              'Custom dining room layouts',
              'Elegant furniture and seating',
              'Lighting design for ambiance',
              'Storage and display solutions',
              'Color coordination and styling',
              'Integration with kitchen and living areas',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dining Room Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/diningroom_1.jpg',
              '/diningroom_2.jpg',
              '/diningroom_3.jpg',
              '/diningroom_4.jpg',
              '/diningroom_5.jpg',
              '/diningroom_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Dining Room Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dining Room Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Layout Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure adequate space around the dining table</li>
                <li>• Plan for traffic flow and movement</li>
                <li>• Consider natural light and views</li>
                <li>• Design for both daily use and entertaining</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Elements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose appropriate table size for the space</li>
                <li>• Select comfortable and stylish seating</li>
                <li>• Include storage for dining essentials</li>
                <li>• Create focal points with lighting or art</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dining Room Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Dining Room Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Formal', description: 'Elegant and sophisticated designs', icon: '🍽️' },
              { style: 'Casual', description: 'Relaxed and comfortable atmospheres', icon: '🏠' },
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
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

export default DiningRoom;
