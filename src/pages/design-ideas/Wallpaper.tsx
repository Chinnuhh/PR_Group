import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Wallpaper: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Home Wallpaper Designs"
      description="Add personality and style to your walls with our stunning wallpaper designs. We offer a wide range of patterns, textures, and materials to create unique and beautiful interior spaces."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Wide selection of wallpaper designs',
        'Custom patterns and prints',
        'Premium materials and finishes',
        'Professional installation services',
        'Accent wall and feature applications',
        'Easy maintenance and durability',
      ]}
      tips={[
        {
          category: 'Design Selection',
          items: [
            'Consider room size and ceiling height',
            'Choose patterns that complement furniture',
            'Think about long-term appeal and trends',
            'Consider the room\'s lighting conditions',
          ],
        },
        {
          category: 'Application Planning',
          items: [
            'Prepare walls properly for installation',
            'Plan for pattern matching and alignment',
            'Consider moisture and humidity levels',
            'Choose appropriate adhesives and tools',
          ],
        },
      ]}
      styles={[
        { name: 'Floral', description: 'Natural and botanical patterns', icon: '🌸' },
        { name: 'Geometric', description: 'Modern and structured designs', icon: '🔷' },
        { name: 'Textured', description: 'Three-dimensional and tactile finishes', icon: '🏗️' },
        { name: 'Vintage', description: 'Classic and retro-inspired patterns', icon: '🏛️' },
      ]}
    />
  );
};

export default Wallpaper;