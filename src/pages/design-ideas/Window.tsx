import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Window: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Window Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your home's beauty and functionality with our innovative window designs. We create solutions that maximize natural light, provide privacy, and add architectural interest to your spaces.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/window_hero_1.jpg"
            alt="Window Hero"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Custom Window Solutions"
            description="From sunlight to style — we design windows that transform your space."
            image="/window_hero_2.jpg"
            features={[
              'Custom window treatments and coverings',
              'Energy-efficient window solutions',
              'Privacy and light control options',
              'Architectural window enhancements',
              'Integration with interior design',
              'Maintenance-friendly materials',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Window Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/window_1.jpg',
              '/window_2.jpg',
              '/window_3.jpg',
              '/window_4.jpg',
              '/window_5.jpg',
              '/window_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Window ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Window Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider natural light and privacy needs</li>
                <li>• Plan for energy efficiency and insulation</li>
                <li>• Design for easy operation and maintenance</li>
                <li>• Integrate with overall room design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose durable and weather-resistant materials</li>
                <li>• Select appropriate treatments for room function</li>
                <li>• Consider UV protection and fade resistance</li>
                <li>• Plan for easy cleaning and maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Window Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
              { name: 'Bay Window', description: 'Extended and architectural designs', icon: '🏠' },
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

export default Window;
