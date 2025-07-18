import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Wardrobe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wardrobe Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative wardrobe designs that combine functionality with style. Our expert designers create beautiful storage solutions tailored to your lifestyle and space requirements.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/wardrobe_hero_1.jpg"
            alt="Wardrobe Hero"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Custom Wardrobe Solutions"
            description="Stylish storage that works for your lifestyle. Designed for function, crafted with precision."
            image="/wardrobe_hero_2.jpg"
            features={[
              'Custom wardrobe designs and layouts',
              'Premium materials and finishes',
              'Smart storage solutions and organization',
              'Professional installation and fitting',
              'Warranty and after-sales support',
              'Budget-friendly options available',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wardrobe Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/wardrobe_1.jpg',
              '/wardrobe_2.jpg',
              '/wardrobe_3.jpg',
              '/wardrobe_4.jpg',
              '/wardrobe_5.jpg',
              '/wardrobe_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Wardrobe ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wardrobe Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider your clothing storage needs</li>
                <li>• Plan for different types of garments</li>
                <li>• Include accessories and shoe storage</li>
                <li>• Ensure proper ventilation and lighting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose durable and moisture-resistant materials</li>
                <li>• Consider maintenance and cleaning requirements</li>
                <li>• Balance aesthetics with functionality</li>
                <li>• Select quality hardware and fittings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wardrobe Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
              { name: 'Contemporary', description: 'Current trends with functional design', icon: '🎨' },
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

export default Wardrobe;
