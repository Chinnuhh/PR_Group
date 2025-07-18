import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const WallDecor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wall Decor Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your walls into stunning focal points with our creative wall decor solutions. We combine art, texture, and design elements to create visually striking and personalized spaces.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/livingroom_hero_1.jpg"
            alt="Wall Decor Hero"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Expressive & Personalized Walls"
            description="Bring character to your home with our custom wall decor solutions that reflect your style and elevate your interiors."
            image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            features={[
              'Custom wall art and installations',
              'Textural elements and materials',
              'Gallery wall planning and design',
              'Accent wall creation',
              'Integration with lighting design',
              'Personalized and unique solutions',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wall Decor Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/walldecor_1.jpg',
              '/walldecor_2.jpg',
              '/walldecor_3.jpg',
              '/walldecor_4.jpg',
              '/walldecor_5.jpg',
              '/walldecor_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Wall Decor ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips for Stunning Wall Decor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room scale and proportions</li>
                <li>• Plan for proper lighting and viewing angles</li>
                <li>• Create focal points and visual interest</li>
                <li>• Balance decorative elements with functionality</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose pieces that reflect personal style</li>
                <li>• Consider color coordination with room decor</li>
                <li>• Mix different textures and materials</li>
                <li>• Plan for easy updating and rearrangement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wall Decor Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Gallery Wall', description: 'Curated collections and arrangements', icon: '🖼️' },
              { name: 'Statement Piece', description: 'Bold and dramatic focal points', icon: '🎨' },
              { name: 'Textural', description: 'Three-dimensional and tactile elements', icon: '🏗️' },
              { name: 'Minimalist', description: 'Simple and clean design approach', icon: '⚪' },
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

export default WallDecor;
