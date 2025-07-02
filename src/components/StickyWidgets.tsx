import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const StickyWidgets: React.FC = () => {
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [callHovered, setCallHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a quote for my project. Can you help me with the details?");
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${CONTACT_INFO.phone}`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 animate-fade-in">
      {/* WhatsApp Widget */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setWhatsappHovered(true)}
          onMouseLeave={() => setWhatsappHovered(false)}
          className="relative bg-gradient-to-r from-pastel-green-dark to-pastel-blue-dark text-white p-4 rounded-full shadow-xl transition-all duration-500 transform hover:scale-125 hover:shadow-2xl animate-float"
          title="Chat with us for quotes or questions!"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-dark to-pastel-green-dark opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <MessageCircle className={`h-6 w-6 relative z-10 transition-transform duration-300 ${
            whatsappHovered ? 'animate-wiggle' : ''
          }`} />
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-pastel-green-dark/30 animate-ping"></div>
        </button>
        
        <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
          whatsappHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <div className="relative">
            Chat with us for quotes!
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Call Widget */}
      <div className="relative group">
        <button
          onClick={handleCallClick}
          onMouseEnter={() => setCallHovered(true)}
          onMouseLeave={() => setCallHovered(false)}
          className="relative bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white p-4 rounded-full shadow-xl transition-all duration-500 transform hover:scale-125 hover:shadow-2xl animate-float"
          style={{ animationDelay: '1s' }}
          title="Call us now!"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple-dark to-pastel-pink-dark opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <Phone className={`h-6 w-6 relative z-10 transition-transform duration-300 ${
            callHovered ? 'animate-wiggle' : ''
          }`} />
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-pastel-blue-dark/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </button>
        
        <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
          callHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <div className="relative">
            Call us now!
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyWidgets;