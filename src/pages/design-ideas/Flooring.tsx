import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Flooring: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flooring Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your spaces from the ground up with our premium flooring solutions. We offer a wide range of materials and designs that combine durability, beauty, and functionality.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Flooring Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Flooring Solutions"
            description="We deliver expertly crafted flooring options for every room and need. From durable tiles to elegant hardwood, our range of finishes and materials ensures the perfect foundation for your style."
            image="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            features={[
              'Wide range of flooring materials',
              'Custom patterns and layouts',
              'Durable and long-lasting solutions',
              'Easy maintenance and cleaning',
              'Slip-resistant and safety features',
              'Professional installation services',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Flooring Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/flooring_1.jpg',
              '/flooring_2.jpg',
              '/flooring_3.jpg',
              '/flooring_4.jpg',
              '/flooring_5.jpg',
              '/flooring_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Flooring Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Flooring Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room function and traffic levels</li>
                <li>• Choose appropriate materials for climate</li>
                <li>• Plan for maintenance and cleaning requirements</li>
                <li>• Consider acoustic and comfort properties</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Select patterns that complement room size</li>
                <li>• Consider color coordination with decor</li>
                <li>• Plan for transitions between different areas</li>
                <li>• Ensure proper subfloor preparation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Flooring Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Flooring Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Hardwood', description: 'Natural wood beauty and warmth', icon: '🌳' },
              { style: 'Tile', description: 'Durable and versatile ceramic options', icon: '🔲' },
              { style: 'Luxury Vinyl', description: 'Modern and practical solutions', icon: '✨' },
              { style: 'Natural Stone', description: 'Premium and elegant materials', icon: '🏛️' },
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

export default Flooring;
