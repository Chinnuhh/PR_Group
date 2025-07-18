import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const GuestBedroom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Guest Bedroom Designs"
      description="Create welcoming spaces for your guests with our thoughtful bedroom designs. We design comfortable, functional rooms that make visitors feel at home while maximizing space efficiency."
      heroImage="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Comfortable and welcoming designs',
        'Multi-functional furniture solutions',
        'Storage for guest belongings',
        'Flexible layouts for different uses',
        'Quality bedding and comfort features',
        'Privacy and convenience considerations',
      ]}
      tips={[
        {
          category: 'Comfort Planning',
          items: [
            'Provide comfortable sleeping arrangements',
            'Include adequate storage for guest belongings',
            'Ensure privacy and quiet environment',
            'Plan for good lighting and ventilation',
          ],
        },
        {
          category: 'Functionality',
          items: [
            'Design for easy cleaning and maintenance',
            'Include essential amenities and conveniences',
            'Consider dual-purpose furniture options',
            'Plan for different guest needs and preferences',
          ],
        },
      ]}
      styles={[
        { name: 'Hotel-style', description: 'Professional and comfortable designs', icon: '🏨' },
        { name: 'Cozy', description: 'Warm and inviting atmospheres', icon: '🏠' },
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Multi-purpose', description: 'Flexible and adaptable spaces', icon: '🔄' },
      ]}
    />
  );
};

export default GuestBedroom;