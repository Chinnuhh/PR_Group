import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Window: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Window Designs"
      description="Enhance your home's beauty and functionality with our innovative window designs. We create solutions that maximize natural light, provide privacy, and add architectural interest to your spaces."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom window treatments and coverings',
        'Energy-efficient window solutions',
        'Privacy and light control options',
        'Architectural window enhancements',
        'Integration with interior design',
        'Maintenance-friendly materials',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider natural light and privacy needs',
            'Plan for energy efficiency and insulation',
            'Design for easy operation and maintenance',
            'Integrate with overall room design',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose durable and weather-resistant materials',
            'Select appropriate treatments for room function',
            'Consider UV protection and fade resistance',
            'Plan for easy cleaning and maintenance',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Bay Window', description: 'Extended and architectural designs', icon: '🏠' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ]}
    />
  );
};

export default Window;