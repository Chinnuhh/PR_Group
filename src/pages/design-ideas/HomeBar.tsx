import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const HomeBar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Bar Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create the perfect entertainment space with our stylish home bar designs. We design functional and elegant bars that become the centerpiece of your social gatherings and relaxation.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/homebar_hero_1.jpg"
            alt="Home Bar Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Entertainment & Style in One"
            description="Our home bar designs combine luxury, comfort, and practicality. Whether you're entertaining guests or enjoying a quiet evening, our bars elevate the experience."
            image="/homebar_hero_2.jpg"
            features={[
              'Custom bar design and construction',
              'Storage for bottles, glasses, and accessories',
              'Integrated refrigeration and equipment',
              'Seating and entertainment areas',
              'Lighting design for ambiance',
              'Premium materials and finishes',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Bar Design Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/homebar_1.jpg',
              '/homebar_2.jpg',
              '/homebar_3.jpg',
              '/homebar_4.jpg',
              '/homebar_5.jpg',
              '/homebar_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Home Bar Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Bar Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plan for adequate storage and organization</li>
                <li>• Include proper electrical and plumbing</li>
                <li>• Consider refrigeration and ice maker needs</li>
                <li>• Design for easy cleaning and maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Entertainment Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create comfortable seating arrangements</li>
                <li>• Plan for proper lighting and ambiance</li>
                <li>• Include entertainment and music systems</li>
                <li>• Consider traffic flow and accessibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Bar Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Classic', description: 'Traditional pub and tavern styles', icon: '🏛️' },
              { style: 'Modern', description: 'Sleek and contemporary designs', icon: '✨' },
              { style: 'Rustic', description: 'Natural materials and textures', icon: '🌳' },
              { style: 'Compact', description: 'Space-efficient solutions', icon: '📦' },
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

export default HomeBar;

