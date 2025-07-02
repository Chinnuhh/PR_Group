import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Renovations: React.FC = () => {
  const features = [
    'Complete home and office renovations',
    'Kitchen and bathroom remodeling',
    'Structural modifications and additions',
    'Electrical and plumbing upgrades',
    'Flooring and wall refinishing',
    'Energy-efficient improvements',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Renovation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breathe new life into your existing spaces with our comprehensive renovation services that enhance both function and beauty.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Renovation Services"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Before/After Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Transformation Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Before Renovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="After Renovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kitchen Renovation</h3>
                <p className="text-gray-600">Complete kitchen transformation with modern appliances and custom cabinetry.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Before Renovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="After Renovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Living Room Makeover</h3>
                <p className="text-gray-600">Modern living space with enhanced lighting and contemporary design elements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Professional Renovations"
            description="Whether you're looking to update a single room or renovate your entire property, our renovation experts will transform your space while working within your budget and timeline. We handle everything from planning to final cleanup."
            image="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
            features={features}
          />
        </div>

        {/* Renovation Types */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Renovations We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Kitchen Remodeling', description: 'Complete kitchen upgrades with modern appliances and finishes', icon: '🍳' },
              { title: 'Bathroom Renovation', description: 'Luxury bathroom transformations with premium fixtures', icon: '🛁' },
              { title: 'Home Extensions', description: 'Adding new rooms and expanding existing spaces', icon: '🏗️' },
              { title: 'Flooring Upgrade', description: 'Premium flooring installation and refinishing', icon: '🏠' },
              { title: 'Electrical & Plumbing', description: 'Modern electrical and plumbing system upgrades', icon: '⚡' },
              { title: 'Energy Efficiency', description: 'Eco-friendly upgrades for better energy performance', icon: '🌱' },
            ].map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renovations;