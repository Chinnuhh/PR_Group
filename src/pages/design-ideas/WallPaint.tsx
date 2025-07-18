import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const WallPaint: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Wall Paint Designs"
      description="Transform your spaces with our expert wall paint designs and color solutions. We help you choose the perfect colors and finishes to create the desired mood and atmosphere in every room."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Professional color consultation',
        'Custom paint techniques and finishes',
        'Accent wall and feature designs',
        'Color coordination and harmony',
        'Premium paint materials and brands',
        'Expert application and finishing',
      ]}
      tips={[
        {
          category: 'Color Selection',
          items: [
            'Consider room size and natural light',
            'Think about the mood you want to create',
            'Test colors in different lighting conditions',
            'Consider the room\'s function and use',
          ],
        },
        {
          category: 'Application Techniques',
          items: [
            'Prepare surfaces properly for best results',
            'Use quality brushes and tools',
            'Apply primer when changing colors dramatically',
            'Consider special finishes and textures',
          ],
        },
      ]}
      styles={[
        { name: 'Monochromatic', description: 'Single color with different shades', icon: '🎨' },
        { name: 'Accent Wall', description: 'Bold feature walls for impact', icon: '🏠' },
        { name: 'Neutral', description: 'Timeless and versatile color schemes', icon: '⚪' },
        { name: 'Bold', description: 'Vibrant and dramatic color choices', icon: '🌈' },
      ]}
    />
  );
};

export default WallPaint;