import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const CrockeryUnit: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crockery Unit Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organize and display your dinnerware beautifully with our custom crockery unit designs. We create functional storage solutions that protect your dishes while adding elegance to your dining area.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/crockery_hero_1.jpg"
            alt="Crockery Unit Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Crockery Unit Design Solutions"
            description="Create an elegant and organized space for your crockery with our tailored unit designs. From display shelves to hidden storage, we offer solutions that suit your style and space."
            image="/crockery_hero_2.jpg"
            features={[
              'Custom storage solutions for dinnerware',
              'Display and organization options',
              'Premium materials and finishes',
              'Adjustable shelving and compartments',
              'Glass doors and lighting integration',
              'Space-efficient designs for all room sizes',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Crockery Unit Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/crockeryunit_1.jpg',
              '/crockeryunit_2.jpg',
              '/crockeryunit_3.jpg',
              '/crockeryunit_4.jpg',
              '/crockeryunit_5.jpg',
              '/crockeryunit_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Crockery Unit Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Crockery Unit Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plan for different types of dinnerware</li>
                <li>• Include space for serving pieces and glassware</li>
                <li>• Consider accessibility and ease of use</li>
                <li>• Think about protection from dust and damage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose styles that complement dining room decor</li>
                <li>• Consider display vs. hidden storage needs</li>
                <li>• Plan for proper lighting and visibility</li>
                <li>• Think about maintenance and cleaning access</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Crockery Unit Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Crockery Unit Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Traditional', description: 'Classic hutch and cabinet styles', icon: '🏛️' },
              { style: 'Modern', description: 'Sleek and contemporary designs', icon: '✨' },
              { style: 'Glass Front', description: 'Display-focused with visibility', icon: '🔲' },
              { style: 'Built-in', description: 'Integrated and space-saving solutions', icon: '🏠' },
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

export default CrockeryUnit;
