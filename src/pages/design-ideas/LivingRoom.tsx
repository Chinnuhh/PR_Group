import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const LivingRoom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Living Room Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your living space into a stylish and inviting retreat with our customized living room designs. We focus on comfort, aesthetics, and layout that suit your lifestyle.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/livingroom_hero_1.jpg"
            alt="Living Room"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Comfort Meets Elegance"
            description="Our living room designs merge function and form to create beautiful, cozy, and functional spaces for your family and guests."
            image="/livingroom_hero_2.jpg"
            features={[
              'Spacious and efficient layouts',
              'Custom furniture selection',
              'Lighting for mood and function',
              'Color coordination and styling',
              'Integrated entertainment setups',
              'Flexible seating arrangements',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Living Room Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/livingroom_1.jpg',
              '/livingroom_2.jpg',
              '/livingroom_3.jpg',
              '/livingroom_4.jpg',
              '/livingroom_5.jpg',
              '/livingroom_6.jpg',
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={img}
                  alt={`Living Room Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Living Room Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Space Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure good traffic flow and spacing</li>
                <li>• Position furniture for conversation and entertainment</li>
                <li>• Consider natural light and ventilation</li>
                <li>• Plan zones for multifunctional use</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Style and Comfort</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose a cohesive color scheme</li>
                <li>• Mix textures for visual interest</li>
                <li>• Include cozy elements like rugs and throws</li>
                <li>• Add personal touches with decor and art</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Contemporary', description: 'Modern designs with clean aesthetics', icon: '🛋️' },
              { style: 'Traditional', description: 'Warm and classic living room layouts', icon: '🏠' },
              { style: 'Minimalist', description: 'Clutter-free and focused spaces', icon: '⚪' },
              { style: 'Eclectic', description: 'Unique combinations of styles and colors', icon: '🎨' },
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

export default LivingRoom;

