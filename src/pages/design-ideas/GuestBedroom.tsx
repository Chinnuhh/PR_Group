import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const GuestBedroom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guest Bedroom Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create welcoming spaces for your guests with our thoughtful bedroom designs. We design comfortable, functional rooms that make visitors feel at home while maximizing space efficiency.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/guestbedroom_hero_1.jpg"
            alt="Guest Bedroom Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Guest Bedroom Solutions"
            description="Our guest bedroom solutions balance comfort, style, and space-saving functionality. From cozy bedding to smart storage, we help you create a room your guests will love."
            image="/guestbedroom_hero_2.jpg"
            features={[
              'Comfortable and welcoming designs',
              'Multi-functional furniture solutions',
              'Storage for guest belongings',
              'Flexible layouts for different uses',
              'Quality bedding and comfort features',
              'Privacy and convenience considerations',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Guest Bedroom Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/guestbedroom_1.jpg',
              '/guestbedroom_2.jpg',
              '/guestbedroom_3.jpg',
              '/guestbedroom_4.jpg',
              '/guestbedroom_5.jpg',
              '/guestbedroom_6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Guest Bedroom Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Guest Bedroom Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comfort Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide comfortable sleeping arrangements</li>
                <li>• Include adequate storage for guest belongings</li>
                <li>• Ensure privacy and quiet environment</li>
                <li>• Plan for good lighting and ventilation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design for easy cleaning and maintenance</li>
                <li>• Include essential amenities and conveniences</li>
                <li>• Consider dual-purpose furniture options</li>
                <li>• Plan for different guest needs and preferences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Guest Bedroom Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Hotel-style', description: 'Professional and comfortable designs', icon: '🏨' },
              { style: 'Cozy', description: 'Warm and inviting atmospheres', icon: '🏠' },
              { style: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
              { style: 'Multi-purpose', description: 'Flexible and adaptable spaces', icon: '🔄' },
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

export default GuestBedroom;
