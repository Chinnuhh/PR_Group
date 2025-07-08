import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallClick = () => {
    window.open(`tel:${CONTACT_INFO.phone}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for my project. Can you help me with the details?");
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/herobg_blue.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800/30 via-transparent to-charcoal-800/20 z-10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-mustard-300/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-mustard-300/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl text-shadow-lg">
              <span className="inline-block animate-fade-in-up">PR</span>
              <span className="inline-block animate-fade-in-up text-white drop-shadow-2xl text-shadow-lg" style={{ animationDelay: '0.2s' }}> Group</span>
            </h1>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up drop-shadow-xl text-shadow" style={{ animationDelay: '0.4s' }}>
              Build Smart. Live Beautiful. Choose Excellence.
            </p>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto animate-fade-in-up drop-shadow-lg text-shadow" style={{ animationDelay: '0.6s' }}>
              Transform your vision into reality with our expert construction, interior design, and renovation services across Visakhapatnam, Srikakulam, and Vizianagaram.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={handleCallClick}
              className="group relative overflow-hidden bg-mustard-300 hover:bg-mustard-400 text-charcoal-800 px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="absolute inset-0 bg-mustard-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <Phone className="h-5 w-5 mr-3 group-hover:animate-wiggle" />
                Call Now
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 group-hover:animate-pulse-soft" />
                Get a Quote
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </div>

          <div className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-sm text-white/90 mt-8 animate-pulse-soft drop-shadow-lg text-shadow">
              Your dream space is one click away.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer animate-bounce-gentle z-30"
      >
        <div className="flex flex-col items-center space-y-2 text-white/90 group-hover:text-white transition-colors duration-300">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse-soft"></div>
          </div>
          <ChevronDown className="h-4 w-4 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs font-medium drop-shadow">Explore</span>
        </div>
      </button>
    </section>
  );
};

export default Hero;