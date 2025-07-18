import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const FalseCeiling: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            False Ceiling Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space with elegant false ceiling designs that add depth, character, and functionality. Our designs incorporate modern lighting solutions and architectural elements.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/ceiling_prgroupnew.jpg"
            alt="False Ceiling Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="False Ceiling Solutions"
            description="Enhance the aesthetic and functionality of your rooms with expertly designed false ceilings. Whether you want integrated lighting, better acoustics, or architectural detailing, we provide tailored solutions."
            image="/ceiling_prgroup_2.jpg"
            features={[
              'Custom false ceiling designs',
              'Integrated lighting solutions',
              'Sound insulation and acoustics',
              'Air conditioning integration',
              'Premium materials and finishes',
              'Architectural detailing and moldings',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ceiling Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/ceiling_1.jpg',
              '/ceiling_2.jpg',
              '/ceiling_3.jpg',
              '/ceiling_4.jpg',
              '/ceiling_5.jpg',
              '/ceiling_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`False Ceiling Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            False Ceiling Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider room height and proportions</li>
                <li>• Plan for integrated lighting systems</li>
                <li>• Ensure proper ventilation access</li>
                <li>• Design for maintenance accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Choose lightweight and durable materials</li>
                <li>• Consider fire safety and building codes</li>
                <li>• Select appropriate finishes for the space</li>
                <li>• Plan for thermal and acoustic insulation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ceiling Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular False Ceiling Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Coffered', description: 'Traditional recessed panel designs', icon: '🏛️' },
              { style: 'Tray', description: 'Layered and stepped ceiling designs', icon: '📐' },
              { style: 'Cove', description: 'Curved and indirect lighting features', icon: '🌙' },
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

export default FalseCeiling;
