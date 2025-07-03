import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyWidgets from './components/StickyWidgets';
import AIAgent from './components/AIAgent';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Construction from './pages/services/Construction';
import InteriorDesign from './pages/services/InteriorDesign';
import Renovations from './pages/services/Renovations';
import ModularKitchen from './pages/design-ideas/ModularKitchen';
import DesignIdeaTemplate from './pages/design-ideas/DesignIdeaTemplate';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { DESIGN_IDEAS } from './utils/constants';

// Design idea page component generator
const createDesignIdeaPage = (ideaId: string, ideaName: string) => {
  const DesignIdeaPage: React.FC = () => {
    // Custom content for specific design ideas
    const getDesignContent = (id: string) => {
      const commonStyles = [
        { name: 'Modern', description: 'Clean lines and contemporary aesthetics', icon: '✨' },
        { name: 'Traditional', description: 'Classic elegance with timeless appeal', icon: '🏛️' },
        { name: 'Contemporary', description: 'Current trends with functional design', icon: '🎨' },
        { name: 'Minimalist', description: 'Simple, uncluttered design approach', icon: '⚪' },
      ];

      const baseContent = {
        description: `Discover innovative ${ideaName.toLowerCase()} that combine functionality with style. Our expert designers create beautiful spaces tailored to your lifestyle and preferences.`,
        heroImage: DESIGN_IDEAS.find(idea => idea.id === id)?.image || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        features: [
          'Custom design solutions',
          'Premium materials and finishes',
          'Space optimization techniques',
          'Professional installation',
          'Warranty and after-sales support',
          'Budget-friendly options available',
        ],
        tips: [
          {
            category: 'Design Planning',
            items: [
              'Consider your lifestyle and daily routines',
              'Choose colors that complement your space',
              'Plan for adequate lighting and ventilation',
              'Ensure proper proportions and scale',
            ],
          },
          {
            category: 'Material Selection',
            items: [
              'Opt for durable and easy-to-maintain materials',
              'Consider the climate and usage patterns',
              'Balance aesthetics with functionality',
              'Choose sustainable and eco-friendly options',
            ],
          },
        ],
        styles: commonStyles,
      };

      // Specific customizations for certain design ideas
      switch (id) {
        case 'modular-kitchen':
          return {
            ...baseContent,
            features: [
              'Custom cabinet designs and layouts',
              'Premium countertop materials',
              'Smart storage solutions',
              'Modern appliance integration',
              'Efficient workflow design',
              'Quality hardware and finishes',
            ],
          };
        case 'bathroom':
          return {
            ...baseContent,
            features: [
              'Luxury bathroom fixtures and fittings',
              'Water-efficient plumbing solutions',
              'Premium tiles and finishes',
              'Proper ventilation systems',
              'Storage and organization solutions',
              'Safety and accessibility features',
            ],
          };
        default:
          return baseContent;
      }
    };

    const content = getDesignContent(ideaId);

    return (
      <DesignIdeaTemplate
        title={ideaName}
        description={content.description}
        heroImage={content.heroImage}
        features={content.features}
        tips={content.tips}
        styles={content.styles}
      />
    );
  };

  return DesignIdeaPage;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services Routes */}
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/interior-design" element={<InteriorDesign />} />
            <Route path="/services/renovations" element={<Renovations />} />
            
            {/* Design Ideas Routes */}
            <Route path="/design-ideas/modular-kitchen" element={<ModularKitchen />} />
            {DESIGN_IDEAS.filter(idea => idea.id !== 'modular-kitchen').map((idea) => (
              <Route
                key={idea.id}
                path={`/design-ideas/${idea.id}`}
                element={React.createElement(createDesignIdeaPage(idea.id, idea.name))}
              />
            ))}
            
            {/* Other Routes */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyWidgets />
        <AIAgent />
      </div>
    </Router>
  );
}

export default App;