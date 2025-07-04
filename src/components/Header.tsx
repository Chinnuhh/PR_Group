import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { SERVICES, DESIGN_IDEAS } from '../utils/constants';
import NavigationLink from './NavigationLink';

const Header: React.FC = () => {
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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-pastel-blue' 
        : 'bg-white shadow-md'
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
              <div className="absolute -inset-1 bg-pastel-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-pastel-blue-dark transition-colors duration-300">PR Group</h1>
              <p className="text-xs text-pastel-gray-dark">Construction & Interiors</p>
            </div>
          </NavigationLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationLink
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive('/') 
                  ? 'text-pastel-blue-dark' 
                  : 'text-pastel-gray-dark hover:text-pastel-blue-dark'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-blue-dark animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-blue-dark transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center px-3 py-2 text-sm font-medium text-pastel-gray-dark hover:text-pastel-blue-dark transition-all duration-300 group"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : 'group-hover:rotate-12'
                }`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-pastel-blue rounded-xl shadow-xl animate-fade-in-down">
                  <div className="p-2">
                    {SERVICES.map((service, index) => (
                      <NavigationLink
                        key={service.id}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-pastel-gray-dark hover:bg-pastel-blue hover:text-pastel-blue-dark transition-all duration-300 rounded-lg transform hover:translate-x-2"
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
                className="flex items-center px-3 py-2 text-sm font-medium text-pastel-gray-dark hover:text-pastel-blue-dark transition-all duration-300 group"
              >
                Design Ideas
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'design-ideas' ? 'rotate-180' : 'group-hover:rotate-12'
                }`} />
              </button>
              {activeDropdown === 'design-ideas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md border border-pastel-blue rounded-xl shadow-xl max-h-96 overflow-y-auto animate-fade-in-down">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {DESIGN_IDEAS.map((idea, index) => (
                      <NavigationLink
                        key={idea.id}
                        to={`/design-ideas/${idea.id}`}
                        className="block px-3 py-2 text-sm text-pastel-gray-dark hover:bg-pastel-blue hover:text-pastel-blue-dark transition-all duration-300 rounded-lg transform hover:scale-105"
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
                  ? 'text-pastel-blue-dark' 
                  : 'text-pastel-gray-dark hover:text-pastel-blue-dark'
              }`}
            >
              Portfolio
              {isActive('/portfolio') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-blue-dark animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-blue-dark transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            <NavigationLink
              to="/contact"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive('/contact') 
                  ? 'text-pastel-blue-dark' 
                  : 'text-pastel-gray-dark hover:text-pastel-blue-dark'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-blue-dark animate-scale-in"></div>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-blue-dark transition-all duration-300 group-hover:w-full"></div>
            </NavigationLink>

            <NavigationLink
              to="tel:8886663807"
              external
              className="group relative overflow-hidden bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple-dark to-pastel-pink-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Phone className="h-4 w-4 mr-2 group-hover:animate-wiggle" />
                Call Now
              </div>
            </NavigationLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-pastel-gray-dark hover:text-pastel-blue-dark hover:bg-pastel-blue transition-all duration-300"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pastel-blue animate-fade-in-down">
            <div className="space-y-2">
              <NavigationLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-pastel-gray-dark hover:text-pastel-blue-dark hover:bg-pastel-blue rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Home
              </NavigationLink>
              
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-900 mb-2">Services</p>
                {SERVICES.map((service, index) => (
                  <NavigationLink
                    key={service.id}
                    to={service.path}
                    className="block px-4 py-1 text-sm text-pastel-gray-dark hover:text-pastel-blue-dark hover:bg-pastel-blue rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    onClick={handleLinkClick}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.name}
                  </NavigationLink>
                ))}
              </div>

              <NavigationLink
                to="/portfolio"
                className="block px-3 py-2 text-base font-medium text-pastel-gray-dark hover:text-pastel-blue-dark hover:bg-pastel-blue rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Portfolio
              </NavigationLink>

              <NavigationLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-pastel-gray-dark hover:text-pastel-blue-dark hover:bg-pastel-blue rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={handleLinkClick}
              >
                Contact
              </NavigationLink>

              <NavigationLink
                to="tel:8886663807"
                external
                className="block mx-3 mt-4 bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
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