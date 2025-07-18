import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const PoojaRoom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Pooja Room Designs"
      description="Create a sacred and serene space for worship with our thoughtful pooja room designs. We blend traditional elements with modern functionality for a peaceful spiritual environment."
      heroImage="https://images.pexels.com/photos/3214113/pexels-photo-3214113.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Traditional and contemporary pooja room designs',
        'Custom storage for religious items',
        'Proper ventilation and lighting',
        'Sacred geometry and vastu compliance',
        'Premium materials and finishes',
        'Space-efficient solutions for small homes',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Follow vastu principles for placement',
            'Ensure proper ventilation for incense',
            'Plan for adequate storage of religious items',
            'Create a peaceful and serene atmosphere',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Use traditional materials like wood and marble',
            'Choose easy-to-clean surfaces',
            'Select appropriate lighting for worship',
            'Consider maintenance and durability',
          ],
        },
      ]}
      styles={[
        { name: 'Traditional', description: 'Classic temple-inspired designs', icon: '🏛️' },
        { name: 'Modern', description: 'Contemporary interpretation of sacred spaces', icon: '✨' },
        { name: 'Compact', description: 'Space-efficient designs for small homes', icon: '📦' },
        { name: 'Ornate', description: 'Detailed and decorative elements', icon: '🎨' },
      ]}
    />
  );
};

export default PoojaRoom;