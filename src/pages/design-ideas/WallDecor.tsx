import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const WallDecor: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Wall Decor Designs"
      description="Transform your walls into stunning focal points with our creative wall decor solutions. We combine art, texture, and design elements to create visually striking and personalized spaces."
      heroImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom wall art and installations',
        'Textural elements and materials',
        'Gallery wall planning and design',
        'Accent wall creation',
        'Integration with lighting design',
        'Personalized and unique solutions',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider room scale and proportions',
            'Plan for proper lighting and viewing angles',
            'Create focal points and visual interest',
            'Balance decorative elements with functionality',
          ],
        },
        {
          category: 'Selection Guidelines',
          items: [
            'Choose pieces that reflect personal style',
            'Consider color coordination with room decor',
            'Mix different textures and materials',
            'Plan for easy updating and rearrangement',
          ],
        },
      ]}
      styles={[
        { name: 'Gallery Wall', description: 'Curated collections and arrangements', icon: '🖼️' },
        { name: 'Statement Piece', description: 'Bold and dramatic focal points', icon: '🎨' },
        { name: 'Textural', description: 'Three-dimensional and tactile elements', icon: '🏗️' },
        { name: 'Minimalist', description: 'Simple and clean design approach', icon: '⚪' },
      ]}
    />
  );
};

export default WallDecor;