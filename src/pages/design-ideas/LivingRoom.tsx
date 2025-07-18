import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const LivingRoom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Living Room Designs"
      description="Transform your living space into a welcoming hub for family and friends. Our designs combine comfort, style, and functionality for the perfect gathering space."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Complete living room design solutions',
        'Custom furniture and seating arrangements',
        'Entertainment center integration',
        'Lighting design and ambiance',
        'Storage and organization solutions',
        'Color coordination and styling',
      ]}
      tips={[
        {
          category: 'Layout Planning',
          items: [
            'Create conversation-friendly seating arrangements',
            'Plan for traffic flow and movement',
            'Consider entertainment and media needs',
            'Ensure adequate lighting for all activities',
          ],
        },
        {
          category: 'Design Elements',
          items: [
            'Balance comfort with style',
            'Choose durable and family-friendly materials',
            'Incorporate personal style and preferences',
            'Add personality with accessories and art',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Cozy', description: 'Warm and inviting atmosphere', icon: '🏠' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default LivingRoom;