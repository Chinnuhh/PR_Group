import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const TVUnit: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="TV Unit Designs"
      description="Enhance your entertainment experience with our stylish TV unit designs. We create functional media centers that organize your electronics while adding aesthetic appeal to your living space."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom TV unit designs and layouts',
        'Cable management and organization',
        'Storage for media devices and accessories',
        'Wall-mounted and floor-standing options',
        'Premium materials and finishes',
        'Integration with room decor',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider TV size and viewing distance',
            'Plan for cable management and organization',
            'Ensure proper ventilation for electronics',
            'Design for easy access to devices',
          ],
        },
        {
          category: 'Functionality',
          items: [
            'Include storage for remotes and accessories',
            'Plan for future technology upgrades',
            'Consider sound system integration',
            'Ensure stability and safety',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Wall-mounted', description: 'Space-saving floating designs', icon: '📺' },
        { name: 'Entertainment Center', description: 'Comprehensive media storage', icon: '🎬' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default TVUnit;