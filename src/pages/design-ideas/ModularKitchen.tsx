import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const ModularKitchen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modular Kitchen Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create the perfect cooking space with our innovative modular kitchen solutions that combine functionality with style.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/modularkitchen_2.jpg"
            alt="Modular Kitchen Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Modular Kitchen Solutions"
            description="Transform your cooking space with our premium modular kitchen designs. We offer customized solutions that maximize storage, enhance functionality, and create a beautiful centerpiece for your home."
            image="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
            features={[
              'Custom cabinet designs and layouts',
              'Premium countertop materials',
              'Smart storage solutions',
              'Modern appliance integration',
              'Efficient workflow design',
              'Quality hardware and finishes',
            ]}
          />
        </div>

        {/* Design Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kitchen Design Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/modularkitchen_1.jpg',
              '/modularkitchen_6.jpg',
              '/modularkitchen_4.jpg',
              '/modularkitchen_2.jpg',
              '/modularkitchen_3.jpg',
              '/modularkitchen_5.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image}
                  alt={`Kitchen Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Design Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kitchen Design Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Layout Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Follow the kitchen work triangle principle</li>
                <li>• Ensure adequate counter space for food prep</li>
                <li>• Plan for proper lighting in all work areas</li>
                <li>• Consider traffic flow and accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use vertical space with tall cabinets</li>
                <li>• Install pull-out drawers and organizers</li>
                <li>• Add corner storage solutions</li>
                <li>• Include dedicated spice and utensil storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Kitchen Styles */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Kitchen Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Modern', description: 'Clean lines, minimalist design, and sleek finishes', icon: '✨' },
              { style: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
              { style: 'Contemporary', description: 'Current trends with functional design', icon: '🎨' },
              { style: 'Rustic', description: 'Warm, natural materials and textures', icon: '🌲' },
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

export default ModularKitchen;