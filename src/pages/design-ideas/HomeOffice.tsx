import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const HomeOffice: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Home Office Designs"
      description="Create productive and inspiring workspaces with our home office designs. We combine functionality, comfort, and style to design the perfect environment for remote work and productivity."
      heroImage="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Ergonomic workspace design',
        'Custom storage and organization',
        'Technology integration and cable management',
        'Lighting design for productivity',
        'Acoustic solutions for concentration',
        'Multi-functional furniture solutions',
      ]}
      tips={[
        {
          category: 'Productivity Planning',
          items: [
            'Design for comfort and ergonomics',
            'Ensure adequate lighting for work tasks',
            'Plan for technology and equipment needs',
            'Create separation from living spaces',
          ],
        },
        {
          category: 'Organization',
          items: [
            'Include ample storage for files and supplies',
            'Plan for cable management and organization',
            'Design for easy cleaning and maintenance',
            'Consider future equipment and storage needs',
          ],
        },
      ]}
      styles={[
        { name: 'Professional', description: 'Business-like and formal designs', icon: '💼' },
        { name: 'Creative', description: 'Inspiring and artistic environments', icon: '🎨' },
        { name: 'Minimalist', description: 'Clean and distraction-free spaces', icon: '⚪' },
        { name: 'Cozy', description: 'Comfortable and homey atmospheres', icon: '🏠' },
      ]}
    />
  );
};

export default HomeOffice;