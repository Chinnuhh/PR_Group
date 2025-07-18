import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const KidsBedroom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Kids Bedroom Designs"
      description="Create magical and functional spaces for children with our playful bedroom designs. We combine safety, creativity, and growth-friendly solutions for the perfect kids' room."
      heroImage="/kidsbedroom_hero_1.jpg"
      features={[
        'Age-appropriate design solutions',
        'Safety-focused furniture and layouts',
        'Creative storage and organization',
        'Play area integration',
        'Growth-adaptable designs',
        'Fun colors and themes',
      ]}
      tips={[
        {
          category: 'Safety Planning',
          items: [
            'Use child-safe materials and finishes',
            'Ensure furniture stability and safety',
            'Plan for adequate lighting and ventilation',
            'Consider rounded corners and soft edges',
          ],
        },
        {
          category: 'Functionality',
          items: [
            'Create designated areas for sleep, play, and study',
            'Include ample storage for toys and clothes',
            'Design for easy cleaning and maintenance',
            'Plan for future growth and changing needs',
          ],
        },
      ]}
      styles={[
        { name: 'Playful', description: 'Colorful and fun design elements', icon: '🎨' },
        { name: 'Educational', description: 'Learning-focused environments', icon: '📚' },
        { name: 'Adventure', description: 'Themed designs for imagination', icon: '🚀' },
        { name: 'Calm', description: 'Peaceful and restful atmospheres', icon: '🌙' },
      ]}
    />
  );
};

export default KidsBedroom;