import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Door: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Door Designs"
      description="Enhance your home's security and style with our premium door designs. We offer a wide range of materials, styles, and security features to complement your home's architecture."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Wide variety of door materials and styles',
        'Custom sizing and design options',
        'Security features and hardware',
        'Energy-efficient and weather-resistant',
        'Professional installation services',
        'Maintenance and warranty support',
      ]}
      tips={[
        {
          category: 'Selection Guidelines',
          items: [
            'Consider architectural style and compatibility',
            'Think about security and safety requirements',
            'Plan for weather resistance and durability',
            'Consider maintenance and upkeep needs',
          ],
        },
        {
          category: 'Installation Planning',
          items: [
            'Ensure proper measurements and fit',
            'Plan for hardware and locking systems',
            'Consider swing direction and clearance',
            'Think about accessibility and ease of use',
          ],
        },
      ]}
      styles={[
        { name: 'Traditional', description: 'Classic and timeless designs', icon: '🏛️' },
        { name: 'Modern', description: 'Contemporary and sleek styles', icon: '✨' },
        { name: 'Rustic', description: 'Natural and textured materials', icon: '🌳' },
        { name: 'Glass', description: 'Light-filled and open designs', icon: '🔲' },
      ]}
    />
  );
};

export default Door;