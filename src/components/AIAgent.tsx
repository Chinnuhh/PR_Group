import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      const message = encodeURIComponent("Hi! I was chatting with your AI assistant and would like to discuss my project requirements.");
      window.open(`${CONTACT_INFO.whatsappUrl}?text=${message}`, '_blank');
    } else {
      window.open(`tel:${CONTACT_INFO.phone}`, '_self');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white p-4 rounded-full shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-float group"
        title="Chat with our AI assistant"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple-dark to-pastel-pink-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
        <Bot className="h-6 w-6 relative z-10 group-hover:animate-wiggle" />
        <div className="absolute inset-0 rounded-full bg-pastel-blue-dark/30 animate-ping"></div>
        
        {/* Notification badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          AI
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-pastel-blue/20 transition-all duration-500 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 rounded-full p-2">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">PR Group Assistant</h3>
            <p className="text-xs text-white/80">Online • Ready to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white' 
                      : 'bg-pastel-gray text-pastel-gray-dark'
                  }`}>
                    {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`rounded-2xl p-3 ${
                    message.isBot
                      ? 'bg-pastel-blue text-pastel-blue-dark'
                      : 'bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-pastel-blue-dark/70' : 'text-white/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-pastel-blue rounded-2xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pastel-blue-dark rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pastel-blue-dark rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-pastel-blue-dark rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-pastel-blue/20">
            <div className="flex space-x-2">
              <button
                onClick={() => handleContactAction('whatsapp')}
                className="flex-1 bg-pastel-green-dark text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-pastel-green-dark/90 transition-colors"
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleContactAction('call')}
                className="flex-1 bg-pastel-blue-dark text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-pastel-blue-dark/90 transition-colors"
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-pastel-blue/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-pastel-blue/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-blue-dark focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAgent;