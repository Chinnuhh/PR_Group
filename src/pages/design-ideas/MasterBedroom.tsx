import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const MasterBedroom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Master Bedroom Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your perfect sanctuary with our master bedroom design solutions. We design comfortable, elegant spaces that promote rest and relaxation.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/guestbedroom_hero_1.jpg"
            alt="Master Bedroom"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Relaxing & Elegant Master Bedrooms"
            description="Our master bedroom designs focus on serenity, comfort, and timeless beauty. Experience restful luxury every day."
            image="/masterbedroom_hero_1.jpg"
            features={[
              'Custom bedroom layouts and designs',
              'Premium furniture and fixtures',
              'Integrated storage solutions',
              'Lighting design and ambiance',
              'Color coordination and styling',
              'Comfort and functionality focus',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Master Bedroom Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/master_1.jpg',
              '/master_2.jpg',
              '/master_3.jpg',
              '/master_4.jpg',
              '/master_5.jpg',
              '/master_6.jpg',
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={img}
                  alt={`Master Bedroom Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Master Bedroom Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create a calming and restful atmosphere</li>
                <li>• Plan for adequate storage space</li>
                <li>• Consider natural light and ventilation</li>
                <li>• Design for privacy and comfort</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose comfortable and durable materials</li>
                <li>• Select calming colors and textures</li>
                <li>• Invest in quality bedding and furniture</li>
                <li>• Consider maintenance and cleaning ease</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
              { style: 'Romantic', description: 'Soft and intimate design elements', icon: '💕' },
              { style: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
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

export default MasterBedroom;
