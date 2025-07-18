import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const StudyRoom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Study Room Designs"
      description="Create inspiring learning environments with our thoughtful study room designs. We design spaces that promote concentration, organization, and academic success for students of all ages."
      heroImage="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Ergonomic furniture and seating',
        'Adequate lighting for reading and writing',
        'Organized storage for books and supplies',
        'Quiet and distraction-free environments',
        'Technology integration for modern learning',
        'Motivational and inspiring decor',
      ]}
      tips={[
        {
          category: 'Learning Environment',
          items: [
            'Ensure adequate natural and artificial lighting',
            'Create quiet zones free from distractions',
            'Plan for comfortable seating and desk height',
            'Include inspirational and motivational elements',
          ],
        },
        {
          category: 'Organization',
          items: [
            'Provide ample storage for books and materials',
            'Include bulletin boards and planning areas',
            'Plan for technology and equipment needs',
            'Design for easy cleaning and maintenance',
          ],
        },
      ]}
      styles={[
        { name: 'Academic', description: 'Traditional and scholarly designs', icon: '📚' },
        { name: 'Modern', description: 'Contemporary and tech-integrated spaces', icon: '💻' },
        { name: 'Creative', description: 'Inspiring and artistic environments', icon: '🎨' },
        { name: 'Minimalist', description: 'Clean and distraction-free spaces', icon: '⚪' },
      ]}
    />
  );
};

export default StudyRoom;