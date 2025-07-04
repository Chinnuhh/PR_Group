import React from 'react';

interface PageTransitionProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isLoading, children }) => {
  return (
    <>
      {/* Top Loading Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
          <div className="h-full bg-gradient-to-r from-pastel-blue-dark via-pastel-purple-dark to-pastel-pink-dark animate-loading-bar"></div>
        </div>
      )}
      
      {/* Page Content with Fade Animation */}
      <div className={`transition-all duration-500 ${
        isLoading 
          ? 'opacity-0 transform translate-y-2' 
          : 'opacity-100 transform translate-y-0'
      }`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;