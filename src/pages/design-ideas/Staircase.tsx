import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Staircase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Staircase Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning architectural focal points with our innovative staircase designs. We combine safety, functionality, and aesthetic appeal to design staircases that enhance your home's beauty.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Staircase Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Elegant and Functional Staircases"
            description="Our staircase solutions blend engineering precision with aesthetic excellence. Whether you're looking for modern minimalism or timeless tradition, we deliver stairs that stand out."
            image="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
            features={[
              'Custom staircase design and construction',
              'Wide variety of materials and finishes',
              'Safety railings and balustrades',
              'Space-efficient and compact designs',
              'Lighting integration and safety features',
              'Professional installation and finishing',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Staircase Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/staircase_1.jpg',
              '/staircase_2.jpg',
              '/staircase_3.jpg',
              '/staircase_4.jpg',
              '/staircase_5.jpg',
              '/staircase_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Staircase Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Staircase Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure proper riser and tread dimensions</li>
                <li>• Include adequate lighting for visibility</li>
                <li>• Plan for sturdy railings and handrails</li>
                <li>• Consider slip-resistant materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Considerations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose materials that complement home style</li>
                <li>• Consider space constraints and layout</li>
                <li>• Plan for structural support and engineering</li>
                <li>• Think about maintenance and durability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Staircase Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Straight', description: 'Simple and space-efficient designs', icon: '📏' },
              { style: 'Spiral', description: 'Compact and dramatic solutions', icon: '🌀' },
              { style: 'Floating', description: 'Modern and minimalist styles', icon: '✨' },
              { style: 'Traditional', description: 'Classic and ornate designs', icon: '🏛️' },
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

export default Staircase;
