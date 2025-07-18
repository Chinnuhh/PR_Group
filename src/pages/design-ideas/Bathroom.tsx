import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Bathroom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Bathroom Designs"
      description="Transform your bathroom into a luxurious retreat with our innovative design solutions. We create beautiful, functional bathrooms that combine comfort with style."
      heroImage="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Luxury bathroom fixtures and fittings',
        'Water-efficient plumbing solutions',
        'Premium tiles and finishes',
        'Proper ventilation systems',
        'Storage and organization solutions',
        'Safety and accessibility features',
      ]}
      tips={[
        {
          category: 'Layout Planning',
          items: [
            'Optimize space utilization effectively',
            'Ensure proper water drainage',
            'Plan for adequate lighting',
            'Consider privacy and ventilation',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose water-resistant materials',
            'Select slip-resistant flooring',
            'Use mold and mildew resistant finishes',
            'Invest in quality fixtures and fittings',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Spa-like', description: 'Relaxing and luxurious atmosphere', icon: '🛁' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default Bathroom;