import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick,
  external = false 
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (external) {
      return; // Let the default behavior handle external links
    }

    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    // Start transition animation
    setIsTransitioning(true);
    
    // Small delay for visual feedback
    setTimeout(() => {
      navigate(to);
      setIsTransitioning(false);
    }, 150);
  };

  if (external) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={to} 
      className={`${className} ${isTransitioning ? 'opacity-75 scale-95' : ''} transition-all duration-150`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;