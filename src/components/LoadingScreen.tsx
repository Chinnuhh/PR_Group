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
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-pastel-blue-light to-pastel-purple-light flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pastel-blue/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pastel-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pastel-pink/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pastel-green/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
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
            <div className="absolute -inset-4 bg-gradient-to-r from-pastel-blue-dark/20 to-pastel-purple-dark/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark bg-clip-text text-transparent">
              PR Group
            </span>
          </h1>
          <p className="text-lg text-pastel-gray-dark">Construction & Interiors</p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/50 rounded-full h-2 mb-4 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-pastel-blue-dark to-pastel-purple-dark rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-pastel-gray-dark">
            Loading your dream space... {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-pastel-blue-dark rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pastel-purple-dark rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pastel-pink-dark rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;