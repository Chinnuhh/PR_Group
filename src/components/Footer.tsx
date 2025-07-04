import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img 
                  src="/Logo PR Group copy.png" 
                  alt="PR Group Logo" 
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 filter brightness-0 invert"
                />
                <div className="absolute -inset-1 bg-pastel-blue-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold group-hover:text-pastel-blue-dark transition-colors duration-300">PR Group</h2>
                <p className="text-sm text-gray-400">Construction & Interiors</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading construction and interior design firm serving Visakhapatnam, Srikakulam, and Vizianagaram with excellence and precision.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-6 text-pastel-blue-dark">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service, index) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-pastel-blue-dark transition-all duration-300 transform hover:translate-x-2 inline-block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-6 text-pastel-blue-dark">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-pastel-blue-dark transition-all duration-300 transform hover:translate-x-2 inline-block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-6 text-pastel-blue-dark">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-pastel-blue-dark/20 rounded-full p-2 group-hover:bg-pastel-blue-dark/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-pastel-blue-dark group-hover:animate-wiggle" />
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-300 hover:text-pastel-blue-dark transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-pastel-green-dark/20 rounded-full p-2 group-hover:bg-pastel-green-dark/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-pastel-green-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-pastel-green-dark transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-pastel-purple-dark/20 rounded-full p-2 group-hover:bg-pastel-purple-dark/30 transition-colors duration-300 mt-0.5">
                  <MapPin className="h-4 w-4 text-pastel-purple-dark group-hover:animate-bounce-gentle transition-transform duration-300" />
                </div>
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 pt-8 border-t border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-lg font-semibold mb-6 text-center text-pastel-blue-dark">Find Us</h3>
          <div className="rounded-2xl overflow-hidden h-64 shadow-2xl border border-pastel-blue/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8234567890123!2d83.8944444!3d18.2977778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be38d4b123456%3A0x789abcdef0123456!2s80-10P%2C%202nd%20floor%20beside%20KIMS%20hospital%2C%20Srikakulam%20532001!5e0!3m2!1sen!2sin!4v1643875550000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PR Group Office Location - Srikakulam"
              className="hover:brightness-110 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-gray-400">
            © 2025 PR Group. All rights reserved. Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;