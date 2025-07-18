import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const DiningRoom: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Dining Room Designs"
      description="Create memorable dining experiences with our elegant dining room designs. We combine functionality with style to design spaces perfect for family meals and entertaining guests."
      heroImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom dining room layouts',
        'Elegant furniture and seating',
        'Lighting design for ambiance',
        'Storage and display solutions',
        'Color coordination and styling',
        'Integration with kitchen and living areas',
      ]}
      tips={[
        {
          category: 'Layout Planning',
          items: [
            'Ensure adequate space around the dining table',
            'Plan for traffic flow and movement',
            'Consider natural light and views',
            'Design for both daily use and entertaining',
          ],
        },
        {
          category: 'Design Elements',
          items: [
            'Choose appropriate table size for the space',
            'Select comfortable and stylish seating',
            'Include storage for dining essentials',
            'Create focal points with lighting or art',
          ],
        },
      ]}
      styles={[
        { name: 'Formal', description: 'Elegant and sophisticated designs', icon: '🍽️' },
        { name: 'Casual', description: 'Relaxed and comfortable atmospheres', icon: '🏠' },
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
      ]}
    />
  );
};

export default DiningRoom;