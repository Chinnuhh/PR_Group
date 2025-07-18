import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Balcony: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Balcony Designs"
      description="Transform your balcony into a beautiful outdoor retreat with our innovative design solutions. We create functional spaces that extend your living area and connect you with nature."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Weather-resistant design solutions',
        'Space optimization for small balconies',
        'Outdoor furniture and seating',
        'Plant and garden integration',
        'Privacy and shade solutions',
        'Lighting for evening ambiance',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider weather conditions and exposure',
            'Plan for drainage and water management',
            'Maximize space with multi-functional furniture',
            'Create privacy without blocking light',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose weather-resistant materials',
            'Select UV-resistant fabrics and finishes',
            'Use non-slip flooring for safety',
            'Consider maintenance requirements',
          ],
        },
      ]}
      styles={[
        { name: 'Garden', description: 'Green and plant-focused designs', icon: '🌱' },
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Cozy', description: 'Intimate and comfortable spaces', icon: '🏠' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default Balcony;