import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Flooring: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Flooring Designs"
      description="Transform your spaces from the ground up with our premium flooring solutions. We offer a wide range of materials and designs that combine durability, beauty, and functionality."
      heroImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Wide range of flooring materials',
        'Custom patterns and layouts',
        'Durable and long-lasting solutions',
        'Easy maintenance and cleaning',
        'Slip-resistant and safety features',
        'Professional installation services',
      ]}
      tips={[
        {
          category: 'Material Selection',
          items: [
            'Consider room function and traffic levels',
            'Choose appropriate materials for climate',
            'Plan for maintenance and cleaning requirements',
            'Consider acoustic and comfort properties',
          ],
        },
        {
          category: 'Design Planning',
          items: [
            'Select patterns that complement room size',
            'Consider color coordination with decor',
            'Plan for transitions between different areas',
            'Ensure proper subfloor preparation',
          ],
        },
      ]}
      styles={[
        { name: 'Hardwood', description: 'Natural wood beauty and warmth', icon: '🌳' },
        { name: 'Tile', description: 'Durable and versatile ceramic options', icon: '🔲' },
        { name: 'Luxury Vinyl', description: 'Modern and practical solutions', icon: '✨' },
        { name: 'Natural Stone', description: 'Premium and elegant materials', icon: '🏛️' },
      ]}
    />
  );
};

export default Flooring;