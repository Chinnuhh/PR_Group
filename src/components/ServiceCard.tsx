import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCallClick = () => {
    window.open(`tel:${CONTACT_INFO.phone}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in getting a quote for ${title}. Can you help me with the details?`);
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="group bg-surface-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-mustard-100 animate-fade-in-up h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-charcoal-800/40 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-60' : 'opacity-30'
        }`}></div>
        <div className={`absolute top-4 right-4 w-12 h-12 bg-mustard-300/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'scale-110 bg-mustard-400/30' : 'scale-100'
        }`}>
          <ArrowRight className={`h-5 w-5 text-charcoal-800 transition-transform duration-500 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-charcoal-800 mb-3 group-hover:text-mustard-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-charcoal-600 mb-4 leading-relaxed flex-1">{description}</p>
        
        {features && (
          <div className="mb-6">
            <h4 className="font-semibold text-charcoal-800 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-2 text-charcoal-600 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-mustard-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={handleCallClick}
            className="group/btn flex-1 relative overflow-hidden bg-mustard-300 hover:bg-mustard-400 text-charcoal-800 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-mustard-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2 group-hover/btn:animate-wiggle" />
              Call Now
            </div>
          </button>
          
          <button
            onClick={handleWhatsAppClick}
            className="group/btn flex-1 relative overflow-hidden bg-charcoal-600 hover:bg-charcoal-700 text-surface-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-charcoal-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              <MessageCircle className="h-4 w-4 mr-2 group-hover/btn:animate-pulse-soft" />
              Get Quote
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;