import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const InteriorDesign: React.FC = () => {
  const features = [
    'Complete interior design solutions',
    'Space planning and optimization',
    'Custom furniture and fixtures',
    'Color consultation and styling',
    'Lighting design and installation',
    '3D visualization and mockups',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interior Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space with our creative interior design solutions that blend functionality with aesthetic appeal.
          </p>
        </div>
        
{/* Hero Image */}
<div className="mb-12 rounded-xl overflow-hidden shadow-lg">
  <img
    src="/interiorpagetop1.jpg"
    alt="Interior Design Services"
    className="w-full h-96 object-cover"
  />
</div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Professional Interior Design"
            description="Our interior design team creates beautiful, functional spaces that reflect your personality and lifestyle. From concept to completion, we handle every detail to ensure your space is both stunning and practical."
            image="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
            features={features}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interior Design Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/3214113/pexels-photo-3214113.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`Interior Design ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services Breakdown */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interior Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Living Spaces', description: 'Complete living room and family room design', icon: '🏠' },
              { title: 'Bedrooms', description: 'Master and guest bedroom interior solutions', icon: '🛏️' },
              { title: 'Kitchens', description: 'Functional and beautiful kitchen designs', icon: '🍳' },
              { title: 'Bathrooms', description: 'Luxury bathroom design and renovation', icon: '🛁' },
              { title: 'Office Spaces', description: 'Professional home and commercial office design', icon: '💼' },
              { title: 'Custom Solutions', description: 'Tailored design solutions for unique spaces', icon: '✨' },
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;