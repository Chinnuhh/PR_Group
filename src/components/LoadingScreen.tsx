import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-surface-white via-mustard-100 to-surface-beige flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C542' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-mustard-300/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-mustard-200/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-mustard-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-mustard-100/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <img 
              src="/Logo PR Group copy.png" 
              alt="PR Group Logo" 
              className="h-24 w-auto mx-auto animate-pulse-soft"
            />
            <div className="absolute -inset-4 bg-mustard-gradient rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-800 mb-2">
            <span className="bg-mustard-gradient bg-clip-text text-transparent">
              PR Group
            </span>
          </h1>
          <p className="text-lg text-charcoal-600">Construction & Interiors</p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-surface-white/50 rounded-full h-2 mb-4 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-mustard-gradient rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-charcoal-600">
            Loading your dream space... {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-mustard-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-mustard-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-mustard-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;