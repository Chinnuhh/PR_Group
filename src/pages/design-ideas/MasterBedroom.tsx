import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const MasterBedroom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Master Bedroom Designs"
      description="Create your perfect sanctuary with our master bedroom design solutions. We design comfortable, elegant spaces that promote rest and relaxation."
      heroImage="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom bedroom layouts and designs',
        'Premium furniture and fixtures',
        'Integrated storage solutions',
        'Lighting design and ambiance',
        'Color coordination and styling',
        'Comfort and functionality focus',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Create a calming and restful atmosphere',
            'Plan for adequate storage space',
            'Consider natural light and ventilation',
            'Design for privacy and comfort',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose comfortable and durable materials',
            'Select calming colors and textures',
            'Invest in quality bedding and furniture',
            'Consider maintenance and cleaning ease',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Romantic', description: 'Soft and intimate design elements', icon: '💕' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default MasterBedroom;