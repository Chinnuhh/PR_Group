import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Wardrobe: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Wardrobe Designs"
      description="Discover innovative wardrobe designs that combine functionality with style. Our expert designers create beautiful storage solutions tailored to your lifestyle and space requirements."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom wardrobe designs and layouts',
        'Premium materials and finishes',
        'Smart storage solutions and organization',
        'Professional installation and fitting',
        'Warranty and after-sales support',
        'Budget-friendly options available',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider your clothing storage needs',
            'Plan for different types of garments',
            'Include accessories and shoe storage',
            'Ensure proper ventilation and lighting',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose durable and moisture-resistant materials',
            'Consider maintenance and cleaning requirements',
            'Balance aesthetics with functionality',
            'Select quality hardware and fittings',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Contemporary', description: 'Current trends with functional design', icon: '🎨' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default Wardrobe;