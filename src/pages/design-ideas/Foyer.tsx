import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Foyer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Foyer Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a lasting first impression with our stunning foyer designs. We create welcoming entrance spaces that set the tone for your entire home with style and functionality.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/foyer_hero_1.jpg"
            alt="Foyer Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Foyer Solutions"
            description="Our foyer solutions blend aesthetics and practicality to create inviting entryways. We help you make a great first impression while offering thoughtful storage and space use."
            image="/foyer_hero_2.jpg"
            features={[
              'Welcoming entrance design solutions',
              'Storage for shoes, coats, and accessories',
              'Lighting design for safety and ambiance',
              'Flooring suitable for high traffic',
              'Mirror and console integration',
              'Space optimization for small entryways',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Foyer Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/foyer_1.jpg',
              '/foyer_2.jpg',
              '/foyer_3.jpg',
              '/foyer_4.jpg',
              '/foyer_5.jpg',
              '/foyer_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Foyer Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Foyer Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create a welcoming first impression</li>
                <li>• Plan for adequate lighting and visibility</li>
                <li>• Consider traffic flow and movement</li>
                <li>• Include storage for everyday items</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose durable and easy-to-clean materials</li>
                <li>• Include seating for putting on shoes</li>
                <li>• Plan for coat and bag storage</li>
                <li>• Consider security and privacy needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Foyer Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Foyer Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Grand', description: 'Impressive and spacious designs', icon: '🏛️' },
              { style: 'Compact', description: 'Space-efficient solutions', icon: '📦' },
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏠' },
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

export default Foyer;
