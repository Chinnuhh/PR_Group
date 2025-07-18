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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-mustard-300 text-charcoal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-mustard-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-charcoal-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-charcoal-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        const message = encodeURIComponent(`Hi! I'm interested in a similar ${project.type.toLowerCase()} project like "${project.title}". Can you help me with details?`);
                        window.open(`https://wa.me/918886663807?text=${message}`, '_blank');
                      }}
                      className="w-full bg-mustard-300 hover:bg-mustard-400 text-charcoal-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                    >
                      Get Similar Project
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => window.open('tel:8886663807', '_self')}
                        className="bg-charcoal-600 hover:bg-charcoal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md text-sm"
                      >
                        Call Now
                      </button>
                      
                      <button
                        onClick={() => {
                          const message = encodeURIComponent(`Hi! I'd like to get a quote for a ${project.type.toLowerCase()} project similar to "${project.title}".`);
                          window.open(`https://wa.me/918886663807?text=${message}`, '_blank');
                        }}
                        className="bg-mustard-400 hover:bg-mustard-500 text-charcoal-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md text-sm"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
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
              { image: '/meetingroominterior.jpg', title: 'Office Renovation', type: 'Renovations' },
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