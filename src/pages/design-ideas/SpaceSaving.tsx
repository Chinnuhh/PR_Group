import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const SpaceSaving: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Space Saving Designs"
      description="Maximize your living space with our innovative space-saving design solutions. We create clever storage and multi-functional designs that make small spaces feel larger and more organized."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Multi-functional furniture solutions',
        'Vertical storage and organization',
        'Hidden storage compartments',
        'Foldable and convertible designs',
        'Wall-mounted and floating elements',
        'Custom built-in solutions',
      ]}
      tips={[
        {
          category: 'Space Optimization',
          items: [
            'Utilize vertical space with tall storage',
            'Choose furniture with multiple functions',
            'Use hidden storage in unexpected places',
            'Consider foldable and collapsible options',
          ],
        },
        {
          category: 'Design Strategy',
          items: [
            'Keep pathways clear and unobstructed',
            'Use light colors to create openness',
            'Incorporate mirrors to expand visual space',
            'Choose furniture appropriate to room scale',
          ],
        },
      ]}
      styles={[
        { name: 'Multi-functional', description: 'Furniture with multiple purposes', icon: '🔄' },
        { name: 'Vertical', description: 'Wall-mounted and tall storage', icon: '📏' },
        { name: 'Hidden', description: 'Concealed storage solutions', icon: '🔍' },
        { name: 'Modular', description: 'Flexible and adaptable systems', icon: '🧩' },
      ]}
    />
  );
};

export default SpaceSaving;