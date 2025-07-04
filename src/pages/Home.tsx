import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Award, Users, Clock, Phone, Bot, MessageCircle, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import NavigationLink from '../components/NavigationLink';
import { SERVICES, PORTFOLIO_PROJECTS, CONTACT_INFO } from '../utils/constants';

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

  const handleChatClick = () => {
    // Find the AI agent component and trigger its open state
    const aiAgentButton = document.querySelector('[title="Chat with our assistant"]') as HTMLButtonElement;
    if (aiAgentButton) {
      aiAgentButton.click();
      // Scroll to keep the chat visible but not at the very bottom
      setTimeout(() => {
        window.scrollBy({
          top: -200,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for my project. Can you help me with the details?");
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  return (
    <div>
      <Hero />
      
      {/* AI Agent Section */}
      <section className="py-16 bg-gradient-to-br from-pastel-blue-light via-white to-pastel-purple-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark rounded-full p-3 mr-4">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Meet Your Smart Assistant</h2>
            </div>
            <p className="text-xl text-pastel-gray-dark max-w-3xl mx-auto">
              Get instant answers about construction, interior design, and renovation projects. Our intelligent assistant is available 24/7 to help you plan your dream space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4 group">
                <div className="bg-pastel-blue/20 rounded-full p-3 group-hover:bg-pastel-blue/30 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-pastel-blue-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Responses</h3>
                  <p className="text-pastel-gray-dark">Get immediate answers to your construction and design questions, available round the clock.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-pastel-green/20 rounded-full p-3 group-hover:bg-pastel-green/30 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-pastel-green-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-pastel-gray-dark">Receive professional advice on project planning, material selection, and design choices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-pastel-purple/20 rounded-full p-3 group-hover:bg-pastel-purple/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-pastel-purple-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Connection</h3>
                  <p className="text-pastel-gray-dark">Easily connect with our team via WhatsApp or phone for detailed consultations.</p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleChatClick}
                    className="group bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      <Bot className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                      Start Chatting
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="group bg-gradient-to-r from-pastel-green-dark to-pastel-blue-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse-soft" />
                      WhatsApp Us
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-xl border border-pastel-blue/20 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">PR Group Assistant</h3>
                      <p className="text-xs text-white/80">Online • Ready to help</p>
                    </div>
                  </div>
                </div>

                {/* Sample Messages */}
                <div className="p-4 space-y-4 h-64 overflow-hidden">
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white flex items-center justify-center">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="bg-pastel-blue text-pastel-blue-dark rounded-2xl p-3">
                        <p className="text-sm">Hi! I'm your PR Group assistant. How can I help you with your construction or interior design project today?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white rounded-2xl p-3 max-w-[80%]">
                      <p className="text-sm">I'm interested in a modular kitchen design. Can you help?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white flex items-center justify-center">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="bg-pastel-blue text-pastel-blue-dark rounded-2xl p-3">
                        <p className="text-sm">Absolutely! We specialize in modular kitchen designs with smart storage solutions and premium finishes. Would you like to see our portfolio or discuss your requirements?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-pastel-gray/50 text-pastel-gray-dark px-4 py-2 rounded-full text-xs">
                      Start your conversation...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
            <NavigationLink
              to="/portfolio"
              className="group inline-flex items-center bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark hover:from-pastel-purple-dark hover:to-pastel-pink-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </NavigationLink>
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
              <NavigationLink
                to="tel:8886663807"
                external
                className="group bg-white text-pastel-blue-dark hover:bg-pastel-blue-light px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                  Call Now
                </span>
              </NavigationLink>
              <NavigationLink
                to="/contact"
                className="group bg-gradient-to-r from-pastel-orange-dark to-pastel-pink-dark hover:from-pastel-pink-dark hover:to-pastel-orange-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
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