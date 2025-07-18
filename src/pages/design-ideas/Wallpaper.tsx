import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Wallpaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Wallpaper Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Add personality and style to your walls with our stunning wallpaper designs. We offer a wide range of patterns, textures, and materials to create unique and beautiful interior spaces.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/wallpaper_hero_1.jpg"
            alt="Wallpaper Hero"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Express Your Style with Wallpapers"
            description="Whether bold or subtle, our wallpapers let your walls tell a story. Designed with quality and personality in mind."
            image="/wallpaper_hero_2.jpg"
            features={[
              'Wide selection of wallpaper designs',
              'Custom patterns and prints',
              'Premium materials and finishes',
              'Professional installation services',
              'Accent wall and feature applications',
              'Easy maintenance and durability',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wallpaper Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/wallpaper_1.jpg',
              '/wallpaper_2.jpg',
              '/wallpaper_3.jpg',
              '/wallpaper_hero_1.jpg',
              '/wallpaper_5.jpg',
              '/wallpaper_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Wallpaper ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips for Choosing and Installing Wallpaper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room size and ceiling height</li>
                <li>• Choose patterns that complement furniture</li>
                <li>• Think about long-term appeal and trends</li>
                <li>• Consider the room's lighting conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prepare walls properly for installation</li>
                <li>• Plan for pattern matching and alignment</li>
                <li>• Consider moisture and humidity levels</li>
                <li>• Choose appropriate adhesives and tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wallpaper Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Floral', description: 'Natural and botanical patterns', icon: '🌸' },
              { name: 'Geometric', description: 'Modern and structured designs', icon: '🔷' },
              { name: 'Textured', description: 'Three-dimensional and tactile finishes', icon: '🏗️' },
              { name: 'Vintage', description: 'Classic and retro-inspired patterns', icon: '🏛️' },
            ].map((style, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{style.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{style.name}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;

   