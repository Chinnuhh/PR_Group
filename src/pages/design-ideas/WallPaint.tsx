import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const WallPaint: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wall Paint Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your spaces with our expert wall paint designs and color solutions. We help you choose the perfect colors and finishes to create the desired mood and atmosphere in every room.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/wallpaint_hero_1.jpg"
            alt="Wall Paint Hero"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Color That Defines Mood"
            description="Choose colors that enhance your space’s personality with our expert wall paint guidance and flawless finish application."
            image="/wallpaint_hero_2.jpg"
            features={[
              'Professional color consultation',
              'Custom paint techniques and finishes',
              'Accent wall and feature designs',
              'Color coordination and harmony',
              'Premium paint materials and brands',
              'Expert application and finishing',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wall Paint Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/wallpaint_1.jpg',
              '/wallpaint_2.jpg',
              '/wallpaint_3.jpg',
              '/wallpaint_4.jpg',
              '/wallpaint_5.jpg',
              '/wallpaint_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Wall Paint ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips for Perfect Wall Painting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room size and natural light</li>
                <li>• Think about the mood you want to create</li>
                <li>• Test colors in different lighting conditions</li>
                <li>• Consider the room's function and use</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Techniques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prepare surfaces properly for best results</li>
                <li>• Use quality brushes and tools</li>
                <li>• Apply primer when changing colors dramatically</li>
                <li>• Consider special finishes and textures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wall Paint Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Monochromatic', description: 'Single color with different shades', icon: '🎨' },
              { name: 'Accent Wall', description: 'Bold feature walls for impact', icon: '🏠' },
              { name: 'Neutral', description: 'Timeless and versatile color schemes', icon: '⚪' },
              { name: 'Bold', description: 'Vibrant and dramatic color choices', icon: '🌈' },
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

export default WallPaint;
