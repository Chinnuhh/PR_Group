import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const Tile: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="Tile Designs"
      description="Enhance your spaces with our premium tile designs and installations. We offer a comprehensive range of ceramic, porcelain, and natural stone tiles for floors, walls, and decorative applications."
      heroImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Wide variety of tile materials and styles',
        'Custom patterns and layouts',
        'Water-resistant and durable solutions',
        'Professional installation services',
        'Decorative and functional applications',
        'Easy maintenance and cleaning',
      ]}
      tips={[
        {
          category: 'Material Selection',
          items: [
            'Consider room function and moisture levels',
            'Choose appropriate tile size for space',
            'Think about slip resistance and safety',
            'Consider maintenance and cleaning requirements',
          ],
        },
        {
          category: 'Design Planning',
          items: [
            'Plan tile layout and pattern alignment',
            'Consider grout color and width',
            'Think about transitions between different areas',
            'Plan for proper drainage and waterproofing',
          ],
        },
      ]}
      styles={[
        { name: 'Ceramic', description: 'Versatile and affordable options', icon: '🔲' },
        { name: 'Porcelain', description: 'Durable and low-maintenance solutions', icon: '✨' },
        { name: 'Natural Stone', description: 'Premium and unique materials', icon: '🏛️' },
        { name: 'Mosaic', description: 'Decorative and artistic patterns', icon: '🎨' },
      ]}
    />
  );
};

export default Tile;