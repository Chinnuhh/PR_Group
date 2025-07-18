import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const HomeOffice: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Office Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create productive and inspiring workspaces with our home office designs. We combine functionality, comfort, and style to design the perfect environment for remote work and productivity.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/homeoffice_hero_1.jpg"
            alt="Home Office Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Functional & Inspiring Workspace"
            description="Our home office designs focus on creating ergonomic, tech-friendly, and organized environments where you can thrive—whether you're working, studying, or creating."
            image="/homeoffice_hero_2.jpg"
            features={[
              'Ergonomic workspace design',
              'Custom storage and organization',
              'Technology integration and cable management',
              'Lighting design for productivity',
              'Acoustic solutions for concentration',
              'Multi-functional furniture solutions',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Office Design Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/homeoffice_1.jpg',
              '/homeoffice_2.jpg',
              '/homeoffice_3.jpg',
              '/homeoffice_4.jpg',
              '/homeoffice_5.jpg',
              '/homeoffice_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Home Office Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Office Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Productivity Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design for comfort and ergonomics</li>
                <li>• Ensure adequate lighting for work tasks</li>
                <li>• Plan for technology and equipment needs</li>
                <li>• Create separation from living spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Include ample storage for files and supplies</li>
                <li>• Plan for cable management and organization</li>
                <li>• Design for easy cleaning and maintenance</li>
                <li>• Consider future equipment and storage needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Office Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Professional', description: 'Business-like and formal designs', icon: '💼' },
              { style: 'Creative', description: 'Inspiring and artistic environments', icon: '🎨' },
              { style: 'Minimalist', description: 'Clean and distraction-free spaces', icon: '⚪' },
              { style: 'Cozy', description: 'Comfortable and homey atmospheres', icon: '🏠' },
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

export default HomeOffice;
