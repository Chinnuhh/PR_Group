import React from 'react';
import DesignIdeaTemplate from './DesignIdeaTemplate';

const FalseCeiling: React.FC = () => {
  return (
    <DesignIdeaTemplate
      title="False Ceiling Designs"
      description="Transform your space with elegant false ceiling designs that add depth, character, and functionality. Our designs incorporate modern lighting solutions and architectural elements."
      heroImage="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600"
      features={[
        'Custom false ceiling designs',
        'Integrated lighting solutions',
        'Sound insulation and acoustics',
        'Air conditioning integration',
        'Premium materials and finishes',
        'Architectural detailing and moldings',
      ]}
      tips={[
        {
          category: 'Design Planning',
          items: [
            'Consider room height and proportions',
            'Plan for integrated lighting systems',
            'Ensure proper ventilation access',
            'Design for maintenance accessibility',
          ],
        },
        {
          category: 'Material Selection',
          items: [
            'Choose lightweight and durable materials',
            'Consider fire safety and building codes',
            'Select appropriate finishes for the space',
            'Plan for thermal and acoustic insulation',
          ],
        },
      ]}
      styles={[
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Coffered', description: 'Traditional recessed panel designs', icon: '🏛️' },
        { name: 'Tray', description: 'Layered and stepped ceiling designs', icon: '📐' },
        { name: 'Cove', description: 'Curved and indirect lighting features', icon: '🌙' },
      ]}
    />
  );
};

export default FalseCeiling;