import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Foyer: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Foyer Designs"
      description="Make a lasting first impression with our stunning foyer designs. We create welcoming entrance spaces that set the tone for your entire home with style and functionality."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Welcoming entrance design solutions',
        'Storage for shoes, coats, and accessories',
        'Lighting design for safety and ambiance',
        'Flooring suitable for high traffic',
        'Mirror and console integration',
        'Space optimization for small entryways',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Create a welcoming first impression',
            'Plan for adequate lighting and visibility',
            'Consider traffic flow and movement',
            'Include storage for everyday items',
          ],
        },
        {
          category: 'Functionality',
          items: [
            'Choose durable and easy-to-clean materials',
            'Include seating for putting on shoes',
            'Plan for coat and bag storage',
            'Consider security and privacy needs',
          ],
        },
      ]}
      styles={[
        { name: 'Grand', description: 'Impressive and spacious designs', icon: '🏛️' },
        { name: 'Compact', description: 'Space-efficient solutions', icon: '📦' },
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏠' },
      ]}
    />
  );
};

export default Foyer;