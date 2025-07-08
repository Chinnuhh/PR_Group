import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Minimize2, Maximize2 } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface AIAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAgent: React.FC<AIAgentProps> = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your PR Group assistant. I can help you with construction, interior design, and renovation questions. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prevent body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Construction related responses
    if (lowerMessage.includes('construction') || lowerMessage.includes('building') || lowerMessage.includes('house')) {
      return "We offer comprehensive construction services including residential and commercial buildings. Our team handles everything from foundation to finishing work. Would you like to know about our construction process or get a quote?";
    }
    
    // Interior design responses
    if (lowerMessage.includes('interior') || lowerMessage.includes('design') || lowerMessage.includes('decoration')) {
      return "Our interior design services include complete space planning, custom furniture, modular kitchens, and room makeovers. We create beautiful, functional spaces tailored to your lifestyle. What type of interior design are you interested in?";
    }
    
    // Kitchen related responses
    if (lowerMessage.includes('kitchen') || lowerMessage.includes('modular')) {
      return "We specialize in modular kitchen designs with smart storage solutions, premium countertops, and modern appliances. Our kitchens are both beautiful and highly functional. Would you like to see our kitchen portfolio or discuss your requirements?";
    }
    
    // Renovation responses
    if (lowerMessage.includes('renovation') || lowerMessage.includes('remodel') || lowerMessage.includes('upgrade')) {
      return "Our renovation services can transform any space - from single rooms to complete home makeovers. We handle kitchen remodeling, bathroom upgrades, and structural modifications. What area would you like to renovate?";
    }
    
    // Pricing and cost responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget') || lowerMessage.includes('quote')) {
      return "Our pricing depends on the scope and specifications of your project. We offer competitive rates and transparent pricing. I'd recommend speaking with our team for a detailed quote. Would you like me to connect you with them via WhatsApp or phone?";
    }
    
    // Location and service area responses
    if (lowerMessage.includes('location') || lowerMessage.includes('area') || lowerMessage.includes('visakhapatnam') || lowerMessage.includes('srikakulam') || lowerMessage.includes('vizianagaram')) {
      return "We serve Visakhapatnam, Srikakulam, and Vizianagaram areas in Andhra Pradesh. Our team can visit your location for consultations and project assessments. Which area are you located in?";
    }
    
    // Timeline responses
    if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
      return "Project timelines vary based on scope and complexity. Typically, interior design projects take 2-4 weeks, while construction projects can take 3-6 months. We always provide realistic timelines and stick to our commitments. What type of project are you planning?";
    }
    
    // Contact responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('whatsapp')) {
      return `You can reach us at ${CONTACT_INFO.phone} or via WhatsApp for instant responses. Our team is available Monday-Saturday, 9 AM to 6 PM. Would you like me to help you connect with them now?`;
    }
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to PR Group. We're experts in construction, interior design, and renovations across Andhra Pradesh. How can I help you with your project today?";
    }
    
    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! I'm here to help with any questions about our construction and interior design services. Feel free to ask anything else or contact our team directly for detailed assistance.";
    }
    
    // Default response
    return "I'd be happy to help you with information about our construction, interior design, and renovation services. Could you tell me more about what you're looking for? Or would you prefer to speak directly with our team? I can connect you via WhatsApp or phone.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleContactAction = (type: 'whatsapp' | 'call') => {
    if (type === 'whatsapp') {
      const message = encodeURIComponent("Hi! I was chatting with your assistant and would like to discuss my project requirements.");
      window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
    } else {
      window.open(`tel:${CONTACT_INFO.phone}`, '_self');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Floating Widget - Bottom Right */}
      <div className={`fixed bottom-5 right-5 z-[9999] bg-surface-white rounded-2xl shadow-2xl border border-mustard-100 transition-all duration-500 ${
        isMinimized ? 'w-80 h-16 animate-scale-in' : 'w-96 max-w-[calc(100vw-40px)] h-[600px] max-h-[calc(100vh-40px)] animate-slide-up'
      }`}>
        {/* Header */}
        <div className="bg-mustard-gradient text-charcoal-800 p-4 rounded-t-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-charcoal-800/20 rounded-full p-2 animate-pulse-soft">
              <MessageCircle className="h-5 w-5 text-charcoal-800" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">PR Group AI Assistant</h3>
              <p className="text-xs text-charcoal-700 flex items-center">
                <div className="w-2 h-2 bg-mustard-600 rounded-full mr-2 animate-pulse"></div>
                Online • Ready to help
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-charcoal-800/20 rounded-full transition-all duration-300 transform hover:scale-110"
              title={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-charcoal-800/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-surface-white to-mustard-50 scrollbar-thin scrollbar-thumb-mustard-200 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                      message.isBot 
                        ? 'bg-mustard-gradient text-charcoal-800' 
                        : 'bg-charcoal-600 text-surface-white'
                    }`}>
                      {message.isBot ? <MessageCircle className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl p-3 shadow-sm transition-all duration-300 hover:shadow-md ${
                      message.isBot
                        ? 'bg-surface-white text-charcoal-800 border border-mustard-100'
                        : 'bg-mustard-gradient text-charcoal-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.isBot ? 'text-charcoal-500' : 'text-charcoal-600'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-mustard-gradient text-charcoal-800 flex items-center justify-center shadow-sm">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div className="bg-surface-white border border-mustard-100 rounded-2xl p-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-mustard-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-mustard-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-mustard-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-3 border-t border-mustard-100 bg-surface-beige">
              <div className="flex space-x-2">
                <button
                  onClick={() => handleContactAction('whatsapp')}
                  className="flex-1 bg-charcoal-600 text-surface-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-charcoal-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                >
                  <span className="flex items-center justify-center">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    WhatsApp
                  </span>
                </button>
                <button
                  onClick={() => handleContactAction('call')}
                  className="flex-1 bg-mustard-400 text-charcoal-800 px-3 py-2 rounded-lg text-xs font-medium hover:bg-mustard-500 transition-all duration-300 transform hover:scale-105 shadow-sm"
                >
                  <span className="flex items-center justify-center">
                    <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </span>
                </button>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-mustard-100 bg-surface-white rounded-b-2xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-mustard-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mustard-400 focus:border-transparent transition-all duration-300 bg-surface-white"
                  autoFocus
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-mustard-gradient text-charcoal-800 p-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-sm"
                  title="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-charcoal-500 mt-2 text-center">
                Press Enter to send • ESC to close
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AIAgent;