import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const PoojaRoom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pooja Room Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a sacred and serene space for worship with our thoughtful pooja room designs. We blend traditional elements with modern functionality for a peaceful spiritual environment.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/pooja_hero_1.jpg"
            alt="Pooja Room"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Spiritual Comfort Meets Design"
            description="Our pooja room designs honor tradition while offering practical solutions for modern homes. Whether large or compact, each space is designed with peace, devotion, and aesthetics in mind."
            image="/pooja_hero_2.jpg"
            features={[
              'Traditional and contemporary pooja room designs',
              'Custom storage for religious items',
              'Proper ventilation and lighting',
              'Sacred geometry and vastu compliance',
              'Premium materials and finishes',
              'Space-efficient solutions for small homes',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pooja Room Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/pooja_hero_1.jpg',
              '/pooja_hero_2.jpg',
              '/pooja_1.jpg',
              '/pooja_2.jpg',
              '/pooja_3.jpg',
              '/pooja_4.jpg',
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={img}
                  alt={`Pooja Room Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Tips for a Divine Pooja Room
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Follow vastu principles for placement</li>
                <li>• Ensure proper ventilation for incense</li>
                <li>• Plan for adequate storage of religious items</li>
                <li>• Create a peaceful and serene atmosphere</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use traditional materials like wood and marble</li>
                <li>• Choose easy-to-clean surfaces</li>
                <li>• Select appropriate lighting for worship</li>
                <li>• Consider maintenance and durability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Pooja Room Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Traditional', description: 'Classic temple-inspired designs', icon: '🏛️' },
              { style: 'Modern', description: 'Contemporary interpretation of sacred spaces', icon: '✨' },
              { style: 'Compact', description: 'Space-efficient designs for small homes', icon: '📦' },
              { style: 'Ornate', description: 'Detailed and decorative elements', icon: '🎨' },
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

export default PoojaRoom;
