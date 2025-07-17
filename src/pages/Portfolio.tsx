import React from 'react';
import { MapPin, Calendar, Tag } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../utils/constants';
import ServiceCard from '../components/ServiceCard';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our completed projects and see how we've transformed spaces across Andhra Pradesh with precision and creativity.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 h-64">
                  <div className="relative">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <ServiceCard
                    title={`Get Similar ${project.type}`}
                    description={`Contact us to discuss a similar project for your space.`}
                    image={project.afterImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More From Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: '/interiorpagewoodenframe.jpg', title: 'Modern Construction', type: 'Construction' },
              { image: '/ahahotelhall.jpg', title: 'Luxury Interior', type: 'Interior Design' },
              { image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Office Renovation', type: 'Renovations' },
              { image: '/meetingroominterior.jpg', title: 'Kitchen Design', type: 'Interior Design' },
              { image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Living Space', type: 'Interior Design' },
              { image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Bedroom Design', type: 'Interior Design' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ravi Kumar',
                location: 'Visakhapatnam',
                text: 'PR Group transformed our home beyond our expectations. The attention to detail and quality of work is exceptional.',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                location: 'Srikakulam',
                text: 'Professional team, timely delivery, and beautiful results. Highly recommend PR Group for interior design.',
                rating: 5,
              },
              {
                name: 'Suresh Reddy',
                location: 'Vizianagaram',
                text: 'Excellent construction work with proper planning and execution. Very satisfied with their services.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;