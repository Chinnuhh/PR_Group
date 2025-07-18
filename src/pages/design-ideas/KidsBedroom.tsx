import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const KidsBedroom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kids Bedroom Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create magical and functional spaces for children with our playful bedroom designs. We combine safety, creativity, and growth-friendly solutions for the perfect kids' room.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/kidsbedroom_hero_1.jpg"
            alt="Kids Bedroom Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Fun & Functional Kids Spaces"
            description="From toddler zones to teenage retreats, our kid's bedroom designs ensure creativity, comfort, and adaptability as your child grows."
            image="/bluepinkbedroom.jpg"
            features={[
              'Age-appropriate design solutions',
              'Safety-focused furniture and layouts',
              'Creative storage and organization',
              'Play area integration',
              'Growth-adaptable designs',
              'Fun colors and themes',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kids Bedroom Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/kidsbedroom_1.jpg',
              '/kidsbedroom_2.jpg',
              '/kidsbedroom_3.jpg',
              '/kidsbedroom_4.jpg',
              '/kidsbedroom_5.jpg',
              '/kidsbedroom_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Kids Bedroom Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kids Bedroom Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use child-safe materials and finishes</li>
                <li>• Ensure furniture stability and safety</li>
                <li>• Plan for adequate lighting and ventilation</li>
                <li>• Consider rounded corners and soft edges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create designated areas for sleep, play, and study</li>
                <li>• Include ample storage for toys and clothes</li>
                <li>• Design for easy cleaning and maintenance</li>
                <li>• Plan for future growth and changing needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kids Bedroom Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Playful', description: 'Colorful and fun design elements', icon: '🎨' },
              { style: 'Educational', description: 'Learning-focused environments', icon: '📚' },
              { style: 'Adventure', description: 'Themed designs for imagination', icon: '🚀' },
              { style: 'Calm', description: 'Peaceful and restful atmospheres', icon: '🌙' },
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

export default KidsBedroom;
