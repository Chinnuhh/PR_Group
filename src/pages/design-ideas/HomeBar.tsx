import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const HomeBar: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Home Bar Designs"
      description="Create the perfect entertainment space with our stylish home bar designs. We design functional and elegant bars that become the centerpiece of your social gatherings and relaxation."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom bar design and construction',
        'Storage for bottles, glasses, and accessories',
        'Integrated refrigeration and equipment',
        'Seating and entertainment areas',
        'Lighting design for ambiance',
        'Premium materials and finishes',
      ]}
      tips={[
        {
          category: 'Functionality Planning',
          items: [
            'Plan for adequate storage and organization',
            'Include proper electrical and plumbing',
            'Consider refrigeration and ice maker needs',
            'Design for easy cleaning and maintenance',
          ],
        },
        {
          category: 'Entertainment Design',
          items: [
            'Create comfortable seating arrangements',
            'Plan for proper lighting and ambiance',
            'Include entertainment and music systems',
            'Consider traffic flow and accessibility',
          ],
        },
      ]}
      styles={[
        { name: 'Classic', description: 'Traditional pub and tavern styles', icon: '🏛️' },
        { name: 'Modern', description: 'Sleek and contemporary designs', icon: '✨' },
        { name: 'Rustic', description: 'Natural materials and textures', icon: '🌳' },
        { name: 'Compact', description: 'Space-efficient solutions', icon: '📦' },
      ]}
    />
  );
};

export default HomeBar;