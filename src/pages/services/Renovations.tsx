import React from 'react';
import { Phone, MessageCircle, ArrowRight, Wrench, Home, Sparkles } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';
import { CONTACT_INFO } from '../../utils/constants';

const Renovations: React.FC = () => {
  const features = [
    'Complete home and office renovations',
    'Kitchen and bathroom remodeling',
    'Structural modifications and additions',
    'Electrical and plumbing upgrades',
    'Flooring and wall refinishing',
    'Energy-efficient improvements',
  ];

  const handleCallClick = () => {
    window.open(`tel:${CONTACT_INFO.phone}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for renovation services. Can you help me with the details?");
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-beige via-surface-white to-mustard-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-6">
            Renovation Services
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
            Transform your existing spaces into extraordinary environments with our expert renovation services that blend innovation with timeless craftsmanship.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <img
            src="public/renovationheroimage.jpg"
            alt="Premium Renovation Services by PR Group"
            className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/30 to-transparent"></div>
        </div>

        {/* About Our Renovations */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-surface-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-mustard-100">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-mustard-gradient rounded-full p-4 mr-4">
                <Wrench className="h-8 w-8 text-charcoal-800" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800">The Art of Transformation</h2>
            </div>
            <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed text-center max-w-5xl mx-auto">
              At PR Group, we believe every space has untapped potential. Our renovation specialists combine decades of experience with cutting-edge techniques to breathe new life into your property. Whether it's a single room refresh or a complete home transformation, we approach each project with meticulous attention to detail, premium materials, and a commitment to exceeding your expectations. From concept to completion, we handle every aspect of your renovation journey with precision and care.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <ServiceCard
            title="Professional Renovation Excellence"
            description="Transform your space with our comprehensive renovation services. We specialize in creating beautiful, functional environments that reflect your vision while enhancing your property's value and your quality of life."
            image="/renovationheroimage.jpg"
            features={features}
          />
        </div>

        {/* Renovation Highlights */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-12 text-center">
            Renovation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Kitchen Transformations',
                description: 'Modern kitchen renovations with premium appliances, custom cabinetry, and innovative storage solutions that make cooking a joy.',
                icon: <Home className="h-6 w-6" />
              },
              {
                image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Living Space Makeovers',
                description: 'Complete living area renovations featuring contemporary design, enhanced lighting, and optimized layouts for modern living.',
                icon: <Sparkles className="h-6 w-6" />
              },
              {
                image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Bathroom Upgrades',
                description: 'Luxury bathroom renovations with spa-like features, premium fixtures, and smart design elements for ultimate comfort.',
                icon: <Wrench className="h-6 w-6" />
              },
            ].map((highlight, index) => (
              <div 
                key={index} 
                className="bg-surface-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-mustard-100 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-mustard-gradient text-charcoal-800 p-2 rounded-full">
                    {highlight.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-3 group-hover:text-mustard-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renovation Types */}
        <div className="bg-surface-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-mustard-100 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-12 text-center">
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
              <div 
                key={index} 
                className="text-center p-6 bg-mustard-50 rounded-xl hover:bg-mustard-100 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-mustard-400 transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-mustard-gradient rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-charcoal-700 mb-8 max-w-3xl mx-auto">
            Let's discuss your renovation vision and create a space that exceeds your expectations. Our expert team is ready to bring your dream renovation to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleCallClick}
              className="group bg-surface-white text-charcoal-800 hover:bg-surface-beige px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                Call Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="group bg-charcoal-600 hover:bg-charcoal-700 text-surface-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse-soft" />
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renovations;