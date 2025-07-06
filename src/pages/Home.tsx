import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Award, Users, Clock, Phone, Bot, MessageCircle, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import NavigationLink from '../components/NavigationLink';
import { SERVICES, PORTFOLIO_PROJECTS, CONTACT_INFO } from '../utils/constants';

interface HomeProps {
  onAIAssistantClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onAIAssistantClick }) => {
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

  const handleChatClick = () => {
    onAIAssistantClick?.();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for my project. Can you help me with the details?");
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  return (
    <div>
      <Hero />
      
      {/* AI Agent Section */}
      <section className="py-16 bg-gradient-to-br from-mustard-100 via-surface-white to-surface-beige relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C542' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-mustard-gradient rounded-full p-3 mr-4">
                <Bot className="h-8 w-8 text-charcoal-800" />
              </div>
              <h2 className="text-4xl font-bold text-charcoal-800">Meet Your Smart Assistant</h2>
            </div>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Get instant answers about construction, interior design, and renovation projects. Our intelligent assistant is available 24/7 to help you plan your dream space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4 group">
                <div className="bg-mustard-200/50 rounded-full p-3 group-hover:bg-mustard-300/50 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-mustard-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-2">Instant Responses</h3>
                  <p className="text-charcoal-600">Get immediate answers to your construction and design questions, available round the clock.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-charcoal-200/50 rounded-full p-3 group-hover:bg-charcoal-300/50 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-charcoal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-2">Expert Guidance</h3>
                  <p className="text-charcoal-600">Receive professional advice on project planning, material selection, and design choices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-mustard-200/50 rounded-full p-3 group-hover:bg-mustard-300/50 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-mustard-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-2">Seamless Connection</h3>
                  <p className="text-charcoal-600">Easily connect with our team via WhatsApp or phone for detailed consultations.</p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleChatClick}
                    className="group bg-mustard-gradient text-charcoal-800 px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      <Bot className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                      Start Chatting
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="group bg-charcoal-600 hover:bg-charcoal-700 text-surface-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse-soft" />
                      WhatsApp Us
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Professional Avatar - Replaced Side Image */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-surface-white rounded-2xl shadow-xl border border-mustard-100 p-8 text-center">
                <div className="bg-mustard-gradient rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-12 w-12 text-charcoal-800" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 mb-4">AI Construction Assistant</h3>
                <p className="text-charcoal-600 mb-6">
                  Your intelligent guide for construction, interior design, and renovation projects. Get expert advice, quotes, and project guidance instantly.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-charcoal-500">
                  <div className="w-2 h-2 bg-mustard-400 rounded-full animate-pulse"></div>
                  <span>Online & Ready to Help</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-surface-beige via-surface-white to-mustard-100 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-charcoal-800 mb-4">Why Choose PR Group?</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              We combine precision craftsmanship with innovative design to deliver exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Craftsmanship', description: 'Years of experience in construction and design', color: 'mustard' },
              { icon: Users, title: 'Dedicated Team', description: 'Skilled professionals committed to excellence', color: 'charcoal' },
              { icon: Clock, title: 'Timely Delivery', description: 'Projects completed on schedule, every time', color: 'mustard' },
              { icon: CheckCircle, title: 'Quality Assured', description: 'Premium materials and superior finishes', color: 'charcoal' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${item.color === 'mustard' ? 'bg-mustard-200' : 'bg-charcoal-200'} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:${item.color === 'mustard' ? 'bg-mustard-300' : 'bg-charcoal-300'} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <item.icon className={`h-8 w-8 ${item.color === 'mustard' ? 'text-mustard-400' : 'text-charcoal-600'} group-hover:animate-wiggle`} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 mb-2 group-hover:text-mustard-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-charcoal-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-surface-white via-mustard-50 to-surface-beige animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-charcoal-800 mb-4">Our Services</h2>
            <p className="text-xl text-charcoal-600">
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
      <section className="py-20 bg-gradient-to-br from-mustard-100 via-surface-white to-surface-beige animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-charcoal-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-charcoal-600">
              See how we've transformed spaces across Andhra Pradesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-surface-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-mustard-100 animate-fade-in-up group h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-mustard-gradient text-charcoal-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse-soft">
                    {project.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-mustard-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-charcoal-600 mb-2">{project.location}</p>
                  <p className="text-charcoal-700 text-sm flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <NavigationLink
              to="/portfolio"
              className="group inline-flex items-center bg-mustard-gradient hover:shadow-2xl text-charcoal-800 px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </NavigationLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mustard-gradient relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-charcoal-800/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-charcoal-800/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-charcoal-800/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-charcoal-800 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expert construction and design services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavigationLink
                to="tel:8886663807"
                external
                className="group bg-surface-white text-charcoal-800 hover:bg-surface-beige px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                  Call Now
                </span>
              </NavigationLink>
              <NavigationLink
                to="/contact"
                className="group bg-charcoal-600 hover:bg-charcoal-700 text-surface-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </NavigationLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;