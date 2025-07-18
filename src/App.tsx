import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAgent from './components/AIAgent';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Construction from './pages/services/Construction';
import InteriorDesign from './pages/services/InteriorDesign';
import Renovations from './pages/services/Renovations';
import ModularKitchen from './pages/design-ideas/ModularKitchen';
import Wardrobe from './pages/design-ideas/Wardrobe';
import Bathroom from './pages/design-ideas/Bathroom';
import MasterBedroom from './pages/design-ideas/MasterBedroom';
import LivingRoom from './pages/design-ideas/LivingRoom';
import PoojaRoom from './pages/design-ideas/PoojaRoom';
import TVUnit from './pages/design-ideas/TVUnit';
import FalseCeiling from './pages/design-ideas/FalseCeiling';
import KidsBedroom from './pages/design-ideas/KidsBedroom';
import Balcony from './pages/design-ideas/Balcony';
import DiningRoom from './pages/design-ideas/DiningRoom';
import Foyer from './pages/design-ideas/Foyer';
import HomeOffice from './pages/design-ideas/HomeOffice';
import GuestBedroom from './pages/design-ideas/GuestBedroom';
import Window from './pages/design-ideas/Window';
import Flooring from './pages/design-ideas/Flooring';
import WallDecor from './pages/design-ideas/WallDecor';
import WallPaint from './pages/design-ideas/WallPaint';
import Wallpaper from './pages/design-ideas/Wallpaper';
import Tile from './pages/design-ideas/Tile';
import StudyRoom from './pages/design-ideas/StudyRoom';
import KitchenSinks from './pages/design-ideas/KitchenSinks';
import SpaceSaving from './pages/design-ideas/SpaceSaving';
import Door from './pages/design-ideas/Door';
import Staircase from './pages/design-ideas/Staircase';
import CrockeryUnit from './pages/design-ideas/CrockeryUnit';
import HomeBar from './pages/design-ideas/HomeBar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { DESIGN_IDEAS } from './utils/constants';
import { usePageTransition } from './hooks/usePageTransition';

// App Content Component with Page Transition
const AppContent: React.FC = () => {
  const { isLoading } = usePageTransition();
  const [isAIAgentOpen, setIsAIAgentOpen] = useState(false);

  const handleAIAssistantClick = () => {
    setIsAIAgentOpen(true);
  };

  const handleAIAgentClose = () => {
    setIsAIAgentOpen(false);
  };

  return (
    <PageTransition isLoading={isLoading}>
      <Header onAIAssistantClick={handleAIAssistantClick} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAIAssistantClick={handleAIAssistantClick} />} />
          
          {/* Services Routes */}
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/renovations" element={<Renovations />} />
          
          {/* Design Ideas Routes */}
          <Route path="/design-ideas/modular-kitchen" element={<ModularKitchen />} />
          <Route path="/design-ideas/wardrobe" element={<Wardrobe />} />
          <Route path="/design-ideas/bathroom" element={<Bathroom />} />
          <Route path="/design-ideas/master-bedroom" element={<MasterBedroom />} />
          <Route path="/design-ideas/living-room" element={<LivingRoom />} />
          <Route path="/design-ideas/pooja-room" element={<PoojaRoom />} />
          <Route path="/design-ideas/tv-unit" element={<TVUnit />} />
          <Route path="/design-ideas/false-ceiling" element={<FalseCeiling />} />
          <Route path="/design-ideas/kids-bedroom" element={<KidsBedroom />} />
          <Route path="/design-ideas/balcony" element={<Balcony />} />
          <Route path="/design-ideas/dining-room" element={<DiningRoom />} />
          <Route path="/design-ideas/foyer" element={<Foyer />} />
          <Route path="/design-ideas/home-office" element={<HomeOffice />} />
          <Route path="/design-ideas/guest-bedroom" element={<GuestBedroom />} />
          <Route path="/design-ideas/window" element={<Window />} />
          <Route path="/design-ideas/flooring" element={<Flooring />} />
          <Route path="/design-ideas/wall-decor" element={<WallDecor />} />
          <Route path="/design-ideas/wall-paint" element={<WallPaint />} />
          <Route path="/design-ideas/wallpaper" element={<Wallpaper />} />
          <Route path="/design-ideas/tile" element={<Tile />} />
          <Route path="/design-ideas/study-room" element={<StudyRoom />} />
          <Route path="/design-ideas/kitchen-sinks" element={<KitchenSinks />} />
          <Route path="/design-ideas/space-saving" element={<SpaceSaving />} />
          <Route path="/design-ideas/door" element={<Door />} />
          <Route path="/design-ideas/staircase" element={<Staircase />} />
          <Route path="/design-ideas/crockery-unit" element={<CrockeryUnit />} />
          <Route path="/design-ideas/home-bar" element={<HomeBar />} />
          
          {/* Other Routes */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <AIAgent isOpen={isAIAgentOpen} onClose={handleAIAgentClose} />
    </PageTransition>
  );
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
        <AppContent />
      </div>
    </Router>
  );
}

export default App;