import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Construction: React.FC = () => {
  const features = [
    'Residential and commercial construction',
    'Foundation to finishing work',
    'Modern construction techniques',
    'Quality materials and workmanship',
    'Project management and supervision',
    'Timely completion guarantee',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Construction Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundation to finishing, we deliver exceptional construction projects that stand the test of time.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/pujarirambabugaru.updated.png"
            alt="Construction Services"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Additional Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/constructionheroimage.jpg"
            alt="Construction Services - Professional Work"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ServiceCard
            title="Professional Construction"
            description="We specialize in both residential and commercial construction projects, delivering high-quality buildings that meet your exact specifications. Our experienced team uses modern construction techniques and premium materials to ensure durability and excellence."
            image="/constructionpagetop1.jpg"
            features={features}
          />
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Construction Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/constructionpagebottom1.jpg',
              '/constructionpagebottom2.jpg',
              '/ahahotelexterior.jpg',
              '/constructionpagebottom4.jpg',
              '/constructionpagebottom5.jpg',
              '/constructionpagebottom6.jpg',
            ].map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`Construction ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Construction Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Planning & Design', description: 'Detailed project planning and architectural design' },
              { step: '2', title: 'Permits & Approvals', description: 'Obtaining necessary permits and approvals' },
              { step: '3', title: 'Construction', description: 'Professional construction with quality supervision' },
              { step: '4', title: 'Handover', description: 'Final inspection and project handover' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;