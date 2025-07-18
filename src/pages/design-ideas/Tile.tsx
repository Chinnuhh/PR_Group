import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Tile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tile Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your spaces with our premium tile designs and installations. We offer a comprehensive range of ceramic, porcelain, and natural stone tiles for floors, walls, and decorative applications.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/tiles_hero_1.jpg"
            alt="Tile Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Durable & Decorative Tiling Solutions"
            description="From floor to wall, our expert tile designs add function, style, and resilience to every surface. Explore elegant patterns and timeless materials customized for every space."
            image="/tiles_hero_2.jpg"
            features={[
              'Wide variety of tile materials and styles',
              'Custom patterns and layouts',
              'Water-resistant and durable solutions',
              'Professional installation services',
              'Decorative and functional applications',
              'Easy maintenance and cleaning',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tile Design Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/tiles_1.jpg',
              '/tiles_2.jpg',
              '/tiles_3.jpg',
              '/tiles_4.jpg',
              '/tiles_5.jpg',
              '/tiles_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Tile Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tile Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room function and moisture levels</li>
                <li>• Choose appropriate tile size for the space</li>
                <li>• Think about slip resistance and safety</li>
                <li>• Consider maintenance and cleaning requirements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plan tile layout and pattern alignment</li>
                <li>• Consider grout color and width</li>
                <li>• Think about transitions between different areas</li>
                <li>• Plan for proper drainage and waterproofing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tile Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Ceramic', description: 'Versatile and affordable options', icon: '🔲' },
              { style: 'Porcelain', description: 'Durable and low-maintenance solutions', icon: '✨' },
              { style: 'Natural Stone', description: 'Premium and unique materials', icon: '🏛️' },
              { style: 'Mosaic', description: 'Decorative and artistic patterns', icon: '🎨' },
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

export default Tile;
