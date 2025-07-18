import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const CrockeryUnit: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Crockery Unit Designs"
      description="Organize and display your dinnerware beautifully with our custom crockery unit designs. We create functional storage solutions that protect your dishes while adding elegance to your dining area."
      heroImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom storage solutions for dinnerware',
        'Display and organization options',
        'Premium materials and finishes',
        'Adjustable shelving and compartments',
        'Glass doors and lighting integration',
        'Space-efficient designs for all room sizes',
      ]}
      tips={[
        {
          category: 'Storage Planning',
          items: [
            'Plan for different types of dinnerware',
            'Include space for serving pieces and glassware',
            'Consider accessibility and ease of use',
            'Think about protection from dust and damage',
          ],
        },
        {
          category: 'Design Integration',
          items: [
            'Choose styles that complement dining room decor',
            'Consider display vs. hidden storage needs',
            'Plan for proper lighting and visibility',
            'Think about maintenance and cleaning access',
          ],
        },
      ]}
      styles={[
        { name: 'Traditional', description: 'Classic hutch and cabinet styles', icon: '🏛️' },
        { name: 'Modern', description: 'Sleek and contemporary designs', icon: '✨' },
        { name: 'Glass Front', description: 'Display-focused with visibility', icon: '🔲' },
        { name: 'Built-in', description: 'Integrated and space-saving solutions', icon: '🏠' },
      ]}
    />
  );
};

export default CrockeryUnit;