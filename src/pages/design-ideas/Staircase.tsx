import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Staircase: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Staircase Designs"
      description="Create stunning architectural focal points with our innovative staircase designs. We combine safety, functionality, and aesthetic appeal to design staircases that enhance your home's beauty."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom staircase design and construction',
        'Wide variety of materials and finishes',
        'Safety railings and balustrades',
        'Space-efficient and compact designs',
        'Lighting integration and safety features',
        'Professional installation and finishing',
      ]}
      tips={[
        {
          category: 'Safety Planning',
          items: [
            'Ensure proper riser and tread dimensions',
            'Include adequate lighting for visibility',
            'Plan for sturdy railings and handrails',
            'Consider slip-resistant materials',
          ],
        },
        {
          category: 'Design Considerations',
          items: [
            'Choose materials that complement home style',
            'Consider space constraints and layout',
            'Plan for structural support and engineering',
            'Think about maintenance and durability',
          ],
        },
      ]}
      styles={[
        { name: 'Straight', description: 'Simple and space-efficient designs', icon: '📏' },
        { name: 'Spiral', description: 'Compact and dramatic solutions', icon: '🌀' },
        { name: 'Floating', description: 'Modern and minimalist styles', icon: '✨' },
        { name: 'Traditional', description: 'Classic and ornate designs', icon: '🏛️' },
      ]}
    />
  );
};

export default Staircase;