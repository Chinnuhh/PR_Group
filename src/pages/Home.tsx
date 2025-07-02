import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Clock, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, PORTFOLIO_PROJECTS } from '../utils/constants';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-pastel-blue-light via-white to-pastel-purple-light animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PR Group?</h2>
            <p className="text-xl text-pastel-gray-dark max-w-3xl mx-auto">
              We combine precision craftsmanship with innovative design to deliver exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Craftsmanship', description: 'Years of experience in construction and design', color: 'pastel-blue' },
              { icon: Users, title: 'Dedicated Team', description: 'Skilled professionals committed to excellence', color: 'pastel-green' },
              { icon: Clock, title: 'Timely Delivery', description: 'Projects completed on schedule, every time', color: 'pastel-purple' },
              { icon: CheckCircle, title: 'Quality Assured', description: 'Premium materials and superior finishes', color: 'pastel-pink' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-${item.color}/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <item.icon className={`h-8 w-8 text-${item.color}-dark group-hover:animate-wiggle`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pastel-blue-dark transition-colors duration-300">{item.title}</h3>
                <p className="text-pastel-gray-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-pastel-green-light to-pastel-blue-light animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-pastel-gray-dark">
              Complete solutions for all your construction and design needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className="animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full">
                  <ServiceCard
                    title={service.name}
                    description={service.description}
                    image={service.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-pastel-purple-light via-white to-pastel-pink-light animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-pastel-gray-dark">
              See how we've transformed spaces across Andhra Pradesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pastel-blue/20 animate-fade-in-up group h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse-soft">
                    {project.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pastel-blue-dark transition-colors duration-300">{project.title}</h3>
                  <p className="text-pastel-gray-dark mb-2">{project.location}</p>
                  <p className="text-gray-700 text-sm flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark hover:from-pastel-purple-dark hover:to-pastel-pink-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pastel-blue-dark via-pastel-purple-dark to-pastel-pink-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expert construction and design services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:8886663807"
                className="group bg-white text-pastel-blue-dark hover:bg-pastel-blue-light px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                  Call Now
                </span>
              </a>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-pastel-orange-dark to-pastel-pink-dark hover:from-pastel-pink-dark hover:to-pastel-orange-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;