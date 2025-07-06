import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, DESIGN_IDEAS } from '../utils/constants';
import NavigationLink from './NavigationLink';

interface HeaderProps {
  onAIAssistantClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAIAssistantClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when location changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleAIAssistantClick = () => {
    onAIAssistantClick?.();
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-surface-white/95 backdrop-blur-md shadow-lg border-b border-mustard-100' 
        : 'bg-surface-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavigationLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/Logo PR Group copy.png" 
                alt="PR Group Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-1 bg-mustard-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-bold text-charcoal-800 group-hover:text-mustard-400 transition-colors duration-300">PR Group</h1>
              <p className="text-xs text-charcoal-600">Construction & Interiors</p>
            </div>
          </NavigationLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationLink
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive('/') 
                  ? 'text-mustard-400' 
                  : 'text-charcoal-600 hover:text-mustard-400'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mustard-400 animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-400 transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-mustard-400 transition-all duration-300 group"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : 'group-hover:rotate-12'
                }`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-surface-white/95 backdrop-blur-md border border-mustard-100 rounded-xl shadow-xl animate-fade-in-down">
                  <div className="p-2">
                    {SERVICES.map((service, index) => (
                      <NavigationLink
                        key={service.id}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-charcoal-600 hover:bg-mustard-100 hover:text-mustard-400 transition-all duration-300 rounded-lg transform hover:translate-x-2"
                        onClick={handleLinkClick}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {service.name}
                      </NavigationLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Design Ideas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('design-ideas')}
                className="flex items-center px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-mustard-400 transition-all duration-300 group"
              >
                Design Ideas
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'design-ideas' ? 'rotate-180' : 'group-hover:rotate-12'
                }`} />
              </button>
              {activeDropdown === 'design-ideas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-surface-white/95 backdrop-blur-md border border-mustard-100 rounded-xl shadow-xl max-h-96 overflow-y-auto animate-fade-in-down">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {DESIGN_IDEAS.map((idea, index) => (
                      <NavigationLink
                        key={idea.id}
                        to={`/design-ideas/${idea.id}`}
                        className="block px-3 py-2 text-sm text-charcoal-600 hover:bg-mustard-100 hover:text-mustard-400 transition-all duration-300 rounded-lg transform hover:scale-105"
                        onClick={handleLinkClick}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {idea.name}
                      </NavigationLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavigationLink
              to="/portfolio"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive('/portfolio') 
                  ? 'text-mustard-400' 
                  : 'text-charcoal-600 hover:text-mustard-400'
              }`}
            >
              Portfolio
              {isActive('/portfolio') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mustard-400 animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-400 transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            {/* AI Assistant Link */}
            <button
              onClick={handleAIAssistantClick}
              className="relative px-3 py-2 text-sm font-medium transition-all duration-300 group text-charcoal-600 hover:text-mustard-400"
            >
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-wiggle" />
                AI Assistant
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-400 transition-all duration-300 group-hover:w-full"></div>
            </button>

            <NavigationLink
              to="/contact"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive('/contact') 
                  ? 'text-mustard-400' 
                  : 'text-charcoal-600 hover:text-mustard-400'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mustard-400 animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-mustard-400 transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            <NavigationLink
              to="tel:8886663807"
              external
              className="group relative overflow-hidden bg-mustard-300 hover:bg-mustard-400 text-charcoal-800 px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-mustard-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Phone className="h-4 w-4 mr-2 group-hover:animate-wiggle" />
                Call Now
              </div>
            </NavigationLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 transition-all duration-300"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-mustard-100 animate-fade-in-down">
            <div className="space-y-2">
              <NavigationLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Home
              </NavigationLink>
              
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-charcoal-800 mb-2">Services</p>
                {SERVICES.map((service, index) => (
                  <NavigationLink
                    key={service.id}
                    to={service.path}
                    className="block px-4 py-1 text-sm text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    onClick={handleLinkClick}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.name}
                  </NavigationLink>
                ))}
              </div>

              <NavigationLink
                to="/portfolio"
                className="block px-3 py-2 text-base font-medium text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Portfolio
              </NavigationLink>

              <button
                onClick={handleAIAssistantClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI Assistant
                </div>
              </button>

              <NavigationLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-charcoal-600 hover:text-mustard-400 hover:bg-mustard-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Contact
              </NavigationLink>

              <NavigationLink
                to="tel:8886663807"
                external
                className="block mx-3 mt-4 bg-mustard-300 hover:bg-mustard-400 text-charcoal-800 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
              >
                Call Now
              </NavigationLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;