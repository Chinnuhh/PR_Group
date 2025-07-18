import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const StudyRoom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study Room Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a focused and inspiring study space with our specialized study room designs. We blend functionality, comfort, and concentration-enhancing elements to create the perfect environment for learning and productivity.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Study Room Design"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Functional & Peaceful Study Spaces"
            description="Our study room designs focus on boosting concentration, minimizing distractions, and ensuring comfort during long hours of work or learning."
            image="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1600"
            features={[
              'Ergonomic desk and seating setups',
              'Optimized lighting for focus',
              'Customized shelving and storage',
              'Noise-reducing design elements',
              'Comfortable, clutter-free arrangements',
              'Smart cable and tech organization',
            ]}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Study Room Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/studyroom_1.jpg',
              '/studyroom_2.jpg',
              '/studyroom_3.jpg',
              '/studyroom_4.jpg',
              '/studyroom_5.jpg',
              '/studyroom_6.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={img}
                  alt={`Study Room Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Study Room Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Focus & Productivity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure proper lighting for reading and screens</li>
                <li>• Use ergonomic chairs and desks for long hours</li>
                <li>• Reduce noise and distractions with layout and materials</li>
                <li>• Keep the workspace clean and organized</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Layout</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Allocate enough shelving and storage for books/supplies</li>
                <li>• Use soft colors to reduce eye strain</li>
                <li>• Incorporate whiteboards or pinboards for productivity</li>
                <li>• Consider future growth and changing needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Styles Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Study Room Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { style: 'Minimalist', description: 'Clean, clutter-free setups for focus', icon: '⚪' },
              { style: 'Creative', description: 'Artistic and inspirational designs', icon: '🎨' },
              { style: 'Classic', description: 'Timeless elegance with wood tones', icon: '📚' },
              { style: 'Compact', description: 'Smart layouts for small spaces', icon: '📦' },
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

export default StudyRoom;
