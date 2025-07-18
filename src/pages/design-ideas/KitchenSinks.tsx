import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const KitchenSinks: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Kitchen Sinks"
      description="Discover premium kitchen sink solutions that combine functionality with style. We offer a wide range of materials, sizes, and configurations to meet your cooking and cleaning needs."
      heroImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Wide variety of sink materials and styles',
        'Custom sizing and configuration options',
        'Water-efficient and eco-friendly designs',
        'Professional installation services',
        'Integrated accessories and features',
        'Easy maintenance and durability',
      ]}
      tips={[
        {
          category: 'Selection Guidelines',
          items: [
            'Consider kitchen size and workflow needs',
            'Choose appropriate material for your lifestyle',
            'Think about maintenance and cleaning requirements',
            'Plan for proper plumbing and installation',
          ],
        },
        {
          category: 'Functionality',
          items: [
            'Consider single vs. double bowl options',
            'Think about depth and capacity needs',
            'Plan for accessories like cutting boards',
            'Consider sound dampening and insulation',
          ],
        },
      ]}
      styles={[
        { name: 'Stainless Steel', description: 'Durable and hygienic options', icon: '✨' },
        { name: 'Granite Composite', description: 'Premium and scratch-resistant', icon: '🏛️' },
        { name: 'Farmhouse', description: 'Traditional and spacious designs', icon: '🏠' },
        { name: 'Undermount', description: 'Sleek and integrated installations', icon: '🔲' },
      ]}
    />
  );
};

export default KitchenSinks;