import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const TVUnit: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TV Unit Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your entertainment experience with our stylish TV unit designs. We create functional media centers that organize your electronics while adding aesthetic appeal to your living space.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/livingroom_hero_1.jpg"
            alt="TV Unit Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Elegant & Functional TV Units"
            description="Our TV unit designs combine smart storage, clean aesthetics, and seamless tech integration to enhance your living room’s style and organization."
            image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            features={[
              'Custom TV unit designs and layouts',
              'Cable management and organization',
              'Storage for media devices and accessories',
              'Wall-mounted and floor-standing options',
              'Premium materials and finishes',
              'Integration with room decor',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            TV Unit Design Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/tvunit_1.jpg',
              '/tvunit_2.jpg',
              '/tvunit_3.jpg',
              '/tvunit_4.jpg',
              '/tvunit_5.jpg',
              '/tvunit_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`TV Unit Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Tips for TV Units
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider TV size and viewing distance</li>
                <li>• Plan for cable management and organization</li>
                <li>• Ensure proper ventilation for electronics</li>
                <li>• Design for easy access to devices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Include storage for remotes and accessories</li>
                <li>• Plan for future technology upgrades</li>
                <li>• Consider sound system integration</li>
                <li>• Ensure stability and safety</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            TV Unit Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { name: 'Wall-mounted', description: 'Space-saving floating designs', icon: '📺' },
              { name: 'Entertainment Center', description: 'Comprehensive media storage', icon: '🎬' },
              { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
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

export default TVUnit;
